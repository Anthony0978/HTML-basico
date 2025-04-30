
function sumar(){
    alert("procesando....");

    //variables
    let numeroUno = parseInt(document.getElementById ("Valor1").value);
    let numeroDos = parseInt(document.getElementById ("Valor2").value);


    // Mostrar el resultadao en el h3
    let mostrarTexto = document.getElementById("texto2");

    /*    // setear los valores de texto a número
    let num1 = parseInt(numeroUno);
    let num2 = parseInt(numeroDos);     */

    // proceso
    let resultado = numeroUno+numeroDos;
    
    // salida o impresión
    let mensaje = "El resultado de la suma es " + resultado;

    mostrarTexto.textContent = mensaje;
}



