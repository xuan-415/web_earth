$(document).ready(function(){
  $("#box").on("animationend",function(){
    $(this).animate({height : "1320px",width : "1320px"},2000);
    $(".wrapper").fadeIn(4000);
  });
});