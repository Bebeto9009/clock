var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

console.log('hours: ' + hours);
console.log('minutes: ' + minutes);
console.log('seconds: ' + seconds);

function getDeg() {
    return 360/60;
}