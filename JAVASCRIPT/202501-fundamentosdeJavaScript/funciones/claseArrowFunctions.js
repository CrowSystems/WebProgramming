/**
 * Arrow Functions:
 * 
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