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
