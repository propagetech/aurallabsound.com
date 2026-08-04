/* FAQ page interactions: accordion + sticky TOC active state */
(function () {
  var accordion = document.querySelector("[data-faq-accordion]");
  var toc = document.querySelector("[data-faq-toc]");

  if (accordion) {
    accordion.addEventListener("toggle", function (event) {
      var target = event.target;
      if (!(target instanceof HTMLDetailsElement) || !target.open) {
        return;
      }
      if (!target.classList.contains("faq-item")) {
        return;
      }
      accordion.querySelectorAll("details.faq-item[open]").forEach(function (item) {
        if (item !== target) {
          item.open = false;
        }
      });
    }, true);
  }

  if (!toc || !("IntersectionObserver" in window)) {
    return;
  }

  var links = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
  var sections = links
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if (!sections.length) {
    return;
  }

  function setActive(id) {
    links.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + id;
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  var observer = new IntersectionObserver(
    function (entries) {
      var visible = entries
        .filter(function (entry) {
          return entry.isIntersecting;
        })
        .sort(function (a, b) {
          return b.intersectionRatio - a.intersectionRatio;
        });
      if (visible[0] && visible[0].target.id) {
        setActive(visible[0].target.id);
      }
    },
    {
      rootMargin: "-30% 0px -55% 0px",
      threshold: [0.1, 0.35, 0.6]
    }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });

  if (sections[0]) {
    setActive(sections[0].id);
  }
})();
