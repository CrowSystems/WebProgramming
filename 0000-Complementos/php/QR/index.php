<?php
//Agregamos la libreria para genera códigos QR
require "./Complementos/phpqrcode/qrlib.php";

//Declaramos una carpeta temporal para guardar las imagenes generadas
$dir = 'temp/';

//Si no existe la carpeta la creamos
if(!file_exists($dir))
mkdir($dir);

//Declaramos la ruta y nombre del archivo a generar
$filename = $dir.'test.png';

//Parametros de configuración
$tamano = 10;   //Tamaño de Pixel
$level = 'H';   //Precisión Baja
$framSize = '1';//Tamaño del color blanco
$contenido = 'http://www.protecnic.com.mx'; //Texto a mostrar


//Enviamos los parametros a la funcion para generar el codigo QR
QRcode::png($contenido,$filename,$level,$tamano,$framSize);

//Mostramos la imagen generada
echo '<img src="'.$dir.basename($filename).'"/><hr/>';
?>