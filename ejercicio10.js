const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let suma = 0;
  for (const number of numberList) {
    suma = suma + number;
  }
  promedio = suma / numberList.length;
  console.log(promedio);
}

average(numbers);