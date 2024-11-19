const letters = ['a', 'b', 'c'];

//Declaración de un For para impresión de un arreglo
for(let index = 0; index < letters.length; index++){
    const element = letters[index];
    console.log('for: ', element);
}

//manejo de arrow function de Java script
letters.forEach(item => console.log('forEach: ',item))