const doOnce = function () {
    function yes() {
        if ($(this).attr("class") == "yes") {
            var span = $(this).next()[0];
            span.innerHTML = Number(span.innerHTML) + 1;
            $(this).removeClass("yes").addClass("yes-click");

            $(this).next().next().removeClass("no-click").addClass("no");
        }
        else if ($(this).attr("class") == "yes-click") {
            var span = $(this).next()[0];
            span.innerHTML = Number(span.innerHTML) - 1;
            $(this).removeClass("yes-click").addClass("yes");
        }
    }
    function no() {
        if ($(this).attr("class") == "no") {
            $(this).removeClass("no").addClass("no-click");

            if ($(this).prev().prev().attr("class") == "yes-click") {
                $(this).prev().prev().removeClass("yes-click").addClass("yes");
                var span = $(this).prev()[0];
                span.innerHTML = Number(span.innerHTML) - 1;
            }

        }
        else if ($(this).attr("class") == "no-click") {
            $(this).removeClass("no-click").addClass("no");
        }
    }
    $(".yes").click(yes);
    $(".yes-click").click(yes);
    $(".no").click(no);
    $(".no-click").click(no);
};
$(".comment-submit").click(function () {
    var ans = $(".txt").val();
    $(".txt").val("");
    if(ans == "")
        return;

    var str = $(".one-comment")[0].outerHTML;

    var s1 = '<div class="other-text">';
    var s2 = '</div>';
    var p1 = str.indexOf(s1);
    var p2 = str.indexOf(s2, p1);
    str = str.substring(0, p1) + s1 + ans + str.substring(p2, str.length);

    var s1 = '<span class="comment-time">';
    var s2 = '</span>';
    var p1 = str.indexOf(s1);
    var p2 = str.indexOf(s2, p1);
    str = str.substring(0, p1) + s1 + "0分钟前" + str.substring(p2, str.length);

    var s1 = '<span class="yes-num">';
    var s2 = '</span>';
    var p1 = str.indexOf(s1);
    var p2 = str.indexOf(s2, p1);
    str = str.substring(0, p1) + s1 + "0" + str.substring(p2, str.length);

    var s1 = 'other.webp';
    var s2 = 'user.webp';
    var p1 = str.indexOf(s1);
    if (p1 != -1)
        str = str.substring(0, p1) + s2 + str.substring(p1 + s1.length, str.length);

    str = str.replace(/yes-click/, "yes");
    str = str.replace(/no-click/, "no");

    $(".comment-list-wrap")[0].innerHTML = str + $(".comment-list-wrap")[0].innerHTML;
    doOnce();
});

function hot(a, b) {
    var str1 = a.innerHTML;
    var str2 = b.innerHTML;

    var s1 = '<span class="yes-num">';
    var s2 = '</span>';

    var p1 = str1.indexOf(s1);
    var p2 = str1.indexOf(s2, p1);
    var num1 = parseInt(str1.substring(p1 + s1.length, p2));
    p1 = str2.indexOf(s1);
    p2 = str2.indexOf(s2, p1);
    var num2 = parseInt(str2.substring(p1 + s1.length, p2));

    return num2 - num1;
}

function time(a, b) {
    var str1 = a.innerHTML;
    var str2 = b.innerHTML;

    var s1 = '<span class="comment-time">';
    var s2 = '</span>';

    var p1 = str1.indexOf(s1);
    var p2 = str1.indexOf(s2, p1);
    var num1 = str1.substring(p1 + s1.length, p2);
    p1 = str2.indexOf(s1);
    p2 = str2.indexOf(s2, p1);
    var num2 = str2.substring(p1 + s1.length, p2);

    if (num1.indexOf("小时") != -1)
        num1 = parseInt(num1) * 3600;
    else if (num1.indexOf("分钟") != -1)
        num1 = parseInt(num1) * 60;
    else
        num1 = parseInt(num1);

    if (num2.indexOf("小时") != -1)
        num2 = parseInt(num2) * 3600;
    else if (num2.indexOf("分钟") != -1)
        num2 = parseInt(num2) * 60;
    else
        num2 = parseInt(num2);

    return num1 - num2;
}

$(".choice").click(function () {


    $(this).addClass("on")
        .siblings().removeClass("on");
    var array;
    if ($(this)[0].innerHTML == "按时间排序")
        array = $(".one-comment").toArray().sort(time);
    else if ($(this)[0].innerHTML == "按热度排序")
        array = $(".one-comment").toArray().sort(hot);

    $(".comment-list-wrap")[0].innerHTML = "";
    array.forEach(element => {
        $(".comment-list-wrap")[0].innerHTML += element.outerHTML;
    });
    doOnce();
});
$(".switch").click(function () {
    $(this).addClass("on")
        .siblings().removeClass("on");

    if ($(this)[0].innerHTML == "相关推荐") {
        $(".my-comment-wrap").hide();
        $(".video-list-wrap").show();
    }
    else {
        $(".video-list-wrap").hide();
        $(".my-comment-wrap").show();
    }
});
$(".choice-on-phone").click(function () {
    var array, i;
    if ((i = $(this)[0].innerHTML.indexOf("按时间")) != -1) {
        $(this)[0].innerHTML = $(this)[0].innerHTML.substring(0, i) + "按热度";
        array = $(".one-comment").toArray().sort(hot);
    }
    else {
        $(this)[0].innerHTML = $(this)[0].innerHTML.substring(0, i) + "按时间";
        array = $(".one-comment").toArray().sort(time);
    }
    $(".comment-list-wrap")[0].innerHTML = "";
    array.forEach(element => {
        $(".comment-list-wrap")[0].innerHTML += element.outerHTML;
    });
    doOnce();
});
window.onresize = function(){
    if(window.innerWidth > 850){
        $(".my-comment-wrap").show();
        $(".video-list-wrap").show();
    }
};
doOnce();