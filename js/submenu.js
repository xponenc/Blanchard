$(document).ready(function(){
  // console.log('старт')
  $('.nav__bottom__link').on('click', function(){
    // console.log('click')
    const btn = this
    // console.log(btn)
    $('.nav__bottom__link').each(function (index, element){
      // console.log(btn)
      // console.log(element)
      if (element === btn) {
        // console.log('true')
        $(element).toggleClass('angle-up');
        $(element).toggleClass('angle-down');
        $(element).next().toggleClass('sub-menu_active')
      } else {
        // console.log('false')
        $(element).addClass('angle-down')
        $(element).removeClass('angle-up')
        $(element).next().removeClass('sub-menu_active')
      }
    });

  });
});