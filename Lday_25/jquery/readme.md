| tính năng | javascript thuần | jquery | 
| --- | --- | --- |
|truy cập|  document.getElementById ,  document.getElementsByTagName , document.getElementsByClassName , document.querySelector , document.querySelectorAll | $(selector) |
| lấy ra nội dung |  innerHTML , innerTEXT , textContent , value | html() , text() , val() | 
| CSS | element.style.property | \$(selector).css(property,value) , $(selector).css({property1:value1,property2:value2)} |
|thêm phần tử DOM | appenchild , prepend ,insertBefore , insertAdjacent | append , prepend , after , before 
| Xóa | removeChild | remove(),empty() |
| Thay thế | replaceChild | replaceWith() |
| Copy | cloneNode | clone() |
|classlist | add,remove,toggle,contains | addClass , removeClass , hasClass ,toggleClass|
|vòng lặp| for,forEach| each(index,element)|
|lấy theo chỉ số| node[0] | \$(selector)[1], $(selector).eq(1)
|