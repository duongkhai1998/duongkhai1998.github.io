// 1:funcition expression
// function có thể gán cho biến

//  regular function
function sum(a,b){
    return a +b 
}

console.log(sum(1,4))
// anonymous function :function vô danh
const sum1 = function(a,b){
return a + b
}
console.log(sum(1,4))

// 2 higher Oder funcition :function bậc cao
//truyền vào làm tham số cho function khác
//  const filterNumber = function(arr ,func){
    //  let newArr = []
    //  for (let  i= 0; i < array.length; i++) {
        //  if(func(arr[i])){
            //  newArr.push(arr[i])
        //  }
         
    //  }
    //  return newArr;
//  }

//  let data1 = filterNumber([1,2,3,4,5,6],function(ele){
    //  return ele % 2 == 1
//  })
//  console.log(data1)


//  có thể được trả về từ function khác

const sum2 = function (a,b){
    return function(c){
        return a +b +c 
    }
}

let func = sum2(10,20);
console.log(func)


//  let data = func(30)
//  console.log(data)
let data = func((10,20),(30))
console.log(data)



// arrow function
// function sum(a,b){
    // return a +b 
// }
// const sum3 = (a,b) =>{
// return a+b
// }
const sum3 = (a,b) => a +b ;


// forEach
// Khai báo mảng các số
let numbers = [1, 2, 3, 4, 5, 6]
//  In ra các phần tử của mảng

for(let i=0; i<numbers.length;i++){
    console.log(numbers[i])
}

    // value :numbers[i]
    // index : i
    numbers.forEach(function(value,index){
        console.log(`index : ${index}- value: ${value}`);
    })

    numbers.forEach((value,index) =>{
        console.log(`index : ${index}- value: ${value}`);
    })

    // tính tổng
    let total = 0
    numbers.forEach((value) =>{
        total +=value
    })
    console.log(total)



    // for............of
    // In ra các giá trị của mảng
for (const value of numbers) {
    console.log(value);
}








