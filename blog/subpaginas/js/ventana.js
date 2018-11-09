function abrir(texto1,texto2,downlink1,downlink2){
     document.getElementById("vent").style.display = "block";
document.getElementById("memoria").innerHTML=texto1;
document.getElementById("paqueteCompleto").innerHTML =texto2;
document.getElementById("enlace1").href = downlink1; //colocamos el enlace del que descargar
document.getElementById("enlace2").href = downlink2;
}
        
        function cerrar(){
            document.getElementById("vent").style.display="none";
        }
     