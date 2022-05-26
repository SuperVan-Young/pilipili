// 链接的动画效果
// 直接使用pili-link类，就能添加这一部分动效
$(".pili-link").mouseenter(function () {
  $(this).css("transition", "color 0.3s");
  if ($(this).attr("backupColor") == undefined)
    $(this).attr("backupColor", $(this).css("color"));
  $(this).css("color", "#30c2dc");
  $(this).css("cursor", "pointer");
});

$(".pili-link").mouseleave(function () {
  $(this).css("color", $(this).attr("backupColor"));
});
