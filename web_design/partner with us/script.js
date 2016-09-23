$(function() {

    var width = $(window).width();
    vertAlignBenefitPic(width);

    $(window).on('scroll', function() {
        var windowTop = $(window).scrollTop();
        if(windowTop>5){
            $('.header_content').addClass('white');
        }
        if (windowTop<5){
            $('.header_content').removeClass('white');
        }
    });

    $(window).on('scroll', function() {
        var windowTop = $(window).scrollTop(),
            scroll = (400-windowTop)/500;
            console.log(scroll);
        $('.filter').css("opacity",scroll);
    });

    $(window).resize(function(event) {
        width = $(window).width();
        vertAlignBenefitPic(width);
        var slideHeight = 600;
        if(width<768){
            slideHeight = $('.slide').height();
        }else{
            slideHeight = 600;
        }
        $('.slides').css('height', $('.slide').height());
    });

    $('.dot').click(function(){
        $('.dot_active').removeClass('dot_active');
        $(this).addClass("dot_active");
        dot_page();
    });

    $('.slide_arrow_left').click(function(){
        console.log("left");
        var dom = $('.slide_active');
        console.log(dom.hasClass("slide1"));
        if(!dom.hasClass("slide1")){
            $('.slide_arrow_right').css("display","block");
            $('.slide_active').removeClass('slide_active');
            dom.prev().addClass("slide_active");
        }
        page_dot();
    });

    $('.slide_arrow_right').click(function(){
        console.log("right");
        var dom = $('.slide_active');
        if(!dom.hasClass("slide4")){
            $('.slide_arrow_left').css("display","block");
            $('.slide_active').removeClass('slide_active');
            dom.next().addClass("slide_active");
        }
        page_dot();
    });
});

function vertAlignBenefitPic(width){
    if(width>992){
        $('.benefit_des').each(function(){
            vertAlign($(this));        
        });
    }else{
        $('.benefit_des').each(function(){
            $(this).css('padding-top', '10px');  
        });
    }
}

function vertAlign(selector){
    var distance = selector.parent().height() - selector.height();
    selector.css('padding-top', distance/2);
}

function dot_page(){
    for(var i=0; i<4; i++){
        if($('.dot:eq('+i+')').hasClass('dot_active')){
            $('.slide_active').removeClass('slide_active');
            $('.slide:eq('+i+')').addClass('slide_active');
        }
    }
    toggleArrow();
}

function page_dot(){
    for(var i=0; i<4; i++){
        if($('.slide:eq('+i+')').hasClass('slide_active')){
            $('.dot_active').removeClass('dot_active');
            $('.dot:eq('+i+')').addClass('dot_active');
        }
    }
    toggleArrow();
}

function toggleArrow(){
    if($('.slide_active').hasClass("slide4")){
        $('.slide_arrow_right').css("display","none");
        $('.slide_arrow_left').css("display","block");
    }else if($('.slide_active').hasClass("slide1")){
        $('.slide_arrow_left').css("display","none");
        $('.slide_arrow_right').css("display","block");
    }else{
        $('.slide_arrow_left').css("display","block");
        $('.slide_arrow_right').css("display","block");
    }
}