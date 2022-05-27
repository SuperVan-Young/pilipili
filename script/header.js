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
    $(".zhibo-hover-div").animate({height: 'toggle'}, "fast");
}).on("mouseleave", function(){
    $(".zhibo-hover-div").animate({height: 'toggle'}, "fast");
})

$(".youxi-hover-div").hide();
$(".header-youxi").on("mouseenter", function(){
    $(".youxi-hover-div").animate({height: 'toggle'}, "fast");
}).on("mouseleave", function(){
    $(".youxi-hover-div").animate({height: 'toggle'}, "fast");
})

$(".manhua-hover-div").hide();
$(".header-manhua").on("mouseenter", function(){
    $(".manhua-hover-div").animate({height: 'toggle'}, "fast");
}).on("mouseleave", function(){
    $(".manhua-hover-div").animate({height: 'toggle'}, "fast");
})

$(".xiazai-hover-div").hide();
$(".header-xiazai").on("mouseenter", function(){
    $(".xiazai-hover-div").animate({height: 'toggle'}, "fast");
}).on("mouseleave", function(){
    $(".xiazai-hover-div").animate({height: 'toggle'}, "fast");
})

$(".user-hover-div").hide();
$(".header-user").on("mouseenter", function(){
    $(".right-header").animate({marginLeft: "0px"});
    $(".user-hover-div").animate({height: 'toggle', top: "80px", left: "-105px"}, "fast");
    $(".user-head").animate({width: "82px", marginTop: "60px"}, "fast");
}).on("mouseleave", function(){
    $(".right-header").animate({marginLeft: "40px"});
    $(".user-hover-div").animate({height: 'toggle', top: "40px", left: "-125px"}, "fast");
    $(".user-head").animate({width: "40px", marginTop: "0px"}, "fast");
})

