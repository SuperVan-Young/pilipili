// 按钮的各种动画效果，比较复杂，统一写成js脚本
$(".area-header-button").mousedown(function () {
  $(this).css("transform", "scale(0.9)");
});

$(".area-header-button").mouseup(function () {
  $(this).css("transform", "scale(1)");
});

$(".area-header-button").mouseleave(function () {
  $(this).css("transform", "scale(1)");
});