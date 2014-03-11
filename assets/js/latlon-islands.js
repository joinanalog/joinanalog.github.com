(function($) {
  $(function() {
    $(window).resize(function() {
      var sH = $(window).height();
      $('.latlon-islands-hero-sub').css('height', sH + 'px');
    });

  });
  $(window).load(function() {
    $(window).resize().scroll();
  });
})(jQuery);