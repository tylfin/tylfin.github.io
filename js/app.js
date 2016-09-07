/*
Copyright (c) 2016, Tyler Finethy
All rights reserved. See LICENSE file for details
*/
$(document).foundation();

window.onresize = function() {
  // dynamically resize the windowHeight for the first row
  var windowHeight = $(window).height();
  $('#first-section').height(windowHeight);
  $('#header').css({top: windowHeight*0.3+'px' });
  if ($(window).width() < 460) {
    $('#htmlwidget-7b5899e7372a4569a651').width($(window).width());
  }
};
// js typing on header
$(function(){
  $("#js-rotating").typed({
    strings: ["software engineer.", "data scientist.", "skier.", " rock climber.",
      "teacher."],
    typeSpeed: 100,
    loop: true
  });
});

window.onbeforeunload = function () {
	window.scrollTo(0,0);
};

$(document).ready(function() {
  window.scrollTo(0,0);
  // init the resizer
  window.onresize();
  // init the syntax highlighting
  hljs.initHighlightingOnLoad();


  var controller = new ScrollMagic.Controller(),
      count = $('.animate').length,
      i = 0,
      blockTween,
      scene;

  $('.animate').css('width', $(window).width() / count);

  //fly in left
  blockTween = new TweenMax.to('#mcgill', 1.5, {
      css: {
        transform: 'translate(0)'
      }
    });

  scene = new ScrollMagic.Scene({
    offset: $('#mcgill').offset().top - 450,
    duration: 400
  })
  .setTween(blockTween)
  .addTo(controller);

  //fly in left
  blockTween = new TweenMax.to('#maxwell', 1.5, {
      css: {
        transform: 'translate(0)'
      }
    });

  scene = new ScrollMagic.Scene({
    offset: $('#maxwell').offset().top - 450,
    duration: 400
  })
  .setTween(blockTween)
  .addTo(controller);

  //fly in right
  blockTween = new TweenMax.to('#htmlwidget-7b5899e7372a4569a651', 1.5, {
      css: {
        transform: 'translate(0)'
      }
    });

  scene = new ScrollMagic.Scene({
    offset: $('#htmlwidget-7b5899e7372a4569a651').offset().top - 450,
    duration: 400
  })
  .setTween(blockTween)
  .addTo(controller);

});


$(document).bind('scroll', function() {
  var $body = $(document);
  if ($body.scrollLeft() !== 0) {
    $body.scrollLeft(0);
  }
});
