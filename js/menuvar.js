
var cambio = false;
function ver() {
    if (cambio != true) {
        document.getElementById('nuevomenu').style.left = "0px";
        document.getElementById('nuevomenu').style.width = "100%";
        document.getElementById('nuevomenu').style.top = "0vh";
        document.getElementById('nuevomenu').style.height = "90vh";
        cambio = true;
    } else {
        document.getElementById('nuevomenu').style.left = "-200vh";
        cambio = false;
    }
}

function cerrar() {
    document.getElementById('nuevomenu').style.left = "-200vh";

    cambio = false;
}