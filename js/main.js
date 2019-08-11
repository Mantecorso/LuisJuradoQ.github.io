var xponer = false;
function mostrar() {
   
   if (xponer != true) {
        document.getElementById("menu99").style.display = "block";
        xponer = true;
   } else {
        document.getElementById("menu99").style.display = "none";
        xponer = false;
   }    
}