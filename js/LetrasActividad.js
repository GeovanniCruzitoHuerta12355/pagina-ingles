//cargo en un arreglo las imganes de las banderas. Este sera el orden que se mostrarán
let banderas = ["a.png", "b.png", "c.png", "d.png", "e.png", "f.png", "g.png", "h.png", "i.png", "j.png", "k.png", "l.png", "m.png", "n.png", "o.png", "p.png", "q.png", "r.png", "s.png", "t.png", "u.png", "v.png", "w.png", "x.png", "y.png", "z.png"];

//arreglo que guardara la opcion correcta
let correcta = [0,2,1,1,0,2,1,2,0,1,1,2,0,2,2,2,0,2,0,1,0,2,0,2,0,1];

//arreglo que guardara los paises a mostrar en cada jugada
let opciones = [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["ei", "yai", "ai"]);
opciones.push(["ci", "wi", "bi"]);
opciones.push(["vi", "ci", "gi"]);
opciones.push(["ni", "di", "fi"]);
opciones.push(["i", "e", "yi"]);
opciones.push(["eg", "ag", "ef"]);
opciones.push(["yia", "yi", "hi"]);
opciones.push(["ch", "echi", "eich"]);
opciones.push(["ai", "jai", "yai"]);
opciones.push(["sei", "yei", "grei"]);
opciones.push(["grei", "kei", "sei"]);
opciones.push(["le", "al", "el"]);
opciones.push(["em", "en", "ez"]);
opciones.push(["ez", "em", "en"]);
opciones.push(["ae", "ua", "ou"]);
opciones.push(["ci", "ti", "pi"]);
opciones.push(["kiu", "yiu", "ciu"]);
opciones.push(["er", "or", "ar"]);
opciones.push(["es", "os", "as"]);
opciones.push(["yi", "ti", "hi"]);
opciones.push(["iu", "io", "ia"]);
opciones.push(["ve", "ce", "vi"]);
opciones.push(["dabeliu", "dabelio", "dabelie"]);
opciones.push(["oks", "ok", "eks"]);
opciones.push(["uai", "ai", "eu"]);
opciones.push(["zes", "zed/zi", "zef"]);


//variable que guarda la posicion actual
let posActual = 0;
//variable que guarda la cantidad acertadas hasta el moemento
let cantidadAcertadas = 0;

function comenzarJuego(){
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();

}

//funcion que carga la siguiente bandera y sus opciones
function cargarBandera(){
    //controlo sis se acabaron las banderas
    if(banderas.length <= posActual){
        terminarJuego();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imgBandera").src = "Letras/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        //agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{//no acerto
        //agramos las clases para colocar en rojo la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //Esperamos 1 segundo y pasamos mostrar la siguiente bandera y sus opciones
    setTimeout(cargarBandera,1000);
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}