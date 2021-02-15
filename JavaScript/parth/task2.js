// 2) Write down a function that displays the sum of the numbers with each iteration in a range using a recursive function.
// Eg: range(3,10)
// Output:
// [3,4,5,6,7,8,9,10]
// [3,7,12,18,25,33,42,52]

function Task4() {
  let num1 = parseInt(prompt("Enter Minimun"));
  let num2 = parseInt(prompt("Enter Maximum"));

  if (num1 > num2) {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
  }
  console.log(num1, num2);
  let data = [];

  function array(a, b) {
    if (a === b) {
      data.push(a);
      return;
    } else {
      data.push(a);
      array(a + 1, b);
    }
  }

  let data2 = [];
  let sum = 0;
  function array2(a, b) {
    if (a == b) {
      data2.push(sum + a);
      return;
    }
    sum += a;
    data2.push(sum);
    array2(a + 1, b);
  }
  array(+num1, +num2);
  array2(+num1, +num2);
  console.log(data);
  console.log(data2);
}
