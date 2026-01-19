document.getElementById("theme-toggle")
  .addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("theme-light");
  document.body.classList.toggle("theme-dark");
});