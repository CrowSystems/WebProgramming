/**
 * Operadores Lógicos
*/
const a = 10
const b = 20
const c = "10"

const resultado = 0;

/**
 * El resultado regresa un false ya que no
 * son el mismo tipo de valor ya que las dos condiciones 
 * se deben de cumplir
 */
resultado = a == b && a === c
console.log(resultado)

/**
 * El resultado de esta operación regresa un true ya que el operador
 *  || nos indica  que debe cumplir por lo menor una de las condiciones
 */

resultado = a != b || a === 
console.log(resultado)

/**
 * En la siguiente comparación nos regresa un true ya que aun que la comparación
 * es false pero la negación que esta antes que la operación contraresta el resultado
 * final.
 */
resultado = !(a === c)