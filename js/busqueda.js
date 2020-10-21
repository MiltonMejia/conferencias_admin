var Buscar = (function(){

    this.buscarAlumno = function(nombre, apellidoPaterno, apellidoMaterno)
    {
        const token = sessionStorage.getItem("token");
        const param = 'nombre:"'+nombre+'",apellidoPaterno:"'+apellidoPaterno+'",apellidoMaterno:"'+apellidoMaterno+'"'
        const query =
        `
            query
            {
                asistente(`+param+`)
                {
                    folio
                    nombre
                    apellidoPaterno
                    apellidoMaterno
                    estado
                    correo
                    telefono
                    facebook
                    tipoAsistente
                    conferencias
                    {
                        id
                        nombre
                        horaRegistro
                    }
                }
            }
        `

        document.getElementById('cntAsistencias').innerHTML = '';

        util.peticionAPIToken(query,token).then(function(data)
        {
            if(data.errors)
            {
                util.mostrarMensajeError(data.errors[0].message);
            }
            else if(data.data.asistente === null)
            {
                util.mostrarMensajeError("No existe el asistente buscado");
            }
            else
            {
                $("label[for='txtTipoAsistente']").text(data.data.asistente.tipoAsistente);
                $('#txtFolio').val(data.data.asistente.folio);
                $('#txtNombre').val(data.data.asistente.nombre);
                $('#txtApellidoPaterno').val(data.data.asistente.apellidoPaterno);
                $('#txtApellidoMaterno').val(data.data.asistente.apellidoMaterno);
                $('#txtFacebook').val(data.data.asistente.facebook);
                $('#txtCorreo').val(data.data.asistente.correo);
                $('#txtTelefono').val(data.data.asistente.telefono);
                $('#txtEstado').val(data.data.asistente.estado);

                const conferencias = data.data.asistente.conferencias;
                if(conferencias.length === 0)
                {
                    util.mostrarMensajeAdvertencia("No se han registrado conferencias para este asistente");
                }
                else
                {
                    conferencias.forEach(fila => {
                        let id = fila.id;
                        let conferencia = fila.nombre;
                        let hora = fila.horaRegistro;
                        hora = util.convertirHora(hora);
                        $("#cntAsistencias").append(util.generarTarjetaBusqueda(id,conferencia,hora));
                    });
                }
                
            }

            

        })
    }


});

util.verificarSesion();
$("#txtBuscar").click(function(){
    const nombre = $('#txtNombreBusqueda').val();
    const apellidoPaterno = $('#txtApellidoPaternoBusqueda').val();
    const apellidoMaterno = $('#txtApellidoMaternoBusqueda').val();
    let buscar = new Buscar();
    buscar.buscarAlumno(nombre,apellidoPaterno,apellidoMaterno)
});