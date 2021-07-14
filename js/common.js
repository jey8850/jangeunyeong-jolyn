$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true, // 자동 슬라이드 
        autoControls: false, // 시작, 정지버튼 노출 여부 
        controls: false, // prev/next 버튼 노출 여부 
        pager: false, //불릿버튼
    }); 
});


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

