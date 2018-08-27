clock();

function clock() {
    var currentTime = new Date();

    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();

    var hourAngle = (360/12),
        minuteAngle = (360/60),
        secondAngle = (360/60),
        setSecond = second*secondAngle,
        setMinute = minute*minuteAngle+(setSecond/60),
        setHour = hour*hourAngle+(setMinute/12);

    document.querySelector('.circle__seconds').style.transform = 'rotate(' +setSecond+ 'deg)';
    document.querySelector('.circle__minutes').style.transform = 'rotate(' +setMinute+ 'deg)';
    document.querySelector('.circle__hours').style.transform = 'rotate(' +setHour+ 'deg)';
}

setInterval(function() {
    clock();
}, 1000);


