// JavaScript Document
$(function(){

  $('.srg>.g').click(function(){
    alert($(this).find('a').attr("href"));
  });
//$this.find('a').attr("href")
  //$("<div id='useful'><ul></ul>test</div>").appendTo('body');
  $("<div id='useful'></div>").appendTo('.g');  
  // $('#useful').css("position","absolute");
  // $('#useful').css("background","#ccc");
  // $('#useful').css("top","170px");
  // $('#useful').css("left","50px");
  // $('#useful').css("height","1000px");
  // $('#useful').css("width","80px");

  $('.sbib_b').keydown(function(event){
    console.log(event);
    if(event.which == 13) 
      search();
  });
  $('.lsb').click(function(){
      search();
  });
});

function search(){
  alert("you just searched something");
  $("<div id='useful'></div>").appendTo('.g');
}