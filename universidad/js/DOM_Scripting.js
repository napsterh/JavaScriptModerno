let elemento;

elemento = document;
elemento = document.body;

elemento = document.URL;
elemento = document.images;
elemento = document.images[2];
elemento = document.forms[0].className;
elemento = document.forms[0].id;

elemento = document.images[2];
elemento = document.images[2].getAttribute('src');


//Scripts
elemento = document.scripts;

elemento = document.images;

let imagenes = document.images;
let imagenesArr = Array.from(imagenes);

imagenesArr.forEach(function(imagen) {
    console.log(imagen);
})

console.log(imagenesArr);