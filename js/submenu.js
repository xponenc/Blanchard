$(document).ready(function(){
  $('.nav__bottom__link').on('click', function(){
    $('.nav__bottom__link').addClass('angle-down')
    $('.nav__bottom__link').removeClass('angle-up')
    $('.nav__bottom__sub-menu').removeClass('sub-menu_active')
    $(this).addClass('angle-up')
    $(this).next().toggleClass('sub-menu_active')
  });
})