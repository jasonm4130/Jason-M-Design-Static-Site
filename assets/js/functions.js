$( document ).ready(function() {

  // Portfolio Filter Initiate
  $('.portfolio-items').mixItUp({
    load:{
      sort: 'random'
    }
  });

  //Match Height Fix for Gallery
  $('.match-height').matchHeight({
    byRow: true
  });

  //Portfolio Links Fade In / Out
  $('.portfolio-item').hover(function(){
    $(this).find('.img-hover').fadeIn('slow');
  }, function(){
    $(this).find('.img-hover').fadeOut('slow');
  });

  //Testimonials Slider
  $('.testimonials-slider').unslider({
    arrows: {
      prev: '<a class="unslider-arrow prev"><i class="fa fa-chevron-left fa-3x" aria-hidden="true"></i></a>',
	    next: '<a class="unslider-arrow next"><i class="fa fa-chevron-right fa-3x" aria-hidden="true"></i></a>',
    },
    autoplay: true,
    delay: 5000,
    infinite: true,
    nav: false,
  });

  //Lightbox
  lightbox.option();

  //Youtube Defer Loading
  $(".youtube-video").each(function() {
      // Based on the YouTube ID, we can easily find the thumbnail image
      $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

      // Overlay the Play icon to make it look like a video player
      $(this).append($('<div/>', {'class': 'play'}));

      $(document).delegate('#'+this.id, 'click', function() {
          // Create an iFrame with autoplay set to true
          var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
          if ($(this).data('params')) iframe_url+='&'+$(this).data('params');

          // The height and width of the iFrame should be the same as parent
          var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url })

          // Replace the YouTube thumbnail with YouTube HTML5 Player
          $(this).replaceWith(iframe);
      });
  });

  //Smooth Scrooling
  $(function() {
    $('ul.navbar-nav > li > a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  //Bootstrap Index Modal btn fix
  $('.btn-index-modal').on('click', function (e) {
    var $target = $($(this).data('target'));
    $target.data('triggered',true);
    $('#blog-index').modal('hide');
    setTimeout(function() {
            $target.modal('show')
                .data('triggered',false); // prevents multiple clicks from reopening
    }, 500); // milliseconds
    return false;
});

  //Animations
  $(window).scroll(function(){
    // add animation
    $('.portfolio-title').each(function(i, el){
      var el = $(el);
      if(el.visible(true)) {
        el.addClass('portfolio-animate');
      }
    });
    $('.unslider').each(function(i, el){
      var el = $(el);
      if(el.visible(true)) {
        el.addClass('animate');
      }
    });
    $('.testimonials-title .title').each(function(i, el){
      var el = $(el);
      if(el.visible(true)) {
        el.addClass('animate-title');
      }
    });
    $('.testimonials-title .lead').each(function(i, el){
      var el = $(el);
      if(el.visible(true)) {
        el.addClass('animate-lead');
      }
    });
    $('.youtube-title .title').each(function(i, el){
      var el = $(el);
      if(el.visible(true)) {
        el.addClass('animate-title');
      }
    });
    $('.youtube-title .lead').each(function(i, el){
      var el = $(el);
      if(el.visible(true)) {
        el.addClass('animate-lead');
      }
    });
    $('.left-col').each(function(i, el){
      var el = $(el);
      if(el.visible(true)) {
        el.addClass('animate-left');
      }
    });
    $('.right-col').each(function(i, el){
      var el = $(el);
      if(el.visible(true)) {
        el.addClass('animate-right');
      }
    });
    $('.blog-title .title').each(function(i, el){
      var el = $(el);
      if(el.visible(true)) {
        el.addClass('animate-title');
      }
    });
    $('.blog-title .lead').each(function(i, el){
      var el = $(el);
      if(el.visible(true)) {
        el.addClass('animate-lead');
      }
    });
    $('.blog .post').each(function(i, el){
      var el = $(el);
      if(el.visible(true)) {
        el.addClass('animate-post');
      }
    });
    $('.contact .heading').each(function(i, el){
      var el = $(el);
      if(el.visible(true)) {
        el.addClass('animate');
      }
    });
    $('.contact .social-icons a').each(function(i, el){
      var el = $(el);
      if(el.visible(true)) {
        el.addClass('social-icons-animate');
      }
    });
  });
});
