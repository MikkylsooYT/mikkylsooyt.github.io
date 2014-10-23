
$("#invnav").click(function(){
	$(".inv").css("display", "inline-block");
	$(".skillbox").css("display", "none");
	$(".savefunctions").css("display", "none");
});

$("#skillnav").click(function(){
	$(".skillbox").css("display", "inline-block");
	$(".inv").css("display", "none");
	$(".savefunctions").css("display", "none");
});

$("#optnav").click(function(){
	$(".savefunctions").css("display", "inline-block");
	$(".skillbox").css("display", "none");
	$(".inv").css("display", "none");
});

function startup(){
	$(".skillbox").css("display", "none");
	$(".savefunctions").css("display", "none");
	loadGame();
};