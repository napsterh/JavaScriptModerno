/************************************************************************************************
*****************************             ELIMINAR ELEMENTOS   ******************
*************************************************************************************************/
/*
const enlaces = document.querySelector('.enlace');
const navegacion = document.querySelector('#principal');

navegacion.removeChild(enlaces[0]);

//enlaces[0].remove();

console.log(navegacion);
*/
//leer un atributo
const primerLi = document.querySelector('.enlace');

let elemento;

elemento = primerLi.getAttribute('href');
primerLi.setAttribute('href', 'http://facebook.com');
primerLi.setAttribute('dta-id', 20);
elemento = primerLi.hasAttribute('data-id');
primerLi.removeAttribute('data-id');

elemento = primerLi();


console.log(elemento);