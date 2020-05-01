/************************************************************************************************
*****************************             CREANDO ELEMENTOS   ******************
*************************************************************************************************/

const enlace = document.createElement('a')


//agregando clase
enlace.className = 'enlace';
// añadir id
enlace.id = 'nuevo-id';
//abtributo de href
enlace.setAttribute('href', "#");
//añadir texto
enlace.textContent = 'Nuevo enlace';

//agregarlo al HTML

document.querySelector('#secundaria').appendChild(enlace);

console.log(enlace);
