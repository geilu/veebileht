// Select all buttons on the page
const buttons = document.querySelectorAll("button");
const kass = document.querySelector(".kassnupp");
const koer = document.querySelector(".koernupp");

// Add a "click" event listener to each button
kass.addEventListener("click", () => {
    window.location.href='kassid.html'
});
koer.addEventListener("click", () => {
    window.location.href='koerad.html'
});


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Add the "pop-out" effect
        button.style.transform = "scale(1.1)";
        button.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

        // Remove the effect after a short delay
        setTimeout(() => {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "none";
        }, 200); // Delay in milliseconds
    });
});