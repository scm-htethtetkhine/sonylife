$(document).ready(function () {
  $(".detail-ttl").on("click touch", function () {
    $(this).next().slideToggle();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });
});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

$(document).ready(function() {
  var _$window = $(window);
  var banner = $('.sec-banner');
  var secTop = $('.main-visual').offset().top;
  
  _$window.on('scroll',function(){
    
    if(_$window.scrollTop() > 850){
      banner.addClass('fixed');
      
    }else{
      banner.removeClass('fixed');
    }
  });
});





