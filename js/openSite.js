var btnRedir = document.querySelector(".buttonRedir");
var terminalCursor = document.getElementById("terminal_cursor");
var terminalText = document.getElementById("terminal_text");
var terminalText2 = document.getElementById("terminal_text2");
btnRedir.onclick = writeTerminal; 

var index = 0; 
var letterIndex = 0;
var typingSpeed = 50;
var currentPhrase = "";

function writeTerminal() {

    terminal_cursor.classList.add("stop-animation");
    afficherLettreSuivante(terminalText);

}

function afficherLettreSuivante() {
    var phrase="Launch raphaelMalidin";
    if (letterIndex < phrase.length) {
        terminalText.textContent += phrase.charAt(letterIndex);
        letterIndex++;
        setTimeout(afficherLettreSuivante, typingSpeed);
    } else {
        
        terminalText.textContent += " ";
        terminal_cursor.classList.remove("stop-animation");
        setTimeout(afficherChargement, 2000);

    }
    
}



function afficherChargement() {
    terminal_cursor.classList.add("stop-animation");
    var loadingText = "Loading... ";
    var progress = 0;
    var loadingInterval = setInterval(function() {
        var randomIncrement = Math.floor(Math.random() * 10) + 1; 
        progress += randomIncrement;
        if (progress > 100) {
            progress = 100;
        }
        var loadingLine = document.getElementById('loading_line');
        loadingLine.textContent = loadingText + progress + "%";
        if (progress === 100) {
            clearInterval(loadingInterval);
            setTimeout(redirect, 1000);
        }
    }, 100); 

}


function redirect() {
    window.location.href = "site.html";
}