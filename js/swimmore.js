$(function(){
    $(".allwrap").slice(0, 3).show();
    $(".more").click(function(e){ 
    e.preventDefault();
    $(".allwrap:hidden").slice(0, 1).show(); 
    if($(".allwrap:hidden").length == 0){ 
        $(".more").hide();
    }
    });
    });