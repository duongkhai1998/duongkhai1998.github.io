// dinh nghia function 
function sayHello() {
    console.log("xin chao ");
}
sayHello();
// function 1 tham so  
function sayHelloWithname(name){
    console.log(`xin chao ${name}`);
}
sayHelloWithname("khai");
// function 2 tham so 
function showInfo(name, year) {
    console.log(`xin chao,toi ten la ${name},nam nay toi ${2022-year} tuoi. `);  
}
 showInfo("khai",1998);
 showInfo("duong",1991);



//  function co tra ve ket qua 
//  vi du tinh tong 2 so 
function sum (a, b){
    let result = a + b ;
    console.log(a)
    console.log(b)
    // nhung cau lenh dat sau tu khoa return se ko dc thuc thi 
    return result;
    console.log(a)
    console.log(b)
}

let data = sum(3, 4);
console.log(data);
console.log(sum(10,20))
console.log(sum(data, 9));
  

//  default parameter 
function sum1 (a = 10, b = 20){
    let result = a + b ;
    return result; }
console.log(sum1(4))    



function sayHi(){
    console.log("xin chao")

}


function sayHi3(name){
    console.log(`my name is ${name}`);
}
sayHi3("khai")

function sum2(a,b){
    return(a+b);
}
console.log(sum(4,7))
function pow(a){
    return(Math.pow(a,2))
}
console.log(pow(4))

function calt(year){
    return(Math.ceil(year/100))
}
console.log(`the ki  ${calt(2022)}`)
console.log(`the ki  ${calt(1701)}`)

// bien global : dinh nghia ben ngoai function 
let age = 24 ;
