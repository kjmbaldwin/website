
//keeps track of where the banner is
function sticky_relocate() {
  var window_top = $(window).scrollTop();
  var div_top = $('#content-anchor').offset().top;
  if (window_top > div_top) {
      $('#sticky').addClass('stuck');
      $('#sticky-phantom').show();
  } else {
      $('#sticky').removeClass('stuck');
      $('#sticky-phantom').hide();
  }
}

$(function () {  
  $(window).scroll(sticky_relocate);  
  sticky_relocate();  
});

$(".social-icon").mouseover(function () {
  $(this).attr('src', $(this).data("hover"));
}).mouseout(function () {
  $(this).attr('src', $(this).data("src"));
});

$('.special.cards .image').dimmer({
  on: 'hover'
});
