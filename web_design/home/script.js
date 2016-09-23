$(function() {

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    if(windowWidth<218){
        $('.header_content img').hide();
    }

    $('.bg_des').css('top', vertAlign('.bg_des')+"px");

    $(window).on('scroll', function() {
        var windowTop = $(window).scrollTop();
        if(windowTop>5){
            $('.header_content').addClass('white');
        }
        if (windowTop<5){
            $('.header_content').removeClass('white');
        }
    });

    $('.match').click(function(){
        $(this).html("Program");
        $(this).css({
            "border":"none",
            "padding":0,
            "margin":"0 auto",
            "color":"white",
            "text-decoration":"none"
        });
        $('.form').animate({height: 290}, 400);
        $('.bg_des').animate({top: 270}, 400);
        // console.log($('.bg_des').height());
    });

    var clickNum = 0;
    $('.mobile_menu').click(function() {
        clickNum++;
        if(clickNum%2==1){
            console.log('show');
            // $('.header_right').animate({right: 0}, 500);
            $('.header_right').css({
                '-webkit-transform': 'translate(0,0)',
                '-moz-transform': 'translate(0,0)',
                'transform': 'translate(0,0)'
            });
        }else{
            console.log('hide');
            // $('.header_right').animate({right: '-190px'}, 500);
            $('.header_right').css({
                '-webkit-transform': 'translate(190px,0)',
                '-moz-transform': 'translate(190px,0)',
                'transform': 'translate(190px,0)'
            });
        }
    });

    $(window).resize(function(event) {
        windowWidth = $(window).width();
        if(windowWidth<218){
            $('.header_content img').hide();
        }
        else{
            $('.header_content img').show();
        }
        if(windowWidth>768){
            if(clickNum%2==0){
                $('.mobile_menu').click();
            }
        }
    });

});

function vertAlign(selector){
    var objHeight = $(selector).height();
    var windowHeight = $(window).height();
    var top = (windowHeight-objHeight)/2;
    return top;
    // $(selector).css('top', top+"px");
}