function randomNum(cantidad) {
    let n;
    n = Math.floor(Math.random() * cantidad);
    return n;
}

function speak(spk) {
    
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
    setTimeout(() => {
        text.innerHTML = "";
        }, 2000);  
}
function hablar(respuesta) {  
    
    respuesta = new SpeechSynthesisUtterance(respuesta);
    // let voices = speechSynthesis.getVoices();
    // respuesta.voice = voices[voces];
    speechSynthesis.speak(respuesta);
    // animacionHablar(Anim);
    console.log(respuesta.text); 
    escribir(respuesta,50,text.nintTxt);
  }