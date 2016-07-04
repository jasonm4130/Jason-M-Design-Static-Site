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
  $('.portfolio').matchHeight({
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

// 404 Error Page text
$(window).load(function() {

    (function () {
    var $animate, $container, $message, $paragraph, MESSAGES, animate, initialise, scramble;
    MESSAGES = [];
    MESSAGES.push({
        delay: 0,
        text: 'ERROR 404 NOT FOUND'
    });
    MESSAGES.push({
        delay: 800,
        text: 'Oops, looks like the page'
    });
    MESSAGES.push({
        delay: 1800,
        text: 'you were after has moved.'
    });
    MESSAGES.push({
        delay: 3200,
        text: 'Or maybe it was never here to begin with'
    });
    MESSAGES.push({
        delay: 4800,
        text: 'These links below might help you find your way.'
    });
    $container = $('#error-container');
    $message = $('#error-message');
    $animate = $('#animate');
    $paragraph = null;
    scramble = function (element, text, options) {
        var $element, addGlitch, character, defaults, ghostCharacter, ghostCharacters, ghostLength, ghostText, ghosts, glitchCharacter, glitchCharacters, glitchIndex, glitchLength, glitchProbability, glitchText, glitches, i, k, letter, object, order, output, parameters, ref, results, settings, shuffle, target, textCharacters, textLength, wrap;
        defaults = {
            probability: 0.2,
            glitches: '-|/\\',
            blank: '',
            duration: text.length * 40,
            ease: 'easeInOutQuad',
            delay: 0
        };
        $element = $(element);
        settings = $.extend(defaults, options);
        shuffle = function () {
            if (Math.random() < 0.5) {
                return 1;
            } else {
                return -1;
            }
        };
        wrap = function (text, classes) {
            return '<span class="' + classes + '">' + text + '</span>';
        };
        glitchText = settings.glitches;
        glitchCharacters = glitchText.split('');
        glitchLength = glitchCharacters.length;
        glitchProbability = settings.probability;
        glitches = function () {
            var j, len, results;
            results = [];
            for (j = 0, len = glitchCharacters.length; j < len; j++) {
                letter = glitchCharacters[j];
                results.push(wrap(letter, 'glitch'));
            }
            return results;
        }();
        ghostText = $element.text();
        ghostCharacters = ghostText.split('');
        ghostLength = ghostCharacters.length;
        ghosts = function () {
            var j, len, results;
            results = [];
            for (j = 0, len = ghostCharacters.length; j < len; j++) {
                letter = ghostCharacters[j];
                results.push(wrap(letter, 'ghost'));
            }
            return results;
        }();
        textCharacters = text.split('');
        textLength = textCharacters.length;
        order = function () {
            results = [];
            for (var j = 0; 0 <= textLength ? j < textLength : j > textLength; 0 <= textLength ? j++ : j--) {
                results.push(j);
            }
            return results;
        }.apply(this).sort(this.shuffle);
        output = [];
        for (i = k = 0, ref = textLength; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
            glitchIndex = Math.floor(Math.random() * (glitchLength - 1));
            glitchCharacter = glitches[glitchIndex];
            ghostCharacter = ghosts[i] || settings.blank;
            addGlitch = Math.random() < glitchProbability;
            character = addGlitch ? glitchCharacter : ghostCharacter;
            output.push(character);
        }
        object = { value: 0 };
        target = { value: 1 };
        parameters = {
            duration: settings.duration,
            ease: settings.ease,
            step: function () {
                var index, l, progress, ref1;
                progress = Math.floor(object.value * (textLength - 1));
                for (i = l = 0, ref1 = progress; 0 <= ref1 ? l <= ref1 : l >= ref1; i = 0 <= ref1 ? ++l : --l) {
                    index = order[i];
                    output[index] = textCharacters[index];
                }
                return $element.html(output.join(''));
            },
            complete: function () {
                return $element.html(text);
            }
        };
        return $(object).delay(settings.delay).animate(target, parameters);
    };
    animate = function () {
        var data, element, index, j, len, options;
        for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
            data = MESSAGES[index];
            element = $paragraph.get(index);
            element.innerText = '';
            options = { delay: data.delay };
            scramble(element, data.text, options);
        }
    };
    initialise = function () {
        var index, j, len, text;
        $animate.click(animate);
        for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
            text = MESSAGES[index];
            $message.append('<p>');
        }
        $paragraph = $container.find('p');
        animate();
    };
    initialise();
}.call(this));

});
