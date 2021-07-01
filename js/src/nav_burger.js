$(document).ready(function () {
  console.log('butger')
  $('.nav__toggle').on('click', function() {
    $('.nav__top-block').toggleClass('nav__top-block_active')
    $('.nav__top-sign-in-btn').toggleClass('btn_simple btn')
    $('.nav__top-burger-close').toggleClass('nav__top-burger-close_active')
  })
  $('.nav__top-burger-close').on('click', function() {
    $('.nav__top-block').toggleClass('nav__top-block_active')
    $('.nav__top-sign-in-btn').toggleClass('btn_simple btn')
    $('.nav__top-burger-close').toggleClass('nav__top-burger-close_active')
  })
})