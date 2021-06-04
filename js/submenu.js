$(document).ready(function(){
  $('.nav__bottom__link').on('click', function(){
    
    $('.nav__bottom__link').addClass('angle-down')
    $('.nav__bottom__link').removeClass('angle-up')
    $('.nav__bottom__sub-menu').removeClass('sub-menu_active')
    console.log($(this).hasClass('angle-down'))
    // if ($(this).hasClass('angle-down')) {
    //   console.log('angle-down')
    //   $(this).addClass('angle-up');
    //   $(this).removeClass('angle-down');
    //   $(this).next().addClass('sub-menu_active')
    // } else {
    //   $(this).removeClass('angle-up');
    //   $(this).addClass('angle-down');
    //   $(this).next().removeClass('sub-menu_active')
    // }
    $(this).removeClass('angle-up');
    //   $(this).addClass('angle-down');
    //   $(this).next().removeClass('sub-menu_active')
  });
})