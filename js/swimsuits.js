$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true, // 자동 슬라이드 
        autoControls: false, // 시작, 정지버튼 노출 여부 
        controls: false, // prev/next 버튼 노출 여부 
        pager: false, //불릿버튼
    }); 

    $(".topmore").click(function(){
        $(".product").hide();    
        $(".tops").show();
    });

    $(".topfixed").click(function(){
        $(".product").hide();    
        $(".fixed").show();
    })

});

