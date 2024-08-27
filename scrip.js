 var botonEncriptar = document.querySelector(".btn-encriptar");
 var botonDesencriptar = document.querySelector(".btn-desencriptar");
 var botonMuneico = document.querySelector(".munieco");
 var contenedor = document.querySelector(".contenedor-parrafo");
 var resultado = document.querySelector(".texto-resultado");

 botonEncriptar.onclick = encriptar;
 botonDesencriptar.onclick = desencriptar;

 function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);

 }

 function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
 }

 function ocultarAdelante(){
   botonMuneico.classList.add("ocultar");
   contenedor.classList.add("ocultar");

 }

 