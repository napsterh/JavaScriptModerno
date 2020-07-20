document.getElementById('txtBtn').addEventListener('click', cargarTXT);


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