var util = {

    mostrarMensajeRedireccionamiento: function(mensaje, url)
    {
        Swal.fire({
            text: mensaje,
            allowOutsideClick: false,
            showConfirmButton: false,
            icon: 'success',
            timer: 2000,
            onAfterClose: () => {
                window.location.href = url;
            }
        })
    },

    mostrarMensajeErrorRedireccionamiento: function(mensaje, url)
    {
        Swal.fire({
            text: mensaje,
            allowOutsideClick: false,
            showConfirmButton: false,
            icon: 'error',
            timer: 2000,
            onAfterClose: () => {
                window.location.href = url;
            }
        })
    },

    mostrarMensajeCorrecto: function(mensaje)
    {
        Swal.fire({
            text: mensaje,
            allowOutsideClick: false,
            showConfirmButton: false,
            icon: 'success',
            timer: 2000
        })
    },

    mostrarMensajeError: function(mensaje)
    {
        Swal.fire({
            text: mensaje,
            allowOutsideClick: false,
            showConfirmButton: false,
            icon: 'error',
            timer: 2000
        })
    },

    mostrarMensajeAdvertencia: function(mensaje)
    {
        Swal.fire({
            text: mensaje,
            allowOutsideClick: false,
            showConfirmButton: false,
            icon: 'warning',
            timer: 1500
        })
    },

    verificarCampos: function(datosRegistro)
    {
        for(let clave in datosRegistro){
            
            let campo = datosRegistro[clave];

            if(campo == ""){
                this.mostrarMensajeAdvertencia("Ingrese los datos en los campos faltantes");
                return false;
            }

            switch(clave){
                case 'estado':
                {
                    if(!Number.isInteger(parseInt(campo))){
                        this.mostrarMensajeAdvertencia("Seleccione el Estado de donde proviene");
                        return false;
                    }
                    break;
                }
                case 'correo':
                {
                    let correo = $('#txtCorreoVerificacion').val();
                    if(campo != correo){
                        this.mostrarMensajeAdvertencia("Verifique que el correo electrónico sea el mismo");
                        return false;
                    }
                    break;
                }
            }
        }
    },


    peticionAPIToken: async function(query, token)
    {

        const url = """";

        const opts = {
            method: "POST",
            origin: "",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Token': token
            },
            credentials: "same-origin",
            body: JSON.stringify({ query })
        };

        return await fetch(url,opts)
        .then(data => data.json())
    },

    peticionAPIQR: async function(query, token, tokenQR)
    {

        const url = "";

        const opts = {
            method: "POST",
            origin: "",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Token': token,
                'Tokenqr': tokenQR
            },
            credentials: "same-origin",
            body: JSON.stringify({ query })
        };

        return await fetch(url,opts)
        .then(data => data.json())
    },

    peticionAPI: async function(query)
    {

        const url = "";

        const opts = {
            method: "POST",
            origin: "",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            credentials: "same-origin",
            body: JSON.stringify({ query })
        };

        return await fetch(url,opts)
    },

    verificarSesion: function()
    {

        let mensajeError = "No tiene los permisos para acceder a esta página";
        let url = "index.php";

        try{

            let tiempo = parseInt((new Date('2012.08.10').getTime() / 1000).toFixed(0));
            let credencial = sessionStorage.getItem("token");
            if(typeof credencial === 'undefined'){this.mostrarMensajeErrorRedireccionamiento(mensajeError,url);}
            let payload = jwt_decode(credencial);
            if(payload.iss != "" || tiempo > payload.exp){this.mostrarMensajeErrorRedireccionamiento(mensajeError,url);}
            
        } catch(error){
            this.mostrarMensajeErrorRedireccionamiento(mensajeError,url);
        }
    },

    generarTarjetaBusqueda: function(img,conferencia, hora)
    {
        const conferencias =
        [
            'baile.png',
            'basketball.png',
            'baseball.png',
            'exatlon.png',
            'biomechanic.png',
            'boxeo.png',
            'a.png',
            'a.png',
            'crossfit.png',
            'esgrima.png',
            'halterofilia.png',
            'handball.png',
            'hockey.png',
            'movfirst.png',
            'swim.png',
            'flag.png',
        ]

        let imgConferencia = conferencias.filter(function(conferencia, index){
            if(index == img){return conferencia}
        })
        
        const tarjetaHTML = 
        `
        <article class="col-lg-3 mt-5">
        <article class="bg-ts  tc btn w-100 pt-2 bor-ta text-center">
            <img src="ico/`+imgConferencia+`" class="bg-g p-2 rounded-circle t-img">
            <article class="text-white pt-1 font-weight-bold">
                <a class="ta-t">`+conferencia+`</a>
            </article>
            </article>
            <article class="bg-gr mt-1 tar-b text-center">
                <label>Hora de registro</label>
                <input type="text" class="py-1 text-center" value="`+hora+`">
            </article>
        </article>
        `
        return tarjetaHTML;
    },

    convertirHora: function(hora)
    {
        let a = new Date(hora * 1000);
        let months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let ampm = hour >= 12 ? 'PM' : 'AM';
        let min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
        let sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
        hour = hour % 12;
        hour = hour ? hour : 12;
        let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ' ' + ampm;
        return time;
      }

}