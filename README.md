# Aural Lab Sound - Professional Sound Design Studio Website

Modern, SEO-optimized static website for Aural Lab Sound, a professional sound recording and design studio in Bangalore.

## Site Structure

- **index.html** - Home page
- **projects-page.html** - Sound design portfolio and projects
- **studio-page.html** - Studio facilities and booking information
- **equipment-page.html** - Professional audio equipment inventory

## Technology Stack

- **HTML5** - Semantic, accessible markup
- **CSS3** - Modern responsive styling (Flexbox, Grid, Media Queries)
- **Vanilla JavaScript** - Minimal, framework-free interactivity
- **Google Fonts** - Playfair Display + Quicksand

## Features

✓ Full SEO optimization with schema.org structured data
✓ JSON-LD for Google rich results
✓ Open Graph + Twitter Card meta tags
✓ Mobile-responsive design
✓ Cloudflare Pages ready
✓ Security headers (CSP, X-Frame-Options, etc.)
✓ Fast page loads with optimized caching
✓ Accessibility (WCAG 2.1 AA compliant)

## Deployment to Cloudflare Pages

### Option 1: Direct Upload (Quick)
```bash
npm install -g wrangler
wrangler pages deploy
```

### Option 2: GitHub Integration (Recommended)
1. Push repository to GitHub
2. Go to Cloudflare Pages dashboard
3. Connect GitHub account
4. Select this repository
5. Set build settings (no build needed - uses root as output)

### Option 3: Using Cloudflare UI
1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Upload project folder directly
3. Set root directory to `/`

## Configuration Files

- **_redirects** - www → apex, HTTP → HTTPS
- **_headers** - Cache control, security headers, MIME types
- **robots.txt** - Search engine crawling rules
- **sitemap.xml** - Indexed pages and update frequency

## Local Development

No build step required:

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server
```

## Content Management

All content is in `.html` files. Edit:
- Pages: `.html` files
- Styles: `css/main.css`
- Interactions: `js/main.js`

## SEO & Schema

Each page includes:
- Meta descriptions & keywords
- Open Graph tags
- Twitter Card support
- JSON-LD schema.org markup
- Canonical URLs
- Proper H1-H6 hierarchy

## Contact

- Sound Design: shreyanknanjappa@gmail.com | +91 9900 117364
- Sync Sound: sbagali@gmail.com | +91 8919 656889