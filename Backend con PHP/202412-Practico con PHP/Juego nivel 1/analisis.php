<?php
print_r($_REQUEST);

$palabras = array("sol","luna","cielo");

if($_REQUEST["posicion0"] == $palabras[0]) {
    echo "<br/>";
    echo "La palabra ingresada es correcta";
} else {
    echo "<br/>";
    echo "La palabra ingresada es incorrecta, la palabra correcta es: ".$palabras[0];
}

if($_REQUEST["posicion1"] == $palabras[1]) {
    echo "<br/>";
    echo "La palabra ingresada es correcta";
} else {
    echo "<br/>";
    echo "La palabra ingresada es incorrecta, la palabra correcta es: ".$palabras[1];
}

if($_REQUEST["posicion2"] == $palabras[2]) {
    echo "<br/>";
    echo "La palabra ingresada es correcta";
} else {
    echo "<br/>";
    echo "La palabra ingresada es incorrecta, la palabra correcta es: ".$palabras[2];
}
?>