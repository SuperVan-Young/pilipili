function getDate() {
    var date = new Date();
    var month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    var dates = date.getDate();
    dates = dates < 10 ? '0' + dates : dates;

    var hour = date.getHours();
    hour = hour < 10 ? '0' + hour : hour;
    var min = date.getMinutes();
    min = min < 10 ? '0' + min : min;
    var sec = date.getSeconds();
    sec = sec < 10 ? '0' + sec : sec;
    return (month + '-' + dates + ' ' + hour + ":" + min);
}

function toTime(num) {
    num = parseInt(num);

    var min = parseInt(num / 60);
    var sec = parseInt(num % 60);
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
    return (min + ":" + sec);
}

function toNumtime(time) {
    var p = time.indexOf(":");
    var min = parseInt(time.substring(0, p));
    var sec = parseInt(time.substring(p + 1, time.length));
    return min * 60 + sec;
}


var if_danmu = 1;

setInterval(function () {
    var array = $(".danmaku-list-div ul li").toArray().slice(1);
    var video = $("#bilibili-viedo_html5_api")[0];
    if(if_danmu == 0)
        return;
    if(video.paused)
        return;
    array.forEach(e => {
        var numTime = toNumtime(e.children[0].innerHTML);
        var val = e.children[1].innerHTML;

        if (numTime < video.currentTime && numTime >= (video.currentTime - 0.5)) {
            var info = $('<span></span>');
            info.text(val);
            var topp = $(".bilibili-player-danmu")[0].clientHeight * Math.random() * 0.9;
            info.css({
                right: "0px",
                top: topp + "px",
                color: "white",
            });

            info.addClass("text");

            $(".bilibili-player-danmu").append(info);
            info.animate({
                left: 0
            }, 3000, 'linear', function () {
                //动画完成后就删除
                $(this).remove();
            });

        }
    });

}, 500);

$('.danmu_button').click(function(){
    var video = $("#bilibili-viedo_html5_api")[0];
    var val = $('.danmu_input').val();
    $('.danmu_input').val('');

    if(val == "")
        return;

    var li = $("<li></li>");
    var str =  $(".danmaku-list-div ul li")[0].innerHTML;

    var s1 = '<span class="d-time">';
    var s2 = '</span>';
    var p1 = str.indexOf(s1);
    var p2 = str.indexOf(s2, p1);
    str = str.substring(0, p1) + s1 + toTime(video.currentTime + 1) + str.substring(p2, str.length);

    var s1 = '<span class="d-content">';
    var s2 = '</span>';
    var p1 = str.indexOf(s1);
    var p2 = str.indexOf(s2, p1);
    str = str.substring(0, p1) + s1 + val + str.substring(p2, str.length);

    var s1 = '<span class="d-sendtime">';
    var s2 = '</span>';
    var p1 = str.indexOf(s1);
    var p2 = str.indexOf(s2, p1);
    str = str.substring(0, p1) + s1 + getDate() + str.substring(p2, str.length);
    
    li.addClass("clearfix");
    li[0].innerHTML = str;

    $(".danmaku-list-div ul").append(li);

});


document.getElementById("danmu_switch_button").onclick = function () {
    if (if_danmu == 0) {
        if_danmu = 1;
        document.getElementById("danmu_switch_button").setAttribute('src', './imgs/danmu_opened.png');
        $(".text").css({
            display: "inline-block",
        });
    }
    else {
        if_danmu = 0;
        document.getElementById("danmu_switch_button").setAttribute('src', './imgs/danmu_closed.png');
        $(".text").css({
            display: "none",
        });
    }
}
