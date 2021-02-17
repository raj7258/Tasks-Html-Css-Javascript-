// 1 Write a JavaScript function to get the number of days in a month.
// 2 Write a JavaScript function to get the last day of a month.
// 3 Write a JavaScript function to get time differences in months between two dates.
// 4 Write a JavaScript function to get the week end date.
// 5 Write a JavaScript function to add specified weeks to a date
// 6 Write a JavaScript function to get timezone offset in seconds.

function Task7() {
  let year = prompt("Enter Year");
  let month = prompt("Enter month");

  //1
  function getNumberOfDay(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  console.log("Number Of Days =", getNumberOfDay(+year, +month));
}
