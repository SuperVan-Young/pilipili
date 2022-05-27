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
