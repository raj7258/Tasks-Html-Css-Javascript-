// const d1 = new Date('2021 Dec 20');
// const d2 = new Date('2023 nov 20');
// let x1 = d1.getTime()
// let x2 = d2.getTime()
// let x = Math.floor((d2-d1)/(1000*60*60*24*30))
// console.log(x)
function Task9() {
  function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months = months - d1.getMonth();
    months = months + d2.getMonth();
    return months <= 0 ? 0 : months;
  }

  let d1 = prompt("Enter Date1 In This Format(2021 Dec 20)");
  let d2 = prompt("Enter Date2 This Format(2023 nov 20)");

  console.log("Difference = ", monthDiff(new Date(d1), new Date(d2)));
}
