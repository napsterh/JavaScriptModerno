/************************************************************************************************
*****************************             Seleccion multiple                  ******************
*************************************************************************************************/

let enlaces = document.getElementsByClassName('enlace')[3];

//CSS
enlaces.style.background = '#333';
enlaces.textContent = 'Nuevo enlace';

console.log(enlaces);


/************************************************************************************************
*****************************             query selector con selsctByclass                  ******************
*************************************************************************************************/


const listaEnlaces = document.querySelector('#principal')
    .getElementsByClassName('enlace');

console.log(listaEnlaces);


/************************************************************************************************
*****************************        get elemnet by tag name             ******************
*************************************************************************************************/


const links = document.getElementsByTagName('a');


console.log(links);


/************************************************************************************************
*****************************        get elemnet by tag name             ******************
*************************************************************************************************/


const links = document.getElementsByTagName('a');

let enlaces = Array.from(links);

enlaces.forEach(function(enlace){
    console.log(enlace.textContent);
})

/************************************************************************************************
*****************************        query selector all            ******************
*************************************************************************************************/


const enlaces = document.querySelectorAll('#principal .enlace');

console.log(enlaces);


const enlaces = document.querySelectorAll('#principal a:nth-child(ood)');

enlaces.forEach(function(impares){
    impares.style.backgroundColor = 'green';
    impares.style.color = 'white';
});

console.log(enlaces)

/************************************************************************************************
*****************************        query selector all            ******************
*************************************************************************************************/


