var currentTime = new Date();
var hour = currentTime.getHours();
var minute = currentTime.getMinutes();
var second = currentTime.getSeconds();

var hourAngle = (360/12),
    minuteAngle = (360/60),
    secondAngle = (360/60),
    setSecond = second*secondAngle,
    setMinute = minute*minuteAngle, //30*6=180
    setHour = hour*hourAngle+(setMinute/12); //9*30+180/12=270+15=285

document.querySelector('.seconds').style.transform = 'rotate(' +setSecond+ 'deg)';
document.querySelector('.minutes').style.transform = 'rotate(' +setMinute+ 'deg)';
document.querySelector('.hours').style.transform = 'rotate(' +setHour+ 'deg)';

function getAngle() {
    setSecond += 6;
    document.querySelector('.seconds').style.transform = 'rotate(' +setSecond+ 'deg)';
    console.log('second angle: ' + setSecond);

    setMinute += 6/60;
    document.querySelector('.minutes').style.transform = 'rotate(' +setMinute+ 'deg)';
    console.log('minute angle: ' + setMinute);

    setHour += 6/60/12;
    document.querySelector('.hours').style.transform = 'rotate(' +setHour+ 'deg)';
    console.log('hours angle: ' + setHour);
}

setInterval(function() {
    getAngle();
}, 1000);


