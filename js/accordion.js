$(function () {
  console.log('start')
    $("#accordion").accordion({
        heightStyle: 'content',
        icons: false,
        header: '.accordion__btn',
    });
});

// add ARIA for accordion

var accordionButtons = $('.accordion__btn');

function accordionToggle() {
  $('.accordion__btn').on('click', function(e) {
    $control = $(this);

    accordionContent = $control.attr('aria-controls');
    console.log(accordionContent)
    checkOthers($control[0]);

    isAriaExp = $control.attr('aria-expanded');
    newAriaExp = (isAriaExp == "false") ? "true" : "false";
    $control.attr('aria-expanded', newAriaExp);

    isAriaHid = $('#' + accordionContent).attr('aria-hidden');
    if (isAriaHid == "true") {
      $('#' + accordionContent).attr('aria-hidden', "false");
      // $('#' + accordionContent).css('display', 'block');
    } else {
      $('#' + accordionContent).attr('aria-hidden', "true");
      // $('#' + accordionContent).css('display', 'none');
    }
  });
};

function checkOthers(elem) {
  for (var i=0; i<accordionButtons.length; i++) {
    if (accordionButtons[i] != elem) {
      if (($(accordionButtons[i]).attr('aria-expanded')) == 'true') {
        $(accordionButtons[i]).attr('aria-expanded', 'false');
        content = $(accordionButtons[i]).attr('aria-controls');
        $('#' + content).attr('aria-hidden', 'true');
        // $('#' + content).css('display', 'none');
      }
    }
  }
};

//call this function on page load
accordionToggle();
