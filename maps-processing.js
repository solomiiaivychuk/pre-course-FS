const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const cities = document.querySelectorAll('.city');
let currentlySelected = 0;

prevButton.style.visibility="hidden";

prevButton.addEventListener('click', function() {
  cities[currentlySelected].classList.remove("active");
  currentlySelected--;
  cities[currentlySelected].classList.add("active");
  nextButton.style.visibility="visible";
  if (currentlySelected === 0) {
      prevButton.style.visibility="hidden";
  }
});

nextButton.addEventListener('click', function() {
  cities[currentlySelected].classList.remove("active");
  currentlySelected++;
  cities[currentlySelected].classList.add("active");
  prevButton.style.visibility="visible";
  if (cities.length === currentlySelected + 1) {
      nextButton.style.visibility="hidden";
  }
});

// footer
const tools = ["HTML", "CSS", "JavaScript"];
const text = document.querySelector('.tools').innerText;
document.querySelector('.tools').innerText = text + " " + tools[0] + ", " + tools.slice(1, 4).join(' ');