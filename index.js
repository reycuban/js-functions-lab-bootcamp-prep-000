// write your code below!
function happyHolidays() {
  return "Happy holidays!";
}

function happyHolidaysTo (name) {
  return `Happy Holidays ${name}!`;
}

function happyHolidayTo(holiday, name){
  return `Happy ${holiday} ${name}!`;
}
function holydayCountdown(days, holiday) {
  return `It's ${days} days until ${holiday}`;
}

happyHolidaysTo("Reinier");
happyHolidayTo("Holidays", "Reinier");
holydayCountdown("May 3","Holidays");
