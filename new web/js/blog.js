$(function(){

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1704529963155723',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  function share_on_facebook(){
    FB.ui({
        method: 'share_open_graph',
        action_type: 'og.likes',
        action_properties: JSON.stringify({
          object:'http://hansenwang.ml/iphonese.html',
    })
    }, function(response){
      // Debug response (optional)
      console.log(response);
    });
  }

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

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

    $('.share').click(function(event) {
      share_on_facebook();
      /* Act on the event */
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
