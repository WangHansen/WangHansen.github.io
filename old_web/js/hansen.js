 $(function(){
	 	var distance;
		$(document).scroll(function(){
			distance = $(this).scrollTop();	
			if (distance>40)
			{//这个数字决定下拉多少后开始fixed
				$('.header_icon').addClass("fixed");
			}
			else
			{
				$('.header_icon').removeClass("fixed");//classNmae : tips
			}
		}); 			
			var logo = document.getElementById("logo");
			var iconlist = document.getElementsByClassName("header_iconlist")[0];
			var icon = document.getElementsByClassName("header_icon")[0];
			
			$('#logo').hover(
				function(){
					if(distance>100){
						iconlist.style.display="block";
						$(".header_iconlist li").animate({width:'60px'},300);
					}
				},function(){
						//nothing
				}
			);
					
			$('.header_icon').hover(
				function(){
				},
				function(){
					$('.header_iconlist li').animate({width:'0px'},300,
						function(){
							iconlist.style.display="none";
 						}
					);
 				}
			);
	
	$('.drop_menu_about').hover(
		function(){
			var thisul = this.getElementsByTagName('ul')[0];
			thisul.style.display = "block";
			$('.about_options li').animate({height:'50px'},300);
		},
		function(){
			var thisul = this.getElementsByTagName('ul')[0];
			$('.about_options li').animate({height:'0px'},300,function(){
				thisul.style.display = "none";
			}
			);
		}
	);
	
	$('.drop_menu_resume').hover(
		function(){
			var thisul = this.getElementsByTagName('ul')[0];
			thisul.style.display = "block";
			$('.download-options li').animate({height:'50px'},300);
		},
		function(){
			var thisul = this.getElementsByTagName('ul')[0];
			$('.download-options li').animate({height:'0px'},300,function(){
				thisul.style.display = "none";
			}
			);
		}
	);
	
	$('.drop_menu_contact').hover(
		function(){
			var thisul = this.getElementsByTagName('ul')[0];
			thisul.style.display = "block";
			$('.contact-options li').animate({height:'50px'},300);
		},
		function(){
			var thisul = this.getElementsByTagName('ul')[0];
			$('.contact-options li').animate({height:'0px'},300,function(){
				thisul.style.display = "none";
			}
			);
		}
	);
	
	var articlechange = setInterval(changeImg,5000);
	
	$('.article, .dotsnav').hover(
		function(){
			clearInterval(articlechange);
		},
		function(){
			articlechange = setInterval(changeImg,5000);
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
	
	$('.pic a').hover(
		function(){
			$(this).animate({opacity:'0.9'},400);
		},
		function(){
			$(this).animate({opacity:'0'},400);
		}
	);
	
 });
 
function changeImg(){
	$('.curImg').animate({opacity:'0'},1000);
	$('.curImg').css('z-index',10);
	$('.nextImg').animate({opacity:'1'},1000);
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
				console.log(index);
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