function Task11() {
  let date = prompt("Enter Date In This Format(2021 Dec 20)");
  let noOfWeeks = prompt("Enter Number Of Week To Add");

  let DATE = new Date(date);
  console.log(DATE);
  let newDate = DATE.getDate() + +noOfWeeks * 7;
  DATE.setDate(newDate);

  console.log(DATE);
}
