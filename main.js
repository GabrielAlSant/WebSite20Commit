let clicks = 0;
document.getElementById("clickButton").addEventListener("click", function() {
    clicks++;
    document.getElementById("clickCount").innerText = "O botão foi pressionado " + clicks + " vezes.";
});