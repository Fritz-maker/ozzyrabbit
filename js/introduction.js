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
            
            document.body.classList.add('exiting');
            
            setTimeout(() => {
                window.location.href = 'motorcade.html';
            }, 1000);
        });
    }
    
    // Add loaded class after delay for fade-in effect
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});
