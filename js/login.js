var Login = (function(){

    this.login = function(usuario, contrasena){

        const query =
        `
            query{
                administrativo(usuario:"`+usuario+`",contrasena:"`+contrasena+`"){
                    usuario
                }
            }
        `
        util.peticionAPI(query).then(function(data)
        {
            if(data.errors)
            {
                util.mostrarMensajeError(data.errors[0].message);
            }
            else
            {
                const token = data.headers.get("Token");
                const payload = jwt_decode(token);
                const privilegio = payload.priv;
                sessionStorage.setItem("token", token);
                if(privilegio === 1)
                {
                    util.mostrarMensajeRedireccionamiento("Bienvenido(a) "+usuario, "busqueda.php");
                }
                else
                {
                    util.mostrarMensajeRedireccionamiento("Bienvenido(a) "+usuario, "conferencias.php");
                }
            }
        })
    }

});

sessionStorage.clear();
$("#btnLogin").click(function(){
    const usuario = $('#txtUsuario').val();
    const contrasena = $('#txtContrasena').val();
    let login = new Login();
    login.login(usuario, contrasena);
})