$(function(){

 //  window.fbAsyncInit = function() {
 //    FB.init({
 //      appId      : '1704529963155723',
 //      xfbml      : true,
 //      version    : 'v2.5'
 //    });
 //  };

 //  function share_on_facebook(){
 //    FB.ui({
 //      method: 'share_open_graph',
 //      action_type: 'og.likes',
 //      action_properties: JSON.stringify({
 //        object:'http://hansenwang.ml/blogs/iphonese.html',
 //      })
 //    }, function(response){
 //      // Debug response (optional)
 //      console.log(response);
 //    });
 //  }

 //  (function(d, s, id){
 //   var js, fjs = d.getElementsByTagName(s)[0];
 //   if (d.getElementById(id)) {return;}
 //   js = d.createElement(s); js.id = id;
 //   js.src = "//connect.facebook.net/en_US/sdk.js";
 //   fjs.parentNode.insertBefore(js, fjs);
 // }(document, 'script', 'facebook-jssdk'));

  !function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0],
    p=/^http:/.test(d.location)?'http':'https';
    if(!d.getElementById(id)){
      js=d.createElement(s);js.id=id;
      js.src=p+'://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js,fjs);
    }}(document, 'script', 'twitter-wjs');

    $('.share_on_facebook').click(function() {
      share_on_facebook();
    });

  });