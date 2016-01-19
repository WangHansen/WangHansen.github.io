 $(function(){
	 
	 	var distance;
		$(document).scroll(function(){
			distance = $(this).scrollTop();	
			console.log(distance);
			if (distance>40)
			{//这个数字决定下拉多少后开始fixed
				$('.header_icon').addClass("fixed");
				$('.header_icon img').css('box-shadow',"3px 3px 5px #000000");
			}
			else
			{
				$('.header_icon').removeClass("fixed");//classNmae : tips
				$('.header_icon img').css('box-shadow',"none");
			}
		}); 			
			var logo = document.getElementById("logo");
			var iconlist = document.getElementsByClassName("header_iconlist")[0];
			var icon = document.getElementsByClassName("header_icon")[0];
			
			$('#logo').hover(
				function(){
					if(distance>100){
						iconlist.style.display="block";
						$(".header_iconlist li").stop().animate({width:'60px'},300);
					}
				},function(){
						//nothing
				}
			);
					
			$('.header_icon').hover(
				function(){
				},
				function(){
					$('.header_iconlist li').stop().animate({width:'0px'},300,
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
			$('.about_options li').stop().animate({height:'50px'},300);
		},
		function(){
			var thisul = this.getElementsByTagName('ul')[0];
			$('.about_options li').stop().animate({height:'0px'},300,function(){
				thisul.style.display = "none";
			}
			);
		}
	);
	
	$('.drop_menu_resume').hover(
		function(){
			var thisul = this.getElementsByTagName('ul')[0];
			thisul.style.display = "block";
			$('.download-options li').stop().animate({height:'50px'},300);
		},
		function(){
			var thisul = this.getElementsByTagName('ul')[0];
			$('.download-options li').stop().animate({height:'0px'},300,function(){
				thisul.style.display = "none";
			}
			);
		}
	);
	
	$('.drop_menu_contact').hover(
		function(){
			var thisul = this.getElementsByTagName('ul')[0];
			thisul.style.display = "block";
			$('.contact-options li').stop().animate({height:'50px'},300);
		},
		function(){
			var thisul = this.getElementsByTagName('ul')[0];
			$('.contact-options li').stop().animate({height:'0px'},300,function(){
				thisul.style.display = "none";
			}
			);
		}
	);

 });

