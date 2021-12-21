const button = {
    button: document.getElementById("button"),
    buttonEfects: document.getElementById("buttonEffects")
}


button.button.onmousedown = () => {
    button.buttonEfects.classList.remove("AbHidden");
    recognition.start();
}
button.button.onmouseup =() => {
    recognition.stop();
    button.buttonEfects.classList.add("AbHidden")
}

button.button.addEventListener("touchstart", () =>{
    button.buttonEfects.classList.remove("AbHidden");
    recognition.start();
});
button.button.addEventListener("touchend", () =>{
    button.buttonEfects.classList.add("AbHidden");
    recognition.stop();
});