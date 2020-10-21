<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Categorias</title>
    <?php require_once('modules/head.php'); ?>
</head>

<body>
    <section class="mx-4 d-none">
        <article class="py-4">
            <a class="font-weight-bold mt-1">selecciona la</a>
            <a class="font-weight-bold mt-2">CONFERENCIA O TALLER</a>
        </article>
        <section class="text-center">
            <button id="btnMagistralI" class="bg-tb btn w-100 wc py-3 bor-ta">
                <article class="row">
                    <article class="col-8 text-center my-auto">
                        <a class="text-white font-weight-bold">MAGISTRAL I</a>
                    </article>
                    <article class="col-4">
                        <article class="text-center">
                            <img src="ima/a.png" class=" bg-g p-2 rounded-circle t-img">
                        </article>
                    </article>
                </article>
            </button>
            <button id="btnMagistralII" class="bg-gr mt-3 btn w-100 wc py-3 bor-ta">
                <article class="row">
                    <article class="col-8 text-center my-auto">
                        <a class="text-white font-weight-bold">MAGISTRAL II</a>
                    </article>
                    <article class="col-4">
                        <article class="text-center">
                            <img src="ima/a.png" class="bg-gd p-2 rounded-circle t-img">
                        </article>
                    </article>
                </article>
            </button>
        </section>
        <?php require_once('modules/tarjetas.php'); ?>
    </section>
</body>
<?php require_once('modules/footer-conferencias.php'); ?>
</html>