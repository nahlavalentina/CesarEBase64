var cifraChecked = document.querySelector('#selection')
var incremento = document.querySelector('#receber-inc')
var radio1 = document.querySelector('#codificar')
var radio2 = document.querySelector('#decodificar')
var mensagem = document.querySelector('#input-usuario')
var resultado = document.querySelector('#receber-msg')
var button = document.querySelector('#enviar');


var cesarCodificar = [];
var codificandoCesar = '';
var cesarDecodificar = [];
var cesarDecodResultado = '';

cifraChecked.addEventListener('click', function (event) {
    incremento.innerHTML = ` <label for="incremento">Digite o incremento:</label><input type="number" id="incremento">`;
})

radio1.addEventListener('click', function (event) {
    button.innerText = `Codificar`;
})

radio2.addEventListener('click', function (event) {
    button.innerText = `Decodificar`;   
})

button.addEventListener('click', function (event) {
    event.preventDefault();
    if(radio1.checked == true && cifraChecked.options[0]) {
        cifraDeCesar();
        codificaCesar();
        resultado.innerText = codificandoCesar;
    }else if(radio2.checked == true && cifraChecked.options[0]){ 
        decodificaCesar();
        decodCesar()
        resultado.innerText = cesarDecodResultado;
    } else if(radio1.checked == true && cifraChecked.options[1]) {

        codificarBase64()

    } else if(radio2.checked == true && cifraChecked.options[1]) {

        decodificarBase64()
    }
    
})

function codificarBase64(){
    var valorCodificado = btoa(mensagem.value);
    var resultado = document.querySelector("#receber-msg");
    resultado.innerText = valorCodificado;
}

function decodificarBase64(){
    var valorDecodificado = atob(mensagem.value);
    var resultado = document.querySelector("#receber-msg");
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
            cesarCodificar[i] = (caracteres.charCodeAt(i) + parseInt(inc))- 26;
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