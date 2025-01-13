/**
 * La estructura For in es utilizado para manejar estructuras
 * enumerables, intera sobre tolas las propiedades enumerables de un objeto
 * que está codificado por cadenas (ignorando los codificadores por simbolos,
 * incluidas las propiedades enumeradles heredades)
 * 
 * for in ---> objetos
 * propiedades = valor
 * array, string
 * item
 * for (variable in objeto) {
 * código
 * }
 */
const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1,
};

for(fruta in listaDeCompras){
    console.log(fruta);
}

for(fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[frutas]}`);
}

for(fruta of listaDeCompras) {
    console.log(fruta);
}