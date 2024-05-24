jQuery(document).ready(function($) {

              $(function () {
                  var imagesCompareElement = $('.js-img-compare').imagesCompare();
                  var imagesCompare = imagesCompareElement.data('imagesCompare');
                  var events = imagesCompare.events();

                  $('.js-front-btn').on('click', function (event) {
                      event.preventDefault();
                      imagesCompare.setValue(1, true);
                  });

                  $('.js-back-btn').on('click', function (event) {
                      event.preventDefault();
                      imagesCompare.setValue(0, true);
                  });

                  $('.js-toggle-btn').on('click', function (event) {
                      event.preventDefault();
                      if (imagesCompare.getValue() >= 0 && imagesCompare.getValue() < 1) {
                          imagesCompare.setValue(1, true);
                      } else {
                          imagesCompare.setValue(0, true);
                      }
                  });
              });

});