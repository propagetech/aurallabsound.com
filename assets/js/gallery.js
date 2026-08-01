/* Movie poster gallery — lightbox with nav, swipe, autoplay */

const movies = [
  {
    id: "elephant-whisperers",
    poster: "assets/images/gallery/the-elephant-whisperers.jpg",
    title: "The Elephant Whisperers",
    studio: "Aural Lab Sound Post",
    workType: "Production Sound Recordist",
    type: "Documentary Short",
    year: 2021,
    roles: ["Production Sound Recordist"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Recordist" },
      { name: "Suresh Bagali", role: "Production Sound" }
    ]
  },
  {
    id: "nocturnes",
    poster: "assets/images/gallery/nocturnes.jpg",
    title: "Nocturnes",
    studio: "Aural Lab Sound Post",
    workType: "Sound Designer",
    type: "Documentary",
    year: 2024,
    roles: ["Sound Designer"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Designer" },
      { name: "Suresh Bagali", role: "Sound Design" }
    ]
  },
  {
    id: "shivamma",
    poster: "assets/images/gallery/shivamma-yarehanchinnala.jpg",
    title: "Shivamma",
    studio: "Aural Lab Sound Post",
    workType: "Sound Designer",
    type: "Feature Film",
    year: 2022,
    roles: ["Sound Designer"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Designer" },
      { name: "Suresh Bagali", role: "Sound Design" }
    ]
  },
  {
    id: "bisi-bisi",
    poster: "assets/images/gallery/bisi-bisi-ice-cream.jpg",
    title: "Bisi-Bisi Ice-Cream",
    studio: "Aural Lab Sound Post",
    workType: "Sound Designer · Production Sound Recordist",
    type: "Feature Film",
    year: 2024,
    roles: ["Sound Designer", "Production Sound Recordist"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Mix" },
      { name: "Suresh Bagali", role: "Sound Recordist" }
    ]
  },
  {
    id: "pedro",
    poster: "assets/images/gallery/pedro.jpg",
    title: "Pedro",
    studio: "Aural Lab Sound Post",
    workType: "Sound Designer · Production Sound Recordist · Foley Supervisor",
    type: "Feature Film",
    year: 2023,
    roles: ["Sound Designer", "Production Sound Recordist", "Foley Supervisor"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Designer" },
      { name: "Suresh Bagali", role: "Foley / Sound Design" }
    ]
  },
  {
    id: "sabar-bonda",
    poster: "assets/images/gallery/sabar-bonda.jpg",
    title: "Sabar Bonda",
    studio: "Sound · Independent Cinema",
    workType: "Sound Design · Re-recording Mix",
    type: "Feature Film",
    year: 2023,
    roles: ["Sound Design", "Re-recording Mix"],
    team: [
      { name: "Anirban Borthakur", role: "Sound Designer" },
      { name: "Boloy Kumar Doloi", role: "Re-recording Mixer" }
    ]
  },
  {
    id: "the-disciple",
    poster: "assets/images/gallery/the-disciple.jpg",
    title: "The Disciple",
    studio: "Moonweave Films",
    workType: "Sound Design",
    type: "Feature Film",
    year: 2020,
    roles: ["Sound Design"],
    team: [
      { name: "Anirban Borthakur", role: "Sound Designer" },
      { name: "Naren Chandavarkar", role: "Sound Designer" }
    ]
  },
  {
    id: "second-chance",
    poster: "assets/images/gallery/second-chance.jpg",
    title: "Second Chance",
    studio: "Moonweave Films",
    workType: "Sound Design",
    type: "Feature Film",
    year: 2021,
    roles: ["Sound Design"],
    team: [
      { name: "Anirban Borthakur", role: "Sound Designer" }
    ]
  },
  {
    id: "against-the-tide",
    poster: "assets/images/gallery/against-the-tide.jpg",
    title: "Against the Tide",
    studio: "Independent Cinema",
    workType: "Festival Feature · Sundance Premiere",
    type: "Feature Film",
    year: 2020,
    roles: ["Cinematography"],
    team: [
      { name: "Vikas Urs", role: "Cinematography" }
    ]
  },
  {
    id: "monica-o-my-darling",
    poster: "assets/images/gallery/monica-o-my-darling.jpg",
    title: "Monica, O My Darling",
    studio: "Sound · Technical",
    workType: "Sound Mixing",
    type: "Feature Film",
    year: 2023,
    roles: ["Sound Mixing"],
    team: [
      { name: "Boloy Kumar Doloi", role: "Sound Mixing · IIFA 2023" }
    ]
  },
  {
    id: "kabir-singh",
    poster: "assets/images/gallery/kabir-singh.jpg",
    title: "Kabir Singh",
    studio: "Aural Lab Sound Post",
    workType: "Production Sound Recordist",
    type: "Feature Film",
    year: 2019,
    roles: ["Production Sound Recordist"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Mixer" },
      { name: "Suresh Bagali", role: "Production Sound" }
    ]
  },
  {
    id: "article-15",
    poster: "assets/images/gallery/article-15.jpg",
    title: "Article 15",
    studio: "Aural Lab Sound Post",
    workType: "Production Sound Recordist",
    type: "Feature Film",
    year: 2019,
    roles: ["Production Sound Recordist"],
    team: [
      { name: "Shreyank Nanjappa", role: "Production Sound" },
      { name: "Suresh Bagali", role: "Production Sound" }
    ]
  },
  {
    id: "gantumoote",
    poster: "assets/images/gallery/gantumoote.jpg",
    title: "Gantumoote",
    studio: "Aural Lab Sound Post",
    workType: "Sound Designer · Production Sound Recordist",
    type: "Feature Film",
    year: 2021,
    roles: ["Sound Designer", "Production Sound Recordist"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Designer" },
      { name: "Suresh Bagali", role: "Sound Designer" }
    ]
  },
  {
    id: "flickering-lights",
    poster: "assets/images/gallery/flickering-lights.jpg",
    title: "Flickering Lights",
    studio: "Aural Lab Sound Post",
    workType: "Production Sound Recordist",
    type: "Documentary",
    year: 2023,
    roles: ["Production Sound Recordist"],
    team: [
      { name: "Shreyank Nanjappa", role: "Production Sound" },
      { name: "Suresh Bagali", role: "Production Sound" }
    ]
  },
  {
    id: "diaries",
    poster: "assets/images/gallery/diaries-unconventional-journey.jpg",
    title: "Diaries from an Unconventional Journey",
    studio: "Aural Lab Sound Post",
    workType: "Sound Designer",
    type: "Documentary",
    year: 2021,
    roles: ["Sound Designer"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Designer" },
      { name: "Suresh Bagali", role: "Sound Design" }
    ]
  },
  {
    id: "puta-tirugisi-nodi",
    poster: "assets/images/gallery/puta-tirugisi-nodi.jpg",
    title: "Puta Tirugisi Nodi",
    studio: "Aural Lab Sound Post",
    workType: "Sound Designer",
    type: "Feature Film",
    year: 2021,
    roles: ["Sound Designer"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Designer" },
      { name: "Suresh Bagali", role: "Sound Design" }
    ]
  },
  {
    id: "summer-saying",
    poster: "assets/images/gallery/and-what-is-the-summer-saying.jpg",
    title: "And What Is The Summer Saying",
    studio: "Aural Lab Sound Post",
    workType: "Sound Designer · Production Sound Recordist",
    type: "Documentary",
    year: 2019,
    roles: ["Sound Designer", "Production Sound Recordist"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Designer" },
      { name: "Suresh Bagali", role: "Production Sound" }
    ]
  },
  {
    id: "afternoon-clouds",
    poster: "assets/images/gallery/afternoon-clouds.jpg",
    title: "Afternoon Clouds",
    studio: "Aural Lab Sound Post",
    workType: "Sound Designer · Production Sound Recordist",
    type: "Short Film",
    year: 2019,
    roles: ["Sound Designer", "Production Sound Recordist"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Designer" },
      { name: "Suresh Bagali", role: "Production Sound" }
    ]
  },
  {
    id: "testimony-of-ana",
    poster: "assets/images/gallery/testimony-of-ana.jpg",
    title: "Testimony of Ana",
    studio: "Aural Lab Sound Post",
    workType: "Sound Designer",
    type: "Short Film",
    year: 2018,
    roles: ["Sound Designer"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Designer" },
      { name: "Suresh Bagali", role: "Sound Design" }
    ]
  },
  {
    id: "bulbul-can-sing",
    poster: "assets/images/gallery/bulbul-can-sing.jpg",
    title: "Bulbul Can Sing",
    studio: "Aural Lab Sound Post",
    workType: "Sound Effects Editor",
    type: "Feature Film",
    year: 2021,
    roles: ["Sound Effects Editor"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Effects Editor" },
      { name: "Suresh Bagali", role: "Sound Effects" }
    ]
  },
  {
    id: "dolly-kitty",
    poster: "assets/images/gallery/dolly-kitty.jpg",
    title: "Dolly Kitty Aur Woh Chamakte Sitaare",
    studio: "Aural Lab Sound Post",
    workType: "Production Sound Recordist (Additional)",
    type: "Feature Film",
    year: 2019,
    roles: ["Production Sound Recordist"],
    team: [
      { name: "Shreyank Nanjappa", role: "Production Sound" },
      { name: "Suresh Bagali", role: "Production Sound" }
    ]
  },
  {
    id: "jabariya-jodi",
    poster: "assets/images/gallery/jabariya-jodi.jpg",
    title: "Jabariya Jodi",
    studio: "Aural Lab Sound Post",
    workType: "Production Sound Recordist (Additional)",
    type: "Feature Film",
    year: 2019,
    roles: ["Production Sound Recordist"],
    team: [
      { name: "Shreyank Nanjappa", role: "Production Sound" },
      { name: "Suresh Bagali", role: "Production Sound" }
    ]
  },
  {
    id: "month-of-madhu",
    poster: "assets/images/gallery/month-of-madhu.jpg",
    title: "Month of Madhu",
    studio: "Aural Lab Sound Post",
    workType: "Dialogue Editor",
    type: "Feature Film",
    year: 2023,
    roles: ["Dialogue Editor"],
    team: [
      { name: "Shreyank Nanjappa", role: "Dialogue Editor" },
      { name: "Suresh Bagali", role: "Dialogue Edit" }
    ]
  },
  {
    id: "ekam",
    poster: "assets/images/gallery/ekam.jpg",
    title: "Ekam",
    studio: "Aural Lab Sound Post",
    workType: "Sound Designer · Production Sound Recordist",
    type: "Web Series",
    year: 2021,
    roles: ["Sound Designer", "Production Sound Recordist"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Designer" },
      { name: "Suresh Bagali", role: "Production Sound" }
    ]
  },
  {
    id: "parisu",
    poster: "assets/images/gallery/parisu.jpg",
    title: "Parisu (Appavin Parisu)",
    studio: "Aural Lab Sound Post",
    workType: "Sound Designer",
    type: "Short Film",
    year: 2020,
    roles: ["Sound Designer"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Designer" },
      { name: "Suresh Bagali", role: "Sound Design" }
    ]
  },
  {
    id: "thinkistaan",
    poster: "assets/images/gallery/thinkistaan.jpg",
    title: "Thinkistaan",
    studio: "Aural Lab Sound Post",
    workType: "Dialogue Editor",
    type: "Web Series",
    year: 2021,
    roles: ["Dialogue Editor"],
    team: [
      { name: "Shreyank Nanjappa", role: "Dialogue Editor" },
      { name: "Suresh Bagali", role: "Dialogue Edit" }
    ]
  },
  {
    id: "season-of-innocence",
    poster: "assets/images/gallery/season-of-innocence.jpg",
    title: "Season of Innocence",
    studio: "Aural Lab Sound Post",
    workType: "Foley Supervisor · Dialogue Editor",
    type: "Feature Film",
    year: 2022,
    roles: ["Foley Supervisor", "Dialogue Editor"],
    team: [
      { name: "Shreyank Nanjappa", role: "Foley Supervisor" },
      { name: "Suresh Bagali", role: "Dialogue Edit" }
    ]
  },
  {
    id: "pathumma",
    poster: "assets/images/gallery/pathumma.jpg",
    title: "Pathumma",
    studio: "Aural Lab Sound Post",
    workType: "Sound Designer",
    type: "Feature Film",
    year: 2021,
    roles: ["Sound Designer"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Designer" },
      { name: "Suresh Bagali", role: "Sound Design" }
    ]
  },
  {
    id: "the-plan",
    poster: "assets/images/gallery/the-plan.jpg",
    title: "The Plan",
    studio: "Aural Lab Sound Post",
    workType: "Sound Designer · Production Sound Recordist",
    type: "Feature Film",
    year: 2021,
    roles: ["Sound Designer", "Production Sound Recordist"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Designer" },
      { name: "Suresh Bagali", role: "Production Sound" }
    ]
  },
  {
    id: "chipkali",
    poster: "assets/images/gallery/chipkali.jpg",
    title: "Chipkali",
    studio: "Aural Lab Sound Post",
    workType: "Sound Designer · Production Sound Recordist",
    type: "Short Film",
    year: 2020,
    roles: ["Sound Designer", "Production Sound Recordist"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Designer" },
      { name: "Suresh Bagali", role: "Production Sound" }
    ]
  },
  {
    id: "maruts",
    poster: "assets/images/gallery/maruts.jpg",
    title: "Maruts",
    studio: "Aural Lab Sound Post",
    workType: "Sound Designer",
    type: "Documentary",
    year: 2020,
    roles: ["Sound Designer"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Designer" },
      { name: "Suresh Bagali", role: "Sound Design" }
    ]
  },
  {
    id: "artel",
    poster: "assets/images/gallery/artel.jpg",
    title: "Artel",
    studio: "Aural Lab Sound Post",
    workType: "Sound Designer",
    type: "Documentary",
    year: 2020,
    roles: ["Sound Designer"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Designer" },
      { name: "Suresh Bagali", role: "Sound Design" }
    ]
  },
  {
    id: "abhi-to-party",
    poster: "assets/images/gallery/abhi-to-party.jpg",
    title: "Abhi To Party Shuru Hui Hai",
    studio: "Aural Lab Sound Post",
    workType: "Sound Effects Editor",
    type: "Feature Film",
    year: 2021,
    roles: ["Sound Effects Editor"],
    team: [
      { name: "Shreyank Nanjappa", role: "Sound Effects Editor" },
      { name: "Suresh Bagali", role: "Sound Effects" }
    ]
  }
];

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
const STUDIO_NAME = "Aural Lab Sound Post";

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
const creditsTeam = document.getElementById("credits-team");
const progressDotsContainer = document.getElementById("progress-dots");
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
  year: [],
  studio: []
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
      const name = document.createElement("span");
      name.className = "credits-team__name";
      name.textContent = member.name;
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
  renderTeam(movie.team);

  counterText.textContent = `${index + 1} / ${filteredMovies.length}`;

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

  const total = filteredMovies.length;
  if (progressDotsContainer.childElementCount !== total) {
    progressDotsContainer.replaceChildren(
      ...Array.from({ length: total }, () => document.createElement("span"))
    );
  }

  Array.from(progressDotsContainer.children).forEach((segment, i) => {
    segment.classList.toggle("is-past", i < index);
    segment.classList.toggle("is-active", i === index);
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
    const studioMatch = activeFilters.studio.length === 0 ||
      activeFilters.studio.includes(movie.studio);

    return roleMatch && typeMatch && yearMatch && studioMatch;
  });

  updateGalleryDisplay();
}

function updateGalleryDisplay() {
  if (!gallery) return;

  gallery.querySelectorAll(".gallery-item").forEach((item) => {
    const movieId = item.getAttribute("data-movie-id");
    const isVisible = filteredMovies.some(m => m.id === movieId);
    item.style.display = isVisible ? "" : "none";
  });

  const visibleCount = filteredMovies.length;
  const countEl = document.querySelector(".gallery-count");
  if (countEl) {
    countEl.textContent = `${visibleCount} film${visibleCount !== 1 ? 's' : ''}`;
  }
}

function initFilters() {
  const filterContainer = document.querySelector(".gallery-head");
  if (!filterContainer) return;

  const allRoles = [...new Set(movies.flatMap(m => m.roles))].sort();
  const allTypes = [...new Set(movies.map(m => m.type))].sort();
  const allYears = [...new Set(movies.map(m => m.year))].sort((a, b) => b - a);
  const allStudios = [...new Set(movies.map(m => m.studio))].sort();

  const filtersHtml = `
    <div class="filters-section">
      <div class="filter-group">
        <label class="filter-label">By Role</label>
        <div class="filter-buttons" data-filter-type="role">
          ${allRoles.map(r => `<button class="filter-btn" data-value="${r}">${r}</button>`).join('')}
        </div>
      </div>
      <div class="filter-group">
        <label class="filter-label">By Type</label>
        <div class="filter-buttons" data-filter-type="type">
          ${allTypes.map(t => `<button class="filter-btn" data-value="${t}">${t}</button>`).join('')}
        </div>
      </div>
      <div class="filter-group">
        <label class="filter-label">By Year</label>
        <div class="filter-buttons" data-filter-type="year">
          ${allYears.map(y => `<button class="filter-btn" data-value="${y}">${y}</button>`).join('')}
        </div>
      </div>
      <div class="filter-group">
        <label class="filter-label">By Studio</label>
        <div class="filter-buttons" data-filter-type="studio">
          ${allStudios.map(s => `<button class="filter-btn" data-value="${s}">${s}</button>`).join('')}
        </div>
      </div>
      <button class="filter-reset">Reset Filters</button>
    </div>
  `;

  filterContainer.insertAdjacentHTML("afterend", filtersHtml);

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const filterType = e.target.closest(".filter-buttons").getAttribute("data-filter-type");
      const value = e.target.getAttribute("data-value");

      if (filterType === "year") {
        activeFilters[filterType] = activeFilters[filterType].includes(parseInt(value))
          ? activeFilters[filterType].filter(v => v !== parseInt(value))
          : [...activeFilters[filterType], parseInt(value)];
      } else {
        activeFilters[filterType] = activeFilters[filterType].includes(value)
          ? activeFilters[filterType].filter(v => v !== value)
          : [...activeFilters[filterType], value];
      }

      e.target.classList.toggle("active");
      applyFilters();
    });
  });

  document.querySelector(".filter-reset").addEventListener("click", () => {
    activeFilters = { role: [], type: [], year: [], studio: [] };
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    applyFilters();
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
  initFilters();

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
