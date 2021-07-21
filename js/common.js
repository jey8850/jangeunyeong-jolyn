$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true, // 자동 슬라이드 
        autoControls: false, // 시작, 정지버튼 노출 여부 
        controls: false, // prev/next 버튼 노출 여부 
        pager: true, //불릿버튼
    }); 
});


$(".store").mouseenter(function(){
    $(".community_sub").hide();
    $(".store_sub").show();
});

$(".store_sub").mouseleave(function(){
    $(".store_sub").hide();
});

$(".community").mouseenter(function(){
    $(".store_sub").hide();
    $(".community_sub").show();
});

$(".community_sub").mouseleave(function(){
    $(".community_sub").hide();
});

$(".brand").mouseenter(function(){
    $(".store_sub").hide();
    $(".community_sub").hide();
});

$(".newitem").mouseenter(function(){
    $(".store_sub").hide();
    $(".community_sub").hide();
});


$(".trigger").on({ 
    "click" : function() {
        // 햄버거 메뉴 버튼이 보일때 (햄버거 메뉴가 visible 상태인가?로 판단)
        if ($(".hamburger").is(":visible")) {
            /* 모바일 닫기 버튼 show */
            $(".hamburger").hide();
            $(".close").show();
            $(".menu").show();
            $(".lnb").hide();
            $(".store").click(function(){
                $(".mobile_store").toggle();
            });
            $(".community").click(function(){
                $(".mobile_community").toggle();
            });

        } else {  // 닫기 메뉴 버튼이 보일때
            /* 모바일 햄버거 버튼 show */
            $(".hamburger").show();
            $(".close").hide();
            $(".menu").hide();
            $(".lnb").hide();
        }
    }
});

$(window).resize(function() {
    var width = $(window).width();
    if(width > 767) {
        $(".mobile_store").hide();
        $(".mobile_community").hide();
        }
        location.reload();
});

