var currentTime = new Date();
var hours = currentTime.getHours();
// var hours = 4;
var minutes = currentTime.getMinutes();
// var minutes = 00;
var seconds = currentTime.getSeconds();

console.log('hours: ' + hours);
console.log('minutes: ' + minutes);
console.log('seconds: ' + seconds);

var secondsIndicator = 6*seconds+90;
document.querySelector('.seconds').style.transform = 'rotate(' +secondsIndicator+ 'deg)';
console.log('deg seconds:' + secondsIndicator);

var minutesIndicator = 6*minutes+90;
document.querySelector('.minutes').style.transform = 'rotate(' +minutesIndicator+ 'deg)';
console.log('deg minutes:' + minutesIndicator);

var hoursIndicator = (30*hours+90);
document.querySelector('.hours').style.transform = 'rotate(' +hoursIndicator+ 'deg)';
console.log('deg hours:' + hoursIndicator);

var hoursSet = hoursIndicator + ((minutes*6)/12);
document.querySelector('.hours').style.transform = 'rotate(' +hoursSet+ 'deg)';
console.log('deg hoursSet:' + hoursSet);

setInterval(function(){
    secondsIndicator += 6;
        console.log('deg seconds:' +secondsIndicator);
        document.querySelector('.seconds').style.transform = 'rotate(' +secondsIndicator+ 'deg)';

    minutesIndicator += (6/60);
        console.log('deg minutes:' + minutesIndicator);
        document.querySelector('.minutes').style.transform = 'rotate(' +minutesIndicator+ 'deg)';

    // var hoursIndicator = 30*hours+90;
    // console.log('deg hours:' + hoursIndicator);
    // document.querySelector('.hours').style.transform = 'rotate(' +hoursIndicator+ 'deg)';

    // hoursIndicator += (6/60/360)+((minutes*360/60)/12);
        hoursIndicator += (6/60/60)+((minutesIndicator/12)/3600);
        console.log('deg hours:' + hoursIndicator);
        document.querySelector('.hours').style.transform = 'rotate(' +hoursIndicator+ 'deg)';

    // var hoursSet = hoursIndicator + (((minutesIndicator/12)*6));
    // document.querySelector('.hours').style.transform = 'rotate(' +hoursSet+ 'deg)';
    // console.log('deg hoursSet:' + hoursSet);
}, 100);



//1. określenie kąta wskazówki w stosunku do pobranej wartości
//a. ustawienie wartości 0 dla wskazówek rotate(90) daje 12:00
//2. iteracja wskazówek
//3. zależność między wskazówkami

/* koło ma 360 stopni, sekunda robi koło w 60 sekund, każdy jej skok daje 6 stopni. Obracanie sekundnika musi
* */

/*
60 sekund 	1 sekunda	                360/60 = 1 skok to 6 stopni
1 minuta	60 sekund	                360/60/60 = 1 skok minuty
1 godzina	60 minut    3600 sekund	    360/60/60/60 = 1 skok godziny na sekundę

1 godzina 0.5 stopnia na minutę.
30 minut to 30*0.5= 15 stopni
*/

// https://sites.google.com/site/mymathclassroom/trigonometry/clock-angle-problems/clock-angle-problem-formula

// 180 dla minut to połowa godziny czyli 15, 180/15 = 12


// 180 dla 30 minut czyli 30/2 dla gogdzin czyli 15 stopni godziny