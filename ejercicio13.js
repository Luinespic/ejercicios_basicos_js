const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function nameFinder(nameList, name) {
  let exist = false;
  if (nameList.indexOf(name) !== -1) {
    exist = true;
    return exist.toString() + " " + nameList.indexOf(name);
  }
  return exist.toString();
}

const resultado = nameFinder(names, "Marc");
console.log(resultado);
