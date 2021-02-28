

function Task7() {
  let year = prompt("Enter Year");
  let month = prompt("Enter months Between(0-11)");

  //1
  function getNumberOfDay(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  console.log("Number Of Days =", getNumberOfDay(+year, +month));
}
