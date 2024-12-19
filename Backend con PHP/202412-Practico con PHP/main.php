<?php

$palabras = array("sol","luna","cielo");
$palabraDesordenada = array();

for($i=0; $i < 3; $i++){
    $palabraDesordenada[$i] = str_shuffle($palabras[$i]);
}


print_r($palabraDesordenada);
echo "
<form action='analisis.php'>
    <input type='text' name='posicion0'>
    <input type='text' name='posicion1'>
    <input type='text' name='posicion2'>
    <button type='submit'>Enviar</button>
</form>
"
?>