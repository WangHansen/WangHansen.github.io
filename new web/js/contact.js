$(function(){
	function initialize() {
        var mapCanvas = document.getElementById('map');
		var myLatLng = {lat: 43.471523, lng: -80.535338};
        var mapOptions = {
          center: myLatLng,
          zoom: 15,
		  scrollwheel: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
		var marker = new google.maps.Marker({
    		position: myLatLng,
    		map: map,
    		title: 'This is where you can find me!'
  		}); 
	}
     google.maps.event.addDomListener(window, 'load', initialize);

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
  
    $('.mainBody').click(function() {
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
