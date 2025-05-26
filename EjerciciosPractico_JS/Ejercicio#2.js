//P1. Prepara la entrada para leer desde consola
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

//P2. Preguntar al usuario la cantidad de números a Sumar
let cantidadNumeros;
readline.question('Ingrese la cantidad de numeros a suma', (respuesta) => {
    cantidadNumeros = parseInt(respuesta);
    console.log(`se leeran ${cantidadNumeros} números`);
    llenar();
})

const validar = () => {
    return new Promise((resolve) => {
        readline.question('Ingrese un número entre 1 y 1000: ', (line) => {
            let datovalido = parseInt(line);
            if (!isNaN(datovalido) && datovalido >= 1 && datovalido <= 1000) {
                resolve(datovalido);
            } else {
                console.log("Dato inválido, intenta nuevamente");
                resolve(validar()); // Reintenta recursivamente
            }
        });
    });
};


//P4. Llenar el array Usamos una funcion asincrona para usar dato valido
let arrayNum = [];
let numGuardado = 0;

const llenar = async () => {
    if (numGuardado < cantidadNumeros) {
        const datovalido = await validar();
        arrayNum.push(datovalido);
        numGuardado++;
        llenar(); // Llamar de nuevo hasta llegar al límite
    } else {
        console.log(`Se han leído ${numGuardado} en total`);
        readline.close();
        sumar(arrayNum);
    }
}


//P4. Sumar los datos
const sumar = (arrayNum) => {
    let sumaDatos = 0; // declarar e inicializar
    for (let i = 0; i < arrayNum.length; i++) {
        sumaDatos += arrayNum[i];
    }
    console.log("La suma total es:", sumaDatos);
}

