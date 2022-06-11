const sayhello = ()=>{
    alert('xin chao cac ban 1')
}

//  Sử dụng DOM property 
const btn2 = document.getElementById('btn2')
// btn2.onclick = () => {
//     alert('xin chao cac ban 2');
// }

const sayhello2 = ()=>{
    alert('xin chao cac ban 2')
}

btn2.onclick = sayhello2

// Sử dụng addEventListener
const btn3 = document.getElementById('btn3')
btn3.addEventListener('click',()=>{alert('xin chao cac ban 3')})

