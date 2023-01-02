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
var month30Arr = [
    "APRIL",
    "JUNE",
    "SEPTEMBER",
    "NOVEMBER",
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
    two.innerHTML = date;
    // figure out how to include th,st,and rd;
    three.innerHTML = month;
    four.innerHTML = year;
    
var daily = document.getElementById("numbers");

if (month == "FEBRUARY" && year % 4 !== 0) {
    for (i = 1; i <= 28; i++) {
        const bee = document.createElement("p");
        bee.innerHTML = i;
        daily.appendChild(bee);
    }
}
else if (month == "FEBRUARY" && year % 4 == 0) {
    for (i = 1; i <= 29; i++) {
        const bee = document.createElement("p");
        bee.innerHTML = i;
        daily.appendChild(bee);
    }

}
else if (month.includes == month30Arr) {
    for (i = 1; i <= 30; i++) {
        const bee = document.createElement("p");
        bee.innerHTML = i;
        daily.appendChild(bee);
    }
}
else {
    for (i = 1; i <= 31; i++){
            const bee = document.createElement("p");
            bee.innerHTML = i;
            daily.appendChild(bee);
        }

}




    