$(function(){
    $(".review").slice(0, 3).show();
    $(".more").click(function(e){ 
    e.preventDefault();
    $(".review:hidden").slice(0, 1).show(); 
    if($(".review:hidden").length == 0){ 
        $(".more").hide();
    }
    });
    });