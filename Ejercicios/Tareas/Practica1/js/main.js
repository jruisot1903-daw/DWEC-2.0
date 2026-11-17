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
// CONSTANTES
// =====================================================
const ACTIVIDADES = ["natación", "yoga", "pádel", "musculación", "spinning", "pilates"];
const LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

// =====================================================
// FUNCIONES AUXILIARES
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

/** Pasa a minúsculas y elimina las tildes */
function normalizar(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

/** Convierte una fecha "aaaa-mm-dd" en un objeto Date local. */
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
/** Calcular los años del socio en el club dependiendo desde su fecha de alta */
function calcularAnosClub(fechaAlta){
    let fechaHoy = hoySinHora();
     let fechaInicio = parsearFecha(fechaAlta);

    ano = fechaHoy.getFullYear() - fechaInicio.getFullYear();
    mes = fechaHoy.getMonth() - fechaInicio.getMonth();

    return `${ano} ${ano === 1 ? "año" : "años"} ${mes} ${mes === 1 ? "mes" : "meses"}`;
    
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
// CABECERA: FECHA Y HORA
// =====================================================

/** Muestra la fecha de hoy en texto (con la primera letra en mayúscula). */
function mostrarFecha() {
    const texto = new Date().toLocaleDateString("es-ES", {
        weekday: "long", day: "numeric", month: "long", year: "numeric"
    });
    document.getElementById("fecha-hoy").textContent = capitalizarPrimera(texto);
}

/** Muestra la hora actual con formato hh:mm:ss. */
function mostrarHora() {
    const h = new Date();
    document.getElementById("hora-actual").textContent =
        `${pad(h.getHours())}:${pad(h.getMinutes())}:${pad(h.getSeconds())}`;
}

/** Pinta fecha y hora y programa la actualización de la hora cada segundo. */
function iniciarReloj() {
    mostrarFecha();
    mostrarHora();
    setInterval(() => {
        mostrarHora();
        // Por si la página queda abierta al cambiar de día
        mostrarFecha();
    }, 1000);
}

// =====================================================
// LISTADO DE SOCIOS
// =====================================================

/** Rellena la lista desplegable del filtro con las actividades, manteniendo la opción elegida. */
function rellenarFiltroActividades() {
    const select = document.getElementById("selector-filtro-actividad");
    const seleccionada = select.value || "todos";
    select.innerHTML = '<option value="todos">Todas las actividades</option>';
    ACTIVIDADES.forEach(act => {
        const opcion = document.createElement("option");
        opcion.value = act;
        opcion.textContent = capitalizarPrimera(act);
        select.appendChild(opcion);
    });
    select.value = seleccionada;
}

/**
 * Aplica buscador, filtro de actividad y orden a una COPIA del array de socios y devuelve el resultado.
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
        case "cuota": // cuota mas alta
            resultado.sort((a, b) => toString(a.cuota).localeCompare(toString(b.cuota))); // No funciona
                
            
    }
    return resultado;
}

/** Dibuja la tabla de socios según el buscador, filtro y orden actuales. */
function pintarTabla() {
    const cuerpo = document.getElementById("cuerpo-tabla-socios");
    const lista = obtenerSociosVisibles();

    if (lista.length === 0) {
        cuerpo.innerHTML = '<tr><td colspan="6">No hay socios que coincidan</td></tr>';
        return;
    }

    cuerpo.innerHTML = lista.map(socio => `
        <tr>
            <td>
                <div class="avatar-id">
                    <div class="avatar">${obtenerIniciales(socio)}</div>
                    <span>${socio.id}</span>
                </div>
            </td>
            <td>${nombreCorto(socio)}</td>
            <td class="celda-email">${ocultarEmail(socio.email)}</td>
            <td>${textoEdad(calcularEdad(socio.fechaNacimiento))}</td>
            <td>${socio.actividades.join(", ")}</td>
            <td>${formatearEuros(socio.cuota)}</td>
            <td>${calcularAnosClub(socio.fechaAlta)}</td>
        </tr>
    `).join("");
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
    boton.textContent = document.fullscreenElement ? "Salir de pantalla completa" : "Pantalla completa";
}

// =====================================================
// FICHA DE SOCIO
// =====================================================

/** Busca un socio por DNI (sin distinguir mayúsculas) y muestra su ficha o un error. */
function consultarFicha() {
    const dni = document.getElementById("entrada-dni-buscar").value.trim().toUpperCase();
    const contenedor = document.getElementById("resultado-ficha");
    const socio = socios.find(s => s.dni === dni);

    if (!socio) {
        contenedor.innerHTML = '<p class="mensaje-error">No existe ningún socio con ese DNI.</p>';
        return;
    }

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

    contenedor.innerHTML = `
        <div class="ficha">
            <h3>${socio.nombre} ${socio.apellidos} (${socio.id})</h3>
            <p><strong>DNI:</strong> ${socio.dni}</p>
            <p><strong>Email:</strong> ${socio.email} (dominio: ${dominio})</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Nacimiento:</strong> ${fechaNacTexto} · ${textoEdad(calcularEdad(socio.fechaNacimiento))}</p>
            <p><strong>Alta:</strong> ${fechaAltaTexto} · ${diasEnClub} días en el club</p>
            <p><strong>Próximo cumpleaños:</strong> en ${diasCumple} días</p>
            <p><strong>Actividades:</strong> ${socio.actividades.join(", ")}</p>
            <p><strong>Cuota mensual:</strong> ${formatearEuros(socio.cuota)}</p>
            <h3>Curiosidad:</h3>
            <p><strong>Vocales del nombre completo:</strong> ${numeroVocales(socio.nombre,socio.apellidos)}</p>
        </div>
    `;
}

/** Cualculamos el numero de vocales que tiene el nombre del socio completo (sin distinguir tildes) */
function numeroVocales(nombre,apellidos){
    let reg = /[aeiouáéíóú]/i;
    let cont = 0;
    let nomCOmpleto = nombre+" "+apellidos;

    let arrayNombre = nomCOmpleto.split("");
    
    for (let i = 0; i < arrayNombre.length; i++) {
        if(reg.test(arrayNombre[i])){
            cont++;
        }
    }

    return cont;
}

// =====================================================
// ALTA DE SOCIO
// =====================================================

/** Calcula la letra correcta de un DNI a partir de sus 8 dígitos. */
function letraDni(numero) {
    return LETRAS_DNI.charAt(Number(numero) % 23);
}

/** Muestra (o limpia si el mensaje está vacío) el error de un campo y lo marca en rojo. */
function mostrarError(elemento, idError, mensaje) {
    const span = document.getElementById(idError);
    if (span) {
        span.textContent = mensaje;
    }
    if (elemento) {
        elemento.classList.toggle("campo-error", Boolean(mensaje));
    }
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

/** Validamos el campo cuota a la hora de dar de alta un socio: num hasta 3 cifras, con coma o punto 
 * y como max 2 decimales
*/
function validarCuota(cuota){
    let regCuota = /[0-9]{3}\,|\.[0-9]{2}/;
    if(isNaN(cuota) || cuota <= 0 || regCuota.test(regCuota)){
        return "Formato de cuota no valido (Ej: 123,23 o 231.43)"
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

/** Devuelve la lista de actividades marcadas en el formulario. */
function obtenerActividadesMarcadas() {
    return Array.from(document.querySelectorAll('input[name="actividad"]:checked')).map(c => c.value);
}

/** Genera el id del nuevo socio: el siguiente al mayor existente (SOC-0011, ...). */
function generarId() {
    const mayor = socios.reduce((max, s) => Math.max(max, parseInt(s.id.slice(4), 10)), 0);
    return "SOC-" + String(mayor + 1).padStart(4, "0");
}

/** Valida todo el formulario y, si es correcto, da de alta al socio y actualiza la interfaz. */
function procesarAlta(evento) {
    evento.preventDefault();

    const inNombre = document.getElementById("alta-nombre");
    const inApellidos = document.getElementById("alta-apellidos");
    const inDni = document.getElementById("alta-dni");
    const inEmail = document.getElementById("alta-email");
    const inTelefono = document.getElementById("alta-telefono");
    const inFnac = document.getElementById("alta-fnac");
    const inCuota = document.getElementById("alta-cuota");
    const gridActividades = document.querySelector(".rejilla-checkbox");

    const nombre = inNombre.value.trim();
    const apellidos = inApellidos.value.trim();
    const dni = inDni.value.trim();
    const email = inEmail.value.trim();
    const telefono = inTelefono.value.trim();
    const fnac = inFnac.value.trim();
    const actividades = obtenerActividadesMarcadas();
    const cuota = parseFloat(inCuota.value);

    const errores = {
        nombre: validarTextoNombre(nombre, "El nombre"),
        apellidos: validarTextoNombre(apellidos, "Los apellidos"),
        dni: validarDni(dni),
        email: validarEmail(email),
        telefono: validarTelefono(telefono),
        fnac: validarFechaNacimiento(fnac),
        actividades: actividades.length === 0 ? "Marca al menos una actividad." : "",
        cuota: validarCuota(cuota)
    };

    mostrarError(inNombre, "error-nombre", errores.nombre);
    mostrarError(inApellidos, "error-apellidos", errores.apellidos);
    mostrarError(inDni, "error-dni", errores.dni);
    mostrarError(inEmail, "error-email", errores.email);
    mostrarError(inTelefono, "error-telefono", errores.telefono);
    mostrarError(inFnac, "error-fnac", errores.fnac);
    mostrarError(gridActividades, "error-actividades", errores.actividades);
    mostrarError(inCuota, "error-cuota", errores.cuota);

    const hayErrores = Object.values(errores).some(e => e !== "");
    const mensaje = document.getElementById("mensaje-alta");
    if (hayErrores) {
        mensaje.textContent = "";
        mensaje.className = "";
        return;
    }

    // Todo correcto: se crea el socio con el formato del apartado 2
    const [dd, mm, aaaa] = fnac.split("/");
    const nuevo = {
        id: generarId(),
        nombre: capitalizarPalabras(nombre),
        apellidos: capitalizarPalabras(apellidos),
        dni: dni.toUpperCase(),
        email: email.toLowerCase(),
        telefono: telefono.replace(/\s/g, ""),
        fechaNacimiento: `${aaaa}-${mm}-${dd}`,
        fechaAlta: fechaHoyISO(),
        actividades: actividades,
        cuota: cuota
    };

    socios.push(nuevo);

    document.getElementById("formulario-alta").reset();
    mensaje.textContent = `Socio ${nuevo.nombre} dado de alta con id ${nuevo.id}`;
    mensaje.className = "mensaje-exito";

    rellenarFiltroActividades();
    pintarTabla();
    pintarEstadisticas();
}

// =====================================================
// ESTADÍSTICAS
// =====================================================

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
    let populares = "—";
    const entradas = Object.entries(conteo);
    if (entradas.length > 0) {
        const [actividad, cantidad] = entradas.reduce((mejor, actual) => actual[1] > mejor[1] ? actual : mejor);
        populares = `${capitalizarPrimera(actividad)} (${cantidad})`;
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

    document.getElementById("contenedor-estadisticas").innerHTML = `
        <div class="tarjeta-stat"><h3>Total Socios</h3><p>${total}</p></div>
        <div class="tarjeta-stat"><h3>Ingresos Mes</h3><p>${formatearEuros(ingresos)}</p></div>
        <div class="tarjeta-stat"><h3>Cuota Media</h3><p>${formatearEuros(cuotaMedia)}</p></div>
        <div class="tarjeta-stat"><h3>Edad Media</h3><p>${edadMedia.toFixed(1)} años</p></div>
        <div class="tarjeta-stat"><h3>Edad Mín / Máx</h3><p>${edadMin} / ${edadMax}</p></div>
        <div class="tarjeta-stat"><h3>Más Popular</h3><p class="stat-texto-sm">${populares}</p></div>
        <div class="tarjeta-stat"><h3>¿Menores de edad?</h3><p>${hayMenores ? "Sí" : "No"}</p></div>
        <div class="tarjeta-stat"><h3>¿Con actividad?</h3><p>${todosConActividad ? "Sí" : "No"}</p></div>
        <div class="tarjeta-stat tarjeta-stat-amplia"><h3>Top 3 Veteranos</h3><p class="stat-texto-xs">${veteranos}</p></div>
        <div class="tarjeta-stat tarjeta-stat-amplia"><h3>Dominios Email</h3><p class="stat-texto-xs">${dominios}</p></div>
    `;
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

    // Ficha por DNI (botón y tecla Enter)
    document.getElementById("boton-consultar-dni").addEventListener("click", consultarFicha);
    document.getElementById("entrada-dni-buscar").addEventListener("keydown", e => {
        if (e.key === "Enter") consultarFicha();
    });

    // Alta de socio (novalidate para que mande nuestra validación y no la del navegador)
    const formulario = document.getElementById("formulario-alta");
    formulario.noValidate = true;
    formulario.addEventListener("submit", procesarAlta);
}

iniciar();