// P1. Mostrar mensaje en consola
console.log("Este programa recibe 4 números e indica si son primos o no");
//P2. Recibir datos por consola del usuario
const readline = require("readline");
const entradaUsuario = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// P3. Recibir datos por consola
let arrNumeros = [];
let contador = 1;
function recibirDatos() {
    if (contador <= 4) {
        entradaUsuario.question(`Porfavor Introduce el número ${contador} :`, (numIntroducido) => {
            if (!isNaN(numIntroducido)) {
                arrNumeros.push(parseInt(numIntroducido));
                contador++;
                recibirDatos();
            } else {
                console.log("Introduce un número válido");
                recibirDatos();
            }
        });
    } else {
        // Mostrar array
        verificarPrimos(arrNumeros);  // CORREGIDO aquí, con "s"
        console.log("\nLos datos ingresado son : ↓ \n")
        for (item of arrNumeros) {
            console.log(item);
        }
        entradaUsuario.close();
    }
}
// P4. Función para verificar si un número es primo
function esPrimo(num) {
    if (num <= 1) return false;
    if (num === 2) return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

// P5. Clasificar primos y no primos
let arrPrimos = [];
let arrNoPrimos = [];

function verificarPrimos(arr) {
    arr.forEach(num => {
        if (esPrimo(num)) {
            arrPrimos.push(num);
        } else {
            arrNoPrimos.push(num);
        }
    });

    console.log("\n✅ Números primos:", arrPrimos);
    console.log("❌ Números no primos:", arrNoPrimos);
}

recibirDatos();
