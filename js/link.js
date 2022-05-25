// 链接的动画效果
// 直接使用pili-link类，就能添加这一部分动效
$(".pili-link").mouseover(function () {
  $(this).css("transition", "color 0.3s");
  $(this).attr("backupColor", $(this).css("color"));
  $(this).css("color", "#30c2dc");
});

$(".pili-link").mouseleave(function () {
  $(this).css("color", $(this).attr("backupColor"));
});
