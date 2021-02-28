let op1 = "",
  op2 = "",
  op3 = "",
  op4 = "";

var data = [];
let sum = 0;
function option1(value) {
  op1 = "";
  op1 = value;
  const dropwDown2 = document.getElementById("restaurants");
  document.getElementById("btn1").disabled = true;
  removeOptions(dropwDown2);
  removeOptions(document.getElementById("menu"));
  document.getElementById("price").innerHTML = "";
  document.getElementById("price").value = "";

  const restaurants = {
    ahmedabad: ["mocha", "dCafe", "lapinoz"],
    surat: ["topaz", "kalrav", "foodTruck"],
    vadodara: ["dominos", "subway", "jayshree"],
  };

  for (var i = 0; i < restaurants[value].length; i++) {
    var option = document.createElement("option");
    option.value = restaurants[value][i];
    option.text = restaurants[value][i];
    dropwDown2.appendChild(option);
  }

  document.getElementById("restaurants").disabled = false;
}

function option2(value) {
  op2 = "";
  op2 = value;
  document.getElementById("btn1").disabled = true;

  const dropwDown3 = document.getElementById("menu");
  removeOptions(dropwDown3);
  document.getElementById("price").innerHTML = "";
  document.getElementById("price").value = "";

  const menu = {
    mocha: ["alooTikki", "paneer", "margaritta"],
    dCafe: ["friedRice", "shake", "tea"],
    lapinoz: ["pizza", "soup", "dal"],
    topaz: ["cutlet", "fingerchips", "chanapoori"],
    kalrav: ["springFling", "kormaSpecial", "cheestMac"],
    foodTruck: ["onionBlossoms", "sweetDecade", "gardenDelight"],
    dominos: ["cheezy7", "panerrSpecial", "alaMexican"],
    subway: ["naplesSpecial", "sweetHeat", "deckerTaco"],
    jayshree: ["riceBowl", "quesadilla", "srirachaBurrito"],
  };
  for (var i = 0; i < menu[value].length; i++) {
    var option = document.createElement("option");
    option.value = menu[value][i];
    option.text = menu[value][i];
    dropwDown3.appendChild(option);
  }
  document.getElementById("menu").disabled = false;
}

function option3(value) {
  op3 = "";
  op3 = value;
  document.getElementById("btn1").disabled = true;

  // removeOptions(dropwDown4);
  document.getElementById("price").innerHTML = "";
  document.getElementById("price").value = "";

  const prices = {
    alooTikki: 42,
    paneer: 68,
    margaritta: 35,
    friedRice: 1,
    shake: 70,
    tea: 25,
    pizza: 79,
    soup: 59,
    dal: 63,
    cutlet: 65,
    fingerchips: 6,
    chanapoori: 46,
    springFling: 82,
    kormaSpecial: 28,
    cheestMac: 62,
    onionBlossoms: 92,
    sweetDecade: 96,
    gardenDelight: 43,
    cheezy7: 28,
    panerrSpecial: 37,
    alaMexican: 92,
    naplesSpecial: 5,
    sweetHeat: 3,
    deckerTaco: 54,
    riceBowl: 93,
    quesadilla: 83,
    srirachaBurrito: 22,
  };

  let textArea = document.getElementById("price");
  textArea.innerHTML = "Price=" + prices[value];
  textArea.value = "Price=" + prices[value];

  document.getElementById("price").disabled = false;
  op4 = "";
  op4 = prices[value];
  textArea.focus();
  document.getElementById("btn1").disabled = false;
}

function addToCart(e) {
  e.preventDefault();

  let obj = {
    op1,
    op2,
    op3,
    op4,
  };
  data.push(obj);
  console.log("data", data);
  addingRow(obj, data.length, "table1");
  totalPrice();
}

function deleteRow(e) {
  const rowNumber = e.parentNode.parentNode.rowIndex;
  document.getElementById("table1").deleteRow(rowNumber);
  data.splice(rowNumber - 1, 1);
  totalPrice();
}

function addingRow(data, length, tableName) {
  var table = document.getElementById(tableName);
  var row = table.insertRow(length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  cell1.innerHTML = data.op1;
  cell2.innerHTML = data.op2;
  cell3.innerHTML = data.op3;
  cell4.innerHTML = data.op4;
  cell5.innerHTML = "<button onClick=deleteRow(this)>Delete Row</button>";
}

function removeOptions(selectElement) {
  var i,
    L = selectElement.options.length - 1;
  for (i = L; i > 0; i--) {
    selectElement.remove(i);
  }
}

function totalPrice() {
  sum = 0;
  for (i = 0; i < data.length; i++) {
    sum = sum + data[i].op4;
  }
  document.getElementById("totalPrice").innerHTML = `Total Price = ${sum}`;
}
