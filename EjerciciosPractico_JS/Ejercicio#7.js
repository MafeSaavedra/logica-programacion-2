//P1. Definir el array
const numeros = [1, 2, 2, 3, 4, 3, 3, 7];
// P2. Definimos el map
const cantNumero = {};
// P3. Recorremos el array para ir contando la frecuencia de cada numero 
for (const i of numeros) {
    if (cantNumero[i]) {
        cantNumero[i] += 1;
    } else {
        cantNumero[i] = 1;
    }
}
console.log(cantNumero);

//P4. Crear un array para guardar los que no se repiten
const noRepetidos = [];
//P5.  Recorrer el objeto cantNumero
for (const numero in cantNumero) {
    if (cantNumero[numero] === 1) {
        // Guardamos el número como número (no string)
        noRepetidos.push(Number(numero));
    }
}

//P6. Mostrar los números en forma de columna
noRepetidos.forEach(num => {
    console.log(num);
});