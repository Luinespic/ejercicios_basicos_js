const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

// SIN USAR INDEXOF:
// function removeDuplicates(list) {
//   for (let i = 0; i < list.length; i++) {
//     const word = list[i];
//     for (let j = i + 1; j < list.length; j++) {
//       console.log(list[j]);
//       if (word === list[j]) {
//         list.splice(j, 1);
//       }
//     }
//   }
//   console.log("resultado final: ", list);
//   return list;
// }

// removeDuplicates(duplicates);

function removeDuplicates(list) {
  for (let i = 0; i < list.length; i++) {
    let word = list[i];
    if (list.indexOf(word, i + 1) !== -1) {
      list.splice(i, 1);
    }
  }
  console.log("resultado final: ", list);
  return list;
}

removeDuplicates(duplicates);
