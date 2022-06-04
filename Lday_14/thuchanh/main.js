function checkElementExist(arr, b) {
  return arr.includes(b);
}
console.log(checkElementExist([1, 4, 5, 2, 4], 4));

function getElementGreater(arr, b) {
  let newarr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > b) {
      newarr.push(arr[i]);
      
    }
    
  }
  return newarr;
}
console.log(getElementGreater([1, 3, 4, 2, 5], 2));

function getHexColorRandom(){
    let color = '#' 
    let str = '0123456789ABCDEF'
    for ( let i=1 ; i<=6; i++){
        color +=str[Math.floor(Math.random() * str.length)];
    }
    return color
}
console.log(getHexColorRandom())

function getRgbRandom(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `RGB(${r},${g},${b})`
}
console.log(getRgbRandom())
