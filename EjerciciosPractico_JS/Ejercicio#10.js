const stock = [
    { id: 1, nombre: "Televisor", tipo: "electronica", cantidad: 10, precio: 500 },
    { id: 2, nombre: "Camiseta", tipo: "ropa", cantidad: 20, precio: 15 },
    { id: 3, nombre: "Laptop", tipo: "electrónica", cantidad: 5, precio: 1200 },
    { id: 4, nombre: "Manzana", tipo: "alimentos", cantidad: 50, precio: 1 },
    { id: 5, nombre: "Pantalón", tipo: "ropa", cantidad: 15, precio: 40 },
    { id: 6, nombre: "Camisa", tipo: "ropa", cantidad: 25, precio: 25 },
    { id: 7, nombre: "Laptop", tipo: "electrónica", cantidad: 10, precio: 400 },
    { id: 8, nombre: "Leche Deslac", tipo: "alimentos", cantidad: 100, precio: 2 },
    { id: 9, nombre: "Leche Entera", tipo: "alimentos", cantidad: 100, precio: 2 },
    { id: 10, nombre: "Balón de Futbol", tipo: "juguetes", cantidad: 10, precio: 15 },
];

const readline = require('readline');

const consulta = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Crear función para mostrar las categoria disponibles
catDisponible = () => {
    const categoriaStock = stock.map(element => element.tipo);
    const setTipo = [... new Set(categoriaStock)];
    console.table(setTipo);
}
// Solicitar al usuario
console.log(`Recuerda que las categorias disponibles son :`)
catDisponible();
preguntar();

function preguntar() {
    consulta.question("Introduce el parámetro por el que deseas consultar el stock o el id del producto (si lo conoces) : → ", (tipoUsuario) => {
        if (isNaN(tipoUsuario)) {
            const tipoNormalizado = normalizar(tipoUsuario.trim());
            consultarStockPorTipo(tipoNormalizado);
            consulta.close();
        } else {
            const idconsultado = parseInt(tipoUsuario);
            crearMapaDeStock(stock, idconsultado);


        }

    });
}


// Normalizar para que acepte, busquedas con tildes y mayusculas
function normalizar(texto) {
    return texto
        .normalize("NFD") //Separa las letras de sus tildes.
        .replace(/[\u0300-\u036f]/g, "") //Elimina los caracteres de tilde(acentos y diacríticos).
        .toLowerCase(); //Convierte todo el texto a minúsculas.
}

function consultarStockPorTipo(tipo) {
    const resultado = stock.filter(producto =>
        normalizar(producto.tipo) === tipo && producto.cantidad > 0
    );

    if (resultado.length > 0) {
        console.log(`\nProductos que coinciden con la búsqueda:`);
        console.table(resultado);
    } else {
        console.log(`\nNo existen productos que coincidan con la búsqueda.`);
    }
    mapearNombresDeProductos(resultado);
}

function mapearNombresDeProductos(resultado) {
    const arregloNombresProductos = resultado.map(producto => producto.nombre);
    // Mostrar los nombres 
    console.log("La lista de elementos que coinciden son : →");
    arregloNombresProductos.forEach(element => {
        console.log(element);
    });
}

// Hacer un map de stock por el Id 
function crearMapaDeStock(stock, idconsultado) {

    const productoConsultado = stock.find(p => p.id === idconsultado);
    // Creamos un objeto con la información consultada 
    if (!productoConsultado) {
        console.log("Lo siento, ese ID no existe.\n");
        preguntar();
        return;
    }
    console.log("Información del producto consultado ↓ \n");
    console.log(`ID: ${productoConsultado.id}`);
    console.log(`Nombre: ${productoConsultado.nombre}`);
    console.log(`Categoría: ${productoConsultado.tipo}`);
    console.log(`Cantidad disponible: ${productoConsultado.cantidad}`);
    console.log(`Precio: $${productoConsultado.precio.toFixed(2)}\n`);
    consulta.close();
}



