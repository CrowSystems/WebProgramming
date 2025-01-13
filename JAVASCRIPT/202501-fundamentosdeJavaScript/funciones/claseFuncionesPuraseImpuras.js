/**
 * Funciones puras
 * Las funciones puras en JavaScript son funciones que devuelven el mismo resultado siempre que se les proporcionan los mismos
 * arguments de entrada. No tienen efectos secundarios y no modifican ningún estado externo.
 * 
 * Funciones impuras
 * Las funciones impuras en JavaScript son funciones que pueden producir resultados diferentes para la misma entrada. Esto se 
 * debe a que pueden depender de factores externos, como variables o otras funcones.
 */

//Funciones puras

//Side Effects.
//1. Modificar variables gobales.
//2. Modificar parámetros.
//3. Solicitudes HTTP.
//4. Imprimir mensajes en pantalla.
//5. Manipulación del DOM.
//6. Obtener la hora actual.

function sum(a,b){
    return a + b;
}

//Funciones Impuras, al momento que se optiene un side effect afecta a nuestras funciones puras.
function sum (a ,b){
    console.log('A: ', a)
    return a + b;
}

return total = 0;

function sumWithSideEffect(a){
    total += a
    return total
}

//Funcion pura
function square(x){
    return x * x
}

function addTen(y){
    return y + 10
}


const number = 5
const FinalResult = addTen(square(number))
console .log(FinalResult)
