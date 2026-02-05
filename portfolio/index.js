const handleFirstTab = (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("user-is-tabbing");

    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove("user-is-tabbing");

  window.removeEventListener("mousedown", handleMouseDownOnce);
  window.addEventListener("keydown", handleFirstTab);
};

window.addEventListener("keydown", handleFirstTab);


const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {
  let isBackToTopVisible = false;

  const toggleBackToTop = (show) => {
    backToTopButton.style.visibility = show ? "visible" : "hidden";
    backToTopButton.style.opacity = show ? "1" : "0";
    backToTopButton.style.transform = show ? "scale(1)" : "scale(0)";
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 700 && !isBackToTopVisible) {
      isBackToTopVisible = true;
      toggleBackToTop(true);
    } 
    else if (window.scrollY <= 700 && isBackToTopVisible) {
      isBackToTopVisible = false;
      toggleBackToTop(false);
    }
  });

  /* Smooth scroll to top */
  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
