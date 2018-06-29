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

    $(".nav1").hover(function () {
        $(".navBox").css("display", "block");
    }, function () {
        $(".navBox").css("display", "none");
    });
});