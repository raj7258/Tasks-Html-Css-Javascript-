function Task12() {
  let a = prompt("Enter Date In This Format(2021 Dec 20)");
  let date = new Date(a);
  console.log("timezone offset in seconds", date.getTimezoneOffset() * 60);
}
