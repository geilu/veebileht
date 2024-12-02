// koodi kirjutas Kriset, toetas W3Schools leht süntaksi ja eventidega
// abi sain ka siit:
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener


// salvestab kõik nupud lehel
const buttons = document.querySelectorAll("button");
// salvestan ka erinupud, millel on erifunktsionaalsus
const kass = document.querySelector(".kassnupp");
const koer = document.querySelector(".koernupp");

// lisab klikk sündmuse erinuppudele, mis saadavad alalehtedele
kass.addEventListener("click", () => {
    window.location.href='kassid.html'
});
koer.addEventListener("click", () => {
    window.location.href='koerad.html'
});

// kõikidele nuppudele klikkides suurendab nuppu ning lisab varju
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // efekt ise
        button.style.transform = "scale(1.1)";
        button.style.boxShadow = "0 4px 8px #FFB300";

        // efekti kadumine
        setTimeout(() => {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "none";
        }, 200);
    });

    // efekt ka siis, kui hiir nupust üle läheb
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.boxShadow = "0 4px 8px #FFB300";
    })

    // hiire lahkudes võtab ära
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
        button.style.boxShadow = "none";
    })
});