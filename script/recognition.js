// Reconocimiento de voz con finalidad de comando 
let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = false;
recognition.interResults = true;

// establecer un evento al iniciar 
recognition.addEventListener("start", () => {
});
// establecer que al precionar espacio se inicie el reconocimiento
window.onkeydown = tecla;
function tecla(event){
keyNum = event.keyCode;
if(keyNum==32) recognition.start();
}
// reconocimiento de llamada 
// reconocimiento de comando 
recognition.onresult = (event) => {
    // establecerle a una variable el valor de lo que dice el usuario
    const results = event.results;
    frase = results[results.length - 1][0].transcript;
    var cmd = frase;
    respuesta = "";
    // simplificar comando
    cmd = cmd.toLowerCase();
    cmd = cmd.replace("á", "a");
    cmd = cmd.replace("jehová", "jehova");
    cmd = cmd.replace("é", "e");
    cmd = cmd.replace("í", "i");
    cmd = cmd.replace("ó", "o");
    cmd = cmd.replace("ò", "o");
    cmd = cmd.replace("ú", "u");
    cmd = cmd.replace("à", "a");
    cmd = cmd.replace("è", "e");
    cmd = cmd.replace("ì", "i");
    cmd = cmd.replace("ò", "o");
    cmd = cmd.replace("ù", "u");
    // ----
    comandos.verificar(cmd);
    console.log(cmd)
}
// establecer un evento al terminar el reconocimiento 
recognition.onend = function () {
}