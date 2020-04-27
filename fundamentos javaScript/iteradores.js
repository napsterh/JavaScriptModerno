const ciudades = ['Londres', 'Peru', 'NewYork', 'Madrid'];
const ordenes = new Set([123,456,789,759]);
const datos = new Map();
datos.set('nombre', 'Juan');
datos.set('Profesion','Desarrollador web');




/***********************************************************************************************************
****************************************   Entries Iterador         **************************************
************************************************************************************************************/
//entries a la ciiudades

for(let entrada of ciudades.entries() ){
    console.log(entrada);
}

//entries para ordenes

for(let entrada of ordenes.entries() ){
    console.log(entrada);
}

//entries para MAP

for(let entrada of datos.entries() ){
    console.log(entrada);
}


//Values a las ciudades

for(let entrada of ciudades){
    console.log(entrada);
}

//values para datos

for(let entrada  of datos.values() ){
    console.log(entrada);
}

//Keys iterador
for(let entrada of ciudades.keys() ){
    console.log(entrada);
}

//Keys ordenes
for(let entrada of ordenes.keys() ){
    console.log(entrada);
}


//Keys MAP
for(let entrada of datos.keys() ){
    console.log(entrada);
}



const mensaje = 'Aprendiendo JS';

//ANTIGUA
for(let i = 0; i < mensaje.length; i++){
    console.log(mensaje[i])
}

//MODERNA
for(let letras of mensaje){
    console.log(letras);
}