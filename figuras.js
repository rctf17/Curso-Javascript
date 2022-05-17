// Código del cuadrado
console.group("Cuadrado");


function perimetroCuadrado(lado){
    return lado * 4;
} 


function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();


// Código del triángulo

console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}


function areaTriangulo(base, altura){
    return (base* altura)/2;
}

function alturaTrianguloIsoceles(lado1, lado2){
    a= lado1 * lado1;
    b= (lado2 * lado2)/4;
    return Math.sqrt(a-b);
}

function isIsoceles(lado1, lado2 , lado3){
    if (lado1==lado2 && lado1 !=lado3) {
         return alturaTrianguloIsoceles(lado1, lado3);
    }else if (lado1==lado3 && lado2 != lado1){
        return alturaTrianguloIsoceles(lado1, lado2);

    }else if (lado2==lado3 && lado1 != lado2){
        return alturaTrianguloIsoceles(lado2, lado1);
    }else {
        return ("Las longuitudes ingresadas no corresponden a un triángulo isoceles")
    }
}

console.groupEnd();


// Código del Círculo

console.group("Círculo");

const pi= Math.PI;

function diametroCirculo (radio){
    return radio * 2;
}


function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return  diametro * pi;
}

function areaCirculo(radio){
    return (radio* radio) * pi;
}

console.groupEnd();


//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value= input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value= input.value;
    const perimetro = areaCuadrado(value);
    alert(perimetro);
}

function calcularPerimetroTriangulo (){
    const lado1 = document.getElementById("InputTrianguloLado1");
    const value1= parseInt(lado1.value);

    const lado2 = document.getElementById("InputTrianguloLado2");
    const value2= parseInt(lado2.value);
 
    const base = document.getElementById("InputTrianguloBase");
    const valueBase= parseInt(base.value);

    const perimetro = perimetroTriangulo(value1,value2,valueBase);
    alert(perimetro);
}


function calcularAreaTriangulo (){
    const altura = parseInt((document.getElementById("InputTrianguloAltura").value));
    const base = parseInt(document.getElementById("InputTrianguloBase").value);
    const perimetro = areaTriangulo(base, altura);
    alert(perimetro);
}

function calcularAlturaTrianguloIsoceles(){
    const lado1 = parseInt(document.getElementById("InputTrianguloLado1").value);
    const lado2 = parseInt(document.getElementById("InputTrianguloLado2").value);
    const base = parseInt(document.getElementById("InputTrianguloBase").value);
    const altura = isIsoceles(lado1,lado2,base);
    alert(altura);
}

function calcularPerimetroCirculo(){
    const radio = parseInt(document.getElementById("InputCirculo").value);
    const perimetro = (perimetroCirculo(radio));
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = parseInt(document.getElementById("InputCirculo").value);
    const area = (areaCirculo(radio));
    alert(area);
}