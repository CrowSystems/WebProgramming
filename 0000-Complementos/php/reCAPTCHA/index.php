<?php
if(!empty($_POST)){

}

?>
<!DOCTYPE html>
<html lang="Es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Google Recapcha </title>

<!--Link para API de reCaptcha-->
    <script src="https://www.google.com/recaptcha/enterprise.js?render=6LeZ77gqAAAAABVnWsIvDdmykqqbKq8cOei-6dIp"></script>
</head>
<body>
    <form action="form" action="<?php $_SERVER['PHP_SELF']; ?>" method="POST">
        usuario: <input type="text" name="name">
        <br><br>
        Password: <input type="password" name="password">
        <br><br>
        <div class="r-recaptcha" data-sitekey="Aqui va la clave del sitio"></div>
        <input type="submit" name="login" value="Login">
    </form>
</body>
</html>