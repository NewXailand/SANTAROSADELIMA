const puntos = document.querySelectorAll('.punto');
const videoPlayer = document.getElementById('videoPlayer');
const videoContainer = document.getElementById('videoContainer');
const closeButton = document.getElementById('closeVideo');

// Asignar eventos a los puntos interactivos
puntos.forEach(punto => {
    punto.addEventListener('click', () => {
        const videoSrc = punto.getAttribute('data-video');
        reproducirVideo(videoSrc, punto);
    });
});

function reproducirVideo(src, punto) {
    // Cambia el color del punto activo de forma permanente
    punto.classList.add('played'); // Añadimos la clase 'played'

    // Mostrar y reproducir el video
    videoPlayer.src = src;
    videoContainer.classList.add('show');
    videoPlayer.play();

    // Forzar pantalla completa
    if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen();
    } else if (videoPlayer.webkitRequestFullscreen) {
        videoPlayer.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) {
        videoPlayer.msRequestFullscreen();
    }
}

// Cerrar el video al hacer clic en el botón de cierre
closeButton.addEventListener('click', cerrarVideo);

function cerrarVideo() {
    videoPlayer.pause();
    videoPlayer.src = ''; // Limpiar la fuente del video
    videoContainer.classList.remove('show'); // Ocultar el contenedor

    // Salir de pantalla completa
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}
