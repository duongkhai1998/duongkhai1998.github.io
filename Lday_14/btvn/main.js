// bt1
function sortStudents(arr){
    return arr.sort().reverse()
}
console.log(sortStudents(['huy','tuan','khai','nhi']))
// bt2

 shuffleArray = [1,3,5,6,2,1]
 shuffleArray.sort(function() {
    return 0.5 - Math.random();});
    console.log(shuffleArray);

const shuffle =(arr)=>{
  return arr.sort(()=> 0.5 - Math.random())
}
console.log(shuffle([1,3,4,5,6,2]))


// bt3
function symmetricDifference(arr,brr) {
    var newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (brr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
      
    }
    for (let i = 0; i < brr.length; i++) {
        if (arr.indexOf(brr[i]) === -1) {
          newArr.push(brr[i]) 
          
        }
   
  }
  return newArr
}
  console.log(symmetricDifference([1, 2, 3], [1, 2, 4]))
  // Bt4 
  function union(arr1= [],arr2 =[]){
let newArr = []
for (let i = 0; i < arr1.length; i++) {
  if(newArr.indexOf(arr1[i]) == -1){
    newArr.push[arr1[i]]
  }
}
  for (let i = 0; i < arr2.length; i++) {
    if(newArr.indexOf(arr2[i]) == -1){
      newArr.push[arr2[i]]
    }
}
return newArr
 }
  console.log(union(([1, 2, 3], [1, 2, 4])))

    