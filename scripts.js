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

    setSecond += 6;
    document.querySelector('.circle__seconds').style.transform = 'rotate(' +setSecond+ 'deg)';

    setMinute += 6/60;
    document.querySelector('.circle__minutes').style.transform = 'rotate(' +setMinute+ 'deg)';

    setHour += 6/60/12;
    document.querySelector('.circle__hours').style.transform = 'rotate(' +setHour+ 'deg)';
}

setInterval(function() {
    clock();
}, 1000);


