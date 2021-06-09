document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs__lang-btn').forEach(function (tabsLang) {
    tabsLang.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      // console.log(path)
      document.querySelectorAll('.tabs__lang-btn').forEach(function (content) {
        content.classList.remove('tabs__lang-btn_active')
      })
      document.querySelectorAll('.catalog__language').forEach(function (content) {
        content.classList.remove('catalog__language_active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('tabs__lang-btn_active')
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__language_active')
    })
  })
  document.querySelectorAll('.tabs__author-btn').forEach(function (tabsAuthor) {
    tabsAuthor.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tabs__author-btn').forEach(function (content) {
        content.classList.remove('tabs__author-btn_active')
      })
      document.querySelectorAll('.catalog__content__author').forEach(function (content) {
        content.classList.remove('author_active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('tabs__author-btn_active')
      document.querySelector(`[data-target="${path}"]`).classList.add('author_active')
    })
  })
})
