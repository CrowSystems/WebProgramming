<?php

$palabras = array("sol","luna","cielo","luz","lluvia");

$form = "<form action='analisis.php'>";

for($i=0; $i < count($palabras); $i++) {
    $form .= "La palabra: ".str_shuffle($palabras[$i])." ".
    "<input type='text' name='palabra".$i."'>".
    "<br>";
}

$button = "<button type='submit'>ENVIAR</button>";
$formCierre="</form>";

echo $form.$button.$formCierre;
?>