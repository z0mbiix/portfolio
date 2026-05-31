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

const xValues = ["1PY Kap 2", "Kap. 3 statistikk", "Kap.4+5 formler/geometri", "Kap 6. økonomi", "Halvårsvurdering"];
const yValues = [4.5, 5, 3, 2.7, 5];
const barColors = ["white", "purple","white","purple","white"];

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    plugins: {
      legend: {display: false},
      title: {
        display: true,
        text: "Mine Matteprøve Resultater",
        font: {size: 16}
      }
    }
  }
});