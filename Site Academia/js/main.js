function gsup (){
    window.open("https://www.gsuplementos.com.br/");
}

function madruga(){
    window.open("https://www.madrugaosuplementos.com.br/");
}

function integ(){
    window.open("https://www.integralmedica.com.br/");
}

function trocar(){
    document.getElementById("mouse").innerHTML = "Com exceção da creatina todos podem ser obtidos através de uma boa dieta"
}

function voltar(){
    document.getElementById("mouse").innerHTML = "OBS:Suplementos não são obrigatórios na musculação"
}

function calculoimc(){

    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var conta = peso / ((altura/100) * (altura/100));
    var imc = parseFloat(conta.toFixed(2));
    document.getElementById("imccalc").innerHTML = "Seu IMC é : " + imc;
    
}