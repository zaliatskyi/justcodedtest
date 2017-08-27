$(document).ready(function () {
  
  //sticky
  $(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
      $('#header').addClass("sticky");
    }
    else{
      $('#header').removeClass("sticky");
    }
  });

  $("#header .nav a").click(function() {
    $("#header .nav a").removeClass('active');
    $(this).addClass('active');
  });  
  
  //slider init
  $('.testimonials-slider').slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  
  //validating email
  var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i,
	  mail = $('#email');
	
	mail.blur(function(){
      if(mail.val() != ''){
        if(mail.val().search(pattern) == 0){
            $('#submit').attr('disabled', false).removeClass('disabled');
        }else{
            $('#submit').attr('disabled', true).addClass('disabled');
        }
      }else{
          $('#submit').attr('disabled', true).addClass('disabled');
      }
	});
  
  //mobile menu
  $("#mobile-btn-menu").click(function() {
    if( $(this).hasClass("active") ) {
      $(this).removeClass("active");
      $('.nav').removeClass("visible");
    } else {
      $(this).addClass("active");
      $('.nav').addClass("visible");
    }
  });
  
  
  
});
  