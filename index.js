function add() {
    const visor = document.getElementById('inputVisor');
    operation = 'somar';
    if (number1 && operation === 'somar') {
        number1 = number1 + parseInt(visor.value);
        console.log(number1)
        visor.value = number1
        return;
    } else if (!number1) {
        number1 = parseInt(visor.value);
        console.log(operation);
        visor.value = "";
        return
    } else
        number1 = number1 + parseInt(visor.value);
    console.log(number1)
    visor.value = number1
}
function minus() {
    const visor = document.getElementById('inputVisor');
    operation = 'subtrair';
    if (number1 && operation === 'subtrair') {
        number1 = number1 - parseInt(visor.value);
        console.log(number1)
        visor.value = number1
        return;
    } else if (!number1) {
        number1 = parseInt(visor.value);
        console.log(operation);
        visor.value = "";
        return
    } else
        number1 = number1 - parseInt(visor.value);
    console.log(number1)
    visor.value = number1
}
function times() {
    const visor = document.getElementById('inputVisor');
    operation = 'multiplicar';
    if (number1 && operation === 'multiplicar') {
        number1 = number1 * parseInt(visor.value);
        console.log(number1)
        visor.value = number1
        return;
    } else if (!number1) {
        number1 = parseInt(visor.value);
        console.log(operation);
        visor.value = "";
        return
    } else
        number1 = number1 - parseInt(visor.value);
    console.log(number1)
    visor.value = number1
}
function division() {
    const visor = document.getElementById('inputVisor');
    operation = 'dividir';
    if (number1 && operation === 'dividir') {
        number1 = number1 / parseInt(visor.value);
        console.log(number1)
        visor.value = number1
        return;
    } else if (!number1) {
        number1 = parseInt(visor.value);
        console.log(operation);
        visor.value = "";
        return
    } else
        number1 = number1 - parseInt(visor.value);
    console.log(number1)
    visor.value = number1
}
function equals() {
    const visor = document.getElementById('inputVisor');
    if(operation==='somar'){
        visor.value = number1 + parseInt(visor.value)
        number1 = parseInt(visor.value)
    }else if(operation==='subtrair'){
        visor.value = number1 - parseInt(visor.value)
        number1 = parseInt(visor.value)
    }else if(operation==='dividir'){
        visor.value = number1 / parseInt(visor.value)
        number1 = parseInt(visor.value)
    }else if(operation==='multiplicar'){
        visor.value = number1 * parseInt(visor.value)
        number1 = parseInt(visor.value)
    }else
    return
}