/* Flip logo on click */
$(document).ready(function(){
  $(".flipper").on("click", function(){
    $(".front").toggleClass("flip-back");
    $(".back").toggleClass("flip-front");

  });

  $(".imgPreview").on("click", function(){
    console.log("test");
    console.log($(this).find(".aboutBox"));
    $(this).parent(".boxInner").find(".aboutBox").toggleClass("showBox");
  });

  $(".aboutBox").on("click", function(){
    $(this).toggleClass("showBox");
  });

  $("#menu-toggle").on("click", function(){
    $("#menu").toggleClass("open");
  });



});

var submitted=false;
$('#gform').on('submit', function(e) {
  //$('#gform *').fadeOut(2000);
  $('#gform').prepend('Your submission has been processed...');
  });

/* Smooth Scrolling */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 600);
            if ( $("#menu").hasClass("open") ){
              $("#menu").toggleClass("open");
            }
            return false;
        }
    }
});
/*
window.addEventListener("scroll",function() {
  if(window.scrollY == 0 || window.scrollY > 600) {
         $('.fixedNav').slideDown();
   }
   else {
      $('.fixedNav').slideUp();
   }
},false);
*/
