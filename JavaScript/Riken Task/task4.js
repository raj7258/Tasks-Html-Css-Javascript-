function Task10() {
  let date = new Date(prompt("Enter Date In This Format(2021 Dec 20)"));
  let last = date.getDate() - date.getDay();
  let lastDate = new Date(date.setDate(last + 7));
  console.log(lastDate);
}
