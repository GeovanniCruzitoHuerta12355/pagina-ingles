
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timerInicial= 300;
let timer = 300;
let tiempoRegresivoId = null;

let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');

let winAudio = new Audio('./Animales/ganar.wav');
let clickAudio = new Audio('./Animales/click.wav');
let loseAudio = new Audio('./Animales/perder.wav');

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
numeros = numeros.sort(function(){return Math.random() - 0.5});
console.log(numeros);

function contarTiempo(){
    tiempoRegresivoId = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer == 0){
            clearInterval(tiempoRegresivoId);
            bloquearTarjetas(numeros);


        }
    },1000);
}

function bloquearTarjetas(){
    for (let i=0; i<=25; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numeros[i];

        tarjetaBloqueada.disabled = true;
    }

}



function destapar(id){

    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    if(tarjetasDestapadas == 1){
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        tarjeta1.innerHTML = `<img src="./Animales/${primerResultado}.png" alt="">`;
        clickAudio.play();
        tarjeta1.disabled = true;
        movimientos++;
        primerId = id;

    }else if(tarjetasDestapadas ==2 ){
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = `<img src="./Animales/${segundoResultado}.png" alt="">`;
        tarjeta2.disabled = true;

        segundoId = id;
        movimientos++;
        mostrarMovimientos.innerHTML =  `Movimientos: ${movimientos}`;

        if (primerResultado == segundoResultado) {
            tarjetasDestapadas = 0;
            winAudio.play();
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;



            if(aciertos == 10){
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😮`;
                mostrarTiempo.innerHTML = `Fantastico!🥳Tardaste ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} `;

            }

        }else{
            loseAudio.play();
            setTimeout(()=>{
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            },800);

        }
    
            }




}