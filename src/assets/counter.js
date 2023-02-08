let counterContainer = document.querySelectorAll(".website-counter");
let resetButton = document.querySelector("#reset");
let visitCount = localStorage.getItem("page_view");
console.log('hi')
visitCount = Math.random(10).toFixed(2)
visitCount *= 100   
visitCount = Math.round(visitCount)


if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
console.log(counterContainer)
Array.from(counterContainer).map(e => e.innerHTML = visitCount)


function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const clients = document.getElementById("clients-counter");
const rating = document.getElementById("rating-counter");
const xp = document.getElementById("XP-counter");
const hotels = document.getElementById("hotels-counter");
animateValue(clients, 100, 6040, 8000000);
animateValue(rating, 100, 98, 5000);
animateValue(xp, 100, 1007, 10000);
animateValue(hotels, 100, 1730, 8000000);