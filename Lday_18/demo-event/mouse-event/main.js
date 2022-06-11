// document.addEventListener('click', function() {
//     console.log('click');
//    })

// //    document.addEventListener('mousedown', function() {
// //     console.log('mousedown');
// //    })
   
// //    document.addEventListener('mousemove', function() {
// //     console.log('mousemove');
// //    })
   
// //    document.addEventListener('mouseup', function() {
// //     console.log('mouseup');
// //    })
document.addEventListener('click', function(event) {
    console.log(event);
   })


document.addEventListener('mousemove',function(event){
    // xoa hinh tron co san(neu co)
    const boxEl = document.querySelector('.box')
    console.log(boxEl)
    // kiem tra neu ton tai --> xoa
    if(boxEl){
        boxEl.parentElement.removeChild(boxEl)
    }

    // tao ra hinh tron
    let box = document.createElement('div')
    box.classList.add('box')
    // gan toa do
    console.log(event);
    box.style.top = `${event.offsetY-50}px`
    box.style.left = `${event.offsetX-50}px`

    // gan vao DOM
    document.body.prepend(box)

})