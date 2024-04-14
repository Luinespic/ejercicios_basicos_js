const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];

function averageWord(list) {
  let suma = 0;
  for (const number of list) {
    if (typeof number === "number") {
      suma = suma + number;
    } else suma = suma + number.length;
  }
  promedio = suma / list.length;
  console.log(promedio);
}

averageWord(mixedElements);
