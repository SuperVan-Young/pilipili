$(".search-history").hide();
$(".search-form").click(function(){
    $(".search-history").show();
});

$(":not(.search-bar)").click(function(){
    $(".search-history").hide();
});