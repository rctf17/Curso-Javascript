//Helpers

function esPar(numero){
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista= lista.reduce(
    
        function(ValorAcumulado=0, nuevoElemento){
            return ValorAcumulado + nuevoElemento;
        } 
    );
    
        const promedioLista= sumaLista/ lista.length;
        return promedioLista;
}

//Calculadora de mediana

function medianaSalarios(lista){

    const mitad= parseInt(lista.length/2);

    if (esPar(lista.length)){
        const  personaMitad1=lista[mitad - 1];
        const  personaMitad2=lista[mitad];
        const  mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;

    }else{
        const personaMitad=lista[mitad];
        return personaMitad;
    }

}

//Mediana General

const salariosCol= colombia.map(
    function(person){

        return person.salary;
    }
);

const salarioColSorted= salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

//Mediana Top 10%

const spliceStart = (salarioColSorted.length * 90)/100;
const spliceCount= salarioColSorted.length - spliceStart;
const salariosColTop10= salarioColSorted.splice(spliceStart,spliceCount);
const medianaTop10Col= medianaSalarios(salariosColTop10);


const medianaGeneralCol= medianaSalarios(salarioColSorted);

console.log ({
    medianaGeneralCol,
    medianaTop10Col,
});