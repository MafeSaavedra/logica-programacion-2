//P1. Preparar consola para solicitar número
const readline = require('readline');
const inputprocess = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,

});

//P2. Función que hace una pregunta y espera respuesta del usuario
const preguntar = (texto) => {
    return new Promise((resolve) => {
        inputprocess.question(texto, (respuesta) => {
            resolve(respuesta);
        });
    });
};
//P3. Función principal para pedir un número válido y verificar si es primo
async function numeroValido() {
    let numero;
    let valido = false;

    while (!valido) {
        console.log(" \nEste programa permite verificar si un número entre [10-1000] es primo  😊\n");
        const respuesta = await preguntar("Ingrese un numero entre 10 y el 1000   : ");
        numero = parseInt(respuesta)
        if (!isNaN(numero) && numero >= 10 && numero <= 1000) {
            valido = true;

        } else {
            20
            console.log("Número Invalido");
        }
    }

    verificarPrimo(numero);
    inputprocess.close();
}

//P4. Verificar si el numero es primo
function verificarPrimo(numero) {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            console.log(`\n❌ El número ${numero} no es primo. \n`);
            return;
        }
    }

    console.log(`\n✅ El número ${numero} es primo.\n`);
}


numeroValido();

