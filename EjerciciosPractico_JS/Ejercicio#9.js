//P1. Preparar la entrada de los datos
const readline = require('readline');
const LeerEntrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//P2. Preguntar el N entero indica cuantos usuarios registrar 
console.log("Sistema de Registro de Usuarios")
function preguntarCantidad() {
    LeerEntrada.question("¿Cuántos usuarios deseas registrar? (1 a 20): ", (respuesta) => {
        const cantidad = parseInt(respuesta);

        if (!isNaN(cantidad) && cantidad >= 1 && cantidad <= 20) {
            pedirDatos(cantidad, 0); // Iniciamos el ingreso de usuarios
        } else {
            console.log("❌ Número inválido. Intenta de nuevo.\n");
            preguntarCantidad(); // Vuelve a preguntar
        }
    });
}

//P3. Función para pedir y almacenar nomre y edad del usuario
const obtInfoUser = () => {

}