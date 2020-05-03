/************************************************************************************************
*****************************             REEMPLAZAR ELEMENTOS   ******************
*************************************************************************************************/

const nuevoEncabezado = document.createElement('h2');


//agragar id
nuevoEncabezado.id = 'encabezado';
//agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Mejores cursos'));
//elemento anterior
const anterior = document.querySelector('#encabezado');

const elPadre = document.querySelector('#lista-cursos');

//reemplazar
elPadre.replaceChild(nuevoEncabezado, anterior);

console.log(anterior.parentElement);