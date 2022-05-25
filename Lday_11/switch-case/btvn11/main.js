// bt1
function b1(){
   let a = " "
   for( let i=0;i<=9;i++)
   {
      a=a+"a"
   }
   console.log(a)
   

}
b1()
// bt2
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


// bt4 
// Tổng giá trị các số chia hết cho 5 trong khoảng 0-100
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
// bt6 
function b6(a,b){
   let b6=0
  if(a<b){
   for(let i=a+1;i<=b-1;i++)
 
      {
               b6+=i
                    
      }
     
      console.log(b6)
    }
    else if(a>b){
        for(let i=a-1;i>=b+1;i--)
 
      {
               b6+=i
                    
      }
     
      console.log(b6) 
    }
  
   }

   b6(2,9)
   b6(9,2)
//    bt7 

    function kiemtrasonguyento(n)
    {
        
        let now = true;
    
        if (n < 2){
            now = false;
        }
        else{
            
            for (let i = 2; i < n-1; i++)
            {
                if (n % i == 0){
                    now = false;
                    break;
                }
            }
        }
     
       
        if (now == true){
            console.log(n + " là số nguyên tố ");
        }
        else{
            console.log(n + " không phải là số nguyên tố ");
        }
    }  
      kiemtrasonguyento(10)
      kiemtrasonguyento(3)



                                                               
            
             
           
          
        

        