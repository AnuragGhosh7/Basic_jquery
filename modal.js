$(document).ready(function(){ 
    $(".button_clicked").click(function(){
        $(".modal").css("display","block");
    });
   

    $(".close").click(function(){
        $(".modal").css("display","none");
   
    });
});
