$(document).ready(function () {
  $('.nav__toggle').on('click', function() {
    $('.nav__top__block').toggleClass('nav__top__block_active')
    $('.nav__top__sign-in-btn').toggleClass('btn_simple btn')
    $('.nav__top__burger-close').toggleClass('nav__top__burger-close_active')
  })
  $('.nav__top__burger-close').on('click', function() {
    $('.nav__top__block').toggleClass('nav__top__block_active')
    $('.nav__top__sign-in-btn').toggleClass('btn_simple btn')
    $('.nav__top__burger-close').toggleClass('nav__top__burger-close_active')
  })
})