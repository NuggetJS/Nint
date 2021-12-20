const button = {
    button: document.getElementById("button"),
    buttonEfects: document.getElementById("buttonEffects")
}


button.button.onmousedown = function () {
    button.buttonEfects.classList.remove("AbHidden")
    recognition.start();
}
button.button.onmouseup = function () {
    recognition.stop();
    button.buttonEfects.classList.add("AbHidden")
}