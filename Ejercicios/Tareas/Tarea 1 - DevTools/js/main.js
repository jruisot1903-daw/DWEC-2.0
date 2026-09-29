const formTarea = document.getElementById("formTarea");
const nombreTarea = document.getElementById("nombreTarea");
const prioridad = document.getElementById("prioridad");

const listaTareas = document.getElementById("listaTareas");
const contador = document.getElementById("contador");
const mensaje = document.getElementById("mensaje");

const btnError = document.getElementById("btnError");
const btnDatos = document.getElementById("btnDatos");
const btnLimpiar = document.getElementById("btnLimpiar");


let tareas = [];


// Cargar las tareas cuando se abre la página
cargarTareas();


// Evento del formulario
formTarea.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nombre = nombreTarea.value;
    const nivel = prioridad.value;

    if (nombre === "") {
        console.warn("Se ha intentado añadir una tarea sin nombre");
        return;
    }

    addTask(nombre, nivel);

    nombreTarea.value = "";
});


// Funciones

function addTask(nombre, nivel) {

    console.log("Añadiendo tarea:", nombre);

    const tarea = processTask(nombre, nivel);

    tareas.push(tarea);

    guardarTareas();

    mostrarTareas();

    console.log("Tarea añadida correctamente");
}

function processTask(nombre, nivel) {

    console.log("Procesando tarea:", nombre);

    const puntuacion = calculatePriority(nivel);

    const tarea = {
        id: Date.now(),
        nombre: nombre,
        prioridad: nivel,
        puntuacion: puntuacion
    };

    return tarea;
}

function calculatePriority(nivel) {

    console.log("Calculando prioridad...");

    let puntuacion = nivel * 10;

    /*
     * ERROR DE LÓGICA INTENCIONADO
     *
     * Si la prioridad es 3, esperamos 30.
     * Pero aquí modificamos accidentalmente el valor.
     */
    if (nivel == 3) {

        puntuacion = puntuacion + 100;

        console.warn(
            "Valor inesperado: la prioridad alta está recibiendo 100 puntos adicionales"
        );
    }

    return puntuacion;
}


// Mostrar las tareas
function mostrarTareas() {

    listaTareas.innerHTML = "";

    /*
     * BUCLE INTENCIONADO PARA PRACTICAR BREAKPOINTS
     *
     * Podemos colocar un breakpoint en la línea
     * "const tarea = tareas[i];"
     */
    for (let i = 0; i < tareas.length; i++) {

        const tarea = tareas[i];

        const elemento = crearElementoTarea(tarea);

        listaTareas.appendChild(elemento);
    }

    actualizarContador();

    if (tareas.length === 0) {

        mensaje.style.display = "block";

    } else {

        mensaje.style.display = "none";
    }
}


// Crear cada elemento de la lista
function crearElementoTarea(tarea) {

    const li = document.createElement("li");

    li.classList.add("tarea");

    if (tarea.prioridad == 1) {

        li.classList.add("prioridad-baja");

    } else if (tarea.prioridad == 2) {

        li.classList.add("prioridad-media");

    } else {

        li.classList.add("prioridad-alta");
    }


    const div = document.createElement("div");

    div.classList.add("tarea-info");


    const titulo = document.createElement("h3");

    titulo.textContent = tarea.nombre;


    const descripcion = document.createElement("p");

    descripcion.textContent =
        "Prioridad: " + obtenerNombrePrioridad(tarea.prioridad) +
        " | Puntuación: " + tarea.puntuacion;


    div.appendChild(titulo);

    div.appendChild(descripcion);

    li.appendChild(div);


    return li;
}


// Obtener el nombre de la prioridad
function obtenerNombrePrioridad(nivel) {

    if (nivel == 1) {

        return "Baja";

    } else if (nivel == 2) {

        return "Media";

    } else if (nivel == 3) {

        return "Alta";
    }

    return "Desconocida";
}


// Actualizar contador
function actualizarContador() {

    if (tareas.length == 1) {

        contador.textContent = "1 tarea";

    } else {

        contador.textContent = tareas.length + " tareas";
    }
}


// Guardar tareas en localStorage
function guardarTareas() {

    localStorage.setItem(
        "tareasDevTools",
        JSON.stringify(tareas)
    );

    console.log("Tareas guardadas en localStorage");
}


// Cargar tareas desde localStorage
function cargarTareas() {

    const datos = localStorage.getItem("tareasDevTools");

    if (datos != null) {

        tareas = JSON.parse(datos);

        console.log("Tareas cargadas desde localStorage");

    } else {

        console.log("No hay tareas guardadas");
    }

    mostrarTareas();
}


// Botón "Provocar error"
btnError.addEventListener("click", function () {

    console.log("Preparando error intencionado...");

    throw new Error(
        "ERROR INTENCIONADO: se ha producido un error para practicar con DevTools"
    );
});


// Botón "Mostrar datos"
btnDatos.addEventListener("click", function () {

    console.log("Lista completa de tareas:");

    console.log(tareas);

    console.table(tareas);

    console.warn(
        "Este mensaje es un warning de prueba para DevTools"
    );

    console.error(
        "Este mensaje es un error de prueba para DevTools"
    );
});


// Botón "Limpiar tareas"
btnLimpiar.addEventListener("click", function () {

    tareas = [];

    localStorage.removeItem("tareasDevTools");

    mostrarTareas();

    console.log("Todas las tareas han sido eliminadas");
});


// Petición para practicar Network
function comprobarConexion() {

    fetch("index.html")
        .then(function (respuesta) {

            console.log("Respuesta recibida:", respuesta);

            if (!respuesta.ok) {

                throw new Error(
                    "Error HTTP: " + respuesta.status
                );
            }

            return respuesta.text();
        })
        .then(function (contenido) {

            console.log(
                "index.html descargado correctamente"
            );

            console.log(
                "Tamaño del documento:",
                contenido.length,
                "caracteres"
            );
        })
        .catch(function (error) {

            console.error(
                "Error en la petición:",
                error.message
            );
        });
}


// Ejecutamos la petición al cargar la página
comprobarConexion();