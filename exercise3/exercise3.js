function turnOn() {
    document.querySelector("#myImage").src = "./images/pic_bulbon.gif";
    document.querySelector("#myMessage").innerHTML = "The light is on"; 
    document.querySelector(".myMessage").innerHTML = "The light is on"; 
    document.querySelector("#myImage").hidden = true;
}

function turnOff() {
    document.querySelector("#myImage").src = "./images/pic_bulboff.gif";
    document.querySelector("#myMessage").innerHTML = "The light is off";
    document.querySelector(".myMessage").innerHTML = "The light is on"; 
    document.querySelector("#myImage").hidden = true;
