$(function(){

  // window.fbAsyncInit = function() {
  //   FB.init({
  //     appId      : '1704529963155723',
  //     xfbml      : true,
  //     version    : 'v2.5'
  //   });
  // };

  // function share_on_facebook(){
  //   FB.ui({
  //       method: 'share_open_graph',
  //       action_type: 'og.likes',
  //       action_properties: JSON.stringify({
  //         object:'http://hansenwang.ml/iphonese.html',
  //   })
  //   }, function(response){
  //     // Debug response (optional)
  //     console.log(response);
  //   });
  // }

  // (function(d, s, id){
  //    var js, fjs = d.getElementsByTagName(s)[0];
  //    if (d.getElementById(id)) {return;}
  //    js = d.createElement(s); js.id = id;
  //    js.src = "//connect.facebook.net/en_US/sdk.js";
  //    fjs.parentNode.insertBefore(js, fjs);
  //  }(document, 'script', 'facebook-jssdk'));

    $('.share').click(function(event) {
      share_on_facebook();
      /* Act on the event */
    });
});
