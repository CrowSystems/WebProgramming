/**
 * En esta clase se revisaron los diferentes tipos de operaciones que se pueden
 * realizar dentro de JavaScript, se explicaron de las operaciones basicas aritmeticas
 * y se conocieron las notaciones y datos infinitos y la clasificación NaN
 * 
 */
//1. Tipo entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

//2. Notacion cientifica
const cientifico = 5e3

//3.Infinitos y Nan
const infinito  = Infinity
const noEsUnNumero = NaN

//Operaciones Arirmeticas
//1. Suma, Resta, Multiplicación y Divición
const suma = 3 + 4
const resta = 4 -3
const multiplicacion = 4 * 7
const division = 6 / 7

//2.Modulo y Exponenciación
const modulo = 15 % 8
const exponenciacion = 2 ** 3


//precisión
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado === 0.3)

//Operaciones avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const alearotio = Math.random()

console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(alearotio)