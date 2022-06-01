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
 // bt3
 function isPalindrome(str) {
     for (let i = 0; i < str.length / 2; i++) {
         if (str[i] != str[str.length - i - 1]) {
             return false;
         }
     }
     return true;
 }
  
       function checkData(stringS){
     let  stringSFormat = stringS.toLowerCase().replace(/\s/,'')
     return  [stringSFormat].join('')
       }
 console.log(checkData('KHAI duong van'))
 
 function kiemTraChuoi(str){
    
    str = str.toLowerCase().replaceAll(" ","")
   
    return str == str.split('').reverse().join('')
  }
 console.log(kiemTraChuoi('race    cAr        '))
 console.log(kiemTraChuoi('tech mater'))
//  bt5

const toSnakeCase = str =>
  str && str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');

console.log(toSnakeCase('camelCase'));
console.log(toSnakeCase('some text'));
// bt4 
function Sapxep(numBer){
    let num = numBer.toString()
}

console.log(toSnakeCase('some-mixed_string With spaces_underscores-and-hyphens'));
console.log(toSnakeCase('AllThe-small Things'));
console.log(toSnakeCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'));
function convertSnakecase(key) {
  
   key = key.toLowerCase().replaceAll(" ","_")
    return key 

}
 
 console.log(convertSnakecase('HELLO world'));
 console.log(convertSnakecase('XIN Chao CAC BAN'));
 
