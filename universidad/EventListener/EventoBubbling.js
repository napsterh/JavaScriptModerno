/************************************************************************************************
*****************************             EVENT BUBBLING                   ******************
*************************************************************************************************/

const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', function(e){
    console.log('click en card');
    e.stopPropagation(); // DETENER EL EVENT BLOBBLING
});

infoCurso.addEventListener('click', function(e){
    console.log('Click en info curso');
    e.stopPropagation();
});

agregarCarrito.addEventListener('click', function(e){
    console.log('Click en agregar carrito');
    e.stopPropagation();
});
