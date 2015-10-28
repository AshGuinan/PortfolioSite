$('.carousel').carousel();

$('.text_content').addClass('animated fadeIn');

$( '.title' ).hover(
  function() {
    $( this ).addClass('animated pulse');
  }, function() {
    $( this ).removeClass('animated pulse');
  }
);

$('.More').addClass('animated zoomIn');