'use strict';

var initCarouselObj = [];var selected = 1;var numCarouselItems = $('#carousel').children().length;var degOffset = 360 / numCarouselItems;var selectedDistance = 800,
    notSelectedDistance = 320,
    descriptionBlock = $('.descriptionBlock'),
    descriptionBlockLength = descriptionBlock.children().length,
    moreSection = $('.moreSection'),
    descriptionSection = $('.descriptionSection'),
    showMore = $('.descriptionSection .showMoreLink'),
    showLess = $('.descriptionSection .showLessLink'),
    showMoreMobile = $('.workBlock .showMoreLink'),
    showLessMobile = $('.workBlock .showLessLink'),
    initTypist = function initTypist() {
  $('#what-i-like').typist({ speed: 10 }).typistPause(1e3).typistAdd('making websites.').typistPause(2e3).typistRemove(16).typistPause(1e3).typistAdd('podcasting.').typistPause(2e3).typistRemove(11).typistPause(1e3).typistAdd('3D animation.').typistPause(2e3).typistRemove(13).typistPause(1e3).typistAdd('drinking coffee.').typistPause(2e3).typistRemove(16).typistPause(1e3).typistAdd('video games.').typistPause(2e3).typistRemove(12).typistPause(1e3).typistAdd('cooking.').typistPause(2e3).typistRemove(8).typistPause(1e3).typistAdd('playing music.').typistPause(2e3).typistRemove(14).typistPause(1e3).typistAdd('doing things.').typistStop();
},
    initStickyNav = function initStickyNav() {
  $(window).scroll(function () {
    $(window).scrollTop() >= $(window).height() ? $('nav ul').addClass('fixed') : $('nav ul').removeClass('fixed');
  });
},
    initCarouselData = function initCarouselData() {
  for (var a = 1; a < numCarouselItems + 1; a++) {
    initCarouselObj[a] = { num: a, rotY: (a - 1) * degOffset };
  }
},
    initCarousel = function initCarousel() {
  initCarouselData();for (var a, b = 1; b < numCarouselItems + 1; b++) {
    a = $('#carousel .image:nth-child(' + b + ')'), initCarouselObj[b].num == selected ? a.css('transform', 'rotateY(' + initCarouselObj[b].rotY + 'deg) translateZ(' + selectedDistance + 'px)') : a.css('transform', 'rotateY(' + initCarouselObj[b].rotY + 'deg) translateZ(' + notSelectedDistance + 'px)');
  }
},
    watchNextButton = function watchNextButton() {
  $('.next').click(function () {
    $(descriptionSection).removeClass('active'), $(moreSection).removeClass('show'), $(showMore).parent().show(), $(showLess).parent().hide(), selected == initCarouselObj.length - 1 ? selected = 1 : selected++, descriptionBlock.children().removeClass('active');for (var a, b = 1; b < descriptionBlockLength + 1; b++) {
      a = $('.descriptionSection:nth-child(' + b + ')'), b == selected && a.addClass('active');
    }for (var _a, _b = 1; _b < numCarouselItems + 1; _b++) {
      _a = $('#carousel .image:nth-child(' + _b + ')'), initCarouselObj[_b].num == selected ? _a.css('transform', 'rotateY(' + (initCarouselObj[_b].rotY - degOffset) + 'deg) translateZ(' + selectedDistance + 'px)') : _a.css('transform', 'rotateY(' + (initCarouselObj[_b].rotY - degOffset) + 'deg) translateZ(' + notSelectedDistance + 'px)'), initCarouselObj[_b].rotY -= degOffset;
    }
  });
},
    watchPrevButton = function watchPrevButton() {
  $('.prev').click(function () {
    $(descriptionSection).removeClass('active'), $(moreSection).removeClass('show'), $(showMore).parent().show(), $(showLess).parent().hide(), 1 == selected ? selected = initCarouselObj.length - 1 : selected--, descriptionBlock.children().removeClass('active');for (var a, b = 1; b < descriptionBlockLength + 1; b++) {
      a = $('.descriptionSection:nth-child(' + b + ')'), b == selected && a.addClass('active');
    }for (var _a2, _b2 = 1; _b2 < numCarouselItems + 1; _b2++) {
      _a2 = $('#carousel .image:nth-child(' + _b2 + ')'), initCarouselObj[_b2].num == selected ? _a2.css('transform', 'rotateY(' + (initCarouselObj[_b2].rotY + degOffset) + 'deg) translateZ(' + selectedDistance + 'px)') : _a2.css('transform', 'rotateY(' + (initCarouselObj[_b2].rotY + degOffset) + 'deg) translateZ(' + notSelectedDistance + 'px)'), initCarouselObj[_b2].rotY += degOffset;
    }
  });
},
    watchMoreToggle = function watchMoreToggle() {
  $(showMore).click(function () {
    $(this).parent().toggle().next().toggle(), $(this).parent().parent().find($(moreSection)).addClass('show');
  }), $(showLess).click(function () {
    $(this).parent().toggle().prev().toggle(), $(this).parent().parent().find($(moreSection)).removeClass('show');
  }), $(showMoreMobile).click(function () {
    $(this).parent().toggle().next().toggle(), $(this).parent().parent().find($(moreSection)).addClass('show');
  }), $(showLessMobile).click(function () {
    $(this).parent().toggle().prev().toggle(), $(this).parent().parent().find($(moreSection)).removeClass('show');
  });
},
    toggleLinkTopVis = function toggleLinkTopVis() {
  $(window).scroll(function () {
    $(window).scrollTop() >= $(window).height() ? $('.topLink').addClass('show') : $('.topLink').removeClass('show');
  });
},
    toggleLinkTopSticky = function toggleLinkTopSticky() {
  $(window).scroll(function () {
    $(window).scrollTop() >= $('footer').position().top ? $('.topLink').addClass('notFixed') : $('.topLink').removeClass('notFixed');
  });
},
    initSmoothScroll = function initSmoothScroll() {
  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var a = $(this.hash);if (a = a.length ? a : $('[name=' + this.hash.slice(1) + ']'), a.length) return $('html,body').animate({ scrollTop: a.offset().top }, 700), !1;
      }
    });
  });
};$(document).ready(function () {
  initStickyNav(), initCarousel(), watchNextButton(), watchPrevButton(), watchMoreToggle(), toggleLinkTopVis(), toggleLinkTopSticky(), initSmoothScroll();
});