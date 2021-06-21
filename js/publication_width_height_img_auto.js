$(document).ready(function () {
  if((screen.width <= 550) || (window.innerWidth <= 550)) {
    var sc = document.createElement('script');
    sc.src = 'https://sourse.xakplant.ru/lib/js/stickjaw.min.js';
    sc.type = 'text/javascript';
    if(typeof sc['async'] !== 'undefined') {
       sc.async = true;
    }
    $(sc).insertAfter($('.modal-overlay.closed'));
    var sj = new SJ();
  }
})