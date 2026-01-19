let lastScrollTop = 0;
let delta = 5;
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (Math.abs(scrollTop - lastScrollTop) <= delta) return;

  if (scrollTop > lastScrollTop && scrollTop > 80) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollTop = scrollTop;
});