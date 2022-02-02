function perimetrocuadrado(lado){
    return (lado * 4).toFixed(2);
}

function areacuadrado(lado){
    return (lado * lado).toFixed(2);
}

function alturatriangulo (lado, base){
    return (Math.sqrt((lado * lado) - ((base * base) / 4))).toFixed(2);
}
function perimetrotriangulo(lado , base){
    return ((parseInt(lado) * 2) + parseInt(base)).toFixed(2);
}

function areatriangulo(altura, base){
    return ((altura * base) / 2).toFixed(2);
}

function diametro(radio){
    return (radio * 2).toFixed(2);
}

function circunferencia(radio){
    return (diametro(radio) * Math.PI).toFixed(2);
}

function areacirculo (radio){
    return ((radio * radio) * Math.PI).toFixed(2);
}

function estaVacio(contenido){
    return (contenido == "");
}

function calcularPerimetroCuadrado(){
    var input = document.getElementById("inputcuadrado");
    var valor = input.value;

    if (estaVacio(valor)) {
        alert("Debes ingresar un número para hacer el cálculo");
    }
    else {
       document.getElementById("perimetrocuadrado").innerText = valor * 4;  
    }    
}

function calcularAreaCuadrado(){
    var input = document.getElementById("inputcuadrado");
    var valor = input.value;

    //alert("el área del cuadrado mide: " + areacuadrado(valor));
    if (estaVacio(valor)) {
        alert("Debes ingresar un número para hacer el cálculo");
    }
    else {
        document.getElementById("areacuadrado").innerText = areacuadrado(valor);
    }
}

function calcularAlturaTriangulo(){
    var inputlados = document.getElementById("inputlados");
    var inputbase = document.getElementById("inputbase");
    var valorlados = inputlados.value;
    var valorbase= inputbase.value;

    //alert("La altura del triángulo es: " + alturatriangulo(valorlados , valorbase));
    
    if (estaVacio(valorlados) || estaVacio(valorbase)) {
        alert("Debes ingresar ambos números para hacer el cálculo");
    }
    else {
        document.getElementById("alturatriangulo").innerText = alturatriangulo(valorlados , valorbase);
    }
}

function calcularPerimetroTriangulo(){
    var inputlados = document.getElementById("inputlados");
    var inputbase = document.getElementById("inputbase");
    var valorlados = inputlados.value;
    var valorbase= inputbase.value;

    //alert("El perímetro del triángulo es: " + perimetrotriangulo(valorlados , valorbase));
    

    if (estaVacio(valorlados) || estaVacio(valorbase)) {
        alert("Debes ingresar ambos números para hacer el cálculo");
    }
    else {
        document.getElementById("perimetrotriangulo").innerText = perimetrotriangulo(valorlados , valorbase);
    }

}

function calcularAreaTriangulo(){
    var inputlados = document.getElementById("inputlados");
    var inputbase = document.getElementById("inputbase");
    var valorlados = inputlados.value;
    var valorbase= inputbase.value;
    var altura = alturatriangulo(valorlados , valorbase);

    //alert("El área del triángulo es: " + areatriangulo( altura , valorbase));
    

    if (estaVacio(valorlados) || estaVacio(valorbase))   {
        alert("Debes ingresar ambos números para hacer el cálculo");
    }
    else {
        document.getElementById("areatriangulo").innerText = areatriangulo( altura , valorbase);
    }
}

function calcularCircunferencia() {
    var inputradio = document.getElementById("inputcirculo");
    var radio = inputradio.value;

    //alert("La circunferencia es de: " + circunferencia(radio));
    
    if (estaVacio(radio)) {
        alert("Debes ingresar un número para hacer el cálculo");
    }
    else {
        document.getElementById("circunferencia").innerText = circunferencia(radio);
    }    

}

function calcularAreaCirculo(){
    var inputradio = document.getElementById("inputcirculo");
    var radio = inputradio.value;

    //alert("El área del circulo es de: " + areacirculo(valorradio));

    if (estaVacio(radio)) {
        alert("Debes ingresar un número para hacer el cálculo");
    }
    else {
        document.getElementById("areacirculo").innerText = areacirculo(radio);
    }    
}