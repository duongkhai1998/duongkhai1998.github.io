function repeatString(b){
    for(let i = 1;i <=10;i ++  ){
        b = b + "b" + "-"
    }
}
console.log (repeatString("khai"))
function stringFill(x, n) {
 let  s = '';
    for (let i =0;i<n;i++) {
       
    }
    return s;
}
console.log(stringFill('khai',3))
// bt4
let chiahet5 = 0
for(let i = 1;i <=100;i++){
    if( i%5==0 ){
        chiahet5 += i
    }
}
console.log('tong cac so chia het cho 5 ='+ chiahet5 )
// bt5
function thetichhinhcau(a){
    let result = 4/3 * Math.PI * (Math.pow(a,3))
    return result
}
console.log(thetichhinhcau(5)+"cm3")
// bt7
        function kiemtrasonguyen( n){
            //check = 1 => la so nguyen
            //check = 0 => ko phai so nguyen
        
            let check = 1;
            if (Math.ceil(n) != Math.floor(n)) check = 0;
            return check;
        }
        console.log(kiemtrasonguyen(9.4))
        console.log(kiemtrasonguyen(7))
// bt3
function stringFill(x, n) {
   
    let  s = '';
       for (let i=1;i<=n;i++) {
          s += x
          
       }
       return s;
   }
   console.log(stringFill('khai',4))
   function b2(){
    let a="a-"
    for(let i=0;i<=9;i++)
    {
       if(i<9){
          a=a+"a-"
       
       }else if(i=9){
          a=a+"a"
       }
    }
    console.log(a)
 }
 b2()
                




 function tinhtong(a){
    let sum1=0
   
    for(let i=0;i<=a;i++)
  
       {
          
             sum1+=i
             
          }
          return sum1  
       }
console.log(tinhtong(7))
 
    

