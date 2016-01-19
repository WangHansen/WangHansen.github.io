// JavaScript Document
$(function(){
	//可视区域高度
	var wHeight = $(window).height();
	console.log(wHeight);
	var wWidth = $(document).width();
	
	$('.rolls li:last-child').css('margin-right',0);
	$('.rolls li').hover(
		function(){
			$(this).css('box-shadow', '0 5px 25px -5px #000');
		},
		function(){
			$(this).css('box-shadow', '0 5px 10px -5px #000');
		}
	);
	$('.rolls li').click(
		function(){
			ViewPic($(this));
		}
	);
	
	var ViewPic = function(obj){
		$oMask = "<div id='mask'></div>";
		$('.mainBody').append($oMask);
		
		var sHeight = $(document.body).height();
		
		$('#mask').css("height", sHeight+'px');
		$oPic = "<div id='ShowPic'><div class='Pic'>"+obj.html()+"<div class='Pic_close'></div></div></div>";
		console.log($oPic);
		$('.mainBody').append($oPic);
		$('.Pic img').css('margin',0);
		$('.Pic img').removeAttr('width height');
		
		var pHeight = $('.Pic').height();
		console.log((wHeight - pHeight)/2);
		var pWidth = $('.Pic').width();
		console.log((wWidth - pWidth)/2);
		
		var topPos = (wHeight - pHeight)/2 +'px';
		var leftPos = (wWidth - pWidth)/2 +'px';
		
		$('#ShowPic').css("top", topPos);
		$('#ShowPic').css("left", leftPos);
		
		$('#mask, .Pic_close').click(function(){
			$('div').remove('#mask');
			$('div').remove('#ShowPic');
		});
	}
});

