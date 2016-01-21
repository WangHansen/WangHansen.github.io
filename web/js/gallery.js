// JavaScript Document
$(function(){
	//可视区域高度
	var wHeight = $(window).height();
	var wWidth = $(document).width();
	//整个网页高度
	var sHeight = $(document.body).height();
	
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
		$('#mask').css("height", sHeight+'px');
		
		$oPic = "<div id='ShowPic'><div class='Pic'>"+obj.html()+"</div><div class='Pic_close'></div></div>";
		$('.mainBody').append($oPic);
		$('.Pic img').css('margin',0);
		$('.Pic img').removeAttr('width height');
		var pHeight = $('.Pic').height();
		var pWidth = $('.Pic').width();
		var topPos = (wHeight - pHeight)/2;
		var leftPos = (wWidth - pWidth)/2;
		$('#ShowPic').css("top", topPos +'px');
		$('#ShowPic').css("left", leftPos +'px');
		
		$oArrow = "<div class='arrows a_l'></div><div class='arrows a_r'></div>"
		$('.mainBody').append($oArrow);
		$('.arrows').css("top", (wHeight - 50)/2 +'px');
		$('.a_l').css("left", (wWidth - pWidth)/2 +'px');
		$('.a_r').css("left", (leftPos+pWidth-31) +'px');
		
		//when left arrow is clicked
		$('.a_l').click(function(){
			if(obj.index()==0){	
				if(obj.hasClass('firstphoto')){}
					//do nothing;
				else{
					$('div').remove('#ShowPic');
					$('div').remove('.arrows');
					ViewPic(obj.parent().prev().children("li:last"));
				}
			}
			else{
				$('div').remove('#ShowPic');
				$('div').remove('.arrows');
				ViewPic(obj.prev());
			}
		});
		
		//when right arrow is clicked
		$('.a_r').click(function(){
			
			if(obj.index()==2){	
				if(obj.hasClass('lastphoto')){}
					//do nothing;
				else{
					$('div').remove('#ShowPic');
					$('div').remove('.arrows');
					ViewPic(obj.parent().next().children("li:first"));
				}
			}
			else{
				$('div').remove('#ShowPic');
				$('div').remove('.arrows');
				ViewPic(obj.next());
			}
		});
		
		$('#mask, .Pic_close').click(function(){
			//alert("close");
			$('div').remove('#mask');
			$('div').remove('#ShowPic');
			$('div').remove('.arrows');
		});
	}
});

