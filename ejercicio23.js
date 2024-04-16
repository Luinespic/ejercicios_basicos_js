const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 125 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];
  
let peliculaPequeña = [];
let peliculaMediana = [];
let peliculaGrande = [];

for (const movie of movies) {
    if (movie.durationInMinutes < 100) {
        peliculaPequeña.push(movie.name);
    }
    else if (movie.durationInMinutes < 200) {
        peliculaMediana.push(movie.name);
    }
    else peliculaGrande.push(movie.name);
}

console.log("Películas pequeñas: " + peliculaPequeña);
console.log("Películas medianas: " + peliculaMediana);
console.log("Películas grandes: " + peliculaGrande);
