var botones = `
    #btnMagistralI,
    #btnMagistralII,
    #btnNatacion,
    #btnBoxeo,
    #btnHandball,
    #btnHalterofilia,
    #btnEsgrima,
    #btnHockey,
    #btnMovilityfirst,
    #btnBiomechanic,
    #btnCrossfit,
    #btnBaseball,
    #btnBasketball,
    #btnTochito,
    #btnBioexatlon,
    #btnBaile
`
var idBotones =
{
    btnBaile: 1,
    btnBasketball: 2,
    btnBaseball: 3,
    btnBioexatlon: 4,
    btnBiomechanic: 5,
    btnBoxeo: 6,
    btnMagistralI: 7,
    btnMagistralII: 8,
    btnCrossfit: 9,
    btnEsgrima: 10,
    btnHalterofilia: 11,
    btnHandball: 12,
    btnHockey: 13,
    btnMovilityfirst: 14,
    btnNatacion: 15,
    btnTochito: 16,
};

var imgBotones = {
    btnMagistralI: 'a.png',
    btnMagistralII: 'a.png',
    btnNatacion: 'swim.png',
    btnBoxeo: 'boxeo.png',
    btnHandball: 'handball.png',
    btnHalterofilia: 'halterofilia.png',
    btnEsgrima: 'esgrima.png',
    btnHockey: 'hockey.png',
    btnMovilityfirst: 'movfisrt.png',
    btnBiomechanic: 'biomechanic.png',
    btnCrossfit: 'crossfit.png',
    btnBaseball: 'baseball.png',
    btnBasketball: 'basketball.png',
    btnTochito: 'flag.png',
    btnBioexatlon: 'exatlon.png',
    btnBaile: 'baile.png'
};

$(function(){
    util.verificarSesion();
});

$(botones).click(function () {
    
    switch(this.id){
        case 'btnMagistralI':{
            sessionStorage.setItem("conferencia","MAGISTRAL I");
            sessionStorage.setItem("idConferencia",idBotones.btnMagistralI);
            sessionStorage.setItem("imgConferencia",imgBotones.btnMagistralI);
            break;
        }
        case 'btnMagistralII':{
            sessionStorage.setItem("conferencia","MAGISTRAL II");
            sessionStorage.setItem("idConferencia",idBotones.btnMagistralII);
            sessionStorage.setItem("imgConferencia",imgBotones.btnMagistralII);
            break;
        }
        case 'btnNatacion':{
            sessionStorage.setItem("conferencia","NATACIÓN");
            sessionStorage.setItem("idConferencia",idBotones.btnNatacion);
            sessionStorage.setItem("imgConferencia",imgBotones.btnNatacion);
            break;
        }
        case 'btnBoxeo':{
            sessionStorage.setItem("conferencia","BOXEO");
            sessionStorage.setItem("idConferencia",idBotones.btnBoxeo);
            sessionStorage.setItem("imgConferencia",imgBotones.btnBoxeo);
            break;
        }
        case 'btnHandball':{
            sessionStorage.setItem("conferencia","HANDBALL");
            sessionStorage.setItem("idConferencia",idBotones.btnHandball);
            sessionStorage.setItem("imgConferencia",imgBotones.btnHandball);
            break;
        }
        case 'btnHalterofilia':{
            sessionStorage.setItem("conferencia","HALTEROFILIA");
            sessionStorage.setItem("idConferencia",idBotones.btnHalterofilia);
            sessionStorage.setItem("imgConferencia",imgBotones.btnHalterofilia);
            break;
        }
        case 'btnEsgrima':{
            sessionStorage.setItem("conferencia","ESGRIMA");
            sessionStorage.setItem("idConferencia",idBotones.btnEsgrima);
            sessionStorage.setItem("imgConferencia",imgBotones.btnEsgrima);
            break;
        }
        case 'btnHockey':{
            sessionStorage.setItem("conferencia","HOCKEY");
            sessionStorage.setItem("idConferencia",idBotones.btnHockey);
            sessionStorage.setItem("imgConferencia",imgBotones.btnHockey);
            break;
        }
        case 'btnMovilityfirst':{
            sessionStorage.setItem("conferencia","MOVILITY FIRST");
            sessionStorage.setItem("idConferencia",idBotones.btnMovilityfirst);
            sessionStorage.setItem("imgConferencia",imgBotones.btnMovilityfirst);
            break;
        }
        case 'btnBiomechanic':{
            sessionStorage.setItem("conferencia","BIOMECHANIC");
            sessionStorage.setItem("idConferencia",idBotones.btnBiomechanic);
            sessionStorage.setItem("imgConferencia",imgBotones.btnBiomechanic);
            break;
        }
        case 'btnCrossfit':{
            sessionStorage.setItem("conferencia","CROSSFIT");
            sessionStorage.setItem("idConferencia",idBotones.btnCrossfit);
            sessionStorage.setItem("imgConferencia",imgBotones.btnCrossfit);
            break;
        }
        case 'btnBaseball':{
            sessionStorage.setItem("conferencia","BASEBALL");
            sessionStorage.setItem("idConferencia",idBotones.btnBaseball);
            sessionStorage.setItem("imgConferencia",imgBotones.btnBaseball);
            break;
        }
        case 'btnBasketball':{
            sessionStorage.setItem("conferencia","BASKETBALL");
            sessionStorage.setItem("idConferencia",idBotones.btnBasketball);
            sessionStorage.setItem("imgConferencia",imgBotones.btnBasketball);
            break;
        }
        case 'btnTochito':{
            sessionStorage.setItem("conferencia","TOCHITO");
            sessionStorage.setItem("idConferencia",idBotones.btnTochito);
            sessionStorage.setItem("imgConferencia",imgBotones.btnTochito);
            break;
        }
        case 'btnBioexatlon':{
            sessionStorage.setItem("conferencia","EXATLON");
            sessionStorage.setItem("idConferencia",idBotones.btnBioexatlon);
            sessionStorage.setItem("imgConferencia",imgBotones.btnBioexatlon);
            break;
        }
        case 'btnBaile':{
            sessionStorage.setItem("conferencia","BAILE");
            sessionStorage.setItem("idConferencia",idBotones.btnBaile);
            sessionStorage.setItem("imgConferencia",imgBotones.btnBaile);
            break;
        }
    }

    window.location.href = "escaner.php";

 });