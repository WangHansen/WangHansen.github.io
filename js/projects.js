$(function(){

	$phoneWidth = 768;

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
