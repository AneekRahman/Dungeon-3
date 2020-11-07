$(".searchBox").hide();
$(document).ready(function(){
    $(".searchIcon").click(function(){
        $(".searchBox").toggle("fast");
    })
    $(".searchBox").focus(function(){
        $(this).css("background-color", "#fdfde9"); 
    });
    $(".searchBox").blur(function(){
        $(this).css("background-color","white")
    })
});