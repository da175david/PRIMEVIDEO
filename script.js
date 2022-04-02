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

/* -----no funciona------ */

