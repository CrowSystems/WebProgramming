/**
 * Arrow Functions:
 * Las Arrow Functions o funcionalidades flecha son una expresión de una función alternativa compacta a una función
 * tradicional, pero es limitada y no se puede utilizar en todas las situaciones.
 * 
 * DIFERENCIAS Y LIMITACIONES:
 * -No tiene sus propios enlaces a this o user y no se debe usar como métodos.
 * -No tiene argumentos o palabras clave new.target
 * -No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o enlace.
 * -No se puede utilizar como constructor
 * -No se puede utilizar vield dentro de su cuerpo.
 */

//Declaración
const greeting = function(name){
    return `Hi, ${name}`
}

//Arrow function - Explicit return
const newGreenting = (name) => {
    return `Hi ,${name}`
}

//Arrow function - Impicit return
const newGreentingImplicit = name => `Hi, ${name}`
const newGreentingImplicitWithTwoParameters = (name, lastname)  => `Hi, I'm  ${name} ${lastname}`

//Lexical Binding
//Metodo tradicional
const fictionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
} 

fictionalCharacter.messageWithTraditionalFunction('With great power comes great responsability')
fictionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.')