const buttonMenu = document.querySelector('#menu');
const nav = document.querySelector('.nav');
const nombre = document.querySelector('.nombre');
const front = document.querySelector('.frontend');
// animacion
const home = document.querySelector('.titulo');
const separador = document.querySelector('.separador');

const email = document.querySelector('.email')

// Efecto maquina de escribir

function typeWriting(text) {
    let str = text.innerHTML;
    text.innerHTML = "";
    let split = str.split('');
    let i = 0;
    let intervalo = setInterval(()=>{
        nombre.innerHTML += split[i];
        i++;
        if(i === split.length){
            clearInterval(intervalo);
        }
    },100);

}


// Intento de animacion

// intervalo que pone y saca determinada clase
// se pide como parametros, el objeto y la clase a colocar y el tiempo de intervalo
// se repite sin parar

function animacion(elemento, clase, tiempo){
    setInterval(()=>{
        if(elemento.classList.contains(clase)){
            elemento.classList.remove(clase)
        } else {
            elemento.classList.add(clase)
        }
    },tiempo)
}
animacion(home,"active",2000);

// Menu desplegable

buttonMenu.addEventListener('click', ()=>{
    if(!nav.classList.contains('active')){
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
})


email.addEventListener('click', ()=>{
    const span = document.querySelector('.email span');
    span.classList.remove('d-none')
})