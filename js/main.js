$(document).ready( function() {
  $('header').addClass('search-closed');

  $('.search-icon').click( function() {
    if ($('header').hasClass('search-closed')) {
      $('header').removeClass('search-closed').addClass('search-open');
      $('body').addClass('overflow-hidden');
      if ($( document ).width() < 1000) {
        var mask = document.createElement('div');
        $(mask).css ({
          'position' : 'absolute',
          'left' : '0',
          'width' : '100%',
          'height' : $( document ).height()-77,
          'background-color' : 'black',
          'opacity' : '0.75',
          'top' : '78px'
        });
        $(mask).addClass('mask');
        $('header').append(mask);
      }
    }
    else {
      $('header').removeClass('search-open').addClass('search-closed');
      $('.mask').remove();
      $('body').removeClass('overflow-hidden');
    }
  });

  $('ul.section-list').addClass('cursor-out');
  $('ul.section-list li').hover(
    function() {
      $(this).parent().removeClass('cursor-out').addClass('cursor-in');
    },
    function() {
      $(this).parent().removeClass('cursor-in').addClass('cursor-out');
    }
  );
});
