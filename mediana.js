const lista1=[
    100,
    200,
    500,
    400000000,
];


function calcularMediaAritmetica(lista){
    const sumaLista= lista.reduce(
    
        function(ValorAcumulado=0, nuevoElemento){
            return ValorAcumulado + nuevoElemento;
        } 
    );
    
        const promedioLista= sumaLista/ lista.length;
        return promedioLista;
}


function esPar(numero){
    if (numero % 2 === 0) {
        return true;

    }else{
        return false;
    }
}


function calcularMediana(lista){
    const listaordenada = lista.sort(function (a,b){
        return a - b;
    });

    const mitadLista= parseInt(listaordenada.length / 2);
    let mediana;

if (esPar(lista.length)){
    const elemento1=listaordenada[mitadLista];
    const elemento2=listaordenada[mitadLista-1];
    const mediana = calcularMediaAritmetica([elemento1,elemento2]);
    return mediana;

}else{
    mediana= listaordenada[mitadLista];
    return mediana;
}



}









