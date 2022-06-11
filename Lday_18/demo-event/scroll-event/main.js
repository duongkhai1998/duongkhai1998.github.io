const btntop=document.querySelector('.btn-top')

window.addEventListener("scroll", function () {
//    moc hien thi: 400
if(document.documentElement.scrollTop > 400){
    btntop.style.display = 'block'
}
else{
    btntop.style.display = 'none'
}
});

btntop.addEventListener('click',function(){
    window.scrollTo({
        top : 0,
        behavior :'smooth'
    })
})