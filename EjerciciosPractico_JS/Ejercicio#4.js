//P1. Preparar consola para solicitar número
const readline = require('readline');

const entradaDatos = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("\nEste programa permite calcular la Diagonal de una Matriz \n");
// P2. Preguntar al usuario el tamaño N de la matriz
function pedirNumero() {
    entradaDatos.question("Ingrese un número entero entre [2 - 50]: ", (respuesta) => {
        const num = parseInt(respuesta);
        if (!isNaN(num) && num >= 2 && num <= 50) {
            const matriz = generarMatriz(num);

            console.log("Matriz generada");
            matriz.forEach(fila => {
                console.log(fila.join('\t'));
            });


            // console.log("Matriz generada: ", matriz);
            const suma = sumaDiagonalPrincipal(matriz);
            console.log(`\n🔢 Suma de la diagonal principal: ${suma}`);


            entradaDatos.close();
        } else {
            console.log("❌ Número inválido. Debe ser un entero entre 2 y 50.\nIntenta de nuevo.");
            pedirNumero();
        }
    })
}

//P3. Generar la matriz
function generarMatriz(num) {
    const matriz = [];
    for (let i = 0; i < num; i++) {
        matriz[i] = [];
        for (let j = 0; j < num; j++) {
            matriz[i][j] = Math.floor(Math.random() * 51)
        }
    }
    return matriz;
}

//P4. SumarDiagonalPrincipal
function sumaDiagonalPrincipal(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][i];
    }
    return suma;



}


pedirNumero();
