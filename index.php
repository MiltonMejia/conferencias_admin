<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Incio de sesion</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="https://res.cloudinary.com/finnhvman/raw/upload/matter/matter-0.2.2.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css" type="text/css" media="all" />
</head>

<body class="bg-gn">
    <section class="container sh bg-white w-ad cm np">
        <article class="mx-6 py-4 mt-4 border-bottom">
            <a class="font-weight-bold bt">BIENVENIDO!</a>
            <a class="font-weight-bold bb">Coloca tus datos de inicio de sesion</a>
        </article>
        <form>
            <section class="mt-4 pb-8b mx-6">
                <label class="matter-textfield-filled w-100">
                    <input type="text" id="txtUsuario" placeholder=" " />
                    <span>Usuario</span>
                </label>
                <label class="matter-textfield-filled w-100 mt-4">
                    <input type="password" id="txtContrasena" placeholder=" " />
                    <span>Contraseña</span>
                </label>
            </section>
            <section class="bg-g">
                <button type="button" id="btnLogin" class="btn py-4 fbc font-weight-bold text-white born w-100">INGRESAR</button>
            </section>
        </form>
    </section>
</body>
<?php require_once('modules/footer-index.php'); ?>
</html>