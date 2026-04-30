const audioResource = [
    "/REAP/4_Ponder/Neo Beta/Asset/Audio/Z23_Affinity4JP.ogg",
    "/REAP/4_Ponder/Neo Beta/Asset/Audio/Amiya-006.ogg",
    "/REAP/4_Ponder/Neo Beta/Asset/Audio/Yuuka_ExSkill_1.ogg.mp3"
];

let index = 0;

function render(index) {
    // AUDIO
    const player = document.getElementById("audio-player");
    const source = document.getElementById("audio-source");

    source.src = audioResource[index];
    player.load();
    player.play();

    // IMAGE (delegasi)
    if (typeof showImage === "function") {
        showImage(index);
    }
}

function next() {
    index = (index + 1) % audioResource.length;
    render(index);
}

function prev() {
    index = (index - 1 + audioResource.length) % audioResource.length;
    render(index);
}

function random() {
    index = Math.floor(Math.random() * audioResource.length);
    render(index);
}

document.addEventListener("DOMContentLoaded", () => {
    render(index);
});
