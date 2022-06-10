// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
const id = document.querySelector("#text");
console.log(id);
id.style.color = "#777";
id.style.fontSize = "2rem";
id.innerHTML =
  "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";

// bt2
// Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
const li = document.querySelectorAll(".ul1 li");
console.log(li);
li.forEach((ele) => {
  ele.innerHTML = "hello";
  ele.style.color = "blue";
});

// bt3 Sử dụng javascript để thực hiện những công việc sau

const list = document.querySelectorAll("#list li");
console.log(list);
// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const li8 = document.createElement("li");
li8.innerHTML = "item 8";

const li9 = document.createElement("li");
li9.innerHTML = "item 9";

const li10 = document.createElement("li");
li10.innerHTML = "item 10";
console.log(li8);
console.log(li9);
console.log(li10);

list[6].appendChild(li8);
li8.appendChild(li9);
li9.appendChild(li10);
// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
list[0].style.color = "red";
// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
list[2].style.backgroundColor = "green";
// Remove thẻ <li> 4
// list[3].parentNode.removeChild(list[3])

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const newLi = document.createElement("li");
newLi.innerHTML = "THAY THE";
console.log(newLi);
list[3].parentNode.replaceChild(newLi, list[3]);
