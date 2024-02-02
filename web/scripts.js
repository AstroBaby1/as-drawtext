// script.js
window.addEventListener("message", (event) => {
    const drawTextElement = document.getElementById("drawText");

    if (event.data.action === "show") {
		$("body").fadeIn(1);
        document.getElementById("key").innerText = event.data.key;
        document.getElementById("text").innerText = event.data.message;
        drawTextElement.style.display = "flex";
    } else if (event.data.action === "hide") {
        const keyBoxElement = document.getElementById("keyBox");
        const textElement = document.getElementById("text");

        keyBoxElement.style.animation = "zoomOut 0.5s forwards";
        textElement.style.animation = "fadeOutLeft 0.5s forwards";

        setTimeout(() => {
            drawTextElement.style.display = "none";
            keyBoxElement.style.animation = ""; // Reset animation property
            textElement.style.animation = ""; // Reset animation property
        }, 500); // Adjust the timeout to match the animation duration
    }
});



