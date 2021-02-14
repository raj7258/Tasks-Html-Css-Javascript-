function Task5() {
  let num = prompt("Enter Length Of Array");
  let data = [];

  for (i = 0; i < +num; i++) {
    let y = prompt("Enter Name");
    let x = nameSplitter(y);
    let obj = {};
    obj["firstName"] = x.firstName;
    obj["lastName"] = x.lastName;
    data.push(obj);
  }
  console.log(data);

  // Sorting Data
  let filteredItem = [];
  const text = prompt("Enter The Name You Want to search");
  data.forEach((x) => {
    if (
      x.firstName.includes(text.toString()) === true ||
      x.firstName.includes(text.toUpperCase().toString()) === true
    ) {
      filteredItem.push(x);
    }
  });
  console.log("Output=", filteredItem);

  //Function For Splitting Name
  function nameSplitter(data) {
    let msg = data.split(" ");
    let firstName = msg.slice(0, 1).join("");
    let lastName = data.slice(data.indexOf(" ") + 1);
    // let lastName = msg.filter((x) => {
    //   return x !== firstName;
    // });
    // lastName = lastName.join("");
    return { firstName, lastName };
  }
}
