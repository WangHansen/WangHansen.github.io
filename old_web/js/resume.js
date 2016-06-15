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
				if(index == 5){
					$('.experience_text').animate({opacity: 1, top: 20+'%', right: '10%'},500);
					$('.experience_bar').animate({opacity: 1, top: 77+'%', left: '10%'},500);
				}
				if(index == 4){
					$('.projects_text').stop().animate({opacity: 1, top: '5%'}, 400,function(){
						$('.projects_1').stop().animate({marginTop:'2%'},400,function(){
							$('.projects_2').stop().animate({marginTop:'2%'},400,function(){
								$('.projects_3').stop().animate({marginTop:'2%'},400,function(){
									$('.projects_1 img').stop().animate({width:'150px', marginTop:'100px'},400);
									$('.projects_2 img').stop().animate({width:'100px', marginTop:'80px'},400);
									$('.projects_3 img').stop().animate({width:'150px', marginTop:'120px'},400);});});});});

				}
				if(index == 6){
					$('.education_text').stop().animate({left: 0},800);
					$('.schools').stop().animate({left: 0},800);
				}
				if(index == 3){
					$('.skills_text').animate({top: 3+'%'}, 800);
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
	
	var PclickTime = 0;
	$('.projects_num').click(function(){
			var obj = $(this);
			PclickTime++;
			if( PclickTime%2==1){
				$('.projects_num').stop().animate({marginTop:'50%'},400,function(){
					changeContent(obj);
					$('.projects_1').stop().animate({width:'50%',marginLeft: '25%'},400,function(){
					 $('.projects_1').stop().animate({marginTop:'2%'},400);
					});
				});
			}
			else{
				$('.projects_1').stop().animate({marginTop:'50%'},400,function(){
					resetContent();
					$('.projects_1').stop().animate({marginLeft:'10%', width:'20%'},400,function(){$('.projects_num').animate({marginTop:'2%'},400);});
					});
			}			
	});
	
	var changeContent = function(obj){
		if(obj.hasClass('projects_1')){
			$('.projects_1').html("<span>Persoanl Website</span><br/><br/><p style='padding: 20px 50px; color:#fff'>This is my personal website, I did it for two reasons, one is to show off(just kidding), the other one is to learn about front-end development. In the process<br/><br/><ul><p>Tools:</p><li>Adobe Dreamweaver</li><li>Sublime Text Editor</li><li>Adobe Photoshop</li><br/></ul><ul><p>★☆★☆★</p><li>HTML5</li><li>Javascript</li><li>CSS</li><li>JQuery</li><li>Bootstrap</li><li>fullpage.js</li><li>CSS Sprite</li></ul><ul><p>☆★☆★☆</p><li>CSS3 Animation</li><li>Ajax</li><li>SEO</li><li>FireBug</li><li>Node.js</li></ul></p>")
			$('.projects_1 ul').css({'list-style': 'none', 'width': '33%','float': 'left','font-size': '20px','color':'#fff' });
		}
		else if(obj.hasClass('projects_2')){
			$('.projects_1').html("<span>RiskyPhone</span><br/><br/><p style='padding: 20px 50px; color:#fff'>I generated this idea based on a popular internet trend called <a href='http://mashable.com/2015/10/09/extreme-phone-pinching/#0uZugVWS1uqj'>extreme phone pinching</a> at that moment. So my friend Rowan and I did this phone app that can detect how much you are holding your phone and output it one the screen in unit of centimeters. Also, users can upload their holding distance to social network to compete with friends. I designed the app and its user interface.<br/><ul><p>Tools:</p><li>Android Studio</li><li>Adobe Photoshop</li><br/></ul><ul><p>★☆★☆★</p><li>Java</li><li>XML</li><li>Android Development</li></ul></p>");
			$('.projects_1').css({'background': '#536dfe'});
			$('.projects_1 ul').css({'list-style': 'none', 'width': '50%','float': 'left','font-size': '20px','color':'#fff' });
		}
		else if(obj.hasClass('projects_3')){
			$('.projects_1').html("<span>Stock Simulator</span><br/><br/><p style='padding: 20px 50px; color:#fff'>When I saw the news that some high school students made some money by stock trading, I decided to try the same thing. But I found the software people currently use is very complicated for people who have nearly no background like me. So I decided to designed a software that can help people learn about how stock trading works. The project is done by a team of 4 people under my lead. I designed the functions of the software and its user interface. The software is coded in Java and it runs on Windows.<br/><ul><p>Tools:</p><li>JGrasp</li></li><br/></ul><ul><p>★☆★☆★</p><li>Java</li><li>UML</li></ul></p>");
			$('.projects_1').css({'background': '#00bcd4'});
			$('.projects_1 ul').css({'list-style': 'none', 'width': '50%','float': 'left','font-size': '20px','color':'#fff' });
		}
	}
	
	var resetContent = function(){
		$('.projects_1').html("<span>Persoanl<br />Website</span><br/><br/><p>HTML/CSS/JS/JQuery</p><img src='pic/projects/Hansen.jpg' style='margin-top:100px' width='0px' />");
		$('.projects_1 img').stop().animate({width:'150px', marginTop:'100px'},400);
		$('.projects_1').css({'background': '#7c4dff'});
		$('.projects_1 img').hover(
			function(){
				$(this).stop().animate({width:'200px', marginTop:'80px'},400);
			},
			function(){
				$(this).stop().animate({width:'150px', marginTop:'100px'},400);
			}
		);
	}
	
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
