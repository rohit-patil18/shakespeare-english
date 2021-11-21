let btnTranslate = document.getElementById("btn-translate");
let textArea = document.getElementById("in-txt");
let outputArea = document.getElementById("out-txt");

let url = "https://api.funtranslations.com/translate/shakespeare.json";

function serverURL(text) {
    return url + "?text=" + text;
}

function errorHandler(error) {
    console.log("Error occured!", error);
    alert("Something wrong with server! Try again after some time.")
}

function clickHandler() {
    let inputText = textArea.value;
    let outputText = "";
    fetch(serverURL(inputText))
        .then((response) => response.json())
        .then((json) => {
            outputText = json.contents.translated;
            outputArea.value = outputText;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);