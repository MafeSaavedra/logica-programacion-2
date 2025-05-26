// P1. Prepara la entrada por consola
process.stdin.resume();
// Le decimos que formto será la entrada
process.stdin.setEncoding('ascii');

// P2. Capturar y almacenar los datos
let input = "";
process.stdin.on('data', function (entradaDeUsuario) {
    if (entradaDeUsuario.trim() === '') {
        // Si se detecta línea vacía, finalizar (Enter dos veces)
        process.stdin.emit('end');
    } else {
        input += entradaDeUsuario;
    }
});

//P3. Procesar la entrada
let array = [];
process.stdin.on('end', function () {
    array = input.split('\n') // Dividir  el bloque de texto por líneas
    main();
});

//P4. Verificar el numero sea valido  [1-1000]
function esValido(n) {
    return !isNaN(n) && n >= 1 && n <= 1000;
}
//P5. Leer cada linea
let lineaActual = 0;
function leerlineas() {
    return array[lineaActual++];
}

//P6. Realizar la suma de los numero
function sumarDosNumeros(a, b) {
    return a + b;
}

// P7. Estructurar la función principal
function main() {
    // Convirtiendo la lineas a enteros 
    const a = parseInt(leerlineas());
    const b = parseInt(leerlineas());

    // Verificar que si se puede hacer la operación 

    if (!esValido(a) || !esValido(b)) {
        console.log("Error: Debes ingresar solo números entre 1 y 1000 ");
    }
    else {
        const resultado = sumarDosNumeros(a, b);
        console.log(resultado);
    }



}