$(function(){
	
  $("#fullpage").fullpage({
    anchors:['INTRO', 'SKILLS', 'PROJECTS','EXPERIENCE', 'BlOG'],
    navigationTooltips: ['INTRO', 'SKILLS', 'PROJECTS','EXPERIENCE', 'BlOG'],
    resize: true,
    navigation: $(window).width()>768,
    navigationPosition: 'left',
    controlArrows: $(window).width()>768,
    slidesNavigation: $(window).width()>768,
    slidesNavPosition: 'bottom',
    responsiveWidth: 768
    // responsiveHeight: 400
  });

  $('.projectsAlt').css({
  	marginTop: ($(window).height()-400)/2+"px",
  });

  $('#warning-icon').click(function(){
    $('#warning').remove();
  })

  //set the projc name/img vertically centered
  for(var i=1; i<4; i++){
    $mar = ($('#projs'+i+' .projDes').height() - $('#projs'+i+' div:first-child').height())/2;
    $('#projs'+i+' div:first-child').css('margin-top', $mar);
  }
});