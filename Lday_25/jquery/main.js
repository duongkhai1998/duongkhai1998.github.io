$("#heading").html("xin chao cac ban");
// $('#heading').css("color","red")
// $('#heading').css("backgroundColor","black")
$("#heading").css({
  color: "red",
  backgroundColor: "black",
});

$("#heading").click(function () {
  alert("đây là thẻ h1");
});

// sử dụng vòng lặp
$("p").each(function (index, element) {
  $(element).html(`thẻ para ${index + 1} đã đc thay đổi nội dung `);
  $(element).css("color", "blue");
});

// truy cập vào 1 thẻ thông qua chỉ số
$("p").eq(1).html("thẻ này đã được thay đổi nội dung(update)");

// thêm
$('p').last().after("<button>click me</button>")
// xóa
$('.box ul li').first().remove()
// thay thế 
$("p").first().replaceWith(`<input type ="text" placeholder="nhập nội dung">`)
// copy
$('#heading').clone().appendTo("body")

$('ul').last().css({"backgroundColor":"black",
"color":"white"
})
$('button').click(function(){
    $('ul').last().slideToggle()
})

