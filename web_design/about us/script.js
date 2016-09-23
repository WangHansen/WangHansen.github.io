$(function(){
    var once = [true,true,true,true];
    var selectors_number = ['.strong_num_1','.strong_num_2','.strong_num_3','.strong_num_4'];
    var selectors_founder = ['#martin','#sina','#meti'];
    var time = [1000,1600,2100,2500];
    var grid_width;
    TeamPic(grid_width);

    $(window).resize(function(){
        TeamPic(grid_width);
    });

    for(var i=0; i<16; i++){
        $('.flip').attr('style', 'transform: rotateY(-90deg)');
    }

    $(window).scroll(function() {
        for(var i=0; i<4; i++)
        {
            if( once[i] && scrollTo(selectors_number[i]) )
            {
                counter(selectors_number[i],time[i]);
                once[i] = false;
                addPlus(selectors_number[i]);
                // setTimeout(addPlus('.strong_num_3'), 22000);
            }
        }
        for(var i=0; i<3; i++){
            if( scrollTo(selectors_founder[i]) ){
                upFloat(selectors_founder[i]);
            }
        }
        if( scrollTo('.parsa') ){
            upFloat('#rest_team', function(){$('.flip').removeAttr('style');});
        }
    });



});


function TeamPic(grid_width){
    grid_width = $('div.member').width();
    $('.flipper').height(grid_width);
    $('.back').height(grid_width);
    $('.flipper').each(function() {
        var textHeight = $(this).find('.member_des').height();
        var top = (grid_width - textHeight)/2;
        $(this).find('.member_des').css("paddingTop",top);
    });
}

function addPlus(selector){
    if(selector=='.strong_num_2'){
        var check = setInterval(function(){
            if($('.strong_num_2').html()=='200'){
                $('.strong_num_2').html("200+");
                clearInterval(check);
            }
        },200);
    }else if(selector=='.strong_num_3'){
        var check = setInterval(function(){
            if($('.strong_num_3').html()=='500'){
                $('.strong_num_3').html("500+");
                clearInterval(check);
            }
        },200);
    }
}

function scrollTo(selector){
    var hT = $(selector).offset().top,
        hH = $(selector).outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
       	return true;
   	}
}

function counter(selector, time){
	$(selector).counterUp({
	    time: time
	});
}

function upFloat(selector, func=null){
    $(selector).animate({paddingTop: 0, opacity: 1}, 800, func);
}