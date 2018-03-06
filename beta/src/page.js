// global variables
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

const watchMoreToggle = function() {
  $(showMoreMobile).click(function() {
    $(this)
      .parent()
      .toggle()
      .next('.moreSection')
      .toggle();
  });

  $(showLessMobile).click(function() {
    $(this)
      .parent()
      .parent()
      .toggle()
      .prev('.showMore')
      .toggle();
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
  watchMoreToggle();
  initSmoothScroll();
});
