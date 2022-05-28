// 视频预览的动态效果
$(".video-card-list-item-preview").mouseover(function() {
    $(this).children(".video-card-list-item-preview-mask").fadeOut(300);
    $(this).children(".video-card-list-item-preview-scroll").children().eq(0).fadeIn(300);
    $(this).children(".video-card-list-item-preview-scroll").children().eq(1).fadeIn(300);

    var video = $(this).children("video")[0];
    video.currentTime = 0;
    // video.play();
    $(this).children("video").fadeIn(300);
});

$(".video-card-list-item-preview").mousemove(function (e) {
    var h = $(this).height();
    var w = $(this).width();
    var start_h = $(this).offset().top;
    var start_w = $(this).offset().left;

    var per = (e.pageX - start_w) / w;

    if (per > 1)
        per = 1;
    if (per < 0)
        per = 0;

    var video = $(this).children("video")[0];
    video.currentTime = video.duration * per;

    var scroll = $(this).children(".video-card-list-item-preview-scroll").children();
    scroll.eq(0).css("width", (per * 100.0) + "%");
    scroll.eq(1).css("width", ((1 - per) * 100.0) + "%");
});

$(".video-card-list-item-preview").mouseleave(function() {
    $(this).children(".video-card-list-item-preview-mask").fadeIn(300);
    $(this).children(".video-card-list-item-preview-scroll").children().eq(0).fadeOut(300);
    $(this).children(".video-card-list-item-preview-scroll").children().eq(1).fadeOut(300);

    var video = $(this).children("video")[0];
    video.pause();
    $(this).children("video").fadeOut(300);
});
