const heading = document.getElementById("heading");
console.log(heading);
heading.style.color = 'red'
heading.style.textTransform = 'uppercase'
const allpara = document.querySelectorAll('.para');
allpara.forEach(ele =>{
    ele.style.color = 'blue'
    ele.style.fontSize ='20px'
})
console.log(allpara)

const para3 = document.querySelector("body p:nth-child(4)");
console.log(para3)
const link =document.createElement('a')
link.innerText = 'trang facebook'
link.href ='https://www.facebook.com/'
console.log(link)
para3.afterend(link)