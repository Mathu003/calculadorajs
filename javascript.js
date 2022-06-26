let operandoA;
let operandob;
let valor1 =operandoA
let valor2 = operandob
//numeros en la pantalla
let pantalla =document.getElementById("pantalla")

function addNumDisplay(numeroText) {
    pantalla.innerText += numeroText ;
}
//limpiar display
function cleanDisplay() {
    pantalla.innerText = '';
}
//funcion sumar
function add (){
    operandoA =pantalla.innerText;
    operator = "+";
    console.log(operandoA);

    cleanDisplay()
}
function addValues(operandoA, operandob) {
    let resultado = operandoA + operandob
    return resultado
}
function calculate (){
    operandob = parseInt(pantalla.innerText);
    if(operator == '+'){
        pantalla.innerText=addValues(operandoA + operandob) 
    }

}
