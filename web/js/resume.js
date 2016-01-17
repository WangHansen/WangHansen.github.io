$(function(){
	
	//general "just a little different"
		$('.general span').animate({opacity: 1},500,function(){
			$('.general p').animate({opacity: 1},500,function(){
				$('.general img').animate({opacity: 1, top: 50+'%'},800,function(){
					$('.general h1').animate({opacity: 1},1000);});
		});});
		
	//check the distance from the top
	var distance;
	$(document).scroll(function(){
			distance = $(this).scrollTop();	//这个数字决定下拉多少
			console.log(distance);
			
			/*if(distance>0 && distance<847)
				$('body,html').animate({'scrollTop':847},500);
			else if(distance>847 && distance<1694)
				$('body,html').animate({'scrollTop':1694},500);
			else if(distance>1694 && distance<2500)
				$('body,html').animate({'scrollTop':2500},500);*/
				
			if(distance>400)
				$('.experience_text').animate({opacity: 1, top: 20+'%'},1000);
			if (distance>830)
				$('.experience_bar').animate({opacity: 1, top: 77+'%'},1000);
			if(distance>1600)
			{
				$('.projects_1 img').stop().animate({width:'150px', marginTop:'100px'},400);
				$('.projects_2 img').stop().animate({width:'100px', marginTop:'80px'},400);
				$('.projects_3 img').stop().animate({width:'150px', marginTop:'120px'},400);
				$('.projects_4 img').stop().animate({width:'150px', marginTop:'100px'},400);
			}
			if(distance>2400)
				$('.schools').stop().animate({left: 0},800);
			if(distance>3000){
				$('.skills_ul1').stop().animate({marginLeft: '35%'},800);
				$('.skills_ul2').stop().animate({marginRight: '35%'},800);
			}
		}); 		
	
	var index = 0;
	var gl = new Array("Hello, Welcome to my Website!","Hi, there!", "How are you doing today?","What can I do for you?","Please go through my profile below, you will find what you want!","Please don't click me", "Don't","I warn you, do not click me!","You think just because I am smiling, I will not piss off?", "If you do it again, I refuse to talk to you", "I am not going to talk to you anymore","...not any more");
	$('.general img').click(function(){
		$('.greeting').html(gl[index]);
		index++;
		if(index==20)
			$('.greeting').html("You clicked me "+index+" times already....");
		if(index==50)
			$('.greeting').html("You clicked me "+index+" times already...., I figured maybe you want to make a donation for me?");
	});
	
	$('.projects_1 img').hover(
		function(){
			$(this).stop().animate({width:'200px', marginTop:'80px'},400);
		},
		function(){
			$(this).stop().animate({width:'150px', marginTop:'100px'},400);
		}
	);
	
	$('.projects_2 img').hover(
		function(){
			$(this).stop().animate({width:'150px', marginTop:'30px'},400);
		},
		function(){
			$(this).stop().animate({width:'100px', marginTop:'80px'},400);
		}
	);
	
	$('.projects_3 img').hover(
		function(){
			$(this).stop().animate({width:'220px', marginTop:'100px'},400);
		},
		function(){
			$(this).stop().animate({width:'150px', marginTop:'120px'},400);
		}
	);
	
	$('.projects_4 img').hover(
		function(){
			$(this).stop().animate({width:'200px', marginTop:'70px'},400);
		},
		function(){
			$(this).stop().animate({width:'150px', marginTop:'100px'},400);
		}
	);
	
	$('.highschool').hover(
		function(){
			$(this).stop().animate({'height':'260px'},300); 
		},
		function(){
			$(this).stop().animate({'height':'130px'},300);
		}
	);
	
	$('.highschoolC').hover(
		function(){
			$(this).stop().animate({'height':'330px'},300); 
		},
		function(){
			$(this).stop().animate({'height':'130px'},300);
		}
	);
	
	$('.university').hover(
		function(){
			$(this).stop().animate({'height':'360px'},300); 
		},
		function(){
			$(this).stop().animate({'height':'130px'},300);
		}
	);
	
	var selected;
	for(var i=1; i<19; i++)
		$('.skill'+i).hover(
			function(){
				selected = $(this).attr('class');
				$('.'+selected).stop().animate({'font-size':'22px'},300);
			},
			function(){
				$('.'+selected).stop().animate({'font-size':'18px'},300);
			}	
	);
});
