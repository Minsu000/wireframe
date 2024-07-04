$(document).ready(function(){
//     $(".navi > li").mouseover(function()
//     {
//         $(".submenu").stop().slideDown(500)
//     }
// ).mouseout(function(){
//     $(".submenu").stop().slideUp(500)
// }
    
// )
$(".navi > li").mouseover(function(){

    $(this).find(".submenu").stop.slideDown(500)
})
$(".navi > li").mouseover(function(){

    $(this).find(".submenu").stop.slideUp(500)
});
setInterval(function(){
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginleft : -1200 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginleft : -2400 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginleft : 0 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginleft : 0 });
});

    // tapmenu
    $(function(){
        $(".tabmenu > li >a").click(function(){
            // console.log(this);
            $(this).parent().addClass("active").siblings().removeClass("active")
        })
    })
})