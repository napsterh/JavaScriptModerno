document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST);

function cargarTXT() {
    fetch('datos.txt')
        .then(function(res){
            //console.log(res);
            return res.text();
        })
        .then(function(resultado){
          // setTimeout(function(){
                document.getElementById('resultado').innerHTML = resultado;
         //  },4000)
        })
        .catch(function(error){
            console.log(error);
        })
}

function cargarJSON() {
    fetch('empleados.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let html = '';
            data.forEach(function(empleado){
                html += `
                    <li>${empleado.nombre} ${empleado.puesto}</li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        }).catch(function(error){
            console.log(error);
        })
}

function cargarREST() {
    fetch('https://picsum.photos/list')
        .then(function(res){
            return res.json();
        })
        .then(function(fotos){
            let html = '';
            fotos.forEach(function(foto){
                html += `
                    <li>
                        <a href="${foto.post_url}">ver foto</a>
                        ${foto.author}
                    </li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        }).catch(function(error){
            console.log(error);
        })
}