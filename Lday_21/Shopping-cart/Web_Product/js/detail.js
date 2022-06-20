// detail.html?id=1 --> querystring
// detail.html?id=1&name=product1&price=10000
// lấy ra id trên url
// truy cập các phần từ
const breadcrumItemActive = document.querySelector('.breadcrumb-item.active')
const nameEl = document.querySelector('.product-name')
const priceEl = document.querySelector('.product-price')
const sizeEl = document.querySelectorAll('.product-size')
console.log(sizeEl)
const descriptionEl = document.querySelector('.product-description')
let params = new URLSearchParams(window.location.search);
let id = params.get('id')
// biến  để lưu thông tin sản phẩm theo id
let product;
// kiểm tra id có tồn tại trên url hay ko
// nếu ko có -->404
if(id){
product = products.find(p => p.id ==id)
if(!product){
    window.location.href = './404.html'
}
document.title = product.name
breadcrumItemActive.innerText = product.name
}else {
    window.location.href = './404.html'

}
// hiển thị thông tin sản phẩm 
const renderProduct = obj =>{
    nameEl.innerText = obj.name
    priceEl.innerText = obj.price 
    descriptionEl.innerText = obj.description;
     
    const renderSize = arr =>{
        sizeEl.innerHTML=''
        let size = ''
        for(let i = 0; i < arr.length;i++){
            size += `<span class="border py-2 px-3 border-dark me-2">${arr[i]}</span>`

        }
        sizeEl.innerHTML = size
    }
  
}
renderProduct(product)




// Initialise Carousel ********************************
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    Dots: false,
});

// Thumbnails
const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
    Sync: {
        target: mainCarousel,
        friction: 0,
    },
    Dots: false,
    Navigation: false,
    center: true,
    slidesPerPage: 1,
    infinite: false,
});

// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
    Carousel: {
        on: {
            change: (that) => {
                mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
                    friction: 0,
                });
            },
        },
    },
});