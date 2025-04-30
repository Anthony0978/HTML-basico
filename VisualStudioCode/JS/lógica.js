/*
Tipos de variables:
var -- no se utiliza porque se sobre-escribe
let --  nombreUsuario
const -- No son cambiables excepto si pone una constante tipo IVA = 0.13; y cambiarlo
*/
function saludar(){
    /*alert("Hola estimad@ "+ document.getElementById("nombre").value + " a Java Script");*/
   
    let nombreUsuario = document.getElementById("nombre").value;
    let generaTexto = document.getElementById("texto");
    let edadUsuario = document.getElementById("edad").value;

    let mensaje = "Hola estima@ "+ " "+ nombreUsuario + " de "+ edadUsuario + " años de edad" ;

    generaTexto.textContent= mensaje;

    console.log(mensaje);

}

