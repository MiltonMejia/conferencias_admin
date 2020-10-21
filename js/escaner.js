var LectorQR = (function(){

    var _escaner;

    const _opcionesIOS = {
        video: document.getElementById('preview'),
        continuous: true,
        scanPeriod: 60,
        mirror: false,
        backgroundScan: false,
        refractoryPeriod: 5000
    };

    const _opcionesAndroid = {
        video: document.getElementById('preview'),
        continuous: true,
        scanPeriod: 1,
        mirror: false,
        backgroundScan: false,
        refractoryPeriod: 5000
    }

    const _iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

    this.iniciarEscaner = function(){
        if(_iOS){
            _escaner = new Instascan.Scanner(_opcionesIOS);
        } else{
            _escaner = new Instascan.Scanner(_opcionesAndroid);
        }
        obtenerNumeroCamaras();
    }

    function obtenerNumeroCamaras(){
        Instascan.Camera.getCameras()
        .then(cameras => 
        {
            if(cameras.length > 0 && _iOS){
                _escaner.start(cameras[0]);
            } else{
                _escaner.start(cameras[1]);
            }
        })
        .catch(function(){
            util.mostrarMensajeError("No se detectaron cámaras en su dispositivo, intente más tarde");
        })
    }

    this.capturarCodigo = async function(){

        _escaner.addListener('scan', async function(content) {

            var audio = document.getElementById("audio");
            console.log(content)
            try{
                const payload = jwt_decode(content);

                const idAsistente = payload.id;
                const idConferencia = sessionStorage.getItem("idConferencia");
                const mutation = `
                    mutation{
                        crearRegistroAsistencia(
                            asistente:`+idAsistente+`
                            ,conferencia:`+idConferencia+`
                        ){
                            id
                            nombre
                            tipoConferencia
                            obligatorio
                            horaRegistro
                        }
                    }
                `
                let token = sessionStorage.getItem("token");

                await util.peticionAPIQR(mutation, token, content).then(function(data){
                    if(data.errors){
                        util.mostrarMensajeError(data.errors[0].message);
                    } else{
                        audio.play();
                        $('#txtFolio').val(payload.fol.toUpperCase());
                        $('#txtNombre').val(payload.name.toUpperCase());
                        $('#txtApellidoPaterno').val(payload.apat.toUpperCase());
                        $('#txtApellidoMaterno').val(payload.amat.toUpperCase());
                        $('#txtTipoAsistente').val(payload.tip.toUpperCase());
                        util.mostrarMensajeCorrecto("Se ha registrado correctamente la asistencia");
                    }
                })
            } catch(error){
                util.mostrarMensajeError("Escanee un código QR válido");
            }
        })
    }

});

$(document).ready(function(){
    util.verificarSesion();
    let conferencia = sessionStorage.getItem("conferencia");
    let imgConferencia = sessionStorage.getItem("imgConferencia");
    $("#imgConferencia").attr("src","ico/"+imgConferencia);
    $("#txtConferencia").text(conferencia);
    var escanerQR = new LectorQR();
    escanerQR.iniciarEscaner();
    escanerQR.capturarCodigo();
});

