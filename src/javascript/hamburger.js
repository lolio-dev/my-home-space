const navUl = document.getElementById("nav");
const openIcon = document.getElementById("open-menu");
const closeIcon = document.getElementById("close-menu");
const mainContainer = document.body;

console.log('Hamburger loaded')

openIcon.addEventListener("click", () => {
  navUl.classList.toggle("show");
  mainContainer.classList.toggle("menu-open");
});

closeIcon.addEventListener("click", () => {
  navUl.classList.toggle("show");
  mainContainer.classList.toggle("menu-open");
});
