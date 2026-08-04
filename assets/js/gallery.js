/* Movie poster gallery — lightbox with nav, swipe, autoplay */

const moviesRaw = [
  { file: "AFTERNOON CLOUDS.jpg", type: "Short Film", contribution: "Mix, Sound Design", year: 2017, director: "Payal Kapadia", imdb: "https://www.imdb.com/title/tt10012542/" },
  { file: "AND WHAT IS THE SUMMER SAYING.jpg", type: "Documentary", contribution: "Mix, Sound Design", year: 2018, director: "Payal Kapadia", imdb: "https://www.imdb.com/title/tt10556876/" },
  { file: "ANUJA.jpeg", type: "Feature Film", contribution: "Mix, Sound Design", year: 2024, director: "Adam J Graves", imdb: "https://www.imdb.com/title/tt27654431/" },
  { file: "ARTICLE 15.jpg", type: "Feature Film", contribution: "Sync Sound", year: 2019, director: "Anubhav Sinha", imdb: "https://www.imdb.com/title/tt10324144/" },
  { file: "BISI BISI ICE CREAM.jpeg", type: "Feature Film", contribution: "Sync Sound, Mix, Sound Design", year: 2024, director: "Arvind Sastry", imdb: "https://www.imdb.com/title/tt30818503/" },
  { file: "BULBUL CAN SING.jpg", type: "Feature Film", contribution: "Sound Edit", year: 2018, director: "Rima Das", imdb: "https://www.imdb.com/title/tt8659050/" },
  { file: "COCONUT DREAMS.jpeg", type: "Feature Film", contribution: "Foley", year: 2025, director: "Rima Das", imdb: "https://www.imdb.com/title/tt36591807/" },
  { file: "DIARIES FROM AN UNCONVENTIONAL JOURNEY.jpg", type: "Documentary", contribution: "Mix, Sound Design", year: 2022, director: "Sagar Shiriskar", imdb: "https://www.imdb.com/title/tt22248438/" },
  { file: "DOLLY KITTY AUR WOH CHAMAKTE SITARE.jpg", type: "Feature Film", contribution: "Sync Sound", year: 2019, director: "Alankrita Srivastava", imdb: "https://www.imdb.com/title/tt9176296/" },
  { file: "DON_T TELL MOTHER.jpeg", type: "Feature Film", contribution: "Mix", year: 2025, director: "Anoop Lokkur", imdb: "https://www.imdb.com/title/tt35612874/" },
  { file: "EKAM.jpg", type: "Web Series", contribution: "Sync Sound, Sound Design", year: 2024, director: "Sumanth Bhat", imdb: "https://www.imdb.com/title/tt29715884/" },
  { file: "FLICKERING LIGHTS.jpg", type: "Documentary", contribution: "Mix, Sound Design", year: 2023, director: "Anirban Dutta, Anupama Srinivasan", imdb: "https://www.imdb.com/title/tt29669662/" },
  { file: "GAME OF FOOLS.jpeg", type: "Feature Film", contribution: "Foley", year: 2022, director: "—", imdb: "https://www.imdb.com/title/tt21923422/" },
  { file: "GANTUMOOTE.jpg", type: "Feature Film", contribution: "Sync Sound, Sound Design", year: 2019, director: "Roopa Rao", imdb: "https://www.imdb.com/title/tt11042658/" },
  { file: "JABARIYA JODI.jpg", type: "Feature Film", contribution: "Sync Sound", year: 2019, director: "Prashant Singh", imdb: "https://www.imdb.com/title/tt8785426/" },
  { file: "KABIR SINGH.jpg", type: "Feature Film", contribution: "Sync Sound", year: 2019, director: "Sandeep Reddy Vanga", imdb: "https://www.imdb.com/title/tt8983202/" },
  { file: "KOLI ESRU.jpeg", type: "Feature Film", contribution: "Sync Sound, Mix, Sound Design", year: 2024, director: "Champa Shetty", imdb: "https://www.imdb.com/title/tt31106876/" },
  { file: "KURKA.jpeg", type: "Feature Film", contribution: "Mix, Sound Design", year: null, director: "Ganesh Hegde", imdb: "https://www.imdb.com/title/tt36747953/" },
  { file: "MANORATHANGAL.jpeg", type: "Feature Film", contribution: "Foley", year: 2024, director: "—", imdb: "https://www.imdb.com/title/tt15478036/" },
  { file: "MITHYA.jpeg", type: "Feature Film", contribution: "Sync Sound, Mix, Sound Design", year: 2023, director: "Sumanth Bhat", imdb: "https://www.imdb.com/title/tt29451496/" },
  { file: "MONTH OF MADHU.jpg", type: "Feature Film", contribution: "Foley", year: 2023, director: "—", imdb: "https://www.imdb.com/title/tt21361340/" },
  { file: "NIDRADEVI NEXT DOOR.jpeg", type: "Feature Film", contribution: "Mix, Sound Design", year: 2025, director: "Suraag Sagar", imdb: "https://www.imdb.com/title/tt33702616/" },
  { file: "NOCTURNES.jpg", type: "Documentary", contribution: "Sound Design", year: 2024, director: "Anirban Dutta, Anupama Srinivasan", imdb: "https://www.imdb.com/title/tt30320605/" },
  { file: "NOT A HERO.jpeg", type: "Feature Film", contribution: "Mix, Sound Design", year: 2026, director: "Rima Das", imdb: "https://www.imdb.com/title/tt39371375/" },
  { file: "PARAAGAN.jpg", type: "Feature Film", contribution: "Mix, Sound Design", year: 2024, director: "Akku Kulhari", imdb: "https://www.imdb.com/title/tt26753343/" },
  { file: "PEDRO.jpg", type: "Feature Film", contribution: "Sync Sound, Sound Design", year: 2021, director: "Natesh Hegde", imdb: "https://www.imdb.com/title/tt15347602/" },
  { file: "PILL.jpeg", type: "Web Series", contribution: "Dialogue Edit", year: 2024, director: "—", imdb: "https://www.imdb.com/title/tt32729607/" },
  { file: "PUTA TIRUGISI NODI.jpg", type: "Feature Film", contribution: "Sound Edit", year: 2016, director: "Suneel Raghavendra", imdb: "https://www.imdb.com/title/tt5500794/" },
  { file: "SAFAR MEIN SHEHER.jpeg", type: "Feature Film", contribution: "Dialogue Edit", year: 2025, director: "Mazhar Kamran", imdb: "https://www.imdb.com/title/tt30759157/" },
  { file: "SEASON OF INNOCENCE.jpg", type: "Feature Film", contribution: "Foley", year: 2022, director: "—", imdb: "https://www.imdb.com/title/tt17081126/" },
  { file: "SHANKARABHARANA.jpeg", type: "Feature Film", contribution: "Sound Design", year: null, director: "Sumanth Bhat", imdb: "https://www.imdb.com/title/tt40183137/" },
  { file: "SHIVAMMA.jpg", type: "Feature Film", contribution: "Sync Sound, Mix, Sound Design", year: 2022, director: "Jaishankar", imdb: "https://www.imdb.com/title/tt22171962/" },
  { file: "SILAN.jpeg", type: "Feature Film", contribution: "Foley", year: 2023, director: "Ashmita Guha Neogi", imdb: "https://www.imdb.com/title/tt31913701/" },
  { file: "TEJAS.jpeg", type: "Feature Film", contribution: "Dialogue Edit", year: 2023, director: "—", imdb: "https://www.imdb.com/title/tt6950476/" },
  { file: "TESTIMONY OF ANA.jpg", type: "Short Film", contribution: "Sound Design", year: 2021, director: "Sachin Dheeraj", imdb: "https://www.imdb.com/title/tt13681852/" },
  { file: "THE DAUGHTER.jpeg", type: "Feature Film", contribution: "Foley", year: 2022, director: "—", imdb: "https://www.imdb.com/title/tt17490994/" },
  { file: "THE ELEPHANT WHISPERERS.jpg", type: "Documentary Short", contribution: "Sync Sound", year: 2022, director: "Kartiki Gonsalves", imdb: "https://www.imdb.com/title/tt23628262/" },
  { file: "THE HOUSE OF MANIKANTHA.jpeg", type: "Feature Film", contribution: "Mix, Sound Design", year: null, director: "Pinaki Janardhan", imdb: "—" },
  { file: "THE ORDER OF TIME.jpeg", type: "Feature Film", contribution: "Mix, Sound Design", year: 2025, director: "Akshay Padmanabha", imdb: "https://www.imdb.com/title/tt39216209/" },
  { file: "THE SIGNAL MAN.jpeg", type: "Feature Film", contribution: "Sync Sound, Mix, Sound Design", year: 2023, director: "K Shivarudraiah", imdb: "https://www.imdb.com/title/tt27302882/" },
  { file: "VAGACHIPANI.jpeg", type: "Feature Film", contribution: "Sync Sound, Sound Design", year: 2025, director: "Natesh Hegde", imdb: "https://www.imdb.com/title/tt22640628/" },
  { file: "VILLAGE ROCKSTARS 2.jpeg", type: "Feature Film", contribution: "Mix, Sound Design", year: 2024, director: "Rima Das", imdb: "https://www.imdb.com/title/tt33575372/" },
  { file: "ZUAS.jpeg", type: "Feature Film", contribution: "Mix", year: 2026, director: "Garvit Singh", imdb: "—" }
];

const ALLOWED_TYPES = [
  "Documentary",
  "Documentary Short",
  "Feature Film",
  "Short Film",
  "Web Series"
];

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function createTitleFromFilename(fileName) {
  const base = fileName.replace(/\.[^/.]+$/, "");
  return base
    .replace(/_/g, "'")
    .split(" ")
    .filter(Boolean)
    .map((word) => {
      if (/^\d+$/.test(word)) {
        return word;
      }
      return `${word.charAt(0)}${word.slice(1).toLowerCase()}`;
    })
    .join(" ");
}

const movies = moviesRaw.map((item) => {
  const title = createTitleFromFilename(item.file);
  const roles = item.contribution.split(",").map((entry) => entry.trim());
  const yearLabel = item.year ?? "TBD";
  const directorLabel = item.director === "—" ? "Director not listed" : item.director;
  const team = [{ name: directorLabel, role: "Director" }];
  const rolesFormatted = item.contribution.replace(/,/g, " &").replace(/&\s*&/g, "&");
  return {
    id: slugify(title),
    poster: `assets/images/gallery/posters-optimized/${slugify(item.file.replace(/\.[^/.]+$/, ""))}.webp`,
    title,
    studio: "Aural Lab Sound",
    workType: `${rolesFormatted} · ${item.type} · ${yearLabel}`,
    type: item.type,
    year: item.year,
    roles,
    team,
    imdb: item.imdb
  };
});

const AUTOPLAY_MS = 4500;
const SWIPE_THRESHOLD = 56;
const SWIPE_VELOCITY = 0.35;
const TRANSITION_FALLBACK_MS = 520;
const POSTER_DECODE_MS = 140;
// Kept below the 62% exit travel in CSS so a released swipe never doubles back
const DRAG_LIMIT_RATIO = 0.42;
const DRAG_FREE_RATIO = 0.6;
const DRAG_FADE = 0.45;
const DISMISS_THRESHOLD = 110;
const DISMISS_VELOCITY = 0.45;
// A fast flick still has to travel a bit, so a twitch cannot close the viewer
const DISMISS_MIN_TRAVEL = 64;
const DISMISS_SCALE = 0.08;
const DISMISS_OUT_MS = 240;
const DISMISS_RETURN_MS = 320;
const STUDIO_NAME = "Aural Lab Sound";

const gallery = document.getElementById("image-gallery");
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");
const lightboxBody = document.getElementById("lightbox-body");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");
const lightboxAutoplay = document.getElementById("lightbox-autoplay");
const lightboxCounter = document.getElementById("lightbox-counter");
const lightboxPoster = document.getElementById("lightbox-poster");
const lightboxStage = document.getElementById("lightbox-stage");
const lightboxTapPrev = document.getElementById("lightbox-tap-prev");
const lightboxTapNext = document.getElementById("lightbox-tap-next");
const swipeIndicator = document.getElementById("swipe-indicator");
const lightboxTitle = document.getElementById("lightbox-title");
const creditsStudio = document.getElementById("credits-studio");
const creditsWorkType = document.getElementById("credits-work-type");
const creditsImdb = document.getElementById("credits-imdb");
const creditsTeam = document.getElementById("credits-team");
const progressDotsContainer = document.getElementById("progress-dots");
const progressWrap = document.getElementById("lightbox-progress-wrap");
const scrubTitle = document.getElementById("lightbox-scrub-title");
const counterText = document.getElementById("counter-text");

let currentIndex = 0;
let lastFocusedTrigger = null;
let isAnimating = false;
let isAutoplayOn = false;
let autoplayTimer = null;
let swipeIndicatorTimer = null;
let hasUserSwiped = false;
let suppressTapUntil = 0;
let activeFilters = {
  role: [],
  type: [],
  year: []
};
let filteredMovies = movies;

const swipe = {
  active: false,
  axis: null,
  startX: 0,
  startY: 0,
  currentX: 0,
  currentY: 0,
  startTime: 0,
  canDismiss: true,
  isDismissing: false
};

let dismissSettleTimer = null;
let dismissBaseAlpha = 0.95;

function clampIndex(index) {
  const total = filteredMovies.length;
  return total === 0 ? 0 : ((index % total) + total) % total;
}

// Tracks the finger 1:1 for most of the travel, then eases to an asymptote so
// a hard flick cannot drag the card further than the exit animation will take it
function rubberBand(delta, limit) {
  const distance = Math.abs(delta);
  const free = limit * DRAG_FREE_RATIO;
  if (distance <= free) {
    return delta;
  }
  const span = limit - free;
  const eased = free + span * (1 - Math.exp(-(distance - free) / span));
  return Math.sign(delta) * eased;
}

function renderTeam(team) {
  creditsTeam.replaceChildren(
    ...team.map((member) => {
      const item = document.createElement("li");
      const name = member.url ? document.createElement("a") : document.createElement("span");
      name.className = "credits-team__name";
      name.textContent = member.name;
      if (member.url) {
        name.href = member.url;
        name.target = "_blank";
        name.rel = "noopener noreferrer";
      }
      const role = document.createElement("span");
      role.className = "credits-team__role";
      role.textContent = member.role;
      item.append(name, role);
      return item;
    })
  );
}

function renderMovie(movie, index) {
  lightboxPoster.src = movie.poster;
  lightboxPoster.alt = `${movie.title} movie poster`;
  creditsStudio.textContent = movie.studio || STUDIO_NAME;
  lightboxTitle.textContent = movie.title;
  creditsWorkType.textContent = movie.workType;
  if (creditsImdb) {
    if (movie.imdb && movie.imdb !== "—") {
      creditsImdb.hidden = false;
      creditsImdb.innerHTML = `<a href="${movie.imdb}" target="_blank" rel="noopener noreferrer">View on IMDb →</a>`;
    } else {
      creditsImdb.hidden = true;
      creditsImdb.textContent = "";
    }
  }
  renderTeam(movie.team);

  counterText.textContent = `${index + 1} of ${filteredMovies.length}`;

  renderProgress(index);
  preloadNeighbours(index);
}

function preloadNeighbours(index) {
  if (filteredMovies.length < 2) {
    return;
  }

  [1, -1].forEach((offset) => {
    const neighbour = filteredMovies[clampIndex(index + offset)];
    if (!neighbour) {
      return;
    }
    const image = new Image();
    image.decoding = "async";
    image.src = neighbour.poster;
  });
}

function renderProgress(index) {
  if (!progressDotsContainer) {
    return;
  }

  const signature = filteredMovies.map((movie) => movie.id).join(",");

  if (progressDotsContainer.dataset.signature !== signature) {
    progressDotsContainer.dataset.signature = signature;
    progressDotsContainer.replaceChildren(
      ...filteredMovies.map((movie, i) => {
        const segment = document.createElement("button");
        segment.type = "button";
        segment.className = "lightbox-progress__seg";
        segment.setAttribute("data-index", String(i));
        segment.setAttribute("aria-label", movie.title);
        segment.setAttribute("aria-current", i === index ? "true" : "false");

        const tip = document.createElement("span");
        tip.className = "lightbox-progress__tip";
        tip.setAttribute("aria-hidden", "true");
        tip.textContent = movie.title;
        segment.append(tip);
        return segment;
      })
    );
  }

  Array.from(progressDotsContainer.children).forEach((segment, i) => {
    segment.classList.toggle("is-past", i < index);
    segment.classList.toggle("is-active", i === index);
    segment.setAttribute("aria-current", i === index ? "true" : "false");
  });
}

function jumpToFilm(index) {
  if (index === currentIndex || isAnimating || lightbox.hidden) {
    return;
  }

  if (isAutoplayOn) {
    startAutoplay();
  }

  const direction = index > currentIndex ? "next" : "prev";
  return goTo(index, direction);
}

function clearProgressTips() {
  if (!progressDotsContainer) {
    return;
  }
  progressDotsContainer.querySelectorAll(".lightbox-progress__seg.is-tip-visible").forEach((segment) => {
    segment.classList.remove("is-tip-visible");
  });
}

function clearScrubPreview() {
  clearProgressTips();
  progressWrap?.classList.remove("is-scrubbing");
  if (scrubTitle) {
    scrubTitle.hidden = true;
    scrubTitle.textContent = "";
    scrubTitle.classList.remove("is-pop");
  }
}

function setScrubTitle(title, { pop = false } = {}) {
  if (!scrubTitle) {
    return;
  }

  scrubTitle.hidden = false;
  scrubTitle.textContent = title;
  progressWrap?.classList.add("is-scrubbing");

  if (pop) {
    scrubTitle.classList.remove("is-pop");
    // Force reflow so the pop can replay on each film while scrubbing
    void scrubTitle.offsetWidth;
    scrubTitle.classList.add("is-pop");
  }
}

function showProgressTip(segment) {
  if (!segment) {
    return;
  }
  clearProgressTips();
  segment.classList.add("is-tip-visible");
}

function hapticTick() {
  try {
    navigator.vibrate?.(10);
  } catch (_) {
    /* Vibration is optional and may be blocked */
  }
}

function initProgressScrub() {
  if (!progressDotsContainer) {
    return;
  }

  let isScrubbing = false;
  let handledByPointer = false;
  let activePointerId = null;
  let lastTipIndex = null;

  function segmentFromPoint(clientX, clientY) {
    const el = document.elementFromPoint(clientX, clientY);
    return el ? el.closest(".lightbox-progress__seg") : null;
  }

  function tipFor(segment, { buzz = false, pop = false } = {}) {
    if (!segment) {
      return;
    }

    const index = Number(segment.getAttribute("data-index"));
    const movie = filteredMovies[index];
    showProgressTip(segment);

    if (movie) {
      const didChange = lastTipIndex !== index;
      setScrubTitle(movie.title, { pop: Boolean(pop && didChange) });
    }

    if (buzz && lastTipIndex !== null && lastTipIndex !== index) {
      hapticTick();
    }

    lastTipIndex = index;
  }

  function finishPointer() {
    activePointerId = null;
    isScrubbing = false;
    lastTipIndex = null;
    window.setTimeout(clearScrubPreview, 480);
  }

  progressDotsContainer.addEventListener("click", (event) => {
    const segment = event.target.closest(".lightbox-progress__seg");
    if (!segment || handledByPointer) {
      handledByPointer = false;
      return;
    }
    event.preventDefault();
    jumpToFilm(Number(segment.getAttribute("data-index")));
  });

  progressDotsContainer.addEventListener("pointerdown", (event) => {
    const segment = event.target.closest(".lightbox-progress__seg");
    if (!segment) {
      return;
    }

    // Keep lightbox swipe/dismiss from stealing this gesture
    event.stopPropagation();
    activePointerId = event.pointerId;
    isScrubbing = false;
    handledByPointer = false;
    lastTipIndex = null;

    if (event.pointerType === "touch" || event.pointerType === "pen") {
      progressDotsContainer.setPointerCapture?.(event.pointerId);
      // Instant title + zoom feedback — no long-press wait
      tipFor(segment, { pop: true });
    }
  });

  progressDotsContainer.addEventListener("pointermove", (event) => {
    if (activePointerId !== event.pointerId) {
      return;
    }
    if (event.pointerType !== "touch" && event.pointerType !== "pen") {
      return;
    }

    event.stopPropagation();
    const segment = segmentFromPoint(event.clientX, event.clientY);
    if (!segment || !progressDotsContainer.contains(segment)) {
      return;
    }

    if (!isScrubbing && (Math.abs(event.movementX) > 3 || Math.abs(event.movementY) > 3)) {
      isScrubbing = true;
    }

    if (isScrubbing) {
      tipFor(segment, { buzz: true, pop: true });
    }
  });

  progressDotsContainer.addEventListener("pointerup", (event) => {
    if (activePointerId !== event.pointerId) {
      return;
    }
    event.stopPropagation();

    if (event.pointerType === "touch" || event.pointerType === "pen") {
      const segment = segmentFromPoint(event.clientX, event.clientY)
        || event.target.closest(".lightbox-progress__seg");

      if (segment) {
        const index = Number(segment.getAttribute("data-index"));
        if (index !== currentIndex) {
          hapticTick();
        }
        jumpToFilm(index);
        handledByPointer = true;
      }
    }

    finishPointer();
  });

  progressDotsContainer.addEventListener("pointercancel", (event) => {
    if (activePointerId !== event.pointerId) {
      return;
    }
    finishPointer();
  });

  progressDotsContainer.addEventListener("pointerleave", () => {
    if (activePointerId === null) {
      clearScrubPreview();
    }
  });
}

function clearBodyMotionClasses() {
  lightboxBody.classList.remove(
    "is-dragging",
    "is-instant",
    "is-exit-next",
    "is-exit-prev",
    "is-enter-next",
    "is-enter-prev"
  );
  lightboxBody.style.transform = "";
  lightboxBody.style.opacity = "";
}

function waitForTransition(element) {
  return new Promise((resolve) => {
    let done = false;
    function finish() {
      if (done) {
        return;
      }
      done = true;
      element.removeEventListener("transitionend", onEnd);
      resolve();
    }
    function onEnd(event) {
      if (event.target === element && (event.propertyName === "transform" || event.propertyName === "opacity")) {
        finish();
      }
    }
    element.addEventListener("transitionend", onEnd);
    window.setTimeout(finish, TRANSITION_FALLBACK_MS);
  });
}

// The card is off-screen at this point, so a brief wait for the new poster is
// invisible and stops a half-painted image sliding into view
function settlePoster() {
  if (typeof lightboxPoster.decode !== "function") {
    return Promise.resolve();
  }
  return Promise.race([
    lightboxPoster.decode().catch(() => {}),
    new Promise((resolve) => window.setTimeout(resolve, POSTER_DECODE_MS))
  ]);
}

async function goTo(index, direction) {
  if (isAnimating || lightbox.hidden) {
    return;
  }

  const nextIndex = clampIndex(index);
  if (nextIndex === currentIndex && direction) {
    return;
  }

  if (!direction) {
    currentIndex = nextIndex;
    renderMovie(filteredMovies[currentIndex], currentIndex);
    return;
  }

  isAnimating = true;
  const exitClass = direction === "next" ? "is-exit-next" : "is-exit-prev";
  const enterClass = direction === "next" ? "is-enter-next" : "is-enter-prev";

  // Phase 1 — the current card continues out the way the swipe was heading
  lightboxBody.classList.add(exitClass);
  await waitForTransition(lightboxBody);

  currentIndex = nextIndex;
  renderMovie(filteredMovies[currentIndex], currentIndex);
  await settlePoster();

  // Phase 2 — plant the new card on the opposite edge with transitions off.
  // Without suppressing them it animates across from the exit edge, which
  // reads as the next card arriving from the side it should be leaving.
  clearBodyMotionClasses();
  lightboxBody.classList.add("is-instant", enterClass);
  void lightboxBody.offsetWidth;

  lightboxBody.classList.remove("is-instant");
  void lightboxBody.offsetWidth;

  lightboxBody.classList.remove(enterClass);
  await waitForTransition(lightboxBody);

  clearBodyMotionClasses();
  isAnimating = false;
}

function showNext() {
  return goTo(currentIndex + 1, "next");
}

function showPrev() {
  return goTo(currentIndex - 1, "prev");
}

function navigate(direction) {
  if (isAutoplayOn) {
    startAutoplay();
  }
  return direction === "next" ? showNext() : showPrev();
}

function updateAutoplayUi() {
  if (!lightboxAutoplay) return;

  lightboxAutoplay.setAttribute("aria-pressed", String(isAutoplayOn));
  lightboxAutoplay.setAttribute(
    "aria-label",
    isAutoplayOn ? "Turn autoplay off" : "Turn autoplay on"
  );
}

function stopAutoplay() {
  if (autoplayTimer) {
    window.clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

function startAutoplay() {
  stopAutoplay();
  autoplayTimer = window.setInterval(() => {
    if (!lightbox.hidden && !isAnimating && !swipe.active) {
      showNext();
    }
  }, AUTOPLAY_MS);
}

function setAutoplay(enabled) {
  isAutoplayOn = enabled;
  updateAutoplayUi();
  if (isAutoplayOn && !lightbox.hidden) {
    startAutoplay();
  } else {
    stopAutoplay();
  }
}

function hideSwipeIndicator() {
  if (swipeIndicatorTimer) {
    window.clearTimeout(swipeIndicatorTimer);
    swipeIndicatorTimer = null;
  }
  if (swipeIndicator) {
    swipeIndicator.classList.remove("is-visible");
  }
  if (lightboxStage) {
    lightboxStage.classList.remove("is-hinting");
  }
}

function showSwipeIndicator() {
  if (hasUserSwiped) {
    return;
  }

  if (swipeIndicator) {
    swipeIndicator.classList.add("is-visible");
  }
  if (lightboxStage) {
    lightboxStage.classList.add("is-hinting");
  }

  if (swipeIndicatorTimer) {
    window.clearTimeout(swipeIndicatorTimer);
  }
  swipeIndicatorTimer = window.setTimeout(hideSwipeIndicator, 3200);
}

function applyFilters() {
  filteredMovies = movies.filter((movie) => {
    const roleMatch = activeFilters.role.length === 0 ||
      activeFilters.role.some(r => movie.roles.includes(r));
    const typeMatch = activeFilters.type.length === 0 ||
      activeFilters.type.includes(movie.type);
    const yearMatch = activeFilters.year.length === 0 ||
      activeFilters.year.includes(movie.year);

    return roleMatch && typeMatch && yearMatch;
  });

  updateGalleryDisplay();
}

function updateGalleryDisplay() {
  if (!gallery) return;

  const visibleIds = new Set(filteredMovies.map((movie) => movie.id));
  gallery.querySelectorAll(".gallery-item").forEach((item) => {
    const isVisible = visibleIds.has(item.getAttribute("data-movie-id"));
    item.style.display = isVisible ? "" : "none";
  });

  const visibleCount = filteredMovies.length;
  const emptyState = document.querySelector(".gallery-empty");
  if (emptyState) {
    emptyState.hidden = visibleCount > 0;
  }

  updateFilterStatus(visibleCount);
}

function getActiveFilterValues() {
  return [
    ...activeFilters.role,
    ...activeFilters.type,
    ...activeFilters.year
  ];
}

function updateFilterStatus(visibleCount) {
  const summary = document.querySelector(".filter-summary");
  const reset = document.querySelector(".filter-reset");
  const selected = getActiveFilterValues();

  if (summary) {
    const label = `${visibleCount} film${visibleCount !== 1 ? "s" : ""}`;
    summary.innerHTML = selected.length === 0
      ? `Showing <strong>all ${label}</strong>.`
      : `Showing <strong>${label}</strong> for ${selected.map((value) => `<strong>${value}</strong>`).join(" + ")}.`;
  }

  if (reset) {
    reset.disabled = selected.length === 0;
  }
}

function initFilters() {
  const filtersContainer = document.querySelector("#filters-container");
  const creditsSidebar = document.querySelector(".credits-sidebar");
  if (!filtersContainer) return;

  const allRoles = [...new Set(movies.flatMap(m => m.roles))].sort();
  const allTypes = ALLOWED_TYPES;
  const allYears = [...new Set(movies.map(m => m.year))].sort((a, b) => {
    if (a === null) {
      return 1;
    }
    if (b === null) {
      return -1;
    }
    return b - a;
  });

  const renderGroup = (label, filterType, values) => `
    <div class="filter-group">
      <h4 class="filter-label" id="filter-label-${filterType}">By ${label}</h4>
      <div class="filter-buttons" role="group" aria-labelledby="filter-label-${filterType}" data-filter-type="${filterType}">
        ${values.map((value) => `<button type="button" class="filter-btn" aria-pressed="false" data-value="${value}">${value === null ? "TBD" : value}</button>`).join("")}
      </div>
    </div>
  `;

  const filtersHtml = `
    ${renderGroup("Role", "role", allRoles)}
    ${renderGroup("Type", "type", allTypes)}
    ${renderGroup("Year", "year", allYears)}
    <div class="filter-status">
      <p class="filter-summary" role="status" aria-live="polite"></p>
      <button type="button" class="filter-reset" disabled>Reset filters</button>
    </div>
  `;

  filtersContainer.innerHTML = filtersHtml;
  gallery.insertAdjacentHTML("beforebegin", `
    <p class="gallery-empty" hidden>No films match these filters. Try removing one.</p>
  `);

  const toggleBtn = document.getElementById("filter-toggle");
  if (toggleBtn && creditsSidebar) {
    toggleBtn.addEventListener("click", () => {
      const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
      const nextExpanded = !isExpanded;
      toggleBtn.setAttribute("aria-expanded", String(nextExpanded));
      creditsSidebar.hidden = !nextExpanded;
    });
  }

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const filterType = btn.closest(".filter-buttons").getAttribute("data-filter-type");
      const rawValue = btn.getAttribute("data-value");
      const value = filterType === "year"
        ? (rawValue === "null" ? null : parseInt(rawValue, 10))
        : rawValue;
      const isActive = activeFilters[filterType].includes(value);

      activeFilters[filterType] = isActive
        ? activeFilters[filterType].filter((entry) => entry !== value)
        : [...activeFilters[filterType], value];

      btn.setAttribute("aria-pressed", String(!isActive));
      applyFilters();
    });
  });

  document.querySelector(".filter-reset").addEventListener("click", () => {
    activeFilters = { role: [], type: [], year: [] };
    document.querySelectorAll(".filter-btn").forEach((btn) => btn.setAttribute("aria-pressed", "false"));
    applyFilters();
  });

  updateFilterStatus(filteredMovies.length);
}

function renderGalleryItems() {
  if (!gallery) {
    return;
  }

  gallery.innerHTML = movies.map((movie, index) => `
    <button type="button" class="gallery-item" role="listitem" data-movie-id="${movie.id}" aria-label="View credits for ${movie.title}">
      <img src="${movie.poster}" alt="${movie.title} poster" loading="${index < 6 ? "eager" : "lazy"}" decoding="async">
    </button>
  `).join("");
}

function initGalleryCaptions() {
  if (!gallery) return;

  const moviesById = new Map(movies.map((movie) => [movie.id, movie]));

  gallery.querySelectorAll(".gallery-item").forEach((item) => {
    const movie = moviesById.get(item.getAttribute("data-movie-id"));
    if (!movie || item.querySelector(".gallery-item__caption")) {
      return;
    }

    const caption = document.createElement("span");
    caption.className = "gallery-item__caption";
    caption.setAttribute("aria-hidden", "true");
    caption.innerHTML = `
      <span class="gallery-item__title">${movie.title}</span>
      <span class="gallery-item__role">${movie.roles.join(" · ")}</span>
      <span class="gallery-item__cue">View credits</span>
    `;
    item.append(caption);
  });
}

function resetDismissState() {
  if (dismissSettleTimer) {
    window.clearTimeout(dismissSettleTimer);
    dismissSettleTimer = null;
  }
  lightboxContent.classList.remove("is-dismissing", "is-dismiss-return", "is-dismiss-out");
  lightboxContent.style.transform = "";
  lightbox.classList.remove("is-settling");
  lightbox.style.removeProperty("--backdrop-alpha");
}

function applyDismissDrag(travel) {
  const reach = Math.max(window.innerHeight * 0.5, 1);
  const progress = Math.min(travel / reach, 1);
  const scale = 1 - progress * DISMISS_SCALE;
  lightboxContent.style.transform = `translate3d(0, ${travel}px, 0) scale(${scale})`;
  lightbox.style.setProperty("--backdrop-alpha", String(dismissBaseAlpha * (1 - progress * 0.7)));
}

function finishDismiss() {
  lightboxContent.classList.remove("is-dismissing");
  lightboxContent.classList.add("is-dismiss-out");
  lightbox.classList.add("is-settling");
  lightboxContent.style.transform = `translate3d(0, 100%, 0) scale(${1 - DISMISS_SCALE})`;
  lightbox.style.setProperty("--backdrop-alpha", "0");

  dismissSettleTimer = window.setTimeout(closeLightbox, DISMISS_OUT_MS);
}

function cancelDismiss() {
  lightboxContent.classList.remove("is-dismissing");
  lightboxContent.classList.add("is-dismiss-return");
  lightbox.classList.add("is-settling");
  lightboxContent.style.transform = "";
  lightbox.style.removeProperty("--backdrop-alpha");

  dismissSettleTimer = window.setTimeout(() => {
    lightboxContent.classList.remove("is-dismiss-return");
    lightbox.classList.remove("is-settling");
    dismissSettleTimer = null;
  }, DISMISS_RETURN_MS);
}

function openLightbox(movieId, trigger) {
  const index = filteredMovies.findIndex((item) => item.id === movieId);
  if (index < 0) {
    return;
  }

  lastFocusedTrigger = trigger || document.activeElement;
  currentIndex = index;
  clearBodyMotionClasses();
  resetDismissState();
  renderMovie(filteredMovies[currentIndex], currentIndex);

  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  // Focus the dialog itself so no control wears a focus ring on open
  lightboxContent.focus({ preventScroll: true });

  hasUserSwiped = false;
  showSwipeIndicator();

  if (isAutoplayOn) {
    startAutoplay();
  }
}

function closeLightbox() {
  stopAutoplay();
  hideSwipeIndicator();
  lightbox.hidden = true;
  document.body.style.overflow = "";
  clearBodyMotionClasses();
  resetDismissState();
  isAnimating = false;
  swipe.active = false;
  swipe.axis = null;
  swipe.isDismissing = false;

  if (lastFocusedTrigger) {
    lastFocusedTrigger.focus();
    lastFocusedTrigger = null;
  }
}

function onPointerDown(event) {
  if (lightbox.hidden || isAnimating) {
    return;
  }
  // Tap zones sit on top of the poster, so they must not block dragging
  if (event.target.closest("button:not([data-swipe-passthrough])")) {
    return;
  }

  const point = event.touches ? event.touches[0] : event;
  swipe.active = true;
  swipe.axis = null;
  swipe.startX = point.clientX;
  swipe.startY = point.clientY;
  swipe.currentX = point.clientX;
  swipe.currentY = point.clientY;
  swipe.startTime = performance.now();
  swipe.isDismissing = false;

  // A downward drag only dismisses when the credits have nothing left to scroll
  const scroller = event.target.closest(".lightbox-credits");
  swipe.canDismiss = !scroller || scroller.scrollTop <= 0;

  lightboxBody.classList.add("is-dragging");
}

function onPointerMove(event) {
  if (!swipe.active || isAnimating) {
    return;
  }

  const point = event.touches ? event.touches[0] : event;
  const deltaX = point.clientX - swipe.startX;
  const deltaY = point.clientY - swipe.startY;

  if (!swipe.axis) {
    if (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8) {
      return;
    }
    swipe.axis = Math.abs(deltaX) > Math.abs(deltaY) ? "x" : "y";
    if (swipe.axis === "y") {
      // Upward drags, and downward ones over scrolled credits, belong to the page
      if (deltaY <= 0 || !swipe.canDismiss) {
        swipe.active = false;
        lightboxBody.classList.remove("is-dragging");
        lightboxBody.style.transform = "";
        lightboxBody.style.opacity = "";
        return;
      }

      lightboxBody.classList.remove("is-dragging");
      resetDismissState();
      const declared = parseFloat(getComputedStyle(lightbox).getPropertyValue("--backdrop-alpha"));
      dismissBaseAlpha = Number.isFinite(declared) ? declared : 0.95;
      lightboxContent.classList.add("is-dismissing");
      swipe.isDismissing = true;
    }
  }

  if (swipe.isDismissing) {
    if (event.cancelable) {
      event.preventDefault();
    }
    swipe.currentY = point.clientY;
    applyDismissDrag(Math.max(deltaY, 0));
    return;
  }

  if (swipe.axis !== "x") {
    return;
  }

  event.preventDefault();
  swipe.currentX = point.clientX;
  const limit = (lightboxBody.offsetWidth || window.innerWidth) * DRAG_LIMIT_RATIO;
  const shift = rubberBand(deltaX, limit);
  const progress = Math.min(Math.abs(shift) / limit, 1);
  lightboxBody.style.transform = `translate3d(${shift}px, 0, 0)`;
  lightboxBody.style.opacity = String(1 - progress * DRAG_FADE);
}

async function onPointerUp() {
  if (!swipe.active) {
    return;
  }

  if (swipe.isDismissing) {
    const travel = Math.max(swipe.currentY - swipe.startY, 0);
    const elapsed = Math.max(performance.now() - swipe.startTime, 1);
    const isFlick = travel > DISMISS_MIN_TRAVEL && travel / elapsed > DISMISS_VELOCITY;
    const shouldClose = travel > DISMISS_THRESHOLD || isFlick;

    swipe.active = false;
    swipe.axis = null;
    swipe.isDismissing = false;

    if (shouldClose) {
      finishDismiss();
    } else {
      cancelDismiss();
    }
    return;
  }

  const deltaX = swipe.currentX - swipe.startX;
  const elapsed = Math.max(performance.now() - swipe.startTime, 1);
  const velocity = Math.abs(deltaX) / elapsed;
  const shouldNavigate =
    swipe.axis === "x" && (Math.abs(deltaX) > SWIPE_THRESHOLD || velocity > SWIPE_VELOCITY);

  swipe.active = false;
  swipe.axis = null;
  lightboxBody.classList.remove("is-dragging");

  if (!shouldNavigate) {
    lightboxBody.style.transform = "";
    lightboxBody.style.opacity = "";
    return;
  }

  hasUserSwiped = true;
  hideSwipeIndicator();
  suppressTapUntil = performance.now() + 400;

  const direction = deltaX < 0 ? "next" : "prev";
  // Dropping the inline transform in the same task that goTo() adds the exit
  // class lets the card carry on from where the finger left it
  lightboxBody.style.transform = "";
  lightboxBody.style.opacity = "";

  if (isAutoplayOn) {
    startAutoplay();
  }

  if (direction === "next") {
    await showNext();
  } else {
    await showPrev();
  }
}

function initGallery() {
  if (!gallery || !lightbox || !lightboxBody || !lightboxAutoplay || !lightboxClose || !lightboxPrev || !lightboxNext) {
    return;
  }

  updateAutoplayUi();
  renderGalleryItems();
  initGalleryCaptions();
  initFilters();
  initProgressScrub();
  applyFilters();

  gallery.addEventListener("click", (event) => {
    const button = event.target.closest(".gallery-item");
    if (!button) {
      return;
    }
    openLightbox(button.getAttribute("data-movie-id"), button);
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => navigate("prev"));
  lightboxNext.addEventListener("click", () => navigate("next"));

  [[lightboxTapPrev, "prev"], [lightboxTapNext, "next"]].forEach(([zone, direction]) => {
    if (!zone) {
      return;
    }
    zone.addEventListener("click", () => {
      // A completed swipe fires a trailing click on the zone underneath it
      if (performance.now() < suppressTapUntil) {
        return;
      }
      hasUserSwiped = true;
      hideSwipeIndicator();
      navigate(direction);
    });
  });

  lightboxAutoplay.addEventListener("click", () => {
    setAutoplay(!isAutoplayOn);
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) {
      return;
    }
    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      if (isAutoplayOn) {
        startAutoplay();
      }
      showNext();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (isAutoplayOn) {
        startAutoplay();
      }
      showPrev();
    }
  });

  const swipeTarget = lightboxContent;
  swipeTarget.addEventListener("touchstart", onPointerDown, { passive: true });
  swipeTarget.addEventListener("touchmove", onPointerMove, { passive: false });
  swipeTarget.addEventListener("touchend", onPointerUp);
  swipeTarget.addEventListener("touchcancel", onPointerUp);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoplay();
    } else if (isAutoplayOn && !lightbox.hidden) {
      startAutoplay();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGallery);
} else {
  initGallery();
}
