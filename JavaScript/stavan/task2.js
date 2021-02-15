// 2) Write down a program which returns the nth smallest number from randomly generated data.

// Requirements: 
// There should be User Input which defines the number of data [n] to store. Ask the User Minimum and Maximum range to generate the random numbers between that range. 
// Ask the user which nth smallest number he wants to find from the generated data.

// Output:
// 1) Display the Randomly Generated Data
// 2) Display the nth smallest number


function Task2() {
  let len = parseInt(prompt("Enter The Length of Array"));
  let data = new Array(len);
  console.log(data.length);

  let mini = parseInt(prompt("Minimum"));
  let maxi = parseInt(prompt("Maximum"));

  console.log("Initial array=", data);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //Auto Generated Array
  for (i = 0; i < data.length; i++) {
    let num = getRandomInt(mini, maxi);
    data[i] = num;
  }
  console.log("Auto Generated Array=", data);

  //Sorted Array
  function sorting(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }

    return array;
  }
  let sortedData = sorting(data);
  console.log("Sorted Array", sortedData);

  //Finding Number

  let address = parseInt(prompt("Enter Value"));
  alert(data[address - 1]);
  console.log(data[address]);
}
