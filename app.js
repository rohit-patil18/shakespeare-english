let btnTranslate = document.getElementById("btn-translate");
let textArea = document.getElementById("in-txt");
let outputArea = document.getElementById("out-txt");

let url = "https://api.funtranslations.com/translate/shakespeare.json";

function serverURL(text) {
    return url + "?text=" + text;
}

function clickHandler() {
    let inputText = textArea.value;
    let outputText = "";
}

btnTranslate.addEventListener("click", clickHandler);