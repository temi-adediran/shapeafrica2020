(function ($) {
  "use strict";
  jQuery(function () {
    jQuery("#defaultCountdown").countdown({ until: new Date(2021, 12, 9, 0) }); // year, month, date, hour
  });
})(jQuery);
