var accessibilitySwitcher = function(language) {

  var contrastIdentifiers = ['default', 'high'];

  function setActiveContrast(contrast) {
    _.each(contrastIdentifiers, function(id) {
      $('body').removeClass('contrast-' + id);
      $('.pl-banner').removeClass('contrast-' + id);
	  $('.pl-banner-glob').removeClass('contrast-' + id);
	  $('.pl-banner-nat').removeClass('contrast-' + id);
      $('header.fixed-header').removeClass('contrast-' + id);
      $('header.fixed-header .site-navbar ul li a').removeClass('contrast-' + id);
      $('.usa-footer-secondary_section').removeClass('contrast-' + id);
      $('.usa-footer').removeClass('contrast-' + id);
      $('.main-content').removeClass('contrast-' + id);
      $('.pl-grid').removeClass('contrast-' + id);
      $('.media-body').removeClass('contrast-' + id);
      $('.logo-home').removeClass('contrast-' + id);
      $('table th').removeClass('contrast-' + id);
      $('table td').removeClass('contrast-' + id);
      $('a').removeClass('contrast-' + id);
      $('a:hover').removeClass('contrast-' + id);
      $('a:active').removeClass('contrast-' + id);
      $('a:visited').removeClass('contrast-' + id);
      $('.panel').removeClass('contrast-' + id);
      $('.panel-heading').removeClass('contrast-' + id);
      $('h5').removeClass('contrast-' + id);
      $('.dropdown:hover .dropbtn').removeClass('contrast-' + id);
      $('.dropdown-content a:hover').removeClass('contrast-' + id);
      $('.dropdown-content').removeClass('contrast-' + id);
      $('.dropbtn').removeClass('contrast-' + id);
      $('.ct-label').removeClass('contrast-' + id);
      $('.breadcrumb').removeClass('contrast-' + id);
      $('.usa-disclaimer').removeClass('contrast-' + id);
      $('.ct-axis-title').removeClass('contrast-' + id);
	    $('#filtry').removeClass('contrast-' + id);
      $('#krajowa').removeClass('contrast-' + id);
      setTimeout(function() {
				$('#cookie-toolkit.visible').removeClass('contrast-' + id);
        $('#cookie-toolkit-accept').removeClass('contrast-' + id);
			}, 600);

    });
    $('body').addClass('contrast-' + contrast);
    $('.pl-banner').addClass('contrast-' + contrast);
    $('.pl-banner-glob').addClass('contrast-' + contrast);
    $('.pl-banner-nat').addClass('contrast-' + contrast);
    $('header.fixed-header').addClass('contrast-' + contrast);
    $('header.fixed-header .site-navbar ul li a').addClass('contrast-' + contrast);
    $('.usa-footer-secondary_section').addClass('contrast-' + contrast);
    $('.usa-footer').addClass('contrast-' + contrast);
    $('.main-content').addClass('contrast-' + contrast);
    $('.pl-grid').addClass('contrast-' + contrast);
    $('.media-body').addClass('contrast-' + contrast);
    $('.logo-home').addClass('contrast-' + contrast);
    $('table th').addClass('contrast-' + contrast);
    $('table td').addClass('contrast-' + contrast);
    $('a').addClass('contrast-' + contrast);
    $('a:hover').addClass('contrast-' + contrast);
    $('a:active').addClass('contrast-' + contrast);
    $('a:visited').addClass('contrast-' + contrast);
    $('.panel').addClass('contrast-' + contrast);
    $('.panel-heading').addClass('contrast-' + contrast);
    $('h5').addClass('contrast-' + contrast);
    $('.dropdown:hover .dropbtn').addClass('contrast-' + contrast);
    $('.dropdown-content a:hover').addClass('contrast-' + contrast);
    $('.dropdown-content').addClass('contrast-' + contrast);
    $('.dropbtn').addClass('contrast-' + contrast);
    $('.ct-label').addClass('contrast-' + contrast);
    $('.breadcrumb').addClass('contrast-' + contrast);
    $('.usa-disclaimer').addClass('contrast-' + contrast);
    $('.ct-axis-title').addClass('contrast-' + contrast);
    $('#filtry').addClass('contrast-' + contrast);
    $('#krajowa').addClass('contrast-' + contrast);
    setTimeout(function() {
        $('#cookie-toolkit.visible').addClass('contrast-' + contrast);
        $('#cookie-toolkit-accept').addClass('contrast-' + contrast);
    }, 600);

    createCookie("contrast", contrast, 365);
  }

  function getActiveContrast() {
    var contrast = _.filter(contrastIdentifiers, function(id) {
      return $('body').hasClass('contrast-' + id);
    });

    return contrast ? contrast : contrastIdentifiers[0];
  }

  function createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
  }

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  window.onload = function(e) {
    var cookie = readCookie("contrast");
    var contrast = cookie ? cookie : contrastIdentifiers[0];
    setActiveContrast(contrast);
    imageFix(contrast);
  }

  $(document).on('click','body *',function(e){
    var cookie = readCookie("contrast");
    var contrast = cookie ? cookie : contrastIdentifiers[0];
    setActiveContrast(contrast);
    imageFix(contrast);
  });

  window.onunload = function(e) {
    var contrast = getActiveContrast();
    createCookie("contrast", contrast, 365);
  }

  var cookie = readCookie("contrast");
  var contrast = cookie ? cookie : contrastIdentifiers[0];
  setActiveContrast(contrast);

  ////////////////////////////////////////////////////////////////////////////////////

    _.each(contrastIdentifiers, function(contrast) {
      $('.kontrast').append($('<a />').attr({
        'href': 'javascript:void(0)',
        'data-contrast': contrast
      }).append($('<img />').attr({
         class: contrast,
        'height': '25px'

      })).click(function() {
        setActiveContrast($(this).data('contrast'));
        imageFix(contrast);
      }));
    });

  function imageFix(contrast) {
  if (contrast == 'high') {
    _.each($('img:not([src*=high-contrast])'), function(goalImage){
      $(goalImage).attr('src', $(goalImage).attr('src').replace('img/', 'img/'+ language +'/high-contrast/'));
    })
  } else {
    // Remove high-contrast
    _.each($('img[src*=high-contrast]'), function(goalImage){
      $(goalImage).attr('src', $(goalImage).attr('src').replace( language +'/high-contrast/', ''));
    })
  }
};

};
