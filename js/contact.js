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

});
