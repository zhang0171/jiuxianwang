"use strict";

$(function () {
    $(".headright a").eq(0).hover(function () {
        $(".addHead1").css("display", "block");
    }, function () {
        $(".addHead1").css("display", "none");
    });

    $(".addHead1").hover(function () {
        $(this).css("display", "block");
    }, function () {
        $(this).css("display", "none");
    });

    $(".headright a").eq(5).hover(function () {
        $(".addHead2").css("display", "block");
    }, function () {
        $(".addHead2").css("display", "none");
    });

    $(".headright a").eq(6).hover(function () {
        $(".addHead3").css("display", "block");
    }, function () {
        $(".addHead3").css("display", "none");
    });
    $(".addHead3").hover(function () {
        $(this).css("display", "block");
    }, function () {
        $(this).css("display", "none");
    });

    $(".headright a").eq(7).hover(function () {
        $(".addHead4").css("display", "block");
    }, function () {
        $(".addHead4").css("display", "none");
    });

    $(".addHead4").hover(function () {
        $(this).css("display", "block");
    }, function () {
        $(this).css("display", "none");
    });

    $(".navBox li").eq(0).hover(function () {
        $(this).css("background", "#f1f1f1");
        $(".menu-box").css("display", "block");
    }, function () {
        $(this).css("background", "");
        $(".menu-box").css("display", "none");
    });
    $(".menu-box").hover(function () {
        $(this).css("display", "block");
    }, function () {
        $(this).css("display", "none");
    });

    $(".sB1one").hover(function () {
        $(".ico1").css("background-position", "-20px -163px");
    }, function () {
        $(".ico1").css("background-position", "0px -163px");
    });
    $(".sB1two").hover(function () {
        $(".ico2").css("background-position", "-60px -163px");
    }, function () {
        $(".ico2").css("background-position", "-40px -163px");
    });
    $(".sB1three").hover(function () {
        $(".ico3").css("background-position", "-140px -163px");
    }, function () {
        $(".ico3").css("background-position", "-120px -163px");
    });
    $(".sB1four").hover(function () {
        $(".ico4").css("background-position", "-65px -331px");
    }, function () {
        $(".ico4").css("background-position", "-45px -331px");
    });
    $(".sB1wu").hover(function () {
        $(".ico5").css("background-position", "3px -203px");
    }, function () {
        $(".ico5").css("background-position", "3px -186px");
    });
    $(".sB1six").hover(function () {
        $(".ico6").css("background-position", "-19px -204px");
    }, function () {
        $(".ico6").css("background-position", "-19px -186px");
    });
    $(".sB1seven").hover(function () {
        $(".ico7").css("background-position", "-40px -203px");
    }, function () {
        $(".ico7").css("background-position", "-40px -186px");
    });
    $(".ico7").click(function () {
        $("body,html").animate({ "scrollTop": 0 });
    });
    $(".sB1six").hover(function () {
        $(".ewm").css("display", "block");
    }, function () {
        $(".ewm").css("display", "none");
    });

    // $(".1f").hover(function(){
    //     $(this).stop().animate({width:"60px"},"fast")
    // })


    // tab切换                                    
    function fk1Tab() {
        $(".fk1Tab li").hover(function () {
            var _index = $(this).index();
            // console.log(_index);
            $(".fk1-2 ul").eq(_index).css("display", "block").siblings().css("display", "none");
        });
    }
    fk1Tab();

    setInterval(function () {
        function getDiffDays(date1, date2) {
            var ss = Math.abs(date1 - date2) / 1000;
            //		var days = Math.floor(ss/24/3600);
            var hours = Math.floor(ss / 3600);
            var minutes = Math.floor(ss / 60 % 60);
            var seconds = Math.floor(ss % 60);
            return "<span>剩余:</span><i>" + hours + "</i>小时<i>" + minutes + "</i>分<i>" + seconds + "</i>秒";
        }
        var racetime = document.getElementsByClassName("racetime");
        var data1 = new Date();
        var data2 = new Date("2018/6/01 12:12:12");
        var gete = getDiffDays(data2, data1);
        for (var i = 0; i < racetime.length; i++) {
            racetime[i].innerHTML = gete;
        }
        //		console.log(racetime)
    }, 1000);

    var str = "\n    <a href=\"\">\u5566\u5566\u5566...</a>\n    <a href=\"\">\u5BCC\u5F3A\u6C11\u4E3B\u548C\u8C10</a>\n    <a href=\"\">\u53BB\u6076\u6C14\u6076\u6C14\u6076\u6C14...</a>\n    <a href=\"\">2018\u53D1\u53D1\u53D1..</a>\n    <a href=\"\">\u4E3B\u5907\u597D\u6C99\u53D1</a>\n    <a href=\"\">\u6D77\u4E0A\u5347\u660E\u6708..</a>\n    ";
    var str2 = "\n    <a href=\"\">5\u670813\u65E5\u53E4\u4E95\u8D21\u54C1...</a>\n    <a href=\"\">\u671F\u95F4\u53D1\u8D27\u65F6</a>\n    <a href=\"\">\u5E74\u8D27\u671F\u95F4\u53D1\u8D27\u65F6\u6548...</a>\n    <a href=\"\">2018\u5E74\u9152\u4ED9\u7F51\u6625\u8282..</a>\n    <a href=\"\">\u5E74\u915213\u65E5\u53E4\u4E95\u8D21\u4ED9</a>\n    <a href=\"\">1\u670810\u65E5\u91D1\u516D\u798F\u7279..</a>\n    ";
    $(".fk2top li").eq(1).hover(function () {
        $(".gongaoxinxi").html(str);
    }, function () {
        $(".gongaoxinxi").html(str2);
    });
    //  图片动
    $(".conBot li").hover(function () {
        $(this).find("img").stop().animate({ left: "-100px" }, "1000");
    }, function () {
        $(this).find("img").stop().animate({ left: "0px" }, "1000");
    });
    //                TAB 切换2 
    $(".conTop li").mouseover(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var idx = $(this).index();
        $(".conNav").stop().animate({ 'left': idx * 105 }, 300);
        $(".conBot ul").eq(idx).css("display", "block").siblings().css("display", "none");
    });

    // $.get("http://datainfo.duapp.com/shopdata/getclass.php",function(data){
    //     var str = "";
    //     var data = JSON.parse(data); 
    //     console.log(data);
    //     for(var i = 0; i < data.length; i++){
    //         str += `<li data-id="data[i].classID">
    //                 <a href = "list.html?classID=${data[i].classID}">${data[i].className}</a>
    //                 </li>`
    //     }
    // $(".nav2 ul").html(str);
    // })

    //   $.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:getCookie("username")},function(data){
    //     // data = JSON.parse(data)
    //     var num = 0;
    //     console.log(data)
    //     for(var i=0;i<data.length;i++){
    //         console.log(data[i].number);    
    //         num += Number(data[i].Number);
    //     }
    //     $(".for-gwc").text(num);
    //   })

});
$(function () {
    //                                         gundong
    var i = 0;
    $(".raceright").click(function () {
        i++;
        if (i == 3) {
            i = 0;
        }
        $(".gundong").stop().animate({ 'left': -i * 1198 }, 666);
        $(".ytTopRight span").eq(i).addClass("on").siblings().removeClass("on");
    });
    $(".raceleft").click(function () {
        i--;
        if (i == -1) {
            i++; // i=0; 也可以
        }
        $(".gundong").stop().animate({ 'left': -i * 1198 }, 666);
        $(".ytTopRight span").eq(i).addClass("on").siblings().removeClass("on");
    });
});
//                                                                           轮播图
$(function () {
    var $picList = $(".banner-pic li");
    var $picnum = $(".banner-number li");
    var $banner = $(".banner");
    var $number = $(".banner-number li");
    var timer = null;
    var i = 0;
    $picList.eq(0).show().fadeIn().animate({}, 100).siblings().fadeOut().animate({}, 100);
    show();
    $number.hover(function () {
        clearInterval(timer);
        i = $(this).index();
        move();
    });

    $banner.mouseover(function () {
        clearInterval(timer);
    });

    $banner.mouseout(function () {
        show();
    });
    function move() {

        $picList.eq(i).fadeIn().animate({}, 100).siblings().fadeOut().animate({}, 100);
        $picnum.eq(i).addClass("on").siblings().removeClass("on");
    }
    function show() {
        timer = setInterval(function () {
            i++;
            if (i == $picList.length) {
                i = 0;
            }
            move();
        }, 1000);
    }
});
//                                                       轮播图2
$(function () {
    var $list = $(".big1 li");
    var $smalnum = $(".btnbg1 em");
    var $indexlunbo = $(".lunbo1");
    var timer = null;
    var i = 0;
    show();
    $smalnum.hover(function () {
        clearInterval(timer);
        i = $(this).index() - 1;
        move();
    });
    $indexlunbo.mouseover(function () {
        clearInterval(timer);
        // console.log("aa")
    });
    $indexlunbo.mouseout(function () {
        show();
    });
    function move() {
        i++;
        if (i == $list.length) {
            $(".big1 li").css({ 'left': '0' });
            i = 1;
        }
        $list.stop().animate({ "left": -i * 268 }, 1000, function () {});
        if (i == $list.length - 1) {
            $smalnum.eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $smalnum.eq(i).addClass("on").siblings().removeClass("on");
        }
    }

    function show() {
        timer = setInterval(function () {
            move();
        }, 2000);
    }
});
//                                                       轮播图3
$(function () {
    var $list2 = $(".big2 li");
    var $smalnum2 = $(".btnbg2 em");
    var $indexlunbo2 = $(".lunbo2");
    var timer = null;
    var i = 0;
    show();
    $smalnum2.hover(function () {
        clearInterval(timer);
        i = $(this).index() - 1;
        move();
    });
    $indexlunbo2.mouseover(function () {
        clearInterval(timer);
        // console.log("aa")
    });
    $indexlunbo2.mouseout(function () {
        show();
    });
    function move() {
        i++;
        if (i == $list2.length) {
            $(".big2 li").css({ 'left': '0' });
            i = 1;
        }
        $list2.stop().animate({ "left": -i * 268 }, 1000, function () {});
        if (i == $list2.length - 1) {
            $smalnum2.eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $smalnum2.eq(i).addClass("on").siblings().removeClass("on");
        }
    }

    function show() {
        timer = setInterval(function () {
            move();
        }, 2000);
    }
});
// =============================白酒馆==================================

$(function () {
    var $bigul1 = $(".bigul1 img");
    var $btnbox1 = $(".btnbox1 em");
    var $bannerslier1 = $(".bannerslier1");
    var timer = null;
    var i = 0;
    show();
    $btnbox1.hover(function () {
        clearInterval(timer);
        i = $(this).index() - 1;
        move();
    });
    $bannerslier1.mouseover(function () {
        clearInterval(timer);
        // console.log("aa")
    });
    $bannerslier1.mouseout(function () {
        show();
    });
    function move() {
        i++;
        if (i == 4) {
            $(".bigul1 img").css({ 'left': '0' });
            i = 1;
        }
        $bigul1.stop().animate({ "left": -i * 210 }, 1000, function () {});
        if (i == $bigul1.length - 1) {
            $btnbox1.eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $btnbox1.eq(i).addClass("on").siblings().removeClass("on");
        }
    }
    function show() {
        timer = setInterval(function () {
            move();
        }, 2000);
    }
});