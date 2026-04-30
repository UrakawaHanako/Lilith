const iframeSources = [
    "/PARA/2_Area/Johari/Persona/Dokumentasi/Priestess/Misserable Fireplace/DilemaT18.html",
    "/PARA/2_Area/Johari/Unknown/Observer-0/lost_data.html",
    "/PARA/2_Area/Johari/Unknown/Observer-0/lost_data_r.html",
    "/PARA/2_Area/Johari/Persona/Dokumentasi/Priestess/Misserable%20Fireplace/Dilema%20D07/Lyra ( Hukum mengenai onani ).pdf",
    "/PARA/2_Area/Johari/Persona/Dokumentasi/Priestess/Misserable%20Fireplace/Dilema%20T18/MFT18.html"
];

let iframeIndex = 0;

function showIframe(index) {
    const frame = document.getElementById("content-frame");
    if (!iframeSources[index]) return;
    frame.src = iframeSources[index];
}

function nextIframe() {
    iframeIndex = (iframeIndex + 1) % iframeSources.length;
    showIframe(iframeIndex);
}

function prevIframe() {
    iframeIndex = (iframeIndex - 1 + iframeSources.length) % iframeSources.length;
    showIframe(iframeIndex);
}

function randomIframe() {
    iframeIndex = Math.floor(Math.random() * iframeSources.length);
    showIframe(iframeIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    showIframe(iframeIndex);
});
