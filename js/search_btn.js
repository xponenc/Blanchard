$(document).ready(function () {
    console.log('768')
    var width = screen.width
    if (width == 768 ) {
      console.log('768')
      $('.search__btn').on('click', function() {
        console.log('search btn')
        $('.nav__toggle').css('display', 'none')
      })
    }
  })