function maxElement(array) {
  let max = [];

  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

console.log(maxElement([1, 4, 2, 6, 9, 3]));

function minElement(array) {
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
}
console.log(minElement([2, 4, 66, 3, 1]));

function checkEvenArrAsc(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i]=arr[i]%2
  }

  console.log(arr);
}

checkEvenArrAsc([2, 4, 9, 7]);
function repeat1(str) {
  return str.repeat(10);
}
console.log(repeat1("a"));

function repeat2(str) {
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += `${str}-`;
  }
  return result.slice(0, result.length - 1);
}
console.log(repeat2("a"));
