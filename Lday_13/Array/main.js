// khai bao mang rong
let arrEmpty = [];

// khai bao mang sau do chen du lieu cho mang
let names = [];
names[0] = "an";
names[1] = "khai";

console.log(names);

//  vua khai bao vua khoi tao gia tri
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// lấy ra giá trị của mảng thông qua chỉ số
console.log(numbers[1]);
console.log(numbers[4]);
console.log(numbers[numbers.length - 1]);

//  set lại giá trị
numbers[0] = 10;
console.log(numbers);

// tao bien moi roi gan gia tri = numbers
let numbersOther = numbers;
console.log(numbersOther);
// thay doi
numbersOther[1] = 20;
console.log(numbers);
console.log(numbersOther);

// ví dụ
let arr = [1, 2, 3];
let arr1 = [1, 2, 3];
let arr2 = arr1;
let arr3 = arr1.sort().reverse();
let text = "1,2,3";

console.log(arr == arr1);
console.log(arr == arr2);
console.log(arr2 == arr3);
console.log(arr == text);
console.log(arr3 == text);



// duyệt mảng
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
    
}
// tinh tong 
let total = 0 
for (let i = 0; i < numbers.length; i++) {
   total += numbers[i]
    
}
console.log(total)
// tinh tong so le
let total1 = 0 
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] %2 ==1){
   total1 += numbers[i]
    }
    
}
console.log(total1)

// lay ra mang so chan
// push them vao cuoi mang
// pop xoa o cuoi mang
// unshift them o dau mang
// shift
// splice



let newArr = []
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i]%2==0){
        newArr.push(numbers[i])
    }
     
 }
 console.log(newArr)


//  thực hành
// kiem tra mang tang dan
function checkarr1(arr){
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]>arr[i+1])
        return true
        
    }
}
console.log(checkarr1([1,4,6]))
// kiem tra mang so chan tang dan
function checkarr2(arr)
{
    for (let i = 0; i < arr.length; i++)
    if(arr[i]%2==1){
        return false
    }
    return checkarr1(arr)
    }

    console.log(checkarr2([2,4,6]))
