function Task8() {
  let year = prompt("Enter Year");
  let month = prompt("Enter months Between(0-11)");

  function getLastDayOfMonth(year, month) {
    let weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thusday",
      "Friday",
      "Saturday",
    ];
    let num = new Date(year, month + 1, 0);
    return weekDays[num.getDay()];
  }

  console.log("Last Day OF Month =", getLastDayOfMonth(+year, +month));
}
