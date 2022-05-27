// bt1
function checkStringExist(str,substr){
   
    return  str.includes(substr)
 }
 console.log(checkStringExist('khaiduong','khai'))
 console.log(checkStringExist('khaiduong','KHAI'))
 // bt2
 function rutnhanchuoi(str){
     if(str.length <= 8){
         return str 
     }else if (str.length >8){
         return str.substring(0,8) + '...'
     }
 }
 console.log(rutnhanchuoi('khaiduon'))
 console.log(rutnhanchuoi('khaiduonng1998'))
//  bt3
function checkData(stringS){
    let  stringSFormat = stringS.toLowerCase().replace(/\s/g,'')
    return  [stringSFormat].join('')
      }
console.log(checkData('KHAI duong van'))
// bt5
function convertSnakecase(key) {
    let result = key.replace( /([A-Z][a-z])/g, " $1" );
    return result.split(' ').join('_').toLowerCase();
 }
 
 console.log(convertSnakecase('HELLO world'));
 console.log(convertSnakecase('XIN Chao CAC BAN'));