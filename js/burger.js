$(document).ready(function () {
  $('.nav__toggle').on('click', function() {
    console.log('click')
    $('.nav__top__block').toggleClass('nav__top__block_active')
    $('.nav__top__sign-in-btn').toggleClass('btn_simple btn')
    $('.nav__top__btn-close').toggleClass('nav__top__btn-close_active')
  })
  $('.nav__top__btn-close').on('click', function() {
    $('.nav__top__block').toggleClass('nav__top__block_active')
    $('.nav__top__sign-in-btn').toggleClass('btn_simple btn')
    $('.nav__top__btn-close').toggleClass('nav__top__btn-close_active')
  })
})