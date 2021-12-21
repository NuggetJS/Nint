const button = {
    hitbox: document.getElementById("hitbox"),
    button: document.getElementById("button"),
    buttonEfects: document.getElementById("buttonEffects")
}
const text ={
    nintTxt: document.getElementById("Resp"),
    UserText: document.getElementById("UserText"),
}


button.hitbox.onmousedown = () => {
    button.hitbox.classList.add("hitboxActive");
    button.buttonEfects.classList.remove("AbHidden");
    button.button.classList.add("buttonActive")
    recognition.start();
}
button.hitbox.onmouseup = () => {
    button.hitbox.classList.remove("hitboxActive");
    button.button.classList.remove("buttonActive")
    recognition.stop();
    button.buttonEfects.classList.add("AbHidden")
}

button.hitbox.addEventListener("touchstart", () =>{
    button.hitbox.classList.add("hitboxActive");
    button.button.classList.add("buttonActive")
    button.buttonEfects.classList.remove("AbHidden");
    recognition.start();
});
button.hitbox.addEventListener("touchend", () =>{
    button.hitbox.classList.remove("hitboxActive");
    button.button.classList.remove("buttonActive")
    button.buttonEfects.classList.add("AbHidden");
    recognition.stop();
});




