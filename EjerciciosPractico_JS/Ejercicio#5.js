//P1. Definir el array
let arr = [-5, 0, 3, -1, 0, 4, 6, -7, -8, 0, 2];
//P2.Funcion para contar los numeros positivos negitvos y cero
const contarNumero = (arr) => {
    //Definimos espacios en memoria necesario
    let positivos = 0;
    let negativos = 0;
    let cero = 0;
    // Recorremos el array revisando el contenido con un for ..of
    for (let numero of arr) {
        if (numero > 0) {
            positivos++;
        } else if (numero < 0) {
            negativos++;
        } else { cero++; }
    }
    //P3. Sacar porcentaje y mostrar en consola
    console.log(`Cantidad de números positivos: ${positivos}.
         El porcentaje equivale a ${(positivos / arr.length * 100).toFixed(4)}%\n`);
    console.log(`Cantidad de números negativos: ${negativos}. 
        El porcentaje equivale a ${(negativos / arr.length * 100).toFixed(4)}%\n`);
    console.log(`Cantidad de ceros: ${cero}. 
        El porcentaje equivale a ${(cero / arr.length * 100).toFixed(4)}%\n`);

}
contarNumero(arr);

