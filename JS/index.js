var cifraChecked = document.querySelector('#selection');
var incremento = document.querySelector('#receber-inc');
var radio1 = document.querySelector('#codificar');
var radio2 = document.querySelector('#decodificar');
var mensagem = document.querySelector('#input-usuario');
var resultado = document.querySelector('#receber-msg');
var button = document.querySelector('#enviar');


var cesarCodificar = [];
var codificandoCesar = '';
var cesarDecodificar = [];
var cesarDecodResultado = '';


cifraChecked.addEventListener('click', function (event) {
    if (cifraChecked.value == 1) {
        incremento.style.visibility = "visible";
        incremento.innerHTML = ` <label for="incremento">Digite o incremento:</label><br><input type="number" id="incremento">`;
    } else {
        incremento.style.visibility = "hidden";
    }
    
})

radio1.addEventListener('click', function (event) {
    button.innerText = `Codificar`;
})

radio2.addEventListener('click', function (event) {
    button.innerText = `Decodificar`;   
})

button.addEventListener('click', function(event){
    event.preventDefault();
    if (cifraChecked.value == 1) {
        if (radio1.checked == true) {
            cifraDeCesar();
            codificaCesar();
            resultado.innerText = codificandoCesar;
        } else if (radio2.checked == true) {
            decodificaCesar();
            decodCesar();
            resultado.innerText = cesarDecodResultado;
        }
    } else if (cifraChecked.value == 2) {
        if (radio1.checked == true) {
            codificarBase64();
        } else if (radio2.checked == true) {
            decodificarBase64();
        }
    }
})

function codificarBase64(){
    var valorCodificado = btoa(mensagem.value);
    resultado.innerText = valorCodificado;
}

function decodificarBase64(){
    var valorDecodificado = atob(mensagem.value);
    resultado.innerText = valorDecodificado;
}


function cifraDeCesar(){
    var incrementando = document.querySelector('#incremento')
    var caracteres = mensagem.value;
    var inc = incrementando.value;
    for(var i = 0; i < caracteres.length; i++) {
        if(caracteres.charCodeAt(i) == 32){
            cesarCodificar[i] = caracteres.charCodeAt(i);
        }else if(caracteres.charCodeAt(i) + parseInt(inc) > 90 && caracteres.charCodeAt(i) + parseInt(inc) < 99){
            cesarCodificar[i] = caracteres.charCodeAt(i) - 1;
        }else if(caracteres.charCodeAt(i) + parseInt(inc) > 122){
            cesarCodificar[i] = ((caracteres.charCodeAt(i) + parseInt(inc) - 97) % 26) + 97;
        }else{
            cesarCodificar.push(caracteres.charCodeAt(i) + parseInt(inc));
        } 
    }
    return cesarCodificar;
}

function codificaCesar() {
    for(var i = 0; i < cesarCodificar.length; i++) {
        codificandoCesar += String.fromCharCode(cesarCodificar[i])
    }
    return codificandoCesar;
}

function decodificaCesar () {
    var incrementando = document.querySelector('#incremento')
    var caracteres = mensagem.value;
    var inc = incrementando.value;
    for(var i = 0; i < caracteres.length; i++) {
        if(caracteres.charCodeAt(i) == 32){
            cesarDecodificar[i] = caracteres.charCodeAt(i);
        }else if(caracteres.charCodeAt(i) - parseInt(inc) < 0){
            cesarDecodificar[i] = ((((caracteres.charCodeAt(i) - parseInt(inc)) * -1) - 97) % 26) + 97;
        }else if(caracteres.charCodeAt(i) - parseInt(inc) < 97){
            cesarDecodificar[i] = (caracteres.charCodeAt(i) - parseInt(inc)) + 26;
        }else{
            cesarDecodificar.push(caracteres.charCodeAt(i) - parseInt(inc));
        } 
    }
    return cesarDecodificar;
}

function decodCesar(){
    for (var i = 0; i < cesarDecodificar.length; i++){
        cesarDecodResultado += String.fromCharCode(cesarDecodificar[i])
    }
    return cesarDecodResultado
}