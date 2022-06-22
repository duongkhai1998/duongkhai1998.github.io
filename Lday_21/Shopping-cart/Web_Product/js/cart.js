// key = 'cart
// value = array
// them vao localstorage
const setDataToLocalStorage = (arr) => {
  localStorage.setItem("cart", JSON.stringify(arr));
};
// lay ra tu localstorage
const getDataFromLocalStorage = () => {
  const localStorageValue = localStorage.getItem("cart");
  if (localStorageValue) {
    return JSON.parse(localStorageValue);
  } else {
    return [];
  }
};
// cau truc cua gio hang

// const cart = [
//     {
//         id
//         name
//         price
//         Image
//         count
//         size
//     }
// ]

const addItemToCart = (item) => {
  // th1 : id chua co trong gio hang =>them moi
  // th2 : id da ton tai va size chua ton tai => them moi
  // th3 : id va size da ton tai => cap nhap so luong

  //   lay danh sach cart tu localstorage
  let cart = getDataFromLocalStorage();
  //   neu cart ko ton tai =>tao moi
  if (!cart) {
    cart = [item];
  } else {
    // tim kiem san pham da ton tai trong gio hang hay chua
    let product = cart.find((p) => p.id == item.id && p.size == item.size);
    // chua ton tai => them vapp
    if (!product) {
      cart.push(item);
    }
    // ton tai=> cap nhap so luong
    else {
      product.count += item.count;
    }
  }
  setDataToLocalStorage(cart);
//   cap nhap lai so luong tren giao dien
updateTotalCart()
};
const updateTotalCart =()=>{
    let cart = getDataFromLocalStorage();
    document.querySelector('.cart-count').innerText = cart.length
}
updateTotalCart()
