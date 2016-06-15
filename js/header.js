$(function($) {
  $clickNum = 0;
  $('.mobliemenu').click(     
    function(){
      console.log($clickNum);
      $clickNum++;
      if($clickNum%2==1)
        ShowMobileBar();
      else
        HideMobileBar();
    }
  );

  $('body').on("swipeleft",function(){
    if($clickNum%2==1){
      $clickNum++;
      HideMobileBar();
    }
  });

  $('#fullpage, .mainBody').click(function() {
    if($clickNum%2==1){
      $clickNum++;
      HideMobileBar();
    }
  });
});

function ShowMobileBar(){
  $('.mobliemenu').addClass('open');
  $('header ul').animate({marginLeft: 0}, 300,
    function(){
      $('body').css('overflow', 'hidden');
    });
}

function HideMobileBar(){
  $('.mobliemenu').removeClass('open');
  $('header ul').animate({marginLeft: '-300px'}, 300,
    function(){
      $('body').css('overflow', 'auto');
    });
}
