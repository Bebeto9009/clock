var currentTime = new Date();
var hour = currentTime.getHours();
var minute = currentTime.getMinutes();
var second = currentTime.getSeconds();
// var second = 15;

var hourAngle=0,
    minuteAngle=0,
    secondAngle=0;

var setSecond;

function getAngle() {
    // hourAngle = hour
    // minuteAngle =
    secondAngle = 360/60;
    setSecond = second * secondAngle
    document.querySelector('.seconds').style.transform = 'rotate(' +setSecond+ 'deg)';
    console.log('second angle: ' + setSecond);
}

setInterval(function() {
    getAngle();
}, 1000);