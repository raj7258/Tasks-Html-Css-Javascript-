//Form Submit
let data = [];

if (localStorage.getItem("data") === null) {
  data = [];
} else {
  data = JSON.parse(localStorage.getItem("data"));
  let table = document.getElementById("table1");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  for (i = 0; i < data.length; i++) {
    addingRow(data[i], i, "table1");
  }
}

function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.toLowerCase();
  const age = document.getElementById("age").value;
  const city = document.getElementById("city").value.toLowerCase();
  const state = document.getElementById("state").value.toLowerCase();
  document.getElementById("form").reset();

  let obj = {
    id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
    name,
    age: +age,
    city,
    state,
  };
  document.getElementById("tb1").style.display = "block";
  addingRow(obj, data.length, "table1");
  data.push(obj);
  console.log(data);
  getDateFromLocalStorage();
}

//Delete Row
function deleteRow(e) {
  const rowNumber = e.parentNode.parentNode.rowIndex;
  const id = e.parentNode.parentNode.cells[0].innerHTML;
  data = data.filter((x) => {
    return x.id != +id;
  });
  document.getElementById("table1").deleteRow(rowNumber);
  console.log("Data After Deletion", data);
  getDateFromLocalStorage();
}

//Update Row
let refrenceToTd;
function updateRow(e) {
  refrenceToTd = e;
  rowNumber = e.parentNode.parentNode.rowIndex;
  let tableCells = document.getElementById("table1").rows[rowNumber].cells;

  document.getElementById("name1").value = tableCells[1].innerHTML;
  document.getElementById("age1").value = tableCells[2].innerHTML;
  document.getElementById("city1").value = tableCells[3].innerHTML;
  document.getElementById("state1").value = tableCells[4].innerHTML;
}
function submitForm2(e) {
  e.preventDefault();
  rowNumber = refrenceToTd.parentNode.parentNode.rowIndex;
  const id = refrenceToTd.parentNode.parentNode.cells[0].innerHTML;

  let tableCells = document.getElementById("table1").rows[rowNumber].cells;
  tableCells[0].innerHTML = +id;
  tableCells[1].innerHTML = document
    .getElementById("name1")
    .value.toLowerCase();
  tableCells[2].innerHTML = document.getElementById("age1").value;
  tableCells[3].innerHTML = document
    .getElementById("city1")
    .value.toLowerCase();
  tableCells[4].innerHTML = document
    .getElementById("state1")
    .value.toLowerCase();
  document.getElementById("form2").reset();

  data.splice(rowNumber - 1, 1);

  const name = tableCells[1].innerHTML;
  const age = tableCells[2].innerHTML;
  const city = tableCells[3].innerHTML;
  const state = tableCells[4].innerHTML;

  let obj = {
    id: +id,
    name,
    age,
    city,
    state,
  };
  data.push(obj);
  console.log("updated Object=", data);
  getDateFromLocalStorage();
}

//Sorting
function onSort(e) {
  e.preventDefault();

  let specificField = document.getElementById("field").value;
  data.sort((a, b) => {
    if (a[specificField] < b[specificField]) {
      return -1;
    }
    if (a[specificField] > b[specificField]) {
      return 1;
    }
    return 0;
  });

  // Deleting the Table
  let table = document.getElementById("table1");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  for (i = 0; i < data.length; i++) {
    addingRow(data[i], i, "table2");
  }
  getDateFromLocalStorage();
}

// On Search
function onSearch(e) {
  e.preventDefault();
  const text = document.getElementById("search").value;
  if (text === "") {
    for (i = 0; i < data.length; i++) {
      addingRow(data[i], i, "table1");
    }
  }
  console.log(text);
  let searchedArray = [];

  data.filter((x) => {
    if (
      x.name.includes(text.toLowerCase()) ||
      x.age === +text ||
      x.city.includes(text.toLowerCase()) ||
      x.state.includes(text.toLowerCase())
    ) {
      searchedArray.push(x);
    }
  });
  let table = document.getElementById("table1");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  for (i = 0; i < searchedArray.length; i++) {
    addingRow(searchedArray[i], i, "table1");
  }
  console.log("search", searchedArray);
}

// Adding Value to Table
function addingRow(object, length, tableName) {
  var table = document.getElementById("table1");
  var row = table.insertRow(length + 1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);

  cell1.innerHTML = object.id;
  cell2.innerHTML = object.name;
  cell3.innerHTML = object.age;
  cell4.innerHTML = object.city;
  cell5.innerHTML = object.state;
  cell6.innerHTML = "<button onClick=deleteRow(this)>Delete Row</button>";
  cell7.innerHTML = "<button onClick=updateRow(this)>Update Row</button>";
}

function getDateFromLocalStorage() {
  localStorage.setItem("data", JSON.stringify(data));
}

function onClearLocalStorage(event) {
  localStorage.clear();
  // location.reload();
}
