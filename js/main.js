// El código va aquí -> 
let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    txtNombre = "";
    txtNumber = "";
});

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();
    if (txtNombre.value.length == 0) {
        txtNombre.style.border = "solid thin red";
    } else {
        txtNombre.style.border = "";
    }

});

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();
    if (txtNumber.value.length == 0) {
        txtNumber.style.border = "solid thin red";
    } else {
        txtNumber.style.border = "";
    }
});

txtNombre.addEventListener("blur", function (event) {
    event.preventDefault();
    txtNombre.value = txtNombre.value.trim();
});

txtNumber.addEventListener("blur", function (event) {
    event.preventDefault();
    txtNumber.value = txtNumber.value.trim();
});