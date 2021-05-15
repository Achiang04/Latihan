// function getDayName(dateString) {
//   let dayName = new Array(7);
//   dayName[0] = "Sunday";
//   dayName[1] = "Monday";
//   dayName[2] = "Tuesday";
//   dayName[3] = "Wednesday";
//   dayName[4] = "Thursday";
//   dayName[5] = "Friday";
//   dayName[6] = "Saturday";

//   let today = new Date();
//   let day = today.getDay();
//   day = dayName[day];

//   const dd = String(today.getDate()).padStart(2, "0");
//   const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
//   const yyyy = today.getFullYear();
//   today = mm + "/" + dd + "/" + yyyy;

//   console.log(today);
//   return day;
// }

function getDayName(dateString) {
  let dayName = new Array(7);
  dayName[0] = "Sunday";
  dayName[1] = "Monday";
  dayName[2] = "Tuesday";
  dayName[3] = "Wednesday";
  dayName[4] = "Thursday";
  dayName[5] = "Friday";
  dayName[6] = "Saturday";

  let today = new Date(dateString);
  let day = today.getDay();
  dayName = dayName[day];

  return dayName;
}

console.log(getDayName("10/11/2009")); // Sunday
console.log(getDayName("11/10/2010")); // Wednesday
