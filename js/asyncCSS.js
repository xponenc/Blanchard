function asyncCSS(href) {
    var css = document.createElement('link');
    css.rel = "stylesheet";
    css.href = href;
    document.head.appendChild(css);
}

// asyncCSS('css/fonts.css');
// asyncCSS('css/normalize.css');
asyncCSS('css/vendor/simplebar.css');
asyncCSS('css/vendor/choices.min.css');
asyncCSS('css/vendor/justValidateTooltip.min.css');
asyncCSS('css/vendor/swiper-bundle.min.css');
asyncCSS('css/vendor/jquery-ui.css')
