$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true, // 자동 슬라이드 
        autoControls: false, // 시작, 정지버튼 노출 여부 
        controls: false, // prev/next 버튼 노출 여부 
        pager: false, //불릿버튼
    }); 
});

/*
$(".store").hover(
    function(){
        $(".store_sub").css({"display":"block"});
    },
    function(){
        $(".store_sub").css({"display":"none"});
    }
);

$(".community").hover(
    function(){
        $(".community_sub").css({"display":"block"});
    },
    function(){
        $(".community_sub").css({"display":"none"});
    }
);
*/

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



