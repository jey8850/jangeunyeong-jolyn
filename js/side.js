$(".top").click(function(){
    if ($(".topmenu li").is(":visible")) {
        $(".top .updown i:nth-child(1)").hide();
        $(".top .updown i:nth-child(2)").show();
    } else {
        $(".top .updown i:nth-child(1)").show();
        $(".top .updown i:nth-child(2)").hide();
    }
    $(".topmenu").slideToggle();
});

$(".bottoms").click(function(){
    if ($(".bottomsmenu li").is(":visible")) {
        $(".bottoms .updown i:nth-child(1)").hide();
        $(".bottoms .updown i:nth-child(2)").show();
    } else {
        $(".bottoms .updown i:nth-child(1)").show();
        $(".bottoms .updown i:nth-child(2)").hide();
    }
    $(".bottomsmenu").slideToggle();
});

$(".onepiece").click(function(){
    if ($(".onepiecemenu li").is(":visible")) {
        $(".onepiece .updown i:nth-child(1)").hide();
        $(".onepiece .updown i:nth-child(2)").show();
    } else {
        $(".onepiece .updown i:nth-child(1)").show();
        $(".onepiece .updown i:nth-child(2)").hide();
    }
    $(".onepiecemenu").slideToggle();
});