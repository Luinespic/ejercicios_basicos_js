const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  let longestWord = [];
  for (let i = 0; i < stringList.length; i++) {
    const word = stringList[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  console.log(longestWord);
}

// Usando el for of:
// function findLongestWord(stringList) {
//   let longestWord = [];
//   for (const word of stringList) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   console.log(longestWord);
// }

findLongestWord(avengers);
