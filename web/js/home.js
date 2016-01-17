 $(function(){
	
	var articlechange = setInterval(changeImg,8000);
	
	$('.article, .dotsnav').hover(
		function(){
			clearInterval(articlechange);
		},
		function(){
			articlechange = setInterval(changeImg,8000);
		}
	);
	
	
	$(".dotsnav-item").click(
		function(){
				changeDot2($(this));
				var index;
				for(var i=0; i<3; i++){
					dot = $(document.getElementsByClassName("dotsnav-item")[i]);
						if( dot.hasClass('curDot') ){
							index = i;
						}
				}
				var art = document.getElementsByClassName('article')[0];
				var clickImg = $(art.getElementsByTagName('a')[index]);
				$('.nextImg').removeClass('nextImg');
				clickImg.addClass('nextImg');
				changeImg();
				changeDot2($(this));
		}
	);
	
	//四个图片HOVER效果
	$('.pic a').hover(
		function(){
			$(this).stop().animate({opacity:'0.9'},400);
			$(this).next().animate({width:'110%', marginLeft:'-20px', marginTop:'-15px'},400);
		},
		function(){
			$(this).stop().animate({opacity:'0'},400);
			$(this).next().animate({width:'100%',marginLeft:'0', marginTop:'0'},400);
		}
	);
	
 });
 
function changeImg(){
	$('.curImg').stop().animate({opacity:'0'},1000);
	$('.curImg').css('z-index',10);
	$('.nextImg').stop().animate({opacity:'1'},1000);
	$('.nextImg').css('z-index',15);
	ImgChangeClass();
}

function ImgChangeClass(){
	$('.curImg').removeClass('curImg');
	$('.nextImg').addClass('curImg');
	$('.nextImg').removeClass('nextImg');
		
	if($('.curImg').hasClass('last')){
		$('.first').addClass('nextImg');
	}else{
		$('.curImg').next().addClass('nextImg');
	}
	
	changeDot1();
}

function changeDot1(){
		var dot, index;
	//当添加更多图片时i<n
	for(var i=0; i<3; i++){
			dot = $(document.getElementsByClassName("dotsnav-item")[i]);
			if( dot.hasClass('curDot') ){
				index = i;
				//console.log(index);
				dot.removeClass('curDot');
				if(i==2){
					$(document.getElementsByClassName("dotsnav-item")[0]).addClass('curDot');
				}else{
					$(document.getElementsByClassName("dotsnav-item")[i+1]).addClass('curDot');
				}
				break;
			}
	}
}

function changeDot2(clickDom){
	$('.curDot').removeClass('curDot');
	clickDom.addClass('curDot');
}