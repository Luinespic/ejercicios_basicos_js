//1. Luke Skywalker cumple años. Modifica el siguiente código JavaScript para actualizar la edad de Luke Skywalker a 25 años.

const jedi = {nombre: "Luke Skywalker", edad: 19};

jedi.edad += 6;

console.log (jedi)

//2. Presentación al estilo Leia Organa. Muestra un mensaje por consola que siga la siguiente estructura: "Soy Leia Organa, tengo 20 años y soy una princesa de Alderaan."

let nombre = "Leia";
let apellido = "Organa";
let edad = 20;

console.log ("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.")
console.log (`Soy ${nombre} ${apellido}, tengo ${edad} años y soy una princesa de Alderaan.`)

//3. Calculando el coste total de sables de luz: Obtén el precio total de dos sables de luz: "Shoto de Yoda" y "sable de Darth Vader".

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

let costeTotalSables = sable1.precio + sable2.precio;

console.log (costeTotalSables)

//4. Actualizando el precio final de las naves. 

let precioBaseGlobal = 10000;

//Modifica el valor de la variable global precioBaseGlobal a 25.000 créditos.

precioBaseGlobal = 25000;

//Actualiza el precioFinal de dos naves ("Ala-X" y "Halcón Milenario") sumando el valor de precioBaseGlobal a su precioBase.

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

 nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
 nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

 console.log (nave1)
 console.log (nave2)


