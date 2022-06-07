// khai bao Object 
let  obj = {}

// object co gia tri 
// property : dac diem ,tinh chat cua doi tuong
// method : hanh vi, hanh dong 
let student ={
    id  : 1,
    name : 'nguyen van a',
    email : 'a@gmail.com',
    status : false,
adress :{
    city : 'ha Noi',
    district : 'thanh xuan'

},
goToschool :function() {
    console.log('di hoc')
// goToschool(){
//     console.log('di hoc')
// }    
},
showInfo : function(){
    console.log(`Name: ${student.name}, email: ${student.email}, point : ${student.point}`)
}
// showInfo : function(){
//     console.log(`Name: ${this.name}, email: ${this.email}, point : ${this.point}`)
// }

}

// lay ra thong tin 
console.log(student.email)
console.log(student.adress.city)

// set lai thong tin 
student.email = 'nguyen@gmail.com'
student.adress.district = 'cau giay'
console.log(student.email)
console.log(student.adress.district)

// them thuoc tinh 
student.point = 9
console.log(student.point)

// xoa thuoc tinh 
delete student.status

// goi phuong thuc
student.goToschool()
student.showInfo()


// phuong thuc
// 1.lay danh sach key
console.log(Object.keys(student))

let keys = Object.keys(student)
keys.forEach(key =>{
     console.log(student[key])
 })

//  su dung for ...... in
for (const key in student ){
    console.log(student[key])
}

//  2. lay danh sach value =>tra ve mang
console.log(Object.values(student))
// 3.kiem tra 1 key co ton tai trong object hay ko=> true/false
console.log(student.hasOwnProperty("email"));
console.log(student.hasOwnProperty("age"));


