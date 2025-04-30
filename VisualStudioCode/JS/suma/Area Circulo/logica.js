
function area(){

    const Pi = 3.14

    let miRadio = parseFloat(document.getElementById ("radio").value);
    let resultado = Pi*(miRadio*miRadio);
    let mostrarTexto = document.getElementById("texto");
    let mensaje = "El area del cirulo es de: " + resultado;

    // Salida
    mostrarTexto.textContent = mensaje;
    console.log(mensaje);
}