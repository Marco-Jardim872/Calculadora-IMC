var btnCalcular = document.getElementById("btn");
var btnLimpar = document.getElementById("btn2");


function calcularImc() {

    var nome = document.getElementById("nome").value;
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var resultado = document.getElementById("resultado");
    
    if (nome != "" && altura != "" && peso != "") {
        var resultadofinal = "";
        var imc = (peso / (altura * altura)).toFixed(2);
        if (imc < 18.5) {
            resultadofinal = "você está abaixo do peso. ";
        } else if (imc < 25) {
            resultadofinal = " seu peso está normal.";
        } else if (imc < 30) {
            resultadofinal = "sobrepeso";
        } else if (imc < 35) {
            resultadofinal = " você está com obesidade grau 1.";
        } else if (imc < 40) {
            resultadofinal = " você está com obesidade grau 2.";
        } else if (imc >= 40) {
            resultadofinal = " você está com obesidade grau 3.";
        }
        resultado.textContent = `${nome}, seu IMC é ${imc} e ${resultadofinal}`;
    } else {
        resultado.textContent = "Por favor, preencha os campos corretamente!";
    }
}
function limparDados() {
   document.getElementById("nome").value = "";
   document.getElementById("altura").value = "";
   document.getElementById("peso").value= "";
   resultado.textContent = "";
}
btnCalcular.addEventListener("clicar", calcularImc);
btnLimpar.addEventListener("clicar", limparDados);