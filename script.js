var today, arrival_day, days, hrs, mins, sec;

window.onload = function () {
    arrival_day = new Date("JUNE 01,2020 00:00:00");
    // console.log('hello');
    calc_time();

    setInterval(calc_time, 500);
}

// to calculate days,hrs and min
function calc_time() {

    //current time
    today = new Date();

    //difference between dates in seconds;
    let diff = arrival_day.getTime() - today.getTime();
    diff /= 1000;

    //days
    days = Math.floor(diff / (60 * 60 * 24));
    (days < 100) ? days = '00' + days : days;
    (days < 10) ? days = '0' + days : days;

    //hours
    hrs = Math.floor(diff / (60 * 60)) % 24;
    (hrs < 10) ? hrs = '0' + hrs : hrs;

    //minutes
    mins = Math.floor(diff / (60)) % 60;
    (mins < 10) ? mins = '0' + mins : mins;

    //seconds
    sec = Math.floor(diff % 60);
    (sec < 10) ? sec = '0' + sec : sec;

    //updating in DOM elements
    document.getElementById('day').innerText = days;
    document.getElementById('hour').innerText = hrs;
    document.getElementById('min').innerText = mins;
    document.getElementById('sec').innerText = sec;
}
