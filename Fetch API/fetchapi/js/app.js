document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

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