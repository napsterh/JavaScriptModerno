/************************************************************************************************
*****************************             LOCAL STORAGE                 ******************
*************************************************************************************************/

// AGREGAR A LOCAL STORAGE

localStorage.setItem('name', 'Homer');

//SESSION STORAGE
sessionStorage.setItem('name', 'Homer');


//ELIMINAR DE LOCAL STORAGE
localStorage.removeItem('name');


//Obtener valor de local storage
const nombre = localStorage.getItem('name');

console.log(nombre);