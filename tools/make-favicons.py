#!/usr/bin/env python3
"""Generate a MotoRover-style favicon set from imgs/logo.webp.

Black tile + white waveform (logo is a light mark on transparent).
Outputs at site root, matching motorover.in RealFaviconGenerator naming.
Usage: python3 tools/make-favicons.py [path/to/logo.webp]
"""
from __future__ import annotations

import base64
import io
import struct
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
LOGO = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "imgs" / "logo.webp"
BG = (0, 0, 0, 255)  # black
FG = (255, 255, 255, 255)  # pure white waveform


def content_bbox(im: Image.Image, alpha_thr: int = 10) -> tuple[int, int, int, int]:
    """Tight bbox of non-transparent pixels."""
    px = im.load()
    w, h = im.size
    x0, y0, x1, y1 = w, h, 0, 0
    found = False
    for y in range(h):
        for x in range(w):
            if px[x, y][3] > alpha_thr:
                found = True
                if x < x0:
                    x0 = x
                if y < y0:
                    y0 = y
                if x > x1:
                    x1 = x
                if y > y1:
                    y1 = y
    if not found:
        raise SystemExit("no opaque content found in logo")
    return x0, y0, x1, y1


def white_emblem(src: Image.Image) -> Image.Image:
    """Crop to content and force RGB to pure white, keep alpha."""
    x0, y0, x1, y1 = content_bbox(src)
    pad = max(2, int((x1 - x0) * 0.04))
    x0 = max(0, x0 - pad)
    y0 = max(0, y0 - pad)
    x1 = min(src.width - 1, x1 + pad)
    y1 = min(src.height - 1, y1 + pad)
    crop = src.crop((x0, y0, x1 + 1, y1 + 1)).convert("RGBA")
    out = Image.new("RGBA", crop.size, (0, 0, 0, 0))
    sp, op = crop.load(), out.load()
    for y in range(crop.height):
        for x in range(crop.width):
            a = sp[x, y][3]
            if a > 0:
                op[x, y] = (255, 255, 255, a)
    return out


def make_tile(emblem: Image.Image, size: int, scale: float) -> Image.Image:
    tile = Image.new("RGBA", (size, size), BG)
    target = size * scale
    ar = emblem.width / emblem.height
    if ar >= 1:
        dw, dh = target, target / ar
    else:
        dh, dw = target, target * ar
    dw, dh = max(1, int(round(dw))), max(1, int(round(dh)))
    resized = emblem.resize((dw, dh), Image.Resampling.LANCZOS)
    tile.paste(resized, ((size - dw) // 2, (size - dh) // 2), resized)
    return tile


def png_bytes(im: Image.Image) -> bytes:
    buf = io.BytesIO()
    im.convert("RGBA").save(buf, format="PNG", optimize=True)
    return buf.getvalue()


def build_ico(items: list[tuple[int, bytes]]) -> bytes:
    """PNG-in-ICO (16/32/48) — same approach as kgskalliance make-favicons."""
    n = len(items)
    head = struct.pack("<HHH", 0, 1, n)
    dir_parts = []
    blobs = []
    offset = 6 + 16 * n
    for size, blob in items:
        dir_parts.append(
            struct.pack(
                "<BBBBHHII",
                0 if size >= 256 else size,
                0 if size >= 256 else size,
                0,
                0,
                1,
                32,
                len(blob),
                offset,
            )
        )
        blobs.append(blob)
        offset += len(blob)
    return head + b"".join(dir_parts) + b"".join(blobs)


def main() -> None:
    src = Image.open(LOGO).convert("RGBA")
    emblem = white_emblem(src)
    ar = emblem.width / emblem.height
    print(f"emblem {emblem.width}x{emblem.height} aspect={ar:.3f}")

    # Scales: wide wave needs most of the tile width; maskable icons keep safe inset.
    tiles = {
        "favicon-96x96.png": make_tile(emblem, 96, 0.86),
        "apple-touch-icon.png": make_tile(emblem, 180, 0.82),
        "web-app-manifest-192x192.png": make_tile(emblem, 192, 0.70),
        "web-app-manifest-512x512.png": make_tile(emblem, 512, 0.70),
    }
    ico16 = make_tile(emblem, 16, 0.90)
    ico32 = make_tile(emblem, 32, 0.88)
    ico48 = make_tile(emblem, 48, 0.88)

    for name, im in tiles.items():
        path = ROOT / name
        im.convert("RGB").save(path, format="PNG", optimize=True)
        print(f"wrote {path.name}")

    ico_path = ROOT / "favicon.ico"
    ico_path.write_bytes(
        build_ico(
            [
                (16, png_bytes(ico16)),
                (32, png_bytes(ico32)),
                (48, png_bytes(ico48)),
            ]
        )
    )
    print(f"wrote {ico_path.name}")

    # SVG: black rounded tile + embedded white emblem (kit style; motorover embeds full PNG).
    sz, scale = 64, 0.86
    if ar >= 1:
        ew, eh = sz * scale, (sz * scale) / ar
    else:
        eh, ew = sz * scale, (sz * scale) * ar
    ex, ey = (sz - ew) / 2, (sz - eh) / 2
    # Cap emblem embed size so the SVG stays light
    cap = 160
    es = min(1.0, cap / max(emblem.width, emblem.height))
    emb = emblem.resize(
        (max(1, int(round(emblem.width * es))), max(1, int(round(emblem.height * es)))),
        Image.Resampling.LANCZOS,
    )
    b64 = base64.b64encode(png_bytes(emb)).decode("ascii")
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {sz} {sz}" role="img" aria-label="Aural Lab Sound">
  <rect width="{sz}" height="{sz}" rx="12" fill="#000000"/>
  <image x="{ex:.2f}" y="{ey:.2f}" width="{ew:.2f}" height="{eh:.2f}" href="data:image/png;base64,{b64}"/>
</svg>
"""
    svg_path = ROOT / "favicon.svg"
    svg_path.write_text(svg, encoding="utf-8")
    print(f"wrote {svg_path.name}")


if __name__ == "__main__":
    main()
