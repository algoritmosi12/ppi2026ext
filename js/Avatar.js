document.getElementById("btnAvatares").addEventListener("click", mostrarAvatares);
document.querySelectorAll(".img-avatar").forEach(img => {
    img.addEventListener("click", function() {
        elegirAvatar(this.getAttribute("data-avatar"));
    });
});

function mostrarAvatares() {
    document.getElementById("avatares").style.display = "block";
}

function elegirAvatar(imagen) {
    document.getElementById("avatarElegido").src = imagen;
}