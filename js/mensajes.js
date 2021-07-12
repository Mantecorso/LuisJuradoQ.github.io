window.addEventListener('load', function () {

    function semana() {
        var fecha, dia;
        fecha = new Date();
        diacero = fecha.getUTCDay();
        var num = fecha.getDate();
        var mes = fecha.getMonth();
        var ano = fecha.getFullYear();

        switch (diacero) {
            case 0:
                var dia = "Domingo";
                domingo();
                break;
            case 1:
                var dia = "Lunes";
                lunes();
                break;
            case 2:
                var dia = "Martes";
                martes();
                break;
            case 3:
                var dia = "Miércoles";
                miercoles();
                break;
            case 4:
                var dia = "Jueves";
                jueves();
                break;
            case 5:
                var dia = "Viernes";
                viernes();
                break;
            case 6:
                var dia = "Sábado";
                sabado();
                break;
        }
        switch (mes) {
            case 0:
                var mes0 = "Enero";
                break;
            case 1:
                var mes0 = "Febrero";
                break;
            case 2:
                var mes0 = "Marzo";
                break;
            case 3:
                var mes0 = "Abril";
                break;
            case 4:
                var mes0 = "Mayo";
                break;
            case 5:
                var mes0 = "Junio";
                break;
            case 6:
                var mes0 = "Julio";
                break;
            case 7:
                var mes0 = "Agosto";
                break;
            case 8:
                var mes0 = "Septiembre";
                break;
            case 9:
                var mes0 = "Octubre";
                break;
            case 10:
                var mes0 = "Noviembre";
                break;
            case 11:
                var mes0 = "Diciembre";
                break;    
        }

        document.getElementById('solucion').innerHTML = dia +", "+ num + " de " + mes0 + " de " + ano + ".";
        
    }

    function lunes() {

        var aleatorio, posibles;
        posibles = 9;
        aleatorio = Math.random()*posibles;
        aleatorio = Math.round(aleatorio);
        //document.getElementById('respuesta').innerHTML = aleatorio;
        var men;
        switch (aleatorio) {
            case 0:
                men = "Un día en Mercurio dura 1408 horas, aproximadamente como un lunes en la tierra.";
                break;
            case 1:
                men = "La mejor semana de tu vida empezó un lunes.";
                break;
            case 2:
                men = "Hoy será el mejor lunes de toda la semana.";
                break;
            case 3:
                men = "Tranquilo, el lunes solo tiene 24 horas.";
                break;
            case 4:
                men = "Si no fuera por los lunes, no disfrutaríamos tanto de los viernes.";
                break;
            case 5:
                men = "Todas las cosas son increibles, incluso los lunes.";
                break;
            case 6:
                men = "Keep calm and happy monday.";
                break;
            case 7:
                men = "Que nadie te arruine tu lunes.";
                break;
            case 8:
                men = "Los lunes son como los viernes pero versión hardcore.";
                break;
            case 9:
                men = "Monday, are you ready?";
                break;
        }
        document.getElementById('nuevo').innerHTML = men;    
    }

    function martes() {

        var aleatorio, posibles;
        posibles = 9;
        aleatorio = Math.random()*posibles;
        aleatorio = Math.round(aleatorio);
        //document.getElementById('respuesta').innerHTML = aleatorio;
        var men;
        switch (aleatorio) {
            case 0:
                men = "Buenos y malos martes, los hay en todas partes.";
                break;
            case 1:
                men = "Martes con M de magnífico.";
                break;
            case 2:
                men = "Existen los malos martes y luego está hoy.";
                break;
            case 3:
                men = "Tranquilo, el martes solo tiene 24 horas.";
                break;
            case 4:
                men = "Al menos no es lunes.";
                break;
            case 5:
                men = "Martes, psicologicamente en pijama.";
                break;
            case 6:
                men = "Keep calm and fight the tuesday.";
                break;
            case 7:
                men = "Que nadie te arruine tu martes.";
                break;
            case 8:
                men = "En la búsqueda de un día hermoso, haz de este martes maravilloso.";
                break;
            case 9:
                men = "Martes y trece, ni te cases, ni te embarques";
                break;
        }
        document.getElementById('nuevo').innerHTML = men;    
    }

    function miercoles() {

        var aleatorio, posibles;
        posibles = 9;
        aleatorio = Math.random()*posibles;
        aleatorio = Math.round(aleatorio);
        //document.getElementById('respuesta').innerHTML = aleatorio;
        var men;
        switch (aleatorio) {
            case 0:
                men = "Un día en Mercurio dura 1408 horas, aproximadamente como un miércoles en la tierra.";
                break;
            case 1:
                men = "La mejor semana de tu vida empezó un miércoles.";
                break;
            case 2:
                men = "Hoy será el mejor miércoless de toda la semana.";
                break;
            case 3:
                men = "Tranquilo, el miércoles solo tiene 24 horas.";
                break;
            case 4:
                men = "Si no fuera por los miércoles, no disfrutaríamos tanto de los viernes.";
                break;
            case 5:
                men = "Todas las cosas son increibles, incluso los miércoles.";
                break;
            case 6:
                men = "Keep calm and happy wednesday.";
                break;
            case 7:
                men = "Que nadie te arruine tu miércoles.";
                break;
            case 8:
                men = "Los miércoles son los viernes hardcore.";
                break;
            case 9:
                men = "Wednesday, are you ready?";
                break;
        }
        document.getElementById('nuevo').innerHTML = men;    
    }

    function jueves() {

        var aleatorio, posibles;
        posibles = 9;
        aleatorio = Math.random()*posibles;
        aleatorio = Math.round(aleatorio);
        //document.getElementById('respuesta').innerHTML = aleatorio;
        var men;
        switch (aleatorio) {
            case 0:
                men = "Un día en Mercurio dura 1408 horas, aproximadamente como un jueves en la tierra.";
                break;
            case 1:
                men = "La mejor semana de tu vida empezó un juernes.";
                break;
            case 2:
                men = "Hoy será el mejor jueves de toda la semana.";
                break;
            case 3:
                men = "Tranquilo, juyeves es casi viernes.";
                break;
            case 4:
                men = "Los jueves son las fiestas universitarias";
                break;
            case 5:
                men = "Todas las cosas son increibles, incluso los jueves.";
                break;
            case 6:
                men = "Keep calm and happy thursday.";
                break;
            case 7:
                men = "Que nadie te arruine tu jueves.";
                break;
            case 8:
                men = "Los jueves son como los viernes pero sin parrandeo.";
                break;
            case 9:
                men = "Thursday, are you ready?";
                break;
        }
        document.getElementById('nuevo').innerHTML = men;    
    }

    function viernes() {

        var aleatorio, posibles;
        posibles = 9;
        aleatorio = Math.random()*posibles;
        aleatorio = Math.round(aleatorio);
       // document.getElementById('respuesta').innerHTML = aleatorio;
        var men;
        switch (aleatorio) {
            case 0:
                men = "Un día en Mercurio dura 1408 horas, aproximadamente como un viernes en la tierra.";
                break;
            case 1:
                men = "La mejor semana de tu vida empezó un lunes, y el mejor fin de semana un viernes.";
                break;
            case 2:
                men = "Los viernes se sale.";
                break;
            case 3:
                men = "Tranquilo, el viernes solo tiene 24 horas.";
                break;
            case 4:
                men = "Disfruta del viernes.";
                break;
            case 5:
                men = "Todas las cosas son increibles, especialmente las fiestas de los viernes.";
                break;
            case 6:
                men = "Keep calm and happy friday.";
                break;
            case 7:
                men = "Que nadie te arruine tu viernes.";
                break;
            case 8:
                men = "Los viernes se desconecta hasta el lunes.";
                break;
            case 9:
                men = "Friday, are you ready?";
                break;
        }
        document.getElementById('nuevo').innerHTML = men;    
    }

    function sabado() {

        var aleatorio, posibles;
        posibles = 9;
        aleatorio = Math.random()*posibles;
        aleatorio = Math.round(aleatorio);
        //document.getElementById('respuesta').innerHTML = aleatorio;
        var men;
        switch (aleatorio) {
            case 0:
                men = "Resaca.";
                break;
            case 1:
                men = "Mucha resaca.";
                break;
            case 2:
                men = "Demasiada resaca.";
                break;
            case 3:
                men = "¿Que pasó anoche?";
                break;
            case 4:
                men = "Quiero dormir más.";
                break;
            case 5:
                men = "Saturday, nobody here.";
                break;
            case 6:
                men = "Keep calm and rest the saturday.";
                break;
            case 7:
                men = "Que nadie te arruine tu sábado.";
                break;
            case 8:
                men = "¿Hoy es sábado?";
                break;
            case 9:
                men = "Saturday, are you ready?";
                break;
        }
        document.getElementById('nuevo').innerHTML = men;    
    }

    function domingo() {

        var aleatorio, posibles;
        posibles = 9;
        aleatorio = Math.random()*posibles;
        aleatorio = Math.round(aleatorio);
        //document.getElementById('respuesta').innerHTML = aleatorio;
        var men;
        switch (aleatorio) {
            case 0:
                men = "¿Has ido a misa?";
                break;
            case 1:
                men = "Domingo de resaca.";
                break;
            case 2:
                men = "Domingo de relax.";
                break;
            case 3:
                men = "Domingo de paella.";
                break;
            case 4:
                men = "Domingo de siesta.";
                break;
            case 5:
                men = "Domingo de paseo.";
                break;
            case 6:
                men = "Keep calm and happy sunday.";
                break;
            case 7:
                men = "Que nadie te arruine tu domingo.";
                break;
            case 8:
                men = "Domingo de trenes.";
                break;
            case 9:
                men = "Sunday, are you ready?";
                break;
        }
        document.getElementById('nuevo').innerHTML = men;    
    }

    semana();
})