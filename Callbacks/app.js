/*

//Callback de Foreach

const ciudades = ['Londres', 'New York', 'Lima', 'Buenos Aires'];

//Inline Callback
ciudades.forEach(function(ciudad) {
    console.log(ciudad);
})

*/

//Listado de paises
const paises = ['Perú', 'Colombia', 'Venezuela', 'Chile', 'Argentina', 'Colombia'];

//Nuevo pais
function nuevoPais(pais){
    setTimeout(function() {
        paises.push(pais);
    }, 2000);
}

//Los ´paises se muestrabn despues de 1 segundo
function mostrarPaises() {
    setTimeout(function() {
        let html = '';
        paises.forEach(function(pais){
            html += `<li>${pais}</li>`;
        });
        document.getElementById('app').innerHTML = html;
    },1000);
}

// Mostrar los paises
mostrarPaises();

//Agregar un nuevo pais
nuevoPais('Rusia');