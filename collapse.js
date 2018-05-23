$("document").ready(function(){
		
		$(".question1").click(function(){
			$(".answer1").slideToggle();
			$(".answer2").css("display","none");
			});
		
		$(".question2").click(function(){
			$(".answer2").slideToggle();
			$(".answer1").css("display","none");
			});
	})