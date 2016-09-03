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
};

// init the resizer
window.onresize();

// js typing on header
$(function(){
    $("#js-rotating").typed({
      strings: ["software engineer.", "python developer.", "data scientist."],
      typeSpeed: 100,
      loop: true
    });
});
