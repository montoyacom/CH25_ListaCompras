// El código va aquí -> 
let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    txtNombre = "";
    txtNumber = "";
});

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none"; // Desaparece el letrero
    let lista = "los siguientes campos deben ser llenados correctamente:<ul>";

    if (txtNombre.value.length == 0) {
        txtNombre.style.border = "solid thin red";
        lista += "<li> Nombre incorrecto.</li>"
        //alertValidacionesTexto.innerHTML = " Se debe escribir un nombre válido.";
        alertValidaciones.style.display = "block";
    } else {
        txtNombre.style.border = "";
    }
    if (txtNumber.value.length == 0) {
        txtNumber.style.border = "solid thin red";
        lista += "<li> Cantidad incorrecta.</li>"
        //alertValidacionesTexto.innerHTML += " Se debe escribir una cantidad válido.";
        alertValidaciones.style.display = "block";
    } else {
        txtNumber.style.border = "";
    }
    lista += "</ul>";
    alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);
    setTimeout(function () {
        alertValidaciones.style.display = "none"; // Desaparece el letrero
    }, 3000);

});

txtNombre.addEventListener("blur", function (event) {
    event.preventDefault();
    txtNombre.value = txtNombre.value.trim();
});

txtNumber.addEventListener("blur", function (event) {
    event.preventDefault();
    txtNumber.value = txtNumber.value.trim();
});