import { leerSuperheroes, agregarSuperheroes } from './utils.mjs'; 

const archivoOriginal = './superheroes.txt'; 
const archivoNuevos = './agregar-superheroes.txt'; 
// Agregar nuevos superhéroes 
agregarSuperheroes (archivoOriginal, archivoNuevos); 

// Leer y mostrar la lista actualizada de superhéroes ordenada 
const superheroes = leerSuperheroes (archivoOriginal); 
console.log('Superhéroes ordenados:'); 
console.log(superheroes); 



 /* Leer y mostrar la lista de superhéroes ordenada 
const superheroes = leerSuperheroes('./superheroes.txt'); 
console.log('Superhéroes ordenados:');
console.log(superheroes);*/


