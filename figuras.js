function perimetrocuadrado(lado){
    return lado * 4;
}

function areacuadrado(lado){
    return lado * lado;
}

function perimetrotriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areatriangulo(altura, base){
    return (altura * base) / 2;
}

function diametro(radio){
    return radio * 2;
}

function Circunferencia(radio){
    return diametro(radio) * Math.PI;
}

function areacirculo (radio){
    return (radio * radio) * Math.PI;
}

/*
console.group("Cuadrados");
    const ladocuadrado = 5;
    console.log("Los lados del cuadrado miden: " + ladocuadrado + "cm");

    const perimetrocuadrado = ladocuadrado * 4;
    console.log("El perímetro del cuadrado mide: " + perimetrocuadrado + "cm");

    const areacuadrado = ladocuadrado * ladocuadrado;
    console.log("El área del cuadrado mide: " + areacuadrado + "cm^2");
console.groupEnd();

//Código del triangulo
console.group("Triángulos");
    const ladotriangulo1 = 6
    const ladotriangulo2 = 6
    const basetriangulo = 4
    console.log("Los lados del triángulo son: " + ladotriangulo1 + "cm, " + ladotriangulo2 + "cm, " + basetriangulo + "cm")

    const alturatriangulo = 5.5;
    console.log ("La altura del triángulo es: " + alturatriangulo);

    const perimetrotriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;
    console.log("El perímetro del triángulo es: " + perimetrotriangulo);

    const areatriangulo = (basetriangulo * alturatriangulo) / 2;
    console.log("El área del triángulo es: " + areatriangulo);
    
console.groupEnd();

//Código del círculo
console.group("Círculos");
    //Radio
    const radio = 4;
    console.log("el radio del circulo es: " + radio);

    //Diametro
    const diametro = radio * 2;
    console.log("el diámetro del circulo es: " + diametro);
    //PI
    const PI = Math.PI;
    console.log("PI es: " + PI);
    //Circunferencia
    const perimetrocirculo = diametro * PI;
    console.log("el perimetro del circulo es: " + perimetrocirculo);
    //Área
    const areacirculo = (radio * radio) * PI;
    console.log("el área del circulo es: " + areacirculo);

console.groupEnd();
*/

function calcularPerimetroCuadrado(){
    var input = document.getElementById("inputcuadrado");
    var valor = input.value;

    alert("el perimetro del cuadrado mide: " + perimetrocuadrado(valor));
}

function calcularAreaCuadrado(){
    var input = document.getElementById("inputcuadrado");
    var valor = input.value;

    alert("el área del cuadrado mide: " + areacuadrado(valor));
}

function calcularAlturaTriangulo(){
    var inputlados = document.getElementById("inputlados");
    var inputbase = document.getElementById("inputbase");
    var valorlados = inputlados.value;
    var valorbase= inputbase.value;

    alert("La altura del tri: " + areacuadrado(valor));
}

function calcularPerimetroTriangulo(){

}

function calcularAreaTriangulo(){

}

function calcularCircunferencia() {


}

function calcularAreaCirculo(){


}