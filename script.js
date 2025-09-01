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

document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // prevent instant jump
    const targetId = this.getAttribute('href').substring(1); // remove #
    const target = document.getElementById(targetId);

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // adjust if sticky header overlaps
        behavior: "smooth"
      });
    }
  });
});
