/************************************************************************************************
*****************************             EVENT LISTENER AL BUSCADOR   ******************
*************************************************************************************************/
//Variables
const busqueda = document.querySelector('#buscador');

busqueda.addEventListener('keydown', obtenerEvento);

busqueda.addEventListener('keyup', obtenerEvento);

//al presionar el teclado
busqueda.addEventListener('keypress', obtenerEvento);

//al clickear el campo
busqueda.addEventListener('focus', obtenerEvento);

//al clickear fuera
busqueda.addEventListener('blur', obtenerEvento);

busqueda.addEventListener('cut', obtenerEvento);

busqueda.addEventListener('copy', obtenerEvento);

busqueda.addEventListener('paste', obtenerEvento);

busqueda.addEventListener('input', obtenerEvento);

//usado en select
busqueda.addEventListener('change', obtenerEvento);


function obtenerEvento(e){
    document.querySelector('#encabezado').innerText = busqueda.value;
    console.log(`EVENTO: ${e.type}`);
}

