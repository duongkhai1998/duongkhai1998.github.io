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


    function shuffle(arr){
         arr = 0.5 - Math.random()
         
         return arr.sort()
    }
console.log(shuffle([1,4,2,5,6,7]))
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

    