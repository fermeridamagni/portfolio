$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
      var windowWidth = $(window).width();
      
      $('header').css('justify-content', 'space-between');
      $('header #group1').css('display', 'block');
      $('header #sing').css('display', 'block');

      if(windowWidth <= 650) {
        $('header #simpleMenu').css('display', 'none');
        $('header #menuToggle').css('display', 'block');
      } else {
        $('header #simpleMenu').css('display', 'flex');
        $('header #menuToggle').css('display', 'none');
      };

      if(windowWidth <= -1) {
        $('header #simpleMenu').css('display', 'flex');
        $('header #menuToggle').css('display', 'none');
      };
      

      $('#scrollTop').css('display', 'block');
    } else {
      $('header').css('justify-content', 'center');
      $('header #group1').css('display', 'none');
      $('header #sing').css('display', 'none');

      if(windowWidth <= 650) {
        $('header #simpleMenu').css('display', 'none');
        $('header #menuToggle').css('display', 'block');
      } else {
        $('header #simpleMenu').css('display', 'flex');
        $('header #menuToggle').css('display', 'none');
      };

      $('#scrollTop').css('display', 'none');
    };
  });

  $(window).on('resize', function() {
    var windowWidth = $(window).width();

    if(windowWidth <= 650) {
      $('header #simpleMenu').css('display', 'none');
      $('header #menuToggle').css('display', 'block');
    } else {
      $('header #simpleMenu').css('display', 'flex');
      $('header #menuToggle').css('display', 'none');
    };
  });

  $('#scrollTop').click(() => {
    $(window).scrollTop(0, 0);
  });
});