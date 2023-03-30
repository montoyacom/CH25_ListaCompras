// El código va aquí -> 
let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

let tabla = document.getElementById("tablaListaCompras"); // se trae la tabla, ¿sería como el diseño?.
let cuerpoTabla = tabla.getElementsByTagName("tbody"); // busca el cuerpo de la tabla, que es donde va la información.

let contadorProductos = document.getElementById("contadorProductos");
let productosTotal = document.getElementById("productosTotal");
let precioTotal = document.getElementById("precioTotal");

let isValid = true;
let idTimeOut; // ID del temporizador
let precio = 0; // variable para el precio.
let contador = 0; // variable para el contador.
let totalEnProductos = 0; //Incrementara el valor y guardara la cantidad de productos totales.
let costoTotal = 0;

btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    txtNombre.value = "";
    txtNumber.value = "";
    cuerpoTabla[0].innerHTML = "";
    contador = 0; // variable para el contador.
    costoTotal = 0;
    totalEnProductos = 0; //Incrementara el valor y guardara la cantidad de productos totales.
    contadorProductos.innerText = "0";
    productosTotal.innerText = "0";
    precioTotal.innerText = "$ 0";
    localStorage.setItem("contadorProductos", contador);
    localStorage.setItem("totalEnProductos", totalEnProductos);
    localStorage.setItem("costoTotal", costoTotal.toFixed(2));

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
                <th>${contador}</th>
                <td>${txtNombre.value}</td>
                <td>${txtNumber.value}</td>
                <td>${precio}</td>
            </tr>
        `;
        cuerpoTabla[0].insertAdjacentHTML("beforeend", row);
        contadorProductos.innerText = contador;
        
        totalEnProductos += parseFloat(txtNumber.value);
        productosTotal.innerText = totalEnProductos;
        
        costoTotal += precio * parseFloat(txtNumber.value)
        precioTotal.innerText = `$ ${costoTotal.toFixed(2)}`;

        localStorage.setItem("contadorProductos", contador);
        localStorage.setItem("totalEnProductos", totalEnProductos);
        localStorage.setItem("costoTotal", costoTotal.toFixed(2));

        txtNombre.value = "";
        txtNumber.value = "";
        txtNombre.focus();
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

window.addEventListener("load", function (event) {

    if (localStorage.getItem("contadorProductos")==null ) {
        localStorage.setItem("contadorProductos","0")
    }
    
    if (localStorage.getItem("totalEnProductos")==null ) {
        localStorage.setItem("totalEnProductos","0")
    }

    if (localStorage.getItem("costoTotal")==null ) {
        localStorage.setItem("costoTotal","0")
    }

    contador = parseInt(localStorage.getItem("contadorProductos"));
    totalEnProductos = parseInt(localStorage.getItem("totalEnProductos"));
    costoTotal = parseFloat(localStorage.getItem("costoTotal"));
 
    contadorProductos.innerText = contador;
    productosTotal.innerText = totalEnProductos;
    precioTotal.innerText = `$ ${costoTotal}`;
});