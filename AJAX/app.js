document.getElementById('cargar').addEventListener('click', cargarDatos);


function cargarDatos(){
    //Crear el obj xmlHttpRequest
    const xhr = new XMLHttpRequest();

    //Abrir una conexcion
    xhr.open('GET', 'datos.txt', true);

    //Una vez que carga
    xhr.onload = function() {
        //200 : Correcto | 403 : Prohibido | 404 : No encontrado
        if(this.status === 200){
            document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }
    //Enviar el request
    xhr.send();
}