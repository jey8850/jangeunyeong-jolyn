$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true, // 자동 슬라이드 
        autoControls: false, // 시작, 정지버튼 노출 여부 
        controls: false, // prev/next 버튼 노출 여부 
        pager: false, //불릿버튼
    }); 

    $(".topsbtn").click(function(){
        $(".product").hide();    
        $(".tops").show();
        $(".best").hide();
    });

    $(".bottomsbtn").click(function(){
        $(".product").hide();    
        $(".bottoms").show();
        $(".best").hide();
    });

    $(".onebtn").click(function(){
        $(".product").hide();    
        $(".onepiece").show();
        $(".best").hide();
    });


    $(".topmore").click(function(){
        $(".product").hide();    
        $(".tops").show();
        $(".best").hide();
    });
    
    $(".topfixed").click(function(){
        $(".product").hide();    
        $(".fixed").show();
        $(".best").hide();
    })

    $(".toptie").click(function(){
        $(".product").hide();    
        $(".tie").show();
        $(".best").hide();
    })




    
});

