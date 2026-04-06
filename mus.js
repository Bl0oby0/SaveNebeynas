document.addEventListener('click', function() {
    const audio = document.getElementById('bgMusic');
    
    // Устанавливаем громкость (0.2 — это довольно тихо и комфортно)
    audio.volume = 0.15; 
    
    audio.play();
}, { once: true });