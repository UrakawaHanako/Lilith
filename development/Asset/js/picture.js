const images = [
    "/REAP/4_Ponder/Neo Beta/Asset/5e9e967bff9c23b9d859f158cd587048.jpg",
    "/REAP/4_Ponder/Neo Beta/Asset/ba71f28cd4c7af263c4e0aa7622fb68b.jpg",
    "/REAP/4_Ponder/Neo Beta/Asset/d6e97011fa5dea6b5e1a74d2bcbfd373.jpg"
];

function showImage(index) {
    const viewer = document.getElementById("viewer");
    if (!images[index]) return;
    viewer.src = images[index];
}
