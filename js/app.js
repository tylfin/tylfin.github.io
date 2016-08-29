$(document).foundation();

function resizeFirstRow() {
  $('#first-section').height($(window).height());
  var halfWay = $(window).height()/3.5;
  $('#header').css({top: halfWay+'px' });
}

//init
resizeFirstRow();

// make the first row full screen
window.onresize = resizeFirstRow;

// typing rotator
$(function(){
    $("#js-rotating").typed({
      strings: ["software engineer.", "python developer.", "data scientist."],
      typeSpeed: 100,
      loop: true
    });
});

// scroll down button
$("#scrollDown").click(function() {
    $('html,body').animate({
        scrollTop: $("#second-section").offset().top},
        'slow');
});
