$('#heading').css({
    "color":"red",
    "text-transform":"uppercase"
})
$('.para').css({
    "color":"blue",
    "font-size": '20px'

})
$('.para-3').after(`<a href="https://www.facebook.com/">facebook</a>`
)

$('#title').html("Đây là thẻ tiêu đề")
$('.description').addClass("text-bold")
$('.para-3').replaceWith("<button>Click me</button>")
$('.para-2').after().clone()
$('.para-1').remove()
