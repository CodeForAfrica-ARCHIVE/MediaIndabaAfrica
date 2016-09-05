
// Make header fit height
if ($('home .header').outerHeight(true) < $(window).height()) {
  var header_height = $('.header').height();
  var window_height = $(window).height();

  var header_padding_top = window_height/2 - header_height/2;
  var header_padding_bottom = $('home .header').outerHeight();
  
  $('.header').css('padding-top', header_padding_top);
  $('.header').outerHeight(window_height);
  
}

// Activate tootltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


