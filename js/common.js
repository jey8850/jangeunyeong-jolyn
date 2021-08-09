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
            $(".logo").css('margin-left','-50px');
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
            $(".logo").css('margin-left','42px');
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

