// map 
function chiamang(arr){
    let num = []
    for ( let it = 0;i<arr.length;i++){
        num.push(arr[i]%2);
    }
    return num;
}


function modulo2_01(arr){
    let result = arr.map(ele=>ele%2);
    return result
}
console.log([2,3,5,6,1])


// fillter 
function getElementGreater(arr, num) {
    let newarr = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
        newarr.push(arr[i]);
        
      }
      
    }
    return newarr;
  }
  console.log(getElementGreater([1, 3, 4, 2, 5], 2));

  const getElementGreater1 =(arr,num)=>{
      let result = arr.filter(ele =>ele>num);
      return result;
    //   return arr.filter(ele =>ele>num)
  }
  console.log(getElementGreater1([1, 3, 4, 2, 5], 3));
  console.log(getElementGreater1([1, 3, 4, 2, 5], 5));

//   find()
// Lặp qua các phần tử của mảng và tìm ra phần tử đầu tiên thỏa mãn điều kiện

// Ví dụ: Tìm giá trị của phần tử đầu tiên lớn hơn 5

function getNumberGreater5(arr) {
    return arr.find((e) => e > 5);
}

console.log(getNumberGreater5([1, 2, 3, 4, 5, 6, 7]));

// findIndex()
// Giống như find(), nhưng trả về chỉ số của phần tử thỏa mãn điều kiện

// Ví dụ: Tìm chỉ số của phần tử đầu tiên lớn hơn 5

function getIndexOfNumberGreater5(arr) {
    return arr.findIndex((e) => e > 5);
}

console.log(getIndexOfNumberGreater5([1, 2, 3, 4, 5, 6, 7]));

// some()
// Lặp qua các phần tử của mảng để kiểm tra điều kiện

// Nếu có 1 phần tử thỏa mãn điều kiện => true

// Nếu không có phần tử nào thỏa mãn điều kiện => false

// Kiểm tra xem có giá trị nào trong mảng có lớn hơn 1 không?

function getNumberGreater1(arr) {
    return arr.some((e) => e > 1);
}

console.log(getNumberGreater1([1, -2, -3, -4])); // false
console.log(getNumberGreater1([1, 2, -3, -4]));

// every()
// Lặp qua các phần tử của mảng để kiểm tra điều kiện

// Nếu có 1 phần tử không thỏa mãn điều kiện => false

// Nếu tất cả phần tử thỏa mãn điều kiện => true

// Kiểm tra xem tất cả giá trị trong mảng có lớn hơn 10 không?

function getNumberGreater10(arr) {
    return arr.every((e) => e > 10);
}
console.log(getNumberGreater10([11, 12, 13, 14])); // true
console.log(getNumberGreater10([11, 12, 13, 5])); // false
