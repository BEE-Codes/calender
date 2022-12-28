var one = document.getElementById("day-name");
var two = document.getElementById("d-date");
var three = document.getElementById("month-name");
var four = document.getElementById("year");

var monthArr = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER"
];
var dayArr = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY", 
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY"
];

var d = new Date();

    var day = d.getDay();
    day = dayArr[day];


    var date = d.getDate();

    var month = d.getMonth();
    month = monthArr[month];

    var year = d.getFullYear();

    one.innerHTML = day;
    two.innerHTML = date+"th";
    three.innerHTML = month;
    four.innerHTML = year;