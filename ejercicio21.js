const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

let mayoresDeEdad = [];
let menoresDeEdad = [];

for (const user of users) {
  if (user.years >= 18) {
    mayoresDeEdad.push(user.name);
  } else menoresDeEdad.push(user.name);
}
console.log("Usuarios menores de edad: " + menoresDeEdad);
console.log("Usuarios mayores de edad: " + mayoresDeEdad);

