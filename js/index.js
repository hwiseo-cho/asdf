
$(function(){
    $("#Profile").on("click",function(){
        $("#profileContent").show();
        $("#projectContent").hide();
        $("#aboutContent").hide();
    });
    $("#Project").on("click",function(){
        $("#profileContent").hide();
        $("#projectContent").show();
        $("#aboutContent").hide();
    });
    $("#About").on("click",function(){
        $("#profileContent").hide();
        $("#projectContent").hide();
        $("#aboutContent").show();
    });
    $("#btn1").on("click",function(){
        $("#modal1").show();
    });
    $("#btn2").on("click",function(){
        $("#modal2").show();
    });
    $(".close").on("click",function(){
        $(".modal").hide();
    });
    
    
});
$(document).keydown(function(event) {
    if ( event.keyCode == 27 || event.which == 27 ) {
        $(".modal").hide();
    }
});