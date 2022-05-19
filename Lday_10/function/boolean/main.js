// khai bao Boolean
let a = true
let b = false 


console.log(a)
console.log(b)
console.log(!a)
console.log(!b)

// ham boolean 
// truthy value  
console.log(Boolean(10));
console.log(Boolean(10>5))
// falsy value 
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(""))
console.log(Boolean(NaN))
console.log(Boolean(0))
console.log(Boolean(false))

// 1 so toan tu : ! || && 
console.log("toan tu dieu kien")
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)


// cau lenh if :neu ... thi 
let hour = 6 ;
if(hour < 10 ){
    console.log("good morning!");
}

// vi du 2
let troidep = false 
let cotien = true 
if (troidep && cotien){
    console.log("di choi")
}
// vi du 3 
let tienmat = false 
let chuyenkhoan = true 
if(tienmat || chuyenkhoan){
    console.log("mua dc hang")
}
// cau lenh if else 
// neu troi dep thi di choi,nguoc lai thi di ngu
if(troidep == true ){
    console.log("di choi")

} else{
    console.log("di ngu")
}


// neu co 30tr tro len thi mua ip 13 promax ,nguoc lai thi mua ss 21
let money = 50 ;
if(money >=30){
    console.log("mua 13promax")
}
else {
    console.log("mua s21")
}
// cua lenh if else-if else 
// neu co 30tr tro len thi mua ip 13 promax
// neu co 20 -> 30tr mua s21
// neu 15-> 20 mua oppo
// con 15 tr do xuong mua xiaomi
money = 14 ;
if(money >=30){
    console.log("mua ip");
} else if (money >=20 && money < 30){
    console.log("mua ss");
}else if (money >=15 && money <20){
    console.log("mua oppo");
} else {
    console.log("mua xiaomi");
}

// if else long` nhau 
// vd kiem tra 1 so la so nguyen duong,nguyen am,hay la so 0
// neu so do la so nguyen duong,kiem tra tiep la so chan hay so le
 let number = 10 ;
 if(number > 0){
     console.log("so nguyen duong");

     if (number % 2 == 0){ 
         console.log("so chan");}
         else {
            console.log("so le");
         }
     
 } else if(number ==0 ){
     console.log("so 0")

 }else {
     console.log("so nguyen am")
 }
//  toan tu 3 ngoi
// let hour = 6 ;
// if(hour < 10 ){
//     console.log("good morning!");
// }
if(hour < 12 ){
        console.log("good morning!")}
else {
    console.log("good afternoon")
}    

hour < 12 ? console.log("goodmorning") : console.log("good afternoon")        