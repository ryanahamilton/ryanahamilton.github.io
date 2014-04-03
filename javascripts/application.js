if (typeof rah === 'undefined') { rah = {};}

// ==============================================================================================================
rah.home = (function($, undefined){
  function init() {

    // Fade in of header, aesthic value only
    $('header').fadeIn(1400);

    // Initializes Facebox
    $('a[rel*=facebox]').facebox();

    // Add smooth scrolling to nav links
    $('nav a').anchorAnimate();

    // Check the initial Position of the Sticky Header
    var stickyNavTop = $('nav').offset().top;

    $(window).scroll(function(){
      if( $(window).scrollTop() > stickyNavTop ) {
          $('nav').addClass('fixed');
      } else {
          $('nav').removeClass('fixed');
      }
    });

    // Renders latest Instagram photos
    // 849 = User ID
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      cache: false,
      url: 'https://api.instagram.com/v1/users/849/media/recent/?access_token=849.e20f292.f2a2382a03394356bc8747d9decfe12f',
      success: function(data) {
        for (var i = 0; i < 6; i++) {
          $('#instagram').append("<a target='_blank' title='View Larger' href='" + data.data[i].link +"'><img src='" + data.data[i].images.low_resolution.url +"' alt='' /></a>");
        }
      }
    });

    // TODO: Form validation if browser doesn't support reuired attributes on input/textarea elements
    // if !(Modernizr.input.required) {
    //
    // }

  }

  return {
    init: init
  }
})(jQuery);

// ==============================================================================================================
$(function(){
  rah.home.init();
});