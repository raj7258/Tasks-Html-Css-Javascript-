function Task3() {
  let userInput = prompt("Enter String");
  wordCounter(userInput);

  function wordCounter(userInput) {
    //Total Words
    let ForWord = userInput.trim();
    let totalWords = ForWord.split(" ");
    let words = totalWords.filter((data) => {
      return data !== "";
    });
    console.log("Total Words=", words.length);

    //Total Characters With whiteSpace
    console.log("Total Character With whiteSpace=", userInput.length);

    //Total Characters Without WhiteSpace
    let Words = userInput.split(" ").join("").length;
    console.log("Total Character WithOut whiteSpace=", Words);

    //Total WhiteSpace
    let totalSpace = userInput.split(" ").length - 1;
    console.log("Total WhiteSpace=", totalSpace);
  }
}
