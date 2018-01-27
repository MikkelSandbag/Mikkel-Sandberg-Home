'use strict';
var moreSection = $('.moreSection'),
    showMoreMobile = $('.workBlock .showMoreLink'),
    showLessMobile = $('.workBlock .showLessLink'),
    initTypist = function initTypist() {
  $('#what-i-like').typist({ speed: 10 }).typistPause(1e3).typistAdd('making websites.').typistPause(2e3).typistRemove(16).typistPause(1e3).typistAdd('podcasting.').typistPause(2e3).typistRemove(11).typistPause(1e3).typistAdd('3D animation.').typistPause(2e3).typistRemove(13).typistPause(1e3).typistAdd('drinking coffee.').typistPause(2e3).typistRemove(16).typistPause(1e3).typistAdd('video games.').typistPause(2e3).typistRemove(12).typistPause(1e3).typistAdd('cooking.').typistPause(2e3).typistRemove(8).typistPause(1e3).typistAdd('playing music.').typistPause(2e3).typistRemove(14).typistPause(1e3).typistAdd('doing things.').typistStop();
},
    watchMoreToggle = function watchMoreToggle() {
  $(showMoreMobile).click(function () {
    $(this).parent().toggle().next('.moreSection').toggle();
  }), $(showLessMobile).click(function () {
    $(this).parent().parent().toggle().prev('.showMore').toggle();
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
  watchMoreToggle(), toggleLinkTopVis(), toggleLinkTopSticky(), initSmoothScroll();
});