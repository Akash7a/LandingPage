const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const parent = q.parentElement;
    parent.classList.toggle('active');
  });
});