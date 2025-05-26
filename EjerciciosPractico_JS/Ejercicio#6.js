//P1. Declarar el array 
const arr = [1, 2, 9, 4, 5];
//P2. Organizar el array de menor a mayor
const arrMin = arr.sort((a, b) => a - b);
console.log(arrMin);
//P3. Sumar los datos 
let sumMin = 0;
for (let i = 0; i < arr.length - 1; i++) {
    sumMin += arrMin[i];
}
console.log(`La suma mínima de los 4 primero números es ${sumMin}`);
//P4. Organizar el array de mayor a menor
const arrMax = arr.sort((a, b) => b - a);
console.log(arrMax);
//P3. Sumar los datos 
let sumMax = 0;
for (let i = 0; i < arr.length - 1; i++) {
    sumMax += arrMax[i];
}
console.log(`La suma máxima de los 4 primero números es ${sumMax}`);