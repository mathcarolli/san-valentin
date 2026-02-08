// ============================================
// PARTICELLE VIOLA
// ============================================
function createParticles() {
    const container = document.getElementById('particles');
    const colors = ['#8a2be2', '#da70d6', '#9932cc', '#ba55d3', '#dda0dd', '#ee82ee'];
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 8 + 4) + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px ${particle.style.background}`;
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        container.appendChild(particle);
        
        setTimeout(() => particle.remove(), 10000);
    }, 300);
}

// ============================================
// MUSICA a
// ============================================
let musicPlaying = false;
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicToggle');

function toggleMusic() {
    if (musicPlaying) {
        music.pause();
        musicBtn.textContent = '🎵 Attiva Musica';
        musicBtn.classList.remove('playing');
    } else {
        music.play().catch(e => console.log('Autoplay blocked'));
        musicBtn.textContent = '🔊 Musica Attiva';
        musicBtn.classList.add('playing');
    }
    musicPlaying = !musicPlaying;
}

// ============================================
// BOTTONE NO SCAPPA PER TUTTO LO SCHERMO!
// ============================================
function runAway() {
    const btnNo = document.getElementById('btnNo');
    
    // Dimensioni bottone
    const btnWidth = btnNo.offsetWidth;
    const btnHeight = btnNo.offsetHeight;
    
    // Dimensioni schermo
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // Margini di sicurezza (per non farlo uscire dallo schermo)
    const padding = 20;
    
    // Calcola nuova posizione casuale su TUTTO lo schermo
    const maxX = screenWidth - btnWidth - padding;
    const maxY = screenHeight - btnHeight - padding;
    
    const newX = Math.random() * (maxX - padding) + padding;
    const newY = Math.random() * (maxY - padding) + padding;
    
    // Applica la nuova posizione
    btnNo.style.left = newX + 'px';
    btnNo.style.top = newY + 'px';
    btnNo.style.right = 'auto'; // Rimuovi right per usare left
    btnNo.style.transform = 'none';
    
    // Messaggi divertenti
    const messages = [
        'NO 💔', 
        'Non riesci? ', 
        'riprova', 
        'qua si scherza ', 
        'Impossibile! ',
        'Troppo lenta!',
        'Non mi prendi! ',
        'ancora?',
        'basta amo',
        'Quasi!',
        'io sono la velocita',
        'Che succede?',
        'piccolina',
        'veramente?',
        'amo, ma finisci'
    ];
    btnNo.textContent = messages[Math.floor(Math.random() * messages.length)];
    
    // Effetto rotazione casuale
    const rotation = Math.random() * 30 - 15;
    btnNo.style.transform = `rotate(${rotation}deg)`;
    
    // Cambia colore casualmente
    const colors = [
        'linear-gradient(45deg, #ff4757, #ff6348)',
        'linear-gradient(45deg, #ff6b6b, #feca57)',
        'linear-gradient(45deg, #ff9ff3, #feca57)',
        'linear-gradient(45deg, #54a0ff, #5f27cd)',
        'linear-gradient(45deg, #00d2d3, #01a3a4)',
        'linear-gradient(45deg, #fd79a8, #e84393)',
        'linear-gradient(45deg, #a29bfe, #6c5ce7)',
        'linear-gradient(45deg, #fdcb6e, #e17055)'
    ];
    btnNo.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    // Aumenta velocità dopo ogni tentativo (opzionale)
    const currentTransition = parseFloat(getComputedStyle(btnNo).transitionDuration) || 0.3;
    if (currentTransition > 0.1) {
        btnNo.style.transitionDuration = (currentTransition - 0.02) + 's';
    }
}

// ============================================
// RISPOSTA SÌ
// ============================================
function sayYes() {
    // Nascondi domanda
    document.getElementById('questionSection').style.display = 'none';
    
    // Nascondi anche il bottone NO
    document.getElementById('btnNo').style.display = 'none';
    
    // Mostra successo
    const success = document.getElementById('successMessage');
    success.style.display = 'block';
    
    // Attiva musica se non è già attiva
    if (!musicPlaying) {
        toggleMusic();
    }
    
    // Festa!
    for(let i = 0; i < 10; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 150);
    }
    
    createHeartRain();
    createFireworks();
}

// ============================================
// EFFETTI FESTA
// ============================================
function createConfetti() {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#00b894', '#da70d6', '#ffb6c1'];
    
    for(let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            confetti.style.width = (Math.random() * 12 + 8) + 'px';
            confetti.style.height = (Math.random() * 12 + 8) + 'px';
            document.body.appendChild(confetti);
            
            const duration = Math.random() * 2 + 2;
            
            confetti.animate([
                { transform: `translateY(0) rotate(0deg) scale(1)`, opacity: 1 },
                { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg) scale(0.5)`, opacity: 0 }
            ], {
                duration: duration * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => confetti.remove();
        }, i * 20);
    }
}

function createHeartRain() {
    const hearts = ['💘', '💝', '💖', '💗', '💓', '💕', '💞', '💟', '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎'];
    
    for(let i = 0; i < 200; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-particle';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '-50px';
            heart.style.fontSize = (Math.random() * 40 + 20) + 'px';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            document.body.appendChild(heart);
            
            const duration = Math.random() * 2 + 3;
            
            heart.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: duration * 1000,
                easing: 'linear'
            }).onfinish = () => heart.remove();
        }, i * 30);
    }
}

function createFireworks() {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#00b894', '#da70d6', '#ffb6c1'];
    
    for(let i = 0; i < 15; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight * 0.6;
            
            for(let j = 0; j < 40; j++) {
                const spark = document.createElement('div');
                spark.style.position = 'fixed';
                spark.style.left = x + 'px';
                spark.style.top = y + 'px';
                spark.style.width = '8px';
                spark.style.height = '8px';
                spark.style.borderRadius = '50%';
                spark.style.background = colors[Math.floor(Math.random() * colors.length)];
                spark.style.pointerEvents = 'none';
                spark.style.zIndex = '9999';
                document.body.appendChild(spark);
                
                const angle = (Math.PI * 2 * j) / 40;
                const velocity = Math.random() * 200 + 100;
                const tx = Math.cos(angle) * velocity;
                const ty = Math.sin(angle) * velocity;
                
                spark.animate([
                    { transform: 'translate(0,0) scale(1)', opacity: 1 },
                    { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
                ], {
                    duration: 1000 + Math.random() * 500,
                    easing: 'ease-out'
                }).onfinish = () => spark.remove();
            }
        }, i * 250);
    }
}

// ============================================
// INIZIALIZZAZIONE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    
    // Posiziona bottone NO inizialmente
    const btnNo = document.getElementById('btnNo');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // Posizione iniziale: destra della card
    btnNo.style.left = (screenWidth * 0.7) + 'px';
    btnNo.style.top = (screenHeight * 0.5) + 'px';
    btnNo.style.right = 'auto';
    btnNo.style.transform = 'none';
});


