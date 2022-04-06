/* -----sliders-1------- */
const fila=document.querySelector('.container-carousel');
const movies=document.querySelector('.movie');

const flechaIzquierda=document.getElementById('fl-left');
const flechaDerecha=document.getElementById('fl-right');


flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft+=fila.offsetWidth;
});

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft-=fila.offsetWidth;
});

/* -----sliders-2------- */
const fila1=document.querySelector('.container-carousel1');
const movies1=document.querySelector('.movie1');

const flechaIzquierda1=document.getElementById('fl-left1');
const flechaDerecha1=document.getElementById('fl-right1');


flechaDerecha1.addEventListener('click', () => {
    fila1.scrollLeft+=fila1.offsetWidth;
});

flechaIzquierda1.addEventListener('click', () => {
    fila1.scrollLeft-=fila1.offsetWidth;
});
/* -----sliders-3------- */
const fila2=document.querySelector('.container-carousel2');
const movies2=document.querySelector('.movie2');

const flechaIzquierda2=document.getElementById('fl-left2');
const flechaDerecha2=document.getElementById('fl-right2');


flechaDerecha2.addEventListener('click', () => {
    fila2.scrollLeft+=fila2.offsetWidth;
});

flechaIzquierda2.addEventListener('click', () => {
    fila2.scrollLeft-=fila2.offsetWidth;
});