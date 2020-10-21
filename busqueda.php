<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Busqueda</title>
    <?php require_once('modules/head.php');?>
</head>

<body class="bg-gn">
    <section class="container sh bg-white w-sch">
        <article class="row my-5">
            <article class="bg-sh w-100 text-white p-2 px-5 font-weight-bold ti-sch">Busqueda de asistente</article>
            <article class="col-lg-9 psch-5">
                <label id="normal" class="matter-textfield-filled mr-4 ip-sch">
                    <input id="txtNombreBusqueda" placeholder=" " onkeyup="javascript:this.value=this.value.toUpperCase();"/>
                    <span>Nombre</span>
                </label>
                <label id="normal" class="matter-textfield-filled mr-4 ip-sch">
                    <input id="txtApellidoPaternoBusqueda" placeholder=" " onkeyup="javascript:this.value=this.value.toUpperCase();"/>
                    <span>Apellido paterno</span>
                </label>
                <label id="normal" class="matter-textfield-filled ip-sch">
                    <input id="txtApellidoMaternoBusqueda" placeholder=" " onkeyup="javascript:this.value=this.value.toUpperCase();"/>
                    <span>Apellido materno</span>
                </label>
            </article>
            <article class="col-lg-2 p-5 text-center">
                <button id="txtBuscar" type="button" class="btn btn-src py-3 born">BUSCAR</button>
            </article>
        </article>
        </article>
    </section>
    <section class="container sh bg-white w-sch">
        <article class="row pt-5 px-5 p-sch">
            <article class="col-lg-3 m-sch">
                <article class="bg-gr text-center py-3 lb-t">
                    <label for="txtTipoAsistente">Alumno</label>
                </article>
            </article>
            <article class="col-lg-6"></article>
            <article class="col-lg-3">
                <label class="lb-sch p-1">Folio</label>
                <input id="txtFolio" type="text" class="inc-sr pt-1 w-100" disabled>
            </article>
        </article>
        <article class="row pt-5 px-5 p-sch">
            <article class="col-lg-3">
                <input id="txtNombre" type="text" class="inc-sr py-3 w-100" disabled>
                <label class="lb-sch p-1">Nombre</label>
            </article>
            <article class="col-lg-3">
                <input id="txtApellidoPaterno" type="text" class="inc-sr py-3 w-100" disabled>
                <label class="lb-sch p-1">Apellido paterno</label>
            </article>
            <article class="col-lg-3">
                <input id="txtApellidoMaterno" type="text" class="inc-sr py-3 w-100" disabled>
                <label class="lb-sch p-1">Apellido materno</label>
            </article>
            <article class="col-lg-3">
                <input id="txtFacebook" type="text" class="inc-sr py-3 w-100" disabled>
                <label class="lb-sch p-1">Usuario de facebook</label>
            </article>
        </article>
        <article class="row p-5 p-sch">
            <article class="col-lg-6">
                <input id="txtCorreo" type="text" class="inc-sr py-3 w-100" disabled>
                <label class="lb-sch p-1">Correo electronico</label>
            </article>
            <article class="col-lg-3">
                <input id="txtTelefono" type="text" class="inc-sr py-3 w-100" disabled>
                <label class="lb-sch p-1">Numero telefonico</label>
            </article>
            <article class="col-lg-3">
                <input id="txtEstado" type="text" class="inc-sr py-3 w-100" disabled>
                <label class="lb-sch p-1">Estado</label>
            </article>
        </article>
    </section>
    <section class="container my-4 sh bg-white w-sch">
        <article id="cntAsistencias" class="row pb-5  px-5">
        </article>
    </section>
</body>
<?php require_once('modules/footer-busqueda.php'); ?>

</html>