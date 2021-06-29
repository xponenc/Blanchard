// document.addEventListener('DOMContentLoaded', function () {
//   document.querySelectorAll('.lang-tabs__btn').forEach(function (tabsLang) {
//     tabsLang.addEventListener('click', function (event) {
//       const path = event.currentTarget.dataset.path
//       // console.log(path)
//       document.querySelectorAll('.lang-tabs__btn').forEach(function (content) {
//         content.classList.remove('lang-tabs__btn_active')
//       })
//       document.querySelectorAll('.catalog__language').forEach(function (content) {
//         content.classList.remove('catalog__language_active')
//       })
//       document.querySelector(`[data-path="${path}"]`).classList.add('lang-tabs__btn_active')
//       document.querySelector(`[data-target="${path}"]`).classList.add('catalog__language_active')
//     })
//   })
//   document.querySelectorAll('.catalog__item-btn').forEach(function (tabsAuthor) {
//     tabsAuthor.addEventListener('click', function (event) {
//       const path = event.currentTarget.dataset.path
//       document.querySelectorAll('.catalog__item-btn').forEach(function (content) {
//         content.classList.remove('catalog__item-btn_active')
//       })
//       document.querySelectorAll('.catalog__content__author').forEach(function (content) {
//         content.classList.remove('author_active')
//       })
//       document.querySelector(`[data-path="${path}"]`).classList.add('catalog__item-btn_active')
//       document.querySelector(`[data-target="${path}"]`).classList.add('author_active')
//     })
//   })
// })


$(document).ready(function () {
  $('.lang-tabs__btn').on('click', function() {
    const path = $(this).data('path')

    $('.lang-tabs__btn').removeClass('lang-tabs__btn_active')
    $('.catalog__language').removeClass('catalog__language_active')

    $(`[data-path="${path}"]`).addClass('lang-tabs__btn_active')
    $(`[data-target="${path}"]`).addClass('catalog__language_active')
  })

  $('.catalog__item-btn').on('click', function() {
    const path = $(this).data('path')

    $('.catalog__item-btn').removeClass('catalog__item-btn_active')
    $('.catalog__author').removeClass('author_active')

    $(`[data-path="${path}"]`).addClass('catalog__item-btn_active')
    $(`[data-target="${path}"]`).addClass('author_active')

    if ((screen.width <= 768) || (window.innerWidth <= 768)) {
          let offset = $(`[data-target="${path}"]`).offset().top;
          $('body,html').animate({
              scrollTop: offset,
          }, 1000);
      }
  })
})