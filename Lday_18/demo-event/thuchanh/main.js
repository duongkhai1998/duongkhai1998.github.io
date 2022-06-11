function randomQoutes() {
  qoutes = ["1", "2", "4", "5", "7"];
  let index = Math.floor(Math.random() * qoutes.length);
  return qoutes[index];
}

random = () => {
  text.innerHTML = randomQoutes();
};

const text = document.getElementById("text");
const getHexColorRandom = function () {
  let color = "#";
  let str = "0123456789ABCDEF";
  for (let i = 1; i <= 6; i++) {
    color += str[Math.floor(Math.random() * str.length)];
  }
  return color;
};
console.log(getHexColorRandom());
const btn2 = document.getElementById("btn-2");
console.log(btn2);

btn2.onclick = () => {
  text.style.color = getHexColorRandom();
};

function getRgbRandom() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `RGB(${r},${g},${b})`;
}
console.log(getRgbRandom());
const btn3 = document.getElementById("btn-3");
btn3.addEventListener("click", () => {
  text.style.backgroundColor = getRgbRandom();
});

const pass =document.querySelector('.pass')
const Show = document.querySelector('.hide')
Show.addEventListener('click',function(){
  if(pass.type == 'password'){
    pass.type = 'text'
    Show.innerHTML = 'hide'
  }
  else if (pass.type = 'text'){
    pass.type = 'password'
    Show.innerHTML = 'Show'
  }
})