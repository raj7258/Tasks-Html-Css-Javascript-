//Pattern

function Task6() {
  let str = "";
  let x = prompt("Enter Number");
  for (i = 0; i <= +x; i++) {
    for (k = +x; k >= 0; --k) {
      str = str + " ";
      for (j = 0; j <= i; j++) {
        str = str + "*";
      }
    }
    str = str + "\n";
  }
  for (i = +x - 1; i >= 0; --i) {
    for (k = 0; k <= +x; k++) {
      str = str + " ";
      for (j = i; j >= 0; --j) {
        str = str + "*";
      }
    }
    str = str + "\n";
  }
  console.log(str);
}
