//How to create an array

//1. new Array or Array()
//ejemplo de como se pueden almacenar registros de tipo string dentro de un array
const fruits = Array('Apple', 'Banana','Orange')
console.log(fruits)

//ejemplo de almacenamiento de un solo numero dentro de un array
const justOneNumber = Array(12)
console.log(justOneNumber)

//ejemplo de almacenamiento de mas de 1 numero den un array
const number = Array(1, 2, 3, 4, 5)
console.log(number)

//2. Array Literal syntax

//Array con solo un numero
const  oneNumber = [4]
console.log(oneNumber)

//Array vacio
const emtyArray = []
console.log(emtyArray)

//Array con datos tipo string
const sports = ['soccer', 'tenis', 'rugby']
console.log(sports)

//Array Mixto conde puedes almacenar mas de un tipo de variables.
const recibeIngredientes = [
    'Flour',
    true,
    2,
    {
        ingredient: 'Milk', quantity: '1 cup'
    },
    false
]
console.log(recibeIngredientes)

//Accessing array elements
//acceso al contenido de los arrays con otros arrays
const firstFruit = fruits[0]
console.log(firstFruit)

//length property
//conocer el tamaño del array
const numberOfFruits = fruits.length
console.log(numberOfFruits)

//Mutability
//agregar nuevos valores a un array
fruits.push('watermelon')
console.log(fruits)

//Inmutability
//copiar el contenido de un array a otro sin modificar el orifinal
const newFruits = fruits.concat(['graoe', 'kiwi'])
console.log(fruits)
console.log(newFruits)

//checking arrays with Array.isArray()
//Verificar si un array es un array, esto arrojara un booleano de true o false.
const isArray =Array.isArray(fruits)
console.log(isArray)

//Practial exercise: sum all elements of an array
//Suma de todos de los elementos de array revisados.
const numberArray = [1, 2, 3, 4, 5]
let sum = 0

for(let i = 0; i< numberArray.length; i++) {
    sum += numberArray[i]
}

console.log(sum)