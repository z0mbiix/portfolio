function myOpenAndHideBurgerMenu() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none"} 
    else {
    x.style.display = "block"}
  }

const menu = document.querySelector('.myOpenAndHideBurgerMenu');
const triggers = document.querySelectorAll('.icon');

triggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
});
