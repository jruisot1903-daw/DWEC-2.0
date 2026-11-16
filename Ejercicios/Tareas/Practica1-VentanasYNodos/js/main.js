// =====================================================
// DATOS INICIALES
// =====================================================
let socios = [
    {
        id: "SOC-0001",
        nombre: "Lucía",
        apellidos: "Martín Ruiz",
        dni: "12345678Z",
        email: "lucia.martin@correo.es",
        telefono: "612345678",
        fechaNacimiento: "1995-03-14",
        fechaAlta: "2019-09-02",
        actividades: ["natación", "yoga"],
        cuota: 35
    },
    {
        id: "SOC-0002",
        nombre: "Álvaro",
        apellidos: "García Gómez",
        dni: "87654321X",
        email: "alvaro.garcia@correo.es",
        telefono: "698765432",
        fechaNacimiento: "1988-11-20",
        fechaAlta: "2020-01-15",
        actividades: ["pádel", "musculación"],
        cuota: 45
    },
    {
        id: "SOC-0003",
        nombre: "Sofía",
        apellidos: "López Pérez",
        dni: "11223344L",
        email: "sofia.lopez@correo.es",
        telefono: "633221144",
        fechaNacimiento: "2004-05-10",
        fechaAlta: "2021-05-10",
        actividades: ["spinning", "pilates"],
        cuota: 30
    },
    {
        id: "SOC-0004",
        nombre: "Carlos",
        apellidos: "Sánchez Gil",
        dni: "55667788K",
        email: "carlos.sanchez@correo.es",
        telefono: "655443322",
        fechaNacimiento: "1975-12-01",
        fechaAlta: "2018-03-11",
        actividades: ["natación"],
        cuota: 25
    },
    {
        id: "SOC-0005",
        nombre: "Elena",
        apellidos: "Martínez Sanz",
        dni: "99887766Q",
        email: "elena.martinez@correo.es",
        telefono: "677889900",
        fechaNacimiento: "1992-07-25",
        fechaAlta: "2022-08-19",
        actividades: ["yoga", "pilates"],
        cuota: 40
    },
    {
        id: "SOC-0006",
        nombre: "David",
        apellidos: "Fernández Ruiz",
        dni: "33445566S",
        email: "david.fernandez@correo.es",
        telefono: "611223344",
        fechaNacimiento: "2000-02-14",
        fechaAlta: "2023-02-01",
        actividades: ["musculación", "spinning"],
        cuota: 50
    },
    {
        id: "SOC-0007",
        nombre: "Carmen",
        apellidos: "Jiménez Moreno",
        dni: "22334455Y",
        email: "carmen.jimenez@correo.es",
        telefono: "688990011",
        fechaNacimiento: "1968-09-30",
        fechaAlta: "2015-11-20",
        actividades: ["natación", "yoga"],
        cuota: 35
    },
    {
        id: "SOC-0008",
        nombre: "Javier",
        apellidos: "Ruiz Blanco",
        dni: "66554433R",
        email: "javier.ruiz@correo.es",
        telefono: "644556677",
        fechaNacimiento: "1998-06-05",
        fechaAlta: "2021-07-12",
        actividades: ["pádel"],
        cuota: 25
    },
    {
        id: "SOC-0009",
        nombre: "Ana",
        apellidos: "Torres Castro",
        dni: "77665544W",
        email: "ana.torres@correo.es",
        telefono: "622334455",
        fechaNacimiento: "2009-04-18",
        fechaAlta: "2024-01-10",
        actividades: ["pilates"],
        cuota: 30
    },
    {
        id: "SOC-0010",
        nombre: "Manuel",
        apellidos: "Romero Ortiz",
        dni: "44556677P",
        email: "manuel.romero@correo.es",
        telefono: "699001122",
        fechaNacimiento: "1980-10-05",
        fechaAlta: "2017-04-05",
        actividades: ["musculación", "natación"],
        cuota: 45
    }
];

// =====================================================
// CONSTANTES Y VARIABLES GLOBALES
// =====================================================
const ACTIVIDADES = ["natación", "yoga", "pádel", "musculación", "spinning", "pilates"];
const LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

// Ventanas emergentes abiertas (para reutilizarlas y cerrarlas al recargar)
const ventanas = {};

// =====================================================
// FUNCIÓN BASE PARA CREAR NODOS
// =====================================================

/** Crea un elemento HTML con texto, id y estilos opcionales. Devuelve null si el tipo no es válido. */
function createNode (tipo, texto, id, styles) {
    let elemento = null;

    if ((tipo) && (typeof tipo === "string")) 
        elemento = document.createElement(tipo);
    else
        return null;
        
    if ((texto != "") && (typeof texto === "string")) {
        let elementoText = document.createTextNode(texto);
        elemento.appendChild(elementoText);
    }

    if (id != "") 
        elemento.id = id;

    if ((styles) && (typeof styles === "string") && (styles != ""))
        elemento.style = styles;

    return elemento;
}

// =====================================================
// FUNCIONES AUXILIARES PARA TRABAJAR CON NODOS
// =====================================================

/** Crea un nodo con createNode (sin id ni estilos) y le asigna una clase CSS. */
function nodoClase(tipo, texto, clase) {
    const nodo = createNode(tipo, texto, "", "");
    if (nodo && clase) {
        nodo.className = clase;
    }
    return nodo;
}

/** Elimina todos los hijos de un nodo. */
function vaciarNodo(nodo) {
    while (nodo.firstChild) {
        nodo.removeChild(nodo.firstChild);
    }
}

/** Sustituye el contenido de un nodo por un único nodo de texto. */
function ponerTexto(nodo, texto) {
    vaciarNodo(nodo);
    if (texto) {
        nodo.appendChild(document.createTextNode(texto));
    }
}

/** Crea un párrafo con una etiqueta en negrita seguida de su valor (para las fichas). */
function crearLinea(etiqueta, valor) {
    const parrafo = createNode("p", "", "", "");
    parrafo.appendChild(createNode("strong", `${etiqueta}: `, "", ""));
    parrafo.appendChild(document.createTextNode(valor));
    return parrafo;
}

// =====================================================
// FUNCIONES AUXILIARES DE DATOS Y FECHAS
// =====================================================

/** Añade un cero delante si el número tiene una sola cifra (5 -> "05"). */
function pad(n) {
    return String(n).padStart(2, "0");
}

/** Devuelve el texto con la primera letra en mayúscula. */
function capitalizarPrimera(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

/** Pone en mayúscula la primera letra de cada palabra y el resto en minúscula. */
function capitalizarPalabras(texto) {
    return texto.toLowerCase().split(" ").map(capitalizarPrimera).join(" ");
}

/** Pasa a minúsculas y elimina las tildes (Álvaro -> alvaro). */
function normalizar(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

/** Convierte una fecha "aaaa-mm-dd" en un objeto Date local (evita problemas de zona horaria). */
function parsearFecha(texto) {
    const [a, m, d] = texto.split("-").map(Number);
    return new Date(a, m - 1, d);
}

/** Devuelve la fecha de hoy a las 00:00 para poder comparar días completos. */
function hoySinHora() {
    const h = new Date();
    return new Date(h.getFullYear(), h.getMonth(), h.getDate());
}

/** Devuelve la fecha de hoy en formato "aaaa-mm-dd". */
function fechaHoyISO() {
    const h = new Date();
    return `${h.getFullYear()}-${pad(h.getMonth() + 1)}-${pad(h.getDate())}`;
}

/** Calcula los años cumplidos a día de hoy a partir de una fecha "aaaa-mm-dd". */
function calcularEdad(fechaNacimiento) {
    const hoy = hoySinHora();
    const nac = parsearFecha(fechaNacimiento);
    let edad = hoy.getFullYear() - nac.getFullYear();
    const difMes = hoy.getMonth() - nac.getMonth();
    if (difMes < 0 || (difMes === 0 && hoy.getDate() < nac.getDate())) {
        edad--;
    }
    return edad;
}

/** Devuelve "N año(s)" con el plural correcto. */
function textoEdad(edad) {
    return `${edad} ${edad === 1 ? "año" : "años"}`;
}

/** Oculta parte del email dejando las 2 primeras letras y el dominio (lu**********@correo.es). */
function ocultarEmail(email) {
    const [usuario, dominio] = email.split("@");
    const visibles = usuario.slice(0, 2);
    return visibles + "*".repeat(Math.max(usuario.length - 2, 0)) + "@" + dominio;
}

/** Devuelve las iniciales del nombre y del primer apellido (Lucía Martín Ruiz -> LM). */
function obtenerIniciales(socio) {
    return (socio.nombre.charAt(0) + socio.apellidos.charAt(0)).toUpperCase();
}

/** Devuelve "Nombre Apellido1 I." con la inicial del segundo apellido (si existe). */
function nombreCorto(socio) {
    const partes = socio.apellidos.split(" ");
    let texto = `${socio.nombre} ${partes[0]}`;
    if (partes.length > 1) {
        texto += ` ${partes[1].charAt(0)}.`;
    }
    return texto;
}

/** Formatea un número como dinero con 2 decimales: 35 -> "35.00 €". */
function formatearEuros(numero) {
    return `${numero.toFixed(2)} €`;
}

// =====================================================
// VENTANAS NUEVAS
// =====================================================

/**
 * Abre (o reutiliza) una ventana emergente con un documento vacío que ya carga
 * la hoja de estilos de la página. Devuelve la ventana, o null si el navegador la bloquea.
 */
function abrirVentana(nombre, titulo, ancho, alto) {
    let ventana = ventanas[nombre];

    if (!ventana || ventana.closed) {
        const izquierda = Math.max(0, Math.round((screen.width - ancho) / 2));
        const arriba = Math.max(0, Math.round((screen.height - alto) / 2));
        ventana = window.open("", "_blank",
            `width=${ancho},height=${alto},left=${izquierda},top=${arriba}`);

        if (!ventana) {
            return null; // ventana emergente bloqueada
        }

        // Esqueleto mínimo (con doctype y charset); todo lo demás se crea con nodos
        ventana.document.write('<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"></head><body></body></html>');
        ventana.document.close();

        // Se enlaza la misma hoja de estilos que usa la página principal
        const hoja = document.querySelector('link[rel="stylesheet"]');
        if (hoja) {
            const enlace = createNode("link", "", "", "");
            enlace.rel = "stylesheet";
            enlace.href = hoja.href;
            ventana.document.head.appendChild(enlace);
        }

        ventanas[nombre] = ventana;
    }

    ventana.document.title = titulo;
    vaciarNodo(ventana.document.body);
    ventana.focus();
    return ventana;
}

/** Cierra todas las ventanas emergentes que sigan abiertas (al recargar o cerrar la página). */
function cerrarVentanas() {
    Object.values(ventanas).forEach(ventana => {
        if (ventana && !ventana.closed) {
            ventana.close();
        }
    });
}

/** Escribe un mensaje en un contenedor de la página principal con la clase indicada. */
function mostrarMensaje(contenedor, texto, clase) {
    ponerTexto(contenedor, texto);
    contenedor.className = clase;
}

// =====================================================
// 3.1 CABECERA: FECHA Y HORA
// =====================================================

/** Muestra la fecha de hoy en texto (con la primera letra en mayúscula). */
function mostrarFecha() {
    const texto = new Date().toLocaleDateString("es-ES", {
        weekday: "long", day: "numeric", month: "long", year: "numeric"
    });
    ponerTexto(document.getElementById("fecha-hoy"), capitalizarPrimera(texto));
}

/** Muestra la hora actual con formato hh:mm:ss. */
function mostrarHora() {
    const h = new Date();
    ponerTexto(document.getElementById("hora-actual"),
        `${pad(h.getHours())}:${pad(h.getMinutes())}:${pad(h.getSeconds())}`);
}

/** Pinta fecha y hora y programa la actualización de la hora cada segundo. */
function iniciarReloj() {
    mostrarFecha();
    mostrarHora();
    setInterval(() => {
        mostrarHora();
        mostrarFecha(); // por si la página queda abierta al cambiar de día
    }, 1000);
}

// =====================================================
// 3.2 LISTADO DE SOCIOS
// =====================================================

/** Rellena la lista desplegable del filtro con las actividades, manteniendo la opción elegida. */
function rellenarFiltroActividades() {
    const select = document.getElementById("selector-filtro-actividad");
    const seleccionada = select.value || "todos";

    vaciarNodo(select);

    const opcionTodas = createNode("option", "Todas las actividades", "", "");
    opcionTodas.value = "todos";
    select.appendChild(opcionTodas);

    ACTIVIDADES.forEach(actividad => {
        const opcion = createNode("option", capitalizarPrimera(actividad), "", "");
        opcion.value = actividad;
        select.appendChild(opcion);
    });

    select.value = seleccionada;
}

/**
 * Aplica buscador, filtro de actividad y orden a una COPIA del array de socios
 * (los datos originales nunca se modifican) y devuelve el resultado.
 */
function obtenerSociosVisibles() {
    const texto = normalizar(document.getElementById("entrada-buscar").value.trim());
    const actividad = document.getElementById("selector-filtro-actividad").value;
    const orden = document.getElementById("selector-orden").value;

    // filter ya crea un array nuevo, así que el original no se toca
    let resultado = socios.filter(socio => {
        // Buscador: solo actúa a partir de 2 caracteres
        if (texto.length >= 2) {
            const contenido = normalizar(`${socio.nombre} ${socio.apellidos} ${socio.email}`);
            if (!contenido.includes(texto)) return false;
        }
        // Filtro de actividad
        if (actividad !== "todos" && !socio.actividades.includes(actividad)) return false;
        return true;
    });

    // Orden (sobre la copia filtrada)
    switch (orden) {
        case "nombre":
            resultado.sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
            break;
        case "apellidos":
            resultado.sort((a, b) => a.apellidos.localeCompare(b.apellidos, "es"));
            break;
        case "jovenes": // nacidos más tarde primero
            resultado.sort((a, b) => b.fechaNacimiento.localeCompare(a.fechaNacimiento));
            break;
        case "antiguos": // nacidos antes primero (mayores)
            resultado.sort((a, b) => a.fechaNacimiento.localeCompare(b.fechaNacimiento));
            break;
    }
    return resultado;
}

/** Crea una celda de tabla (td) con texto y, opcionalmente, una clase CSS. */
function crearCelda(texto, clase) {
    return nodoClase("td", texto, clase);
}

/** Construye con nodos la fila (tr) de la tabla correspondiente a un socio. */
function crearFilaSocio(socio) {
    const fila = createNode("tr", "", "", "");

    // Celda Id: círculo con iniciales + id
    const celdaId = createNode("td", "", "", "");
    const contenedorId = nodoClase("div", "", "avatar-id");
    contenedorId.appendChild(nodoClase("div", obtenerIniciales(socio), "avatar"));
    contenedorId.appendChild(createNode("span", socio.id, "", ""));
    celdaId.appendChild(contenedorId);
    fila.appendChild(celdaId);

    fila.appendChild(crearCelda(nombreCorto(socio), ""));
    fila.appendChild(crearCelda(ocultarEmail(socio.email), "celda-email"));
    fila.appendChild(crearCelda(textoEdad(calcularEdad(socio.fechaNacimiento)), ""));
    fila.appendChild(crearCelda(socio.actividades.join(", "), ""));
    fila.appendChild(crearCelda(formatearEuros(socio.cuota), ""));

    return fila;
}

/** Dibuja la tabla de socios según el buscador, filtro y orden actuales. */
function pintarTabla() {
    const cuerpo = document.getElementById("cuerpo-tabla-socios");
    const lista = obtenerSociosVisibles();

    vaciarNodo(cuerpo);

    if (lista.length === 0) {
        const fila = createNode("tr", "", "", "");
        const celda = createNode("td", "No hay socios que coincidan", "", "");
        celda.colSpan = 6;
        fila.appendChild(celda);
        cuerpo.appendChild(fila);
        return;
    }

    lista.forEach(socio => cuerpo.appendChild(crearFilaSocio(socio)));
}

/** Activa o desactiva la pantalla completa de la sección del listado. */
function alternarPantallaCompleta() {
    const seccion = document.getElementById("seccion-listado");
    if (!document.fullscreenElement) {
        seccion.requestFullscreen().catch(() => {});
    } else {
        document.exitFullscreen().catch(() => {});
    }
}

/** Cambia el texto del botón según se esté o no en pantalla completa (también al pulsar Esc). */
function actualizarBotonPantallaCompleta() {
    const boton = document.getElementById("boton-pantalla-completa");
    ponerTexto(boton, document.fullscreenElement ? "Salir de pantalla completa" : "Pantalla completa");
}

// =====================================================
// 3.3 FICHA DE SOCIO (VENTANA NUEVA QUE MUESTRA INFORMACIÓN)
// =====================================================

/**
 * Abre una ventana nueva y construye en ella, con nodos, la ficha del socio.
 * Devuelve true si se ha podido abrir y false si el navegador la ha bloqueado.
 */
function abrirVentanaFicha(socio) {
    const ventana = abrirVentana("ficha", `Ficha de ${socio.nombre}`, 520, 580);
    if (!ventana) return false;

    const hoy = hoySinHora();
    const nac = parsearFecha(socio.fechaNacimiento);
    const alta = parsearFecha(socio.fechaAlta);

    const fechaNacTexto = nac.toLocaleDateString("es-ES", {
        weekday: "long", day: "numeric", month: "long", year: "numeric"
    });
    const fechaAltaTexto = `${pad(alta.getDate())}/${pad(alta.getMonth() + 1)}/${alta.getFullYear()}`;
    const diasEnClub = Math.round((hoy - alta) / 86400000);

    // Próximo cumpleaños: este año o, si ya pasó, el siguiente
    let cumple = new Date(hoy.getFullYear(), nac.getMonth(), nac.getDate());
    if (cumple < hoy) {
        cumple = new Date(hoy.getFullYear() + 1, nac.getMonth(), nac.getDate());
    }
    const diasCumple = Math.round((cumple - hoy) / 86400000);

    const telefono = socio.telefono.replace(/(\d{3})(?=\d)/g, "$1 ");
    const dominio = socio.email.split("@")[1];

    // Estructura: section > h2 + div.ficha + div.acciones
    const seccion = createNode("section", "", "", "");
    seccion.appendChild(createNode("h2", "Ficha de socio", "", ""));

    const ficha = nodoClase("div", "", "ficha");
    ficha.appendChild(createNode("h3", `${socio.nombre} ${socio.apellidos} (${socio.id})`, "", ""));
    ficha.appendChild(crearLinea("DNI", socio.dni));
    ficha.appendChild(crearLinea("Email", `${socio.email} (dominio: ${dominio})`));
    ficha.appendChild(crearLinea("Teléfono", telefono));
    ficha.appendChild(crearLinea("Nacimiento", `${fechaNacTexto} · ${textoEdad(calcularEdad(socio.fechaNacimiento))}`));
    ficha.appendChild(crearLinea("Alta", `${fechaAltaTexto} · ${diasEnClub} días en el club`));
    ficha.appendChild(crearLinea("Próximo cumpleaños", `en ${diasCumple} días`));
    ficha.appendChild(crearLinea("Actividades", socio.actividades.join(", ")));
    ficha.appendChild(crearLinea("Cuota mensual", formatearEuros(socio.cuota)));
    seccion.appendChild(ficha);

    const acciones = nodoClase("div", "", "acciones");
    const botonCerrar = createNode("button", "Cerrar ventana", "", "");
    botonCerrar.type = "button";
    botonCerrar.addEventListener("click", () => ventana.close());
    acciones.appendChild(botonCerrar);
    seccion.appendChild(acciones);

    ventana.document.body.appendChild(seccion);
    return true;
}

/** Busca un socio por DNI (sin distinguir mayúsculas) y abre su ficha en una ventana nueva o muestra un error. */
function consultarFicha() {
    const dni = document.getElementById("entrada-dni-buscar").value.trim().toUpperCase();
    const contenedor = document.getElementById("resultado-ficha");
    const socio = socios.find(s => s.dni === dni);

    vaciarNodo(contenedor);

    if (!socio) {
        contenedor.appendChild(nodoClase("p", "No existe ningún socio con ese DNI.", "mensaje-error"));
        return;
    }

    if (abrirVentanaFicha(socio)) {
        contenedor.appendChild(nodoClase("p",
            `Ficha de ${socio.nombre} ${socio.apellidos} abierta en una ventana nueva.`, "texto-marcador"));
    } else {
        contenedor.appendChild(nodoClase("p",
            "El navegador ha bloqueado la ventana emergente. Permítela e inténtalo de nuevo.", "mensaje-error"));
    }
}

// =====================================================
// 3.4 ALTA DE SOCIO (VENTANA NUEVA QUE RECOGE INFORMACIÓN)
// =====================================================

/** Calcula la letra correcta de un DNI a partir de sus 8 dígitos. */
function letraDni(numero) {
    return LETRAS_DNI.charAt(Number(numero) % 23);
}

/** Muestra (o limpia si el mensaje está vacío) el error de un campo y lo marca en rojo. */
function mostrarError(elemento, spanError, mensaje) {
    ponerTexto(spanError, mensaje);
    elemento.classList.toggle("campo-error", Boolean(mensaje));
}

/** Valida un nombre o apellidos: solo letras y un único espacio entre palabras. Devuelve el error o "". */
function validarTextoNombre(texto, etiqueta) {
    if (texto === "") return `${etiqueta} es obligatorio.`;
    if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+( [A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)*$/.test(texto)) {
        return `${etiqueta}: solo letras y un único espacio entre palabras.`;
    }
    return "";
}

/** Valida el DNI (formato, letra correcta y que no esté repetido). Devuelve el error o "". */
function validarDni(dni) {
    if (!/^\d{8}[A-Za-z]$/.test(dni)) return "El DNI debe tener 8 dígitos y una letra.";
    if (letraDni(dni.slice(0, 8)) !== dni.charAt(8).toUpperCase()) {
        return `La letra del DNI no es correcta (debería ser ${letraDni(dni.slice(0, 8))}).`;
    }
    if (socios.some(s => s.dni === dni.toUpperCase())) return "Ya existe un socio con ese DNI.";
    return "";
}

/** Valida el formato del email. Devuelve el error o "". */
function validarEmail(email) {
    if (!/^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(email)) {
        return "Formato de email no válido (usuario@dominio.extensión).";
    }
    return "";
}

/** Valida el teléfono (9 dígitos que empiezan por 6, 7, 8 o 9; se admiten espacios). Devuelve el error o "". */
function validarTelefono(telefono) {
    const limpio = telefono.replace(/\s/g, "");
    if (!/^[6-9]\d{8}$/.test(limpio)) return "El teléfono debe tener 9 dígitos y empezar por 6, 7, 8 o 9.";
    return "";
}

/** Valida la fecha dd/mm/aaaa (existente, no futura y edad mínima de 14 años). Devuelve el error o "". */
function validarFechaNacimiento(texto) {
    const m = texto.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!m) return "Formato de fecha incorrecto (dd/mm/aaaa).";
    const d = Number(m[1]), mes = Number(m[2]), a = Number(m[3]);
    const fecha = new Date(a, mes - 1, d);
    if (fecha.getFullYear() !== a || fecha.getMonth() !== mes - 1 || fecha.getDate() !== d) {
        return "La fecha no existe en el calendario.";
    }
    if (fecha > hoySinHora()) return "La fecha no puede ser futura.";
    if (calcularEdad(`${a}-${mes}-${d}`) < 14) return "El socio debe tener al menos 14 años.";
    return "";
}

/** Genera el id del nuevo socio: el siguiente al mayor existente (SOC-0011, ...). */
function generarId() {
    const mayor = socios.reduce((max, s) => Math.max(max, parseInt(s.id.slice(4), 10)), 0);
    return "SOC-" + String(mayor + 1).padStart(4, "0");
}

/** Crea con nodos un campo de formulario (label + input + span de error) y devuelve sus partes. */
function crearCampo(etiqueta, id, placeholder, tipo, valorInicial) {
    const grupo = nodoClase("div", "", "grupo-formulario");
    grupo.appendChild(createNode("label", etiqueta, "", ""));

    const input = createNode("input", "", id, "");
    input.type = tipo;
    input.placeholder = placeholder;
    if (valorInicial !== undefined) {
        input.value = valorInicial;
    }
    grupo.appendChild(input);

    const error = createNode("span", "", `error-${id}`, "");
    error.className = "mensaje-error";
    grupo.appendChild(error);

    return { grupo, input, error };
}

/**
 * Crea y añade un socio nuevo al array con el formato del apartado 2
 * (nombre y apellidos con mayúscula inicial, DNI en mayúsculas, email en minúsculas,
 * teléfono sin espacios, fechas aaaa-mm-dd y fecha de alta la de hoy). Devuelve el socio creado.
 */
function registrarSocio(datos) {
    const [dd, mm, aaaa] = datos.fnac.split("/");
    const nuevo = {
        id: generarId(),
        nombre: capitalizarPalabras(datos.nombre),
        apellidos: capitalizarPalabras(datos.apellidos),
        dni: datos.dni.toUpperCase(),
        email: datos.email.toLowerCase(),
        telefono: datos.telefono.replace(/\s/g, ""),
        fechaNacimiento: `${aaaa}-${mm}-${dd}`,
        fechaAlta: fechaHoyISO(),
        actividades: datos.actividades,
        cuota: datos.cuota
    };
    socios.push(nuevo);
    return nuevo;
}

/**
 * Lee los datos del formulario de la ventana, los valida y marca los errores.
 * Si todo es correcto da de alta al socio, actualiza la página principal y cierra la ventana.
 */
function procesarAlta(ventana, campos) {
    const nombre = campos.nombre.input.value.trim();
    const apellidos = campos.apellidos.input.value.trim();
    const dni = campos.dni.input.value.trim();
    const email = campos.email.input.value.trim();
    const telefono = campos.telefono.input.value.trim();
    const fnac = campos.fnac.input.value.trim();
    const cuota = parseFloat(campos.cuota.input.value);
    const actividades = campos.checks.filter(c => c.checked).map(c => c.value);

    const errores = {
        nombre: validarTextoNombre(nombre, "El nombre"),
        apellidos: validarTextoNombre(apellidos, "Los apellidos"),
        dni: validarDni(dni),
        email: validarEmail(email),
        telefono: validarTelefono(telefono),
        fnac: validarFechaNacimiento(fnac),
        actividades: actividades.length === 0 ? "Marca al menos una actividad." : "",
        cuota: (isNaN(cuota) || cuota <= 0) ? "La cuota debe ser un número mayor que 0." : ""
    };

    mostrarError(campos.nombre.input, campos.nombre.error, errores.nombre);
    mostrarError(campos.apellidos.input, campos.apellidos.error, errores.apellidos);
    mostrarError(campos.dni.input, campos.dni.error, errores.dni);
    mostrarError(campos.email.input, campos.email.error, errores.email);
    mostrarError(campos.telefono.input, campos.telefono.error, errores.telefono);
    mostrarError(campos.fnac.input, campos.fnac.error, errores.fnac);
    mostrarError(campos.rejilla, campos.errorActividades, errores.actividades);
    mostrarError(campos.cuota.input, campos.cuota.error, errores.cuota);

    if (Object.values(errores).some(e => e !== "")) {
        return; // hay errores: la ventana se queda abierta para corregirlos
    }

    // Todo correcto: los datos recogidos en la ventana pasan a la página principal
    const nuevo = registrarSocio({ nombre, apellidos, dni, email, telefono, fnac, actividades, cuota });

    mostrarMensaje(document.getElementById("mensaje-alta"),
        `Socio ${nuevo.nombre} dado de alta con id ${nuevo.id}`, "mensaje-exito");

    rellenarFiltroActividades();
    pintarTabla();
    pintarEstadisticas();

    // Al cerrar la ventana el formulario desaparece; al volver a abrirla estará vacío
    ventana.close();
}

/** Abre una ventana nueva y construye en ella, con nodos, el formulario de alta de socio. */
function abrirVentanaAlta() {
    const ventana = abrirVentana("alta", "Alta de socio", 480, 800);
    if (!ventana) {
        mostrarMensaje(document.getElementById("mensaje-alta"),
            "El navegador ha bloqueado la ventana emergente. Permítela e inténtalo de nuevo.", "mensaje-error");
        return;
    }

    // Se quita un posible aviso anterior de la página principal
    mostrarMensaje(document.getElementById("mensaje-alta"), "", "");

    const seccion = createNode("section", "", "", "");
    seccion.appendChild(createNode("h2", "Nuevo socio", "", ""));

    const formulario = createNode("form", "", "formulario-alta", "");
    formulario.noValidate = true; // manda nuestra validación, no la del navegador

    // Campos de texto
    const campos = {
        nombre: crearCampo("Nombre", "alta-nombre", "Ej: María José", "text"),
        apellidos: crearCampo("Apellidos", "alta-apellidos", "Ej: Pérez Gómez", "text"),
        dni: crearCampo("DNI", "alta-dni", "Ej: 12345678Z", "text"),
        email: crearCampo("Email", "alta-email", "Ej: ana@correo.es", "email"),
        telefono: crearCampo("Teléfono", "alta-telefono", "Ej: 612 345 678", "text"),
        fnac: crearCampo("Fecha de nacimiento (dd/mm/aaaa)", "alta-fnac", "Ej: 05/06/2000", "text")
    };
    formulario.appendChild(campos.nombre.grupo);
    formulario.appendChild(campos.apellidos.grupo);
    formulario.appendChild(campos.dni.grupo);
    formulario.appendChild(campos.email.grupo);
    formulario.appendChild(campos.telefono.grupo);
    formulario.appendChild(campos.fnac.grupo);

    // Actividades (casillas)
    const grupoActividades = nodoClase("div", "", "grupo-formulario");
    grupoActividades.appendChild(createNode("label", "Actividades (selecciona al menos una)", "", ""));

    const rejilla = nodoClase("div", "", "rejilla-checkbox");
    campos.checks = [];
    ACTIVIDADES.forEach(actividad => {
        const etiqueta = createNode("label", "", "", "");
        const casilla = createNode("input", "", "", "");
        casilla.type = "checkbox";
        casilla.name = "actividad";
        casilla.value = actividad;
        etiqueta.appendChild(casilla);
        etiqueta.appendChild(document.createTextNode(` ${capitalizarPrimera(actividad)}`));
        rejilla.appendChild(etiqueta);
        campos.checks.push(casilla);
    });
    grupoActividades.appendChild(rejilla);

    const errorActividades = createNode("span", "", "error-actividades", "");
    errorActividades.className = "mensaje-error";
    grupoActividades.appendChild(errorActividades);
    campos.rejilla = rejilla;
    campos.errorActividades = errorActividades;
    formulario.appendChild(grupoActividades);

    // Cuota
    campos.cuota = crearCampo("Cuota mensual (€)", "alta-cuota", "", "number", "35");
    campos.cuota.input.min = "1";
    campos.cuota.input.step = "any";
    formulario.appendChild(campos.cuota.grupo);

    // Botones
    const acciones = nodoClase("div", "", "acciones");
    const botonAlta = createNode("button", "Dar de alta socio", "", "");
    botonAlta.type = "submit";
    const botonCancelar = createNode("button", "Cancelar", "", "");
    botonCancelar.type = "button";
    botonCancelar.className = "boton-secundario";
    botonCancelar.addEventListener("click", () => ventana.close());
    acciones.appendChild(botonAlta);
    acciones.appendChild(botonCancelar);
    formulario.appendChild(acciones);

    formulario.addEventListener("submit", evento => {
        evento.preventDefault();
        procesarAlta(ventana, campos);
    });

    seccion.appendChild(formulario);
    ventana.document.body.appendChild(seccion);
}

// =====================================================
// 3.5 ESTADÍSTICAS
// =====================================================

/** Crea con nodos una tarjeta de estadística (título + valor). */
function crearTarjeta(titulo, valor, claseValor, ancha) {
    const tarjeta = nodoClase("div", "", ancha ? "tarjeta-stat tarjeta-stat-amplia" : "tarjeta-stat");
    tarjeta.appendChild(createNode("h3", titulo, "", ""));
    tarjeta.appendChild(nodoClase("p", valor, claseValor));
    return tarjeta;
}

/** Calcula todas las estadísticas a partir de los datos actuales y las pinta. */
function pintarEstadisticas() {
    const total = socios.length;
    const ingresos = socios.reduce((suma, s) => suma + s.cuota, 0);
    const cuotaMedia = total ? ingresos / total : 0;

    const edades = socios.map(s => calcularEdad(s.fechaNacimiento));
    const edadMedia = total ? edades.reduce((a, b) => a + b, 0) / total : 0;
    const edadMin = total ? Math.min(...edades) : 0;
    const edadMax = total ? Math.max(...edades) : 0;

    // Actividad más popular
    const conteo = {};
    socios.forEach(s => s.actividades.forEach(a => { conteo[a] = (conteo[a] || 0) + 1; }));
    let popular = "—";
    const entradas = Object.entries(conteo);
    if (entradas.length > 0) {
        const [actividad, cantidad] = entradas.reduce((mejor, actual) => actual[1] > mejor[1] ? actual : mejor);
        popular = `${capitalizarPrimera(actividad)} (${cantidad})`;
    }

    const hayMenores = edades.some(e => e < 18);
    const todosConActividad = socios.every(s => s.actividades.length > 0);

    // 3 más veteranos (copia ordenada por fecha de alta ascendente)
    const veteranos = [...socios]
        .sort((a, b) => a.fechaAlta.localeCompare(b.fechaAlta))
        .slice(0, 3)
        .map(s => `${s.nombre} ${s.apellidos.charAt(0)}.`)
        .join(", ");

    // Dominios sin repetir
    const dominios = [...new Set(socios.map(s => s.email.split("@")[1]))].join(", ");

    const contenedor = document.getElementById("contenedor-estadisticas");
    vaciarNodo(contenedor);
    contenedor.appendChild(crearTarjeta("Total Socios", String(total), "", false));
    contenedor.appendChild(crearTarjeta("Ingresos Mes", formatearEuros(ingresos), "", false));
    contenedor.appendChild(crearTarjeta("Cuota Media", formatearEuros(cuotaMedia), "", false));
    contenedor.appendChild(crearTarjeta("Edad Media", `${edadMedia.toFixed(1)} años`, "", false));
    contenedor.appendChild(crearTarjeta("Edad Mín / Máx", `${edadMin} / ${edadMax}`, "", false));
    contenedor.appendChild(crearTarjeta("Más Popular", popular, "stat-texto-sm", false));
    contenedor.appendChild(crearTarjeta("¿Menores de edad?", hayMenores ? "Sí" : "No", "", false));
    contenedor.appendChild(crearTarjeta("¿Con actividad?", todosConActividad ? "Sí" : "No", "", false));
    contenedor.appendChild(crearTarjeta("Top 3 Veteranos", veteranos, "stat-texto-xs", true));
    contenedor.appendChild(crearTarjeta("Dominios Email", dominios, "stat-texto-xs", true));
}

// =====================================================
// INICIALIZACIÓN Y EVENTOS
// =====================================================

/** Conecta todos los eventos y pinta el estado inicial de la aplicación. */
function iniciar() {
    iniciarReloj();
    rellenarFiltroActividades();
    pintarTabla();
    pintarEstadisticas();

    // Buscador, filtro y orden trabajan a la vez
    document.getElementById("entrada-buscar").addEventListener("input", pintarTabla);
    document.getElementById("selector-filtro-actividad").addEventListener("change", pintarTabla);
    document.getElementById("selector-orden").addEventListener("change", pintarTabla);

    // Pantalla completa
    document.getElementById("boton-pantalla-completa").addEventListener("click", alternarPantallaCompleta);
    document.addEventListener("fullscreenchange", actualizarBotonPantallaCompleta);

    // Ficha por DNI (botón y tecla Enter): se abre en una ventana nueva
    document.getElementById("boton-consultar-dni").addEventListener("click", consultarFicha);
    document.getElementById("entrada-dni-buscar").addEventListener("keydown", evento => {
        if (evento.key === "Enter") consultarFicha();
    });

    // Alta de socio: el formulario se abre en una ventana nueva
    document.getElementById("boton-abrir-alta").addEventListener("click", abrirVentanaAlta);

    // Si se recarga o se cierra la página principal, se cierran también las ventanas abiertas
    window.addEventListener("beforeunload", cerrarVentanas);
}

iniciar();