var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();


console.log('hours: ' + hours);
console.log('minutes: ' + minutes);
console.log('seconds: ' + seconds);

var setSeconds = 6*seconds+90;
document.querySelector('.seconds').style.transform = 'rotate('+setSeconds+'deg)';
console.log('deg:' +setSeconds);


var startSeconds = setInterval(function(){
        setSeconds += 6;
        console.log('deg:' +setSeconds);
        document.querySelector('.seconds').style.transform = 'rotate('+setSeconds+'deg)';
    // }
}, 1000);


//
// function goSeconds () {
//     for (var i = 0; i < setSeconds; i++){
//         if setSeconds
//     }
// }


// document.querySelector('.seconds').style.transform = 'rotate('+90+'deg)';


//1. określenie kąta wskazówki w stosunku do pobranej wartości
//a. ustawienie wartości 0 dla wskazówek rotate(90) daje 12:00
//2. iteracja wskazówek
//3. zależność między wskazówkami

/* koło ma 360 stopni, sekunda robi koło w 60 sekund, każdy jej skok daje 6 stopni. Obracanie sekundnika musi
* */