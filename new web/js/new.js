$(document).ready(function(e) {
	
	$phoneWidth = 768;
	
	$("#fullpage").fullpage({
		anchors:['INTRO', 'SKILLS', 'PROJECTS','EXPERIENCE', 'BlOG'],
		navigationTooltips: ['INTRO', 'SKILLS', 'PROJECTS','EXPERIENCE', 'BlOG'],
		resize: true,
		navigation: true,
		navigationPosition: 'left',
		controlArrows: $(window).width()>$phoneWidth,
		slidesNavigation: $(window).width()>$phoneWidth,
        slidesNavPosition: 'bottom',
		//scrollOverflow: true,
		//responsiveHeight: 400,
		responsiveWidth: $phoneWidth
  });

	$('.projectsAlt').css({
		marginTop: ($(window).height()-400)/2+"px",
	});

  //set the projc name/img vertically centered
  for(var i=1; i<4; i++){
    $mar = ($('#projs'+i+' .projDes').height() - $('#projs'+i+' div:first-child').height())/2;
    // alert($('#projs'+i+' .projDes').height());
    $('#projs'+i+' div:first-child').css('margin-top', $mar);
}

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

$('#fullpage').click(function() {
    if($clickNum%2==1){
      $clickNum++;
      HideMobileBar();
  }
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
