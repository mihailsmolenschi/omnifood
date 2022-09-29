const headerSection = document.querySelector(".header");
const mainNav = document.querySelector(".main-nav");
const menuBtn = document.querySelector(".btn-mobile-nav");

menuBtn.addEventListener("click", (e) =>
  headerSection.classList.toggle("nav-open")
);
mainNav.addEventListener("click", () =>
  headerSection.classList.remove("nav-open")
);
document.addEventListener("scroll", () =>
  headerSection.classList.remove("nav-open")
);

// Smooth scrolling animation ipmlementation for safari
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href == "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      let sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerSection.classList.toggle("nav-open");
    }
  });
});

// Stiky navigation implementation
const sectionHeroElement = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (entry.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroElement);
