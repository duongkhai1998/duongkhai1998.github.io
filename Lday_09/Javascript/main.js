console.log("main.js");
// khai bao bien
let name;
console.log(name);
name="khai duong";
console.log(name);
// vừa khai báo biến vừa khởi tạo giá trị cho biến
let email = "duongkhai8798@gmail.com" ;
let number = 8 ;
let isStatus = true ;

// kiểu dữ liệu nguyên thủy(primative type)
// undefined,string,number,boolean,...

// khai báo hằng số
const PI = 3.14;
console.log(PI)

email = "kd@gmail.com"
console.log(email)

// kiểm tra kiểu dữ liệu của 1 biến
console.log(typeof email);
console.log(typeof number);
console.log(typeof isStatus);

// chuối
let message = "Xin chào các bạn, mình tên là \"Bùi Hiên\". Mình sinh năm 1997";
console.log(message);   

// cộng chuối 
let firstName = "Khai";
let lastName = "Duong";
let fullName = firstName + " " + lastName ;
console.log(fullName);

// template String
let address = "ha noi";
let age = "24";
// có sử dụng
console.log(`xin chao cac ban minh ten la ${fullName}.mình sinh năm ${2022 - age },quê quán ở ${address}`)

// không sử dụng
console.log("xin chao cac ban ,minh ten la " + fullName + " .minh sinh nam" + (2022 - age) + ", que quan o" + address ) ;

// math object
console.log(Math.PI);
 console.log(""+1+0)
 console.log(""-1+0)
 console.log(true + false)
 console.log(6/"3")
 console.log("2" * "3")
 console.log(4+5+"px")
console.log("$"+4+5)
 console.log("4"-2)
 console.log("4px" - 2)
 console.log(7/0)
 console.log("-9"+5)
 console.log("-9"-5)
 console.log(null+1)
 console.log(undefined + 1 )
 console.log(typeof(7) + 1 )
 console.log(typeof "9" + 5)


