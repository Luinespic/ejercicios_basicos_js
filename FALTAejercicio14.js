const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];
function repeatCounter(list) {
  let newList = [];
  for (let i = 0; i < list.length; i++) {
    let word = list[i];
    let repetitions = 1;
    for (let j = i + 1; j < list.length; j++) {
      if (list.indexOf(word) >= i) {
        if (word === list[j]) {
          repetitions = repetitions + 1;
        }
      }
    }
    newList[i] = word + ": " + repetitions;
  }
  console.log(newList);
}

repeatCounter(words);
