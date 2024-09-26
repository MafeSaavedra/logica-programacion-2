// Función para convertir la temperatura
function convertirTemperatura(temCelsius) {
    let kelvin = temCelsius + 273.15; // Convertir a Kelvin
    let fahrenheit = (temCelsius * 9 / 5) + 32; // Convertir a Fahrenheit

    // Mostrar resultados en la página
    document.getElementById('fahrenheitResult').textContent = "Temperature in Fahrenheit: " + fahrenheit.toFixed(2) + " °F";
    document.getElementById('kelvinResult').textContent = "Temperature in Kelvin: " + kelvin.toFixed(2) + " K";
}

// Manejar el evento de clic del botón
document.getElementById('convertButton').addEventListener('click', () => {
    // Obtener el valor ingresado por el usuario
    let temCelsius = parseFloat(document.getElementById('celsius').value);

    // Verificar si la entrada es un número válido
    if (!isNaN(temCelsius)) {
        convertirTemperatura(temCelsius); // Llamar a la función de conversión
    } else {
        alert("Please enter a valid number."); // Mensaje de error
    }
});