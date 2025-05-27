//Ejercicio para hacer un POST y un GET
//P1. Obtener las tarea con un GET
fetch("https://run.mocky.io/v3/d9767a6e-ec1a-4cc0-b6da-b870278a0e2f")
    //Convertir la rta a un JSON
    .then(response => response.json())
    // Cuando hayas obtenido entonces recorre y muestra lo que tenga la key titulo
    .then(data => {
        console.log("LISTA DE TAREAS");
        data.forEach(tarea => console.log(tarea.titulo));
    })
    .catch(error => console.error("Error al obtener la tarea"));

// P2 Enviar una nueva tarea en POST
fetch("https://run.mocky.io/v3/d9767a6e-ec1a-4cc0-b6da-b870278a0e2f", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        titulo: "Estudiar phrasal verb para Ingles"
    })
})
    .then(response => response.json())
    .then(data => {
        console.log("🟢Tarea Creada");

    })
    .catch(error => console.error("Error al crear tarea"));
