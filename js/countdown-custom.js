(function ($) {
  "use strict";
  jQuery(function () {
    jQuery("#defaultCountdown").countdown({ until: new Date(2021, 11, 1, 8) }); // year, month, date, hour
  });
})(jQuery);
