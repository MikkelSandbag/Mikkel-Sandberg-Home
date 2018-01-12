// global variables
const initCarouselObj = [];
let selected = 1;
const numCarouselItems = $('#carousel').children().length;
let degOffset = 360 / numCarouselItems;
const selectedDistance = 800;
const notSelectedDistance = 320;
const descriptionBlock = $('.descriptionBlock');
const descriptionBlockLength = descriptionBlock.children().length;
const moreSection = $('.moreSection');
const descriptionSection = $('.descriptionSection');
const showMore = $('.descriptionSection .showMoreLink');
const showLess = $('.descriptionSection .showLessLink');
const showMoreMobile = $('.workBlock .showMoreLink');
const showLessMobile = $('.workBlock .showLessLink');

// typing effect; initialized after page loaded
const initTypist = function() {
  $('#what-i-like')
    .typist({
      speed: 10
    })
    .typistPause(1000)
    .typistAdd('making websites.')
    .typistPause(2000)
    .typistRemove(16)
    .typistPause(1000)
    .typistAdd('podcasting.')
    .typistPause(2000)
    .typistRemove(11)
    .typistPause(1000)
    .typistAdd('3D animation.')
    .typistPause(2000)
    .typistRemove(13)
    .typistPause(1000)
    .typistAdd('drinking coffee.')
    .typistPause(2000)
    .typistRemove(16)
    .typistPause(1000)
    .typistAdd('video games.')
    .typistPause(2000)
    .typistRemove(12)
    .typistPause(1000)
    .typistAdd('cooking.')
    .typistPause(2000)
    .typistRemove(8)
    .typistPause(1000)
    .typistAdd('playing music.')
    .typistPause(2000)
    .typistRemove(14)
    .typistPause(1000)
    .typistAdd('doing things.')
    .typistStop();
};

const initStickyNav = function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() >= $(window).height()) {
      $('nav ul').addClass('fixed');
    } else {
      $('nav ul').removeClass('fixed');
    }
  });
};

const initCarouselData = function() {
  for (let i = 1; i < numCarouselItems + 1; i++) {
    initCarouselObj[i] = {
      num: i,
      rotY: (i - 1) * degOffset
    };
  }
};

const initCarousel = function() {
  initCarouselData();

  for (let i = 1; i < numCarouselItems + 1; i++) {
    let carouselImgIthChild = $('#carousel .image:nth-child(' + i + ')');

    if (initCarouselObj[i].num == selected) {
      carouselImgIthChild.css('transform', `rotateY(${initCarouselObj[i].rotY}deg) translateZ(${selectedDistance}px)`);
    } else {
      carouselImgIthChild.css(
        'transform',
        `rotateY(${initCarouselObj[i].rotY}deg) translateZ(${notSelectedDistance}px)`
      );
    }
  }
};

const watchNextButton = function() {
  $('.next').click(function() {
    $(descriptionSection).removeClass('active');
    $(moreSection).removeClass('show');
    $(showMore)
      .parent()
      .show();
    $(showLess)
      .parent()
      .hide();

    if (selected == initCarouselObj.length - 1) {
      selected = 1;
    } else {
      selected++;
    }

    descriptionBlock.children().removeClass('active');

    for (let i = 1; i < descriptionBlockLength + 1; i++) {
      let descriptionIthChild = $('.descriptionSection:nth-child(' + i + ')');

      if (i == selected) {
        descriptionIthChild.addClass('active');
      }
    }

    for (let i = 1; i < numCarouselItems + 1; i++) {
      let carouselImgIthChild = $('#carousel .image:nth-child(' + i + ')');

      if (initCarouselObj[i].num == selected) {
        carouselImgIthChild.css(
          'transform',
          `rotateY(${initCarouselObj[i].rotY - degOffset}deg) translateZ(${selectedDistance}px)`
        );
      } else {
        carouselImgIthChild.css(
          'transform',
          `rotateY(${initCarouselObj[i].rotY - degOffset}deg) translateZ(${notSelectedDistance}px)`
        );
      }

      initCarouselObj[i].rotY = initCarouselObj[i].rotY - degOffset;
    }
  });
};

const watchPrevButton = function() {
  $('.prev').click(function() {
    $(descriptionSection).removeClass('active');
    $(moreSection).removeClass('show');
    $(showMore)
      .parent()
      .show();
    $(showLess)
      .parent()
      .hide();

    if (selected == 1) {
      selected = initCarouselObj.length - 1;
    } else {
      selected--;
    }

    descriptionBlock.children().removeClass('active');

    for (let i = 1; i < descriptionBlockLength + 1; i++) {
      let descriptionIthChild = $('.descriptionSection:nth-child(' + i + ')');

      if (i == selected) {
        descriptionIthChild.addClass('active');
      }
    }

    for (let i = 1; i < numCarouselItems + 1; i++) {
      let carouselImgIthChild = $('#carousel .image:nth-child(' + i + ')');

      if (initCarouselObj[i].num == selected) {
        carouselImgIthChild.css(
          'transform',
          `rotateY(${initCarouselObj[i].rotY + degOffset}deg) translateZ(${selectedDistance}px)`
        );
      } else {
        carouselImgIthChild.css(
          'transform',
          `rotateY(${initCarouselObj[i].rotY + degOffset}deg) translateZ(${notSelectedDistance}px)`
        );
      }

      initCarouselObj[i].rotY = initCarouselObj[i].rotY + degOffset;
    }
  });
};

const watchMoreToggle = function() {
  $(showMore).click(function() {
    $(this)
      .parent()
      .toggle()
      .next()
      .toggle();

    $(this)
      .parent()
      .parent()
      .find($(moreSection))
      .addClass('show');
  });

  $(showLess).click(function() {
    $(this)
      .parent()
      .toggle()
      .prev()
      .toggle();

    $(this)
      .parent()
      .parent()
      .find($(moreSection))
      .removeClass('show');
  });

  $(showMoreMobile).click(function() {
    $(this)
      .parent()
      .toggle()
      .next()
      .toggle();

    $(this)
      .parent()
      .parent()
      .find($(moreSection))
      .addClass('show');
  });

  $(showLessMobile).click(function() {
    $(this)
      .parent()
      .toggle()
      .prev()
      .toggle();

    $(this)
      .parent()
      .parent()
      .find($(moreSection))
      .removeClass('show');
  });
};

const toggleLinkTopVis = function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() >= $(window).height()) {
      $('.topLink').addClass('show');
    } else {
      $('.topLink').removeClass('show');
    }
  });
};

const toggleLinkTopSticky = function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() >= $('footer').position().top) {
      $('.topLink').addClass('notFixed');
    } else {
      $('.topLink').removeClass('notFixed');
    }
  });
};

// smooth scroll courtesy of Karl Swedberg: http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links
const initSmoothScroll = function() {
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate(
            {
              scrollTop: target.offset().top
            },
            700
          );
          return false;
        }
      }
    });
  });
};

$(document).ready(function() {
  initStickyNav();
  initCarousel();
  watchNextButton();
  watchPrevButton();
  watchMoreToggle();
  toggleLinkTopVis();
  toggleLinkTopSticky();
  initSmoothScroll();
});
