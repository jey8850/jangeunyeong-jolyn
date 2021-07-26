$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true, // 자동 슬라이드 
        autoControls: false, // 시작, 정지버튼 노출 여부 
        controls: false, // prev/next 버튼 노출 여부 
        pager: true //불릿버튼
    });
    /*
    var windowWidth = $(window).width(),
    windowHeight = $(window).height(),
    adjHeight = windowHeight;
    $('.mainimg').css({
        'width': windowHeight + 'px',
        'height': adjHeight + 'px'
    });*/
});
