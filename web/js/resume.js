$(function(){
		
		setTimeout(
			function(){
				$('#downwards').animate({opacity: 1},500);
				$('#downwards').click(function(){
					alert("Please_use_your_mouse_wheel_to_scroll_down");
					$.fn.fullpage.moveTo(2);
				});
				for(var i=0; i<100; i++){
					$('#downwards').animate({top: 70+'%'},500,function(){$('#downwards').css('top','68%');});
				}
		},3000);
		
		
		
		$('#fullpage').fullpage({
			anchors: ['NavScreen','GeneralScreen','ExperienceScreen','ProjectScreen','EducationScreen','SkillScreen','HobbyScreen','FooterScreen'],
			
			afterLoad: function(anchorLink, index){
				var loadedSection = $(this);
	
				//using index
				if(index == 2){
					$('#downwards').remove('#downwards');
					$('.general p').stop().animate({opacity: 1},500,function(){
						$('.general img').css('display', 'block');
						$('.general img').animate({opacity: 1, top: 50+'%'},800,function(){
							$('.general h1').animate({opacity: 1},1000);});
		});		
				}
				if(index == 3){
					$('.experience_text').animate({opacity: 1, top: 20+'%', right: '10%'},500);
					$('.experience_bar').animate({opacity: 1, top: 77+'%', left: '10%'},500);
				}
				if(index == 4){
					$('.projects_text').stop().animate({opacity: 1, top: '6%'}, 400);
					$('.projects_1 img').stop().animate({width:'150px', marginTop:'100px'},400);
					$('.projects_2 img').stop().animate({width:'100px', marginTop:'80px'},400);
					$('.projects_3 img').stop().animate({width:'150px', marginTop:'120px'},400);
					$('.projects_4 img').stop().animate({width:'150px', marginTop:'100px'},400);
				}
				if(index == 5){
					$('.education_text').stop().animate({left: 0},800);
					$('.schools').stop().animate({left: 0},800);
				}
				if(index == 6){
					$('.skills_text').animate({top: 3+'%'}, 800);
					$('.skills_ul1').stop().animate({marginLeft: '30%'},800);
					$('.skills_ul2').stop().animate({marginRight: '30%'},800);
				}
				if(index == 7)
					$('.hobbies_list').stop().animate({height: 600},800);
			}
		});
		
	//general "just a little different"
		$('.general span').animate({opacity: 1},500);	
			
	
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
	
	var clickNum = 0;
	for(var i=1; i<8; i++)
	$('.nav_dot_'+i).click(function(){
		$.fn.fullpage.moveTo( $(this).attr('class').charAt(8) );
		clickNum+=1;
		$('#nav').animate({marginLeft: -120}, 500,function(){
			$('.nav_dot_0').css("background-position","90px 5px");	
		});
	});
	
	$('.nav_dot_0').click(function(){
		clickNum+=1;
		if(clickNum%2==0){
			$('#nav').animate({marginLeft: -120}, 500,function(){
				$('.nav_dot_0').css("background-position","90px 5px");	
			});
		}
		else{
			$('.nav_dot_0').css("background-position","125px 5px");
			$('#nav').animate({marginLeft: 0}, 500);
		}
	});
});
