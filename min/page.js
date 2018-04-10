'use strict';

// global variables
var initCarouselObj = [];
var selected = 1;
var numCarouselItems = $('#carousel').children().length;
var degOffset = 360 / numCarouselItems;
var selectedDistance = 800;
var notSelectedDistance = 320;
var descriptionBlock = $('.descriptionBlock');
var descriptionBlockLength = descriptionBlock.children().length;
var moreSection = $('.moreSection');
var descriptionSection = $('.descriptionSection');
var showMore = $('.descriptionSection .showMoreLink');
var showLess = $('.descriptionSection .showLessLink');
var showMoreMobile = $('.workBlock .showMoreLink');
var showLessMobile = $('.workBlock .showLessLink');

// typing effect; initialized after page loaded
var initTypist = function initTypist() {
  $('#what-i-like').typist({
    speed: 10
  }).typistPause(1000).typistAdd('making websites.').typistPause(2000).typistRemove(16).typistPause(1000).typistAdd('podcasting.').typistPause(2000).typistRemove(11).typistPause(1000).typistAdd('3D animation.').typistPause(2000).typistRemove(13).typistPause(1000).typistAdd('drinking coffee.').typistPause(2000).typistRemove(16).typistPause(1000).typistAdd('video games.').typistPause(2000).typistRemove(12).typistPause(1000).typistAdd('cooking.').typistPause(2000).typistRemove(8).typistPause(1000).typistAdd('playing music.').typistPause(2000).typistRemove(14).typistPause(1000).typistAdd('doing things.').typistStop();
};

var initStickyNav = function initStickyNav() {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $(window).height()) {
      $('nav ul').addClass('fixed');
    } else {
      $('nav ul').removeClass('fixed');
    }
  });
};

var initCarouselData = function initCarouselData() {
  for (var i = 1; i < numCarouselItems + 1; i++) {
    initCarouselObj[i] = {
      num: i,
      rotY: (i - 1) * degOffset
    };
  }
};

var initCarousel = function initCarousel() {
  initCarouselData();

  for (var i = 1; i < numCarouselItems + 1; i++) {
    var carouselImgIthChild = $('#carousel .image:nth-child(' + i + ')');

    if (initCarouselObj[i].num == selected) {
      carouselImgIthChild.css('transform', 'rotateY(' + initCarouselObj[i].rotY + 'deg) translateZ(' + selectedDistance + 'px)');
    } else {
      carouselImgIthChild.css('transform', 'rotateY(' + initCarouselObj[i].rotY + 'deg) translateZ(' + notSelectedDistance + 'px)');
    }
  }
};

var watchNextButton = function watchNextButton() {
  $('.next').click(function () {
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

    for (var _i = 1; _i < numCarouselItems + 1; _i++) {
      var carouselImgIthChild = $('#carousel .image:nth-child(' + _i + ')');

      if (initCarouselObj[_i].num == selected) {
        carouselImgIthChild.css('transform', 'rotateY(' + (initCarouselObj[_i].rotY - degOffset) + 'deg) translateZ(' + selectedDistance + 'px)');
      } else {
        carouselImgIthChild.css('transform', 'rotateY(' + (initCarouselObj[_i].rotY - degOffset) + 'deg) translateZ(' + notSelectedDistance + 'px)');
      }

      initCarouselObj[_i].rotY = initCarouselObj[_i].rotY - degOffset;
    }
  });
};

var watchPrevButton = function watchPrevButton() {
  $('.prev').click(function () {
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

    for (var _i2 = 1; _i2 < numCarouselItems + 1; _i2++) {
      var carouselImgIthChild = $('#carousel .image:nth-child(' + _i2 + ')');

      if (initCarouselObj[_i2].num == selected) {
        carouselImgIthChild.css('transform', 'rotateY(' + (initCarouselObj[_i2].rotY + degOffset) + 'deg) translateZ(' + selectedDistance + 'px)');
      } else {
        carouselImgIthChild.css('transform', 'rotateY(' + (initCarouselObj[_i2].rotY + degOffset) + 'deg) translateZ(' + notSelectedDistance + 'px)');
      }

      initCarouselObj[_i2].rotY = initCarouselObj[_i2].rotY + degOffset;
    }
  });
};

var watchMoreToggle = function watchMoreToggle() {
  $(showMore).click(function () {
    $(this).parent().toggle().next().toggle();

    $(this).parent().parent().find($(moreSection)).addClass('show');
  });

  $(showLess).click(function () {
    $(this).parent().toggle().prev().toggle();

    $(this).parent().parent().find($(moreSection)).removeClass('show');
  });

  $(showMoreMobile).click(function () {
    $(this).parent().toggle().next().toggle();

    $(this).parent().parent().find($(moreSection)).addClass('show');
  });

  $(showLessMobile).click(function () {
    $(this).parent().toggle().prev().toggle();

    $(this).parent().parent().find($(moreSection)).removeClass('show');
  });
};

// smooth scroll courtesy of Karl Swedberg: http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links
var initSmoothScroll = function initSmoothScroll() {
  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
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
};

$(document).ready(function () {
  initStickyNav();
  initCarousel();
  watchNextButton();
  watchPrevButton();
  watchMoreToggle();
  initSmoothScroll();
});