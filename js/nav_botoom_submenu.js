$(document).ready(function(){
  $('.nav__bottom__link').on('click', function(){
    const btn = this
    $('.nav__bottom__link').each(function (index, element){
      if (element === btn) {
        $(element).toggleClass('angle-up');
        $(element).toggleClass('angle-down');
        $(element).next().toggleClass('sub-menu_active')
      } else {
        $(element).addClass('angle-down')
        $(element).removeClass('angle-up')
        $(element).next().removeClass('sub-menu_active')
      }
    });
  });
});