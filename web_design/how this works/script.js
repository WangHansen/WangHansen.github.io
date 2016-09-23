$(document).ready(function() {
    
    $('.slick').slick({
        dots: true,
        speed: 300,
        infinite: false,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        prevArrow: $('.leftArrow'),
        nextArrow: $('.rightArrow'),
    });

    var top;
    $(window).scroll(function(event) {
        top = $(this).scrollTop()/20;
        $('#laptop').css('transform', 'translateY('+top +'px)');
    });

    $("section").hover(function(){
        $("#laptop-screen").css('transform', 'rotateX(0deg)');
    });

});