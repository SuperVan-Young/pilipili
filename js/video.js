// 视频预览的动态效果
$(".video-card-list-item-preview").mouseover(function() {
    $(this).children(".video-card-list-item-preview-mask").fadeOut(300);
    var video = $(this).children("video")[0];
    video.currentTime = 0;
    video.play();
    $(this).children("video").fadeIn(300);
});

$(".video-card-list-item-preview").mouseleave(function() {
    $(this).children(".video-card-list-item-preview-mask").fadeIn(300);
    var video = $(this).children("video")[0];
    video.pause();
    $(this).children("video").fadeOut(300);
});
