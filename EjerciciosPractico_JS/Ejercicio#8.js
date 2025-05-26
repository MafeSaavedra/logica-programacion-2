//ENUNCIADO-NIVEL 4/10
//Dado un arreglo de objetos con usuarios, devuelve un nuevo arreglo que
// contenga solo los nombres de los usuarios que tienen más de 18 años.

//P1. Definir el arreglo dado
const usuarios = [
    { name: "Ana", age: 17 },
    { name: "Luis", age: 21 },
    { name: "Carlos", age: 16 },
    { name: "María", age: 32 },
    { name: "Juan", age: 28 },
    { name: "Sofía", age: 25 }
];

const arregloFiltrado = usuarios.filter(usuario => usuario.age > 18);
// arregloFiltrado es un nuevo arreglo solo con usuarios mayores a 18

const arregloNombres = arregloFiltrado.map(usuario => usuario.name);
// arregloNombres es un nuevo arreglo solo con los nombres de esos usuarios

console.log(arregloNombres); // ["Luis", "María", "Sofía"]