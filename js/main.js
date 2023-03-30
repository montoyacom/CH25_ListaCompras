// El código va aquí -> 
let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

let tabla = document.getElementById("tablaListaCompras"); // se trae la tabla, ¿sería como el diseño?.
let cuerpoTabla = tabla.getElementsByTagName("tbody"); // busca el cuerpo de la tabla, que es donde va la información.

let isValid = true;
let idTimeOut; // ID del temporizador
let precio = 0; // variable para el precio.
let contador = 0; // variable para el contador.

btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    txtNombre.value = "";
    txtNumber.value = "";
});

function validarCantidad() {
    if (txtNumber.value.length == 0) {
        return false;
    }
    if (isNaN(txtNumber.value)) {
        return false;
    }
    if (txtNumber.value.length <= 0) {
        return false;
    }
    return true;
}// Validar que sean números.

const getPrecio = () => {
    return Math.floor(Math.random() * 50 * 100) / 100;
}// Crear un número aleatorio para el precio, en función de tipo flecha.

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();

    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none"; // Desaparece el letrero
    let lista = "los siguientes campos deben ser llenados correctamente:<ul>";
    clearTimeout(idTimeOut);
    isValid = true;
    if (txtNombre.value.length < 2) {
        txtNombre.style.border = "solid thin red";
        lista += "<li> Nombre incorrecto.</li>"
        //alertValidacionesTexto.innerHTML = " Se debe escribir un nombre válido.";
        alertValidaciones.style.display = "block";
        isValid = false;
    } else {
        txtNombre.style.border = "";
    }
    if (!validarCantidad()) {
        txtNumber.style.border = "solid thin red";
        lista += "<li> Cantidad incorrecta.</li>"
        //alertValidacionesTexto.innerHTML += " Se debe escribir una cantidad válido.";
        alertValidaciones.style.display = "block";
        isValid = false;
    } else {
        txtNumber.style.border = "";
    }
    lista += "</ul>";
    alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);
    idTimeOut = setTimeout(function () {
        alertValidaciones.style.display = "none"; // Desaparece el letrero
    }, 3000);
    if (isValid) {
        precio = getPrecio();
        contador++;
        let row = `
            <tr>
                <td>${contador}</td>
                <td>${txtNombre.value}</td>
                <td>${txtNumber.value}</td>
                <td>${precio}</td>
            </tr>
        `;
        cuerpoTabla[0].insertAdjacentHTML("beforeend", row);
        txtNombre.value = "";
        txtNumber.value = "";
        txtNombre.focus;  
    };



});

txtNombre.addEventListener("blur", function (event) {
    event.preventDefault();
    txtNombre.value = txtNombre.value.trim();
});

txtNumber.addEventListener("blur", function (event) {
    event.preventDefault();
    txtNumber.value = txtNumber.value.trim();
});