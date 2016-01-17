// JavaScript Document
var main = function(){
	console.log("active");
	$("#more").click(function(){
		$("div").fadeOut("fast");
	});
	$('.nav .container .nav-tabs: ul: li').hover(
	function()
	{
		$("div").fadeOut("fast");
		console.log("hover");
		$(".nav-tabs:li").addClass("nav-hover");
	},
	function()
	{
		$(".nav-tabs:li").removeClass("nav-hover");
	}
	);
};

$(document).ready(main);