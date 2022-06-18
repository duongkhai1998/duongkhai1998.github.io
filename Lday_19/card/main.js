const li = document.createElement('li')
li.innerHTML = '24/7 Phone support'
document.querySelector('#pro-plan ul').appendChild(li)

const cards= document.querySelectorAll('.col-md-4')
const rows = document.querySelector('.row')

rows.innerHTML =''
rows.appendChild(cards[1])
rows.appendChild(cards[0])


const getStared =document.querySelector('#pro-plan button')
console.log(getStared)
getStared.style.backgroundColor ='#0984e3'
getStared.style.color =' #fff'
getStared.innerHTML ='BUY NOW'


const proStorage = document.querySelector('#pro-plan ul li span')

proStorage.innerHTML= 25

const basicStorage = document.querySelector('#basic-plan ul li span')
basicStorage.innerHTML = 3




