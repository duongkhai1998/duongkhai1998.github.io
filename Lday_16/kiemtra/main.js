// bt1
// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.

// Hãy cẩn thận trường hợp trong mảng có nhiều số lớn nhất

// // Ví dụ:
// max2Numbers([2, 1, 3, 4]) => 3
// max2Numbers([2, 1, 4, 3, 4]) => 3

function max2Numbers(arr) {

  arr.sort(function (a, b) {
    return a - b;
  });
  
  
    console.log("so lon thu 2= ", arr[arr.length - 2]);
  
}
max2Numbers([1, 2, 3, 5, 6]);
// Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó
function randomNumbers(arr) {
  // khai bao mang moi la 1 mang rong
  let newArr = [];
  // math object chon ra 1 phan tu ngau nhien trong mang
  newArr = Math.floor(Math.random() * arr.length);
  return newArr;
}
console.log(randomNumbers([1, 2, 4, 5, 7]));

// Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó
function similarity(arr, brr) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < brr.length; j++) {
      // neu phan tu arr[i]=brr[j] -->push vao mang newArr
      if (arr[i] == brr[j]) {
        newArr.push(arr[i]);
      }
    }
  }

  return newArr;
}
console.log(similarity([1, 2, 3], [1, 2, 4, 3]));

//   Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

// Ví dụ:
// getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']) => ['aba', 'vcd'].

function findLongestWord(str) {
  // gan chuoi dai nhat la 1 mang  rong
  let maxLength = [];
  for (let i = 0; i < str.length; i++) {
    // neu str[i] > maxlength -->str[i] la chuoi dai nhat --> push vao maxlength
    if (str[i].length > maxLength) {
      maxLength.push(str[i]);
    }
    return maxLength;
  }
}

console.log(findLongestWord(["khaii", "tuan", "tu"]));


// bt6 Bài 6 (2 điểm). Cho mảng users như sau:

users = [
  {
    name: "Bùi Công Sơn",
    age: 30,
    isStatus: true,
  },
  {
    name: "Nguyễn Thu Hằng",
    age: 27,
    isStatus: false,
  },
  {
    name: "Phạm Văn Dũng",
    age: 20,
    isStatus: false,
  },
];

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
const sortBy = (arr) => {
  return arr.filter((user) => user.isStatus == true && user.age > 25);
};
console.log(sortBy(users));

const sortbyAge = (arr) => {
  return arr.sort((a, b) => a.age - b.age);
};
console.log(sortbyAge(users));
//   bt7
function getCountElement(arr) {
  object = {}
  for (let element in arr) {
      let key = arr[element];
      if (object[key] === undefined) {
          object[key] = 1;
      } else {
          object[key] = object[key] + 1;
      }
  }
  return object;
}
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]))