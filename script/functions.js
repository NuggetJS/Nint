function randomNum(cantidad) {
    let n;
    n = Math.floor(Math.random() * cantidad);
    return n;
}

  function addmsg(who, msg) {
    if (who == "usr") {
      text.msgBox.innerHTML += `<div class="msgHitbox">
      <div class="msgU"><p>${msg}</p></div>
  </div>`
    }
    else{
      text.msgBox.innerHTML += `<div class="msgHitbox">
      <div class="msgN"><p>${msg}</p></div>
    </div>
    `  
  }
  
}

function escribir (text,tiempo, etiqueta){
    let arrayCaracteres = text.split('')
    etiqueta.innerHTML = ''
    let i = 0
    let j = text.length
    let escribir = setInterval(function(){
      if (i === arrayCaracteres.length) {
        etiqueta.innerHTML = text.substring(0,j)
        
        if (j === 0) {
          etiqueta.innerHTML = ''
          i = 0
          j = text.length
        }
      } else {
        etiqueta.innerHTML += arrayCaracteres[i]
        i++
      }
       
    }, tiempo)
}
function hablar(respuesta) {  
  addmsg("", respuesta)
    respuesta = new SpeechSynthesisUtterance(respuesta);
    // let voices = speechSynthesis.getVoices();
    // respuesta.voice = voices[voces];
    speechSynthesis.speak(respuesta);
    // animacionHablar(Anim);
    console.log(respuesta.text); 
  }