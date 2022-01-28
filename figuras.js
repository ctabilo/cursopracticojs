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
