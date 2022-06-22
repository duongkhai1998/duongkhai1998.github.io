// detail.html?id=1 --> querystring
// detail.html?id=1&name=product1&price=10000
// lấy ra id trên url
// truy cập các phần từ
const breadcrumItemActive = document.querySelector(".breadcrumb-item.active");
const nameEl = document.querySelector(".product-name");
const priceEl = document.querySelector(".product-price");
const sizeEl = document.querySelector(".product-size");
const descriptionEl = document.querySelector(".product-description");
const btnPluscount = document.querySelector(".btn-plus-count");
const btnMinuscount = document.querySelector(".btn-minus-count");
const countEl = document.querySelector(".count");
const btnAddToCart = document.querySelector(".btn-add-to-cart");
let params = new URLSearchParams(window.location.search);
let id = params.get("id");
let count = 0;
// tang so luong
btnPluscount.addEventListener("click", () => {
  count++;
  countEl.innerHTML = count;
});
btnMinuscount.addEventListener("click", () => {
  count--;
  if (count < 1) {
    count = 1;
  }
  countEl.innerHTML = count;
});
// biến  để lưu thông tin sản phẩm theo id
let product;
// kiểm tra id có tồn tại trên url hay ko
// nếu ko có -->404
if (id) {
  product = products.find((p) => p.id == id);
  if (!product) {
    window.location.href = "./404.html";
  }
  document.title = product.name;
  breadcrumItemActive.innerText = product.name;
} else {
  window.location.href = "./404.html";
}
// hiển thị thông tin sản phẩm
const renderProduct = (obj) => {
  nameEl.innerText = obj.name;
  priceEl.innerText = obj.price;
  descriptionEl.innerText = obj.description;
  sizeEl.innerHTML = product.sizes.map(size => {
    return `<span class="border py-2 px-3 border-dark me-2" onclick="choseSize(this)">${size}</span>`
}).join("");
};
renderProduct(product);
// chon size

const choseSize = (ele) => {
    //   cach 1
      const selectedEl=document.querySelector('.selected')
      if(selectedEl){
          selectedEl.classlist.remove('selected','bg-dark','text-white')
      }
      ele.classlist.add('selected','bg-dark','text-white')
  // cach 2
//   const sizeEls = document.querySelectorAll(".product-size span");
//   Array.from(sizeEls).map((size) =>
//     size.classList.remove("selected", "bg-dark", "text-white")
//   );
//   ele.classlist.add("selected", "bg-dark", "text-white");
};
// them vao gio hang
btnAddToCart.addEventListener("click", () => {
  // kiem tra xem da chon size hay chua
  const sizeSelectedEL = document.querySelector(".product-size .selected");
  if (!sizeSelectedEL) {
    alert("vui long chon size truoc khi them vao gio hang");
    return;
  }
  let item = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image[0],
    count: count,
    size: sizeSelectedEL.innerText,
  };
//   themvao gio hang
  addItemToCart(item)
  alert('them vao gio hang thanh cong')
});


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
