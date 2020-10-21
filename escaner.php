<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Escaneo de codigo</title>
    <?php require_once('modules/head.php'); ?>
</head>

<body>
    <section class="mx-4 d-none">
        <article class="row py-4">
            <article class="col-10">
                <article>
                    <a class="font-weight-bold es-1">Escaneo de cogido QR</a>
                    <a class="font-weight-bold es-2">Coloque el codigo QR en la zona
                        indicada</a>
                </article>
            </article>
            <article class="col-1 mt-3">
                <a href="conferencias.php">
                    <img src="ico/arrow.png" class=" bg-gn p-2 rounded-circle sm-img">
                </a>
            </article>
        </article>
        <section class="bg-tb btn w-100 wc py-3 bor-ta">
            <article class="row">
                <article class="col-8 text-center my-auto">
                    <a id="txtConferencia" class="text-white font-weight-bold">CONFERENCIA</a>
                </article>
                <article class="col-4">
                    <article class="text-center">
                        <img id="imgConferencia" src="ico/a.png" class=" bg-g p-2 rounded-circle t-img">
                    </article>
                </article>
            </article>
        </section>

        <section class="sh bor-ta mb-2 pb-2 mt-3">
            <article class="row px-2 pt-2">
                <article class="col-6 ti-f">
                    <label>Folio: </label>
                    <input id="txtFolio" type="text" class=" inc-b w-50" disabled >
                </article>
                <article class="col-6 ti-f">
                    <input id="txtTipoAsistente" type="text" class="float-right inc" disabled>
                </article>
            </article>
            <article class="row px-2 pt-2">
                <article class="col-12 ti-f">
                    <input id="txtNombre" type="text" class="inc-b py-1 w-100" disabled>
                </article>
            </article>
            <article class="row px-2 pt-2">
                <article class="col-6 ti-f">
                    <input id="txtApellidoPaterno" type="text" class="inc-b py-1 w-100" disabled>
                </article>
                <article class="col-6 ti-f">
                    <input id="txtApellidoMaterno" type="text" class="inc-b py-1 w-100" disabled >
                </article>
            </article>
        </section>
        <section class="y-4 qr-w">
            <video id="preview" class="bor-ta"></video>
            <audio id="audio" style="display:none" playsinline>
                <source type="audio/mp3" src="sound/beep.mp3">
            </audio>
        </section>
    </section>
</body>
<?php require_once('modules/footer-escaner.php'); ?>
</html>