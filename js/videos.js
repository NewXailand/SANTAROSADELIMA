const puntos = document.querySelectorAll('.punto');
const videoPlayer = document.getElementById('videoPlayer');
const videoContainer = document.getElementById('videoContainer');
const closeButton = document.getElementById('closeVideo');

// Asignar eventos a los puntos interactivos
puntos.forEach((punto) => {
    punto.addEventListener('click', () => {
        const videoSrc = punto.getAttribute('data-video');
        reproducirVideo(videoSrc, punto);
    });
});

function reproducirVideo(src, punto) {
    // Cambia el color del punto activo de forma permanente
    punto.classList.add('played'); // Añadimos la clase 'played'

    // Mostrar y reproducir el video con transición
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

    // Cerrar el video automáticamente al finalizar
    videoPlayer.onended = cerrarVideo;
}

// Cerrar el video al hacer clic en el botón de cierre
closeButton.addEventListener('click', cerrarVideo);

function cerrarVideo() {
    // Pausar el video y limpiar la fuente
    videoPlayer.pause();
    videoPlayer.src = '';

    // Iniciar la transición de ocultar el contenedor
    videoContainer.classList.remove('show');

    // Esperar a que la transición termine antes de ocultar completamente
    setTimeout(() => {
        videoContainer.style.visibility = 'hidden';
    }, 500); // El tiempo debe coincidir con la duración de la transición en CSS

    // Salir de pantalla completa si está activo
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}
