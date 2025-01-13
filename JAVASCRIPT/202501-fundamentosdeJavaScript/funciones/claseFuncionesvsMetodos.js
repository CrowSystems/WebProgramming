/**
 * Funciones: una función en JavaScript es un conjunto de instrucciones que realizan una tarea o calculan un valor.
 * son los principales bloques de construcción de un programa y permiten llamar al código muchas veces sin repetirlo.
 * 
 * Metodos: En JavaScript un mesto es una función que está asociada a un objeto y que le permite manipular sus propiedades
 * para realizar tareas espesificas.
 *  
 * 
 */

//Capacidades que tienen las funciones al igual que otros objetos

//1. Pasar funciones como argumentos conocido como -> callback

function a(){}
function b(a){}
b(a)

//Retornar funciones

function a () {
    function bloques (){}
    return b
}

//Asignar funciones a variables -> Expresión de función
const a = function () {}

//Tener propiedades y métodos
function a () {}
const obj = {}
a.call(obj)

//Anidar funciones -> Nested Functions

function a(){
    function b(){
        function c(){

        }
        c()
    }
    b()
}
a()

//¿Es posible almacenar funcioines en objetos? si es posible almacenar funciones en objetos y esto es conocido como metodo.
const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage(){
        console.log('Si es posible')
    }
}
rocket.launchMessage()