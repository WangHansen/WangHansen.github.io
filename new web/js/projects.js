$(function(){

	$phoneWidth = 768;

  $clickNum = 0;
	$('.mobliemenu').click(     
    function(){
      $clickNum++;
        if($clickNum%2==1)
          ShowMobileBar();
        else
          HideMobileBar();
    }
  );
  
  $('.section').click(function() {
    if($clickNum%2==1){
      $clickNum++;
      HideMobileBar();
    }
  });  

    $("#fullpage").fullpage({
    anchors:['Top','Personal Website', 'Android Application', 'Java Software','Bottom'],
    navigationTooltips: ['Top','Personal Website', 'Android Application', 'Java Software','Bottom'],
    resize: true,
    navigation: true,
    navigationPosition: 'left',
    controlArrows: $(window).width()>$phoneWidth,
    //scrollOverflow: true,
    //responsiveHeight: 400,
    responsiveWidth: $phoneWidth
    });

});

function ShowMobileBar(){
  $('header ul').animate({marginLeft: 0}, 300,
    function(){
      $('.mobliemenu img').animate({
        opacity: 0},
        200, function() {
        $('.mobliemenu img').attr('src', 'img/icons/close.png');
        $('.mobliemenu img').animate({opacity: 1}, 200);
        $('body').css('overflow', 'hidden');
      });
    }
  );
}

function HideMobileBar(){
  $('header ul').animate({marginLeft: '-300px'}, 300,
    function(){
      $('.mobliemenu img').animate({
        opacity: 0},
        200, function() {
        $('.mobliemenu img').attr('src', 'img/icons/menu.png');
          $('.mobliemenu img').animate({opacity: 1}, 200);
        $('body').css('overflow', 'auto');
      });
    }
  );
}
