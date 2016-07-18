$('.flash').click(function(){
  $('.brain').toggleClass('laser');
});

/**$('.color').click(function(){
  var red = Math.floor(Math.random()*225);
  var green = Math.floor(Math.random()*255);
  var blue = Math.floor(Math.random()*225);
  var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
  $("body").css("background", randomRGBA);
  }); **/

$(".hello").on("click", function(){
  $(".screen").html("Hello Human! What is your name?");
  var n = prompt("Enter your name: ");
  $(".screen").html("Nice to meet you "+n);
});

$(".rightArrow").on("click", function(){
  $(".robot").css("animation","toRight 5s 1");
});

$(".leftArrow").on("click", function(){
  $(".robot").css("animation","toLeft 5s 1")
});
