const prev = document.querySelector(".prevBtn");
console.log(prev);

const next = document.querySelector(".nextBtn");

const counter = document.getElementById("counter");
console.log(counter);

next.addEventListener("click", function () {
    counter.innerText = +counter.innerHTML + 1;
    if (counter.innerHTML > 0) {
        counter.style.color = "green";
      } else if (counter.innerHTML < 0) {
        counter.style.color = "red";
      } else  {
        counter.style.color = "#3333";
      }
  
});
prev.addEventListener("click", function () {
  counter.innerHTML = +counter.innerHTML - 1;
  if (counter.innerHTML > 0) {
    counter.style.color = "green";
  } else if (counter.innerHTML < 0) {
    counter.style.color = "red";
  } else  {
    counter.style.color = "#3333";
  }
});
