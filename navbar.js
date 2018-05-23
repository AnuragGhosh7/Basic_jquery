   $("document").ready(function(){
		  
		   $("nav div").click(function(){
			   $(".navbar").slideToggle();
			   $("ul ul").css("display","none"); 
		   });
		   
		   $("#link1").click(function(){
			   $("#links2").slideDown();
			   $("#links").css("display","block");
			   $("#links2").css("display","none");
			});
		   
		    $("#link2").click(function(){
				$("#links2").slideDown();
			    $("#links2").css("display","block");
				$("#links").css("display","none");
		     });
		     $(window).resize(function() {
            if($(window).width() > 744) {
                  $("ul").removeAttr('style');
            }
		
		});		 
	  })
		