let locationWeb = window.location.href.split("=");
let idItem = locationWeb[1];
let sizeArr = [];
const btnAddToCart = document.querySelector(".detail-btn-add");
console.log(btnAddToCart)
const sizeEls = document.querySelectorAll(".size button");
  console.log(sizeEls)
// Chọn size;
const choseSize = ele => {
  
  const sizeEls = document.querySelectorAll(".size button");
  console.log(sizeEls)
  Array.from(sizeEls).map(size => size.classList.remove("selected", "bg-dark", "text-white"));

  ele.classList.add("selected", "bg-dark", "text-white");
}
// Thêm vào giỏ hàng
btnAddToCart.addEventListener("click", () => {
  // Kiểm tra xem đã chọn size hay chưa
  const sizeSelectedEl = document.querySelector(".size .selected");
  if (!sizeSelectedEl) {
      alert("Vui lòng chọn size trước khi thêm vào giỏ hàng");
      return;
  }

  // Cấu trúc item thêm vào giỏ hàng
  let item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      count: count,
      size: sizeSelectedEl.innerText,
  }

  // Thêm vào giỏ hàng
  addItemToCart(item);
  alert("Thêm vào giỏ hàng thành công");
})

