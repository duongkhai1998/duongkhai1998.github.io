$('.menu-icon').click(()=>{
    $(".menu ul").css('left','0');
    $('#overlay').css('display',"block")
})
$('#overlay').click(()=>{
    $(".menu ul").css('left','-250px');
    $('#overlay').css('display',"none")
})
$(window).resize(function () { 
    if($(window).innerWidth() > 768) {
    $(".menu ul").css('left','-250px');
    $('#overlay').css('display',"none")}
});