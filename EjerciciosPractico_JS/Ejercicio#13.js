//P1 definir de array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 25, 45, 28, 58, 32];
//P2. Recorrer verificar num pares
let arrPar = [];
let sumPar = 0;
function pares(array) {
    array.forEach(element => {
        if (element > 0 && element % 2 === 0) {
            arrPar.push(element);
        }
    });

    //P3. Sumar los números
    for (let item of arrPar) {
        sumPar += item;

    }
    console.log("La suma de los números pares son : ↓")
    console.log(sumPar)


    // Mostrar los numero pares
    console.log("El listado de numeros son \n");
    arrPar.forEach(item => {
        console.log(item);
    })
}

pares(array);

