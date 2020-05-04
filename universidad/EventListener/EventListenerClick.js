/************************************************************************************************
*****************************             EVENT LISTENER AL BUSCADOR   ******************
*************************************************************************************************/
//cuando corremos esta funcion por default buscara abrir una accion #, para no ejecutarlo
//hacemos un preventdefault

document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

function ejecutarBoton(e){
    e.preventDefault();
    let elemento;
    elemento = e;
    elemento = e.target;
    elemento = e.target.id;
    elemento = e.target.className;
    elemento = e.target.innerText;

    console.log(elemento);
}


/************************************************************************************************
*****************************             EVENT LISTENER A UN TEXTO   ******************
*************************************************************************************************/

document.querySelector('#encabezado').addEventListener('click', function(e){
    e.target.innerText = 'Nuevo encabezado';
    console.log(e.target.innerText);
});

/************************************************************************************************
*****************************             EVENT CON MOUSE   ******************
*************************************************************************************************/

const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelector('.enlace');
const boton = document.querySelector('#vaciar-carrito');

//Click
boton.addEventListener('click', obtenerEvento);

//Doble Click
boton.addEventListener('dblclick', obtenerEvento);

//Mouse enter
boton.addEventListener('mouseenter', obtenerEvento);

//Mouse leave
boton.addEventListener('mouseleave', obtenerEvento);

//Mouse over
boton.addEventListener('mouseover', obtenerEvento);

//Mouse Out
boton.addEventListener('mouseout', obtenerEvento);

//Mouse down
boton.addEventListener('mousedown', obtenerEvento);

//Mouse up
boton.addEventListener('mouseup', obtenerEvento);

//mouse move
encabezado.addEventListener('mousemove', obtenerEvento);


function obtenerEvento(e){
    console.log(`EVENTO: ${e.type}`);
}