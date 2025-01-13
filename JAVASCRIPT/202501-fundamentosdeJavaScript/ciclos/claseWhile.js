/**
 * El ciclo While es una instrucción que crea un bucle  que ejecuta una sentencia mientras se cumpla una condición,
 * La condición se evalua antes de ejecutar la sentencia, y si es falsa la ejecuión continúa con la sentencia siguiente.
 * Para su ejecución es necesario utilizar la sentencia en bloque.
 * 
 * n=0;
 * x=0;
 * while(n<3)
 * {
 *  n++;
 *  x += n;
 * }
 */

let contador = 0;

while (contador < 10){
    console.log(contador);
    contador++;
}