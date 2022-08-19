let locationWeb = window.location.href.split("=");
let idItem = locationWeb[1];
let sizeArr = [];
let params = new URLSearchParams(window.location.search);
let id = params.get("id");
const btnAddToCart = document.querySelector(".detail-btn-add");
// console.log(btnAddToCart)
// const sizeEls = document.querySelectorAll(".size .size-item button");
//   console.log(sizeEls)
//   const breadcrumbItemActive = document.querySelector(".breadcrumb-item-active");
// const nameEl = document.querySelector(".detail-name")
// const idEl = document.querySelector(".detail-id")
// const priceEl = document.querySelector(".detail-price")
// const mainCarouselEl = document.querySelector(".carousel-inner ")
// console.log(mainCarouselEl)

// const thumbCarouselEl = document.querySelector(".carousel-indicators")

// console.log(thumbCarouselEl)

// const desEl = document.querySelector(".des")



// sizeEls.forEach(s =>  {
//   s.addEventListener("click", () =>  {
//     Array.from(sizeEls).map(size => size.classList.remove("selected", "bg-dark", "text-white"));

//     s.classList.add("selected", "bg-dark", "text-white");
//   })
// })
// const sizeSelectedEl = document.querySelector(".size .size-item .selected");
// console.log(sizeSelectedEl)
// // Biến để lưu thông tin sản phẩm theo id
// let product;
// let count = 1;

// // Kiểm tra xem id có tồn tại trên url hay không
// // Nếu không có -> 404
// if (id) {
//     product = products.find(p => p.id == id);

//     if (!product) {
//         window.location.href = "#";
//     }

//     document.title = product.name;
//     breadcrumbItemActive.innerText = product.name;
// } else {
//     window.location.href = "#";
// }

// Thêm vào giỏ hàng
btnAddToCart.addEventListener("click", () => {
 
  alert("Thêm vào giỏ hàng thành công");
})
