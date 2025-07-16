// Check if user has chosen to skip intro
document.addEventListener('DOMContentLoaded', function() {
    console.log('[OZZYRABBIT] Introduction page loaded');
    
    const skipIntro = localStorage.getItem('ozzyrabbit_skip_intro');
    
    if (skipIntro === 'true') {
        console.log('[OZZYRABBIT] Skipping intro, redirecting to motorcade');
        window.location.href = 'motorcade.html';
        return;
    }
    
    // Handle skip checkbox
    const skipCheckbox = document.getElementById('skip-intro');
    const enterButton = document.getElementById('enter-loops');
    
    if (skipCheckbox) {
        skipCheckbox.addEventListener('change', function() {
            if (this.checked) {
                localStorage.setItem('ozzyrabbit_skip_intro', 'true');
                console.log('[OZZYRABBIT] Skip intro preference saved');
            } else {
                localStorage.removeItem('ozzyrabbit_skip_intro');
                console.log('[OZZYRABBIT] Skip intro preference removed');
            }
        });
    }
    
    // Handle enter button
    if (enterButton) {
        enterButton.addEventListener('click', function() {
            console.log('[OZZYRABBIT] Entering the loops...');
            
            // Add transition effect
            document.body.classList.add('exiting');
            
            // Play sound if available
            try {
                const audio = new Audio('assets/audio/enter_loops.mp3');
                audio.volume = 0.7;
                audio.play().catch(e => console.log('Audio play failed:', e.message));
            } catch(e) {
                console.log('No enter sound available');
            }
            
            // Navigate after brief delay for effect
            setTimeout(() => {
                window.location.href = 'motorcade.html';
            }, 1000);
        });
    }
    
    // Add some atmospheric effects
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});
