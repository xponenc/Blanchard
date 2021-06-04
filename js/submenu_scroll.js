  $('.nav__bottom__sub-menu').each(function (index, element){
    new SimpleBar(element, {
      autoHide: false,
      scrollbarMaxSize: 28,
    });
  });