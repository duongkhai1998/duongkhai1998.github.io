const heading = document.getElementById('heading');
// xem danh sach lass cua phan tu
console.log(heading.classList)
// them class 
heading.classList.add('text-big','text-center')

// xoa class
heading.classList.remove('text-big','text-center')

// kiem tra class co ton tai ko ? true/false
console.log(heading.classList.contains('text-red'))
console.log(heading.classList.contains('text-big'))
// toggle: neu co class thi xoa di,ko co thi them vao

// lapdi lap lai 1 cong viec sau 1 khoang thoi gian nhat dinh
// parameter 1 : funciton(cv)
// parameter 2 : time (ms)
setInterval(function(){
    heading.classList.toggle('text-red')
},1000)


// delay 1 khoang thoi gian sau do moi thuc hien cv
setTimeout(function(){
    heading.classList.toggle('text-red')
},3000)


// thuc hien dem nguoc thoi gian tu 10--> 0s
// ket thuc thi hien thi ra 1 message;


let time = 10
let interval = setInterval(function(){
time--;
document.querySelector('.time').innerText =`${time}s`

if(time == 0){
    // dung qua trinh lap lai
    clearInterval(interval);
    document.querySelector('.message').classList.remove('hide')

}
},1000)
