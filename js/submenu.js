$('.nav__bottom__link').on('click', function(){
  $(this).toggleClass('angle-down')
  $(this).toggleClass('angle-up')
  $(this).next().toggleClass('sub-menu_active')
});