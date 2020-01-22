var xponer = false;
var subponer = false;
function verMenu() {
   
   if (xponer != true) {
        document.getElementById("menu2").style.display = "block";
        xponer = true;
   } else {
        document.getElementById("menu2").style.display = "none";
        xponer = false;
   }    
}

var cambio = false;
function ver() {
    if (cambio != true) {
        document.getElementById('cosa1').style.left = "-300px";
        document.getElementById('cosa2').style.left = "-300px";
        document.getElementById('cosa3').style.left = "-300px";
        document.getElementById('cosa4').style.left = "-300px";
        document.getElementById('cosa5').style.left = "-300px";
        cambio = true;
    } else {
        document.getElementById('cosa1').style.left = "800px";
        document.getElementById('cosa2').style.left = "800px";
        document.getElementById('cosa3').style.left = "800px";
        document.getElementById('cosa4').style.left = "800px";
        document.getElementById('cosa5').style.left = "800px";
        cambio = false;
    }
}

function cerrar() {
    document.getElementById('cosa1').style.left = "800px";
    document.getElementById('cosa2').style.left = "800px";
    document.getElementById('cosa3').style.left = "800px";
    document.getElementById('cosa4').style.left = "800px";
    document.getElementById('cosa5').style.left = "800px";
    cambio = false;
}