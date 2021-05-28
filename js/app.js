// Se declara como const porque luego no va a cambiar o sea no va a dejar de ser array
// Pero el array si puede modificado.
const header = ["City: Destiny", "City: From" ,"DateFlight", "$ cost"];
const citiesDest = ["New York", "Buenos Aires", "Barcelona", "Paris", "Berlin"];// forma 1
const citiesFrom = ["Buenos Aires", "Miami",  "Montevideo", "Santiago de Chile"];
const dateFligth = ["05/27/2021", "05/30/2021", "05/28/2021"];
const flightCost = [1000.0, 5000.00, 1450.50, 9999.99]; // u$s

// Otros ejemplos
const cities2 = new Array(1);// forma 2 si solo quiere inicializar tamaño uso este
const cities3 = new Array("New York", "Buenos Aires", 234);// forma 3 
console.log(cities3[2]);
// Otros ejemplos

const PI = 3.14151515;

console.log(flightCost);
console.log(flightCost.sort());
// Ejemplo de strings
let estoEsOtroString = new String("Mi super string");
let otroString = "Mi hiper string";
// Ejemplos


// Si esto lo metemos en una funcion, podemos implementar nuestro find

for (let index = 0; index < citiesFrom.length; index++) {
    const element = citiesFrom[index]; // Se que element es un string, porque conozco citiesFrom
    console.log(element.toLowerCase()) // Paso todo a mayusculas
    if(element.toLowerCase() === "MiaMi".toLowerCase() ) {
        console.log("Encontre Miami");
    }
}