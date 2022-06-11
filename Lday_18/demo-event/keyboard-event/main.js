// Lắng nghe sự kiện keydown
document.addEventListener("keydown", function (event) {
    console.log(event);
});

// // Lắng nghe sự kiện keyup
// document.addEventListener("keyup", function () {
//     console.log("keyup");
// });

// // Lắng nghe sự kiện keypress
// document.addEventListener("keypress", function () {
//     console.log("keypress");
// });

const inputEl = document.querySelector('input')
const textEl = document.querySelector('span')
inputEl.addEventListener('keydown',function(event){
    if(event.keyCode = 13){
    // let value =inputEl.value
    let value = event.target.value
    if(value ==''){
        alert('noi dung ko dc de trong')
        return value
    }
    textEl.innerText =value
    inputEl.value = ''

}})