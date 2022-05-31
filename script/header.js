$(".search-history").hide();
$(".search-form").click(function(){
    $(".search-history").show();
});

$(":not(.search-bar)").click(function(){
    $(".search-history").hide();
});
$(".search-bar").click(function(){
    event.stopPropagation()
    $(".search-history").show();
});
$(document).click(function(){
    $(".search-history").hide();
});

$(".zhibo-hover-div").hide();
$(".header-zhibo").on("mouseenter", function(){
    $(".zhibo-hover-div").stop().animate({height: 'toggle'}, 200);
}).on("mouseleave", function(){
    $(".zhibo-hover-div").stop().animate({height: 'toggle'}, 200);
})

$(".youxi-hover-div").hide();
$(".header-youxi").on("mouseenter", function(){
    $(".youxi-hover-div").stop().animate({height: 'toggle'}, 200);
}).on("mouseleave", function(){
    $(".youxi-hover-div").stop().animate({height: 'toggle'}, 200);
})

$(".manhua-hover-div").hide();
$(".header-manhua").on("mouseenter", function(){
    $(".manhua-hover-div").stop().animate({height: 'toggle'}, 200);
}).on("mouseleave", function(){
    $(".manhua-hover-div").stop().animate({height: 'toggle'}, 200);
})

$(".user-hover-div").hide();
$(".header-user").on("mouseenter", function(){
    // $(".right-header").animate({marginLeft: "0px"});
    $(".user-hover-div").stop().animate({height: 'toggle', top: "80px", left: "-105px"}, 200);
    $(".user-head").stop().animate({width: "82px", marginTop: "60px"}, "fast");
}).on("mouseleave", function(){
    // $(".right-header").animate({marginLeft: "40px"});
    $(".user-hover-div").stop().animate({height: 'toggle', top: "40px", left: "-125px"}, 200);
    $(".user-head").stop().animate({width: "40px", marginTop: "0px"}, "fast");
})

$(".xiaoxi-hover-div").hide();
$(".header-xiaoxi").on("mouseenter", function(){
    $(".xiaoxi-hover-div").stop().animate({height: 'toggle'}, 200);
}).on("mouseleave", function(){
    $(".xiaoxi-hover-div").stop().animate({height: 'toggle'}, 200);
})