$(document).ready(function() {
  // global variables 
  var moreSection = $('.moreSection');
  var descriptionSection = $('.descriptionSection');
  var showMore = $('.descriptionSection .showMoreLink');
  var showLess = $('.descriptionSection .showLessLink');
  var showMoreMobile = $('.workBlock .showMoreLink');
  var showLessMobile = $('.workBlock .showLessLink');

  // typing effect
  var typist = function() {
    $('#what-i-like').typist({
        speed: 10
      })
      .typistPause(500)
      .typistAdd('coffee.')
      .typistPause(2000)
      .typistRemove(7)
      .typistAdd('web design.')
      .typistPause(2000)
      .typistRemove(11)
      .typistAdd('3D animation.')
      .typistPause(2000)
      .typistRemove(13)
      .typistAdd('playing music.')
      .typistPause(2000)
      .typistRemove(14)
      .typistAdd('cooking.')
      .typistPause(2000)
      .typistRemove(8)
      .typistAdd('doing things.')
      .typistStop();
  }

  // initiate typist
  typist();

  //my attempt at a carousel
  var rotate = function() {
    var initCarouselObj = [];
    var selected = 1;
    var carousel = $('#carousel');
    var descriptionBlock = $('.descriptionBlock');
    var descriptionBlockLength = descriptionBlock.children().length;

    // console.log('selected = ' + selected);

    for (var i = 1; i < carousel.children().length + 1; i++) {
      initCarouselObj[i] = {
        num: i,
        rotY: (i - 1) * 60
      };
    }

    $('.next').click(function() {
      $(descriptionSection).removeClass('active');
      $(moreSection).removeClass('show');
      $(showMore).parent().show();
      $(showLess).parent().hide();

      if (selected == initCarouselObj.length - 1) {
        selected = 1;
      } else {
        selected++;
      }

      descriptionBlock.children().removeClass('active');

      for (var i = 1; i < descriptionBlockLength + 1; i++) {
        var descriptionIthChild = $('.descriptionSection:nth-child(' + i + ')');

        if (i == selected) {
          descriptionIthChild.addClass('active');
        }
      }

      for (var i = 1; i < carousel.children().length + 1; i++) {
        var carouselImgIthChild = $('#carousel .image:nth-child(' + i + ')');

        if (initCarouselObj[i].num == selected) {
          carouselImgIthChild.css('transform', 'rotateY(' + (initCarouselObj[i].rotY - 60) + 'deg) translateZ(500px)');
        } else {
          carouselImgIthChild.css('transform', 'rotateY(' + (initCarouselObj[i].rotY - 60) + 'deg) translateZ(300px)');
        }

        initCarouselObj[i].rotY = (initCarouselObj[i].rotY - 60);
      }
      // console.log('selected = ' + selected);
    });

    $('.prev').click(function() {
      $(descriptionSection).removeClass('active');
      $(moreSection).removeClass('show');
      $(showMore).parent().show();
      $(showLess).parent().hide();

      if (selected == 1) {
        selected = initCarouselObj.length - 1;
      } else {
        selected--;
      }

      descriptionBlock.children().removeClass('active');

      for (var i = 1; i < descriptionBlockLength + 1; i++) {
        var descriptionIthChild = $('.descriptionSection:nth-child(' + i + ')');

        if (i == selected) {
          descriptionIthChild.addClass('active');
        }
      }

      for (var i = 1; i < carousel.children().length + 1; i++) {
        var carouselImgIthChild = $('#carousel .image:nth-child(' + i + ')');
        var descriptionIthChild = $('.descriptionSection:nth-child(' + i + ')');

        if (initCarouselObj[i].num == selected) {
          carouselImgIthChild.css('transform', 'rotateY(' + (initCarouselObj[i].rotY + 60) + 'deg) translateZ(500px)');
        } else {
          carouselImgIthChild.css('transform', 'rotateY(' + (initCarouselObj[i].rotY + 60) + 'deg) translateZ(300px)');
        }

        initCarouselObj[i].rotY = (initCarouselObj[i].rotY + 60);
      }
      // console.log('selected = ' + selected);
    });

  };

  // initiates rotate function
  rotate();

  // handles sticky nav
  var stickyNav = function() {
    $(window).scroll(function() {
      if($(window).scrollTop() >= $(window).height()) {
        $('nav ul').addClass('fixed');
      } else {
        $('nav ul').removeClass('fixed');
      }
    });
  };

  // initiate sticky nav
  stickyNav();

  // toggles more info sections
  var showMoreToggle = function() {
    $(showMore).click(function() {
      $(this).parent().toggle()
        .next().toggle();

      $(this).parent().parent().find($(moreSection)).addClass('show');
    });

    $(showLess).click(function() {
      $(this).parent().toggle()
        .prev().toggle();

      $(this).parent().parent().find($(moreSection)).removeClass('show');
    });

    $(showMoreMobile).click(function() {
      $(this).parent().toggle()
        .next().toggle();

      $(this).parent().parent().find($(moreSection)).addClass('show');
    });

    $(showLessMobile).click(function() {
      $(this).parent().toggle()
        .prev().toggle();

      $(this).parent().parent().find($(moreSection)).removeClass('show');
    });
  };

  showMoreToggle();

  // handles link to top
  var linkTop = function() {
    $(window).scroll(function() {
      if ($(window).scrollTop() >= $(window).height()) {
        $('.topLink').addClass('show');
      } else {
        $('.topLink').removeClass('show');
      }
    });

    $(window).scroll(function() {
      if ($(window).scrollTop() >= $('footer').position().top) {
        $('.topLink').addClass('notFixed');
      } else {
        $('.topLink').removeClass('notFixed');
      }
    });
  }

  // initiate link to top
  linkTop();

  // smooth scroll courtesy of Karl Swedberg: http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links
  var smoothScroll = function() {
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 700);
            return false;
          }
        }
      });
    });
  }

  // intiate smoothScroll
  smoothScroll();
});
