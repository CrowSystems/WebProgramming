<?php
$tabla_del_9 = [];

for($i=1; $i<=10; $i++){
    array_push($tabla_del_9, 9 * $i);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Tabla del 9</h1>
    <ul>
        <?php foreach($tabla_del_9 as $value): ?>

            <li>9 * 1 = <?=$value ?></li>

            <?php endforeach; ?>
    </ul>
</body>
</html>