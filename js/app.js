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

// add all the circles to the page
(function addCircleToFirstSection() {
  el = document.getElementById('first-section');
  for (var i=0; i < 20; i++){
    var circle = document.createElement('div');
    circle.className = 'blue-circle';
    // el.insertBefore(circle, document.getElementById('first-row'));
  }
})();

// make the circles do things
var theThings = document.querySelectorAll(".blue-circle");
var transitionDurations = ["transitionDuration", "msTransitionDuration", "webkitTransitionDuration", "mozTransitionDuration", "oTransitionDuration"];
var transitionDurationProperty = getSupportedPropertyName(transitionDurations);
var transforms = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTr((ansform"];
var transformProperty = getSupportedPropertyName(transforms);
function setInitialProperties() {
	for (var i = 0; i < theThings.length; i++) {
		var theThing = theThings[i];
		var circleSize = Math.round(50 + Math.random() * 150);

		theThing.style.width = circleSize + "px";
		theThing.style.height = circleSize + "px";
		theThing.style.borderRadius = 0.5 * circleSize + "px";
		theThing.style.opacity = 0.1 + Math.random() * 0.5;
		setTranslate3DTransform(theThing);
	}
	setTimeout(kickOffTransition, 100);
}
setInitialProperties();
function kickOffTransition() {
	for (var i = 0; i < theThings.length; i++) {
		var theThing = theThings[i];

		theThing.addEventListener("transitionend", updatePosition, false);
		theThing.addEventListener("webkitTransitionEnd", updatePosition, false);
		theThing.addEventListener("mozTransitionEnd", updatePosition, false);
		theThing.addEventListener("msTransitionEnd", updatePosition, false);
		theThing.addEventListener("oTransitionEnd", updatePosition, false);

		setTranslate3DTransform(theThing);
		setTransitionDuration(theThing);
	}
}
function updatePosition(e) {
	var theThing = e.currentTarget;

	if (e.propertyName.indexOf("transform") != -1) {
		setTranslate3DTransform(theThing);
		setTransitionDuration(theThing);
	}
}
function getRandomXPosition() {
  el = document.getElementById('first-section');
	return Math.round(-50 + Math.random()*el.offsetWidth);
}
function getRandomYPosition() {
  el = document.getElementById('first-section');
	return Math.round(-50 + Math.random() * el.offsetHeight);
}
function getRandomDuration() {
	return (20 + Math.random() * 3) + "s";
}
function getSupportedPropertyName(properties) {
    for (var i = 0; i < properties.length; i++) {
        if (typeof document.body.style[properties[i]] != "undefined") {
            return properties[i];
        }
    }
    return null;
}
function setTranslate3DTransform(element) {
	element.style[transformProperty] = "translate3d(" + getRandomXPosition() + "px" + ", " + getRandomYPosition() + "px" + ", 0)";
}
function setTransitionDuration(element) {
	if (transitionDurationProperty) {
		element.style[transitionDurationProperty] = getRandomDuration();
	}
}

// // animations
// $("#js-rotating").Morphext({
//     // The [in] animation type. Refer to Animate.css for a list of available animations.
//     animation: "bounceIn",
//     // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
//     separator: ",",
//     // The delay between the changing of each phrase in milliseconds.
//     speed: 3000,
//     complete: function () {
//         // Called after the entrance animation is executed.
//     }
// });

$(function(){
    $("#js-rotating").typed({
      strings: ["software engineer.", "python developer.", "data scientist."],
      typeSpeed: 100,
      loop: true
    });
});

//
// $('#python').addClass('animated fadeInLeft');
// $('#node').addClass('animated fadeInLeft');
// $('#terraform').addClass('animated fadeInLeft');
