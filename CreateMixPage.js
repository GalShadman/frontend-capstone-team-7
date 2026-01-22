document.addEventListener('DOMContentLoaded', () => {
    const instrumentButtons = document.querySelectorAll('.card');
    const mainTrack = document.getElementById('main-track');
    
    let currentAudio = null;

    instrumentButtons.forEach(button => {
        button.addEventListener('click', () => {
            const soundFile = button.getAttribute('data-sound');
            const instrumentName = button.querySelector('span').innerText;
            
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }

            if (soundFile) {
                currentAudio = new Audio(soundFile);
                currentAudio.play().catch(e => console.error("Error:", e));
            }

            const newCell = document.createElement('div');
            newCell.classList.add('track-cell', 'active-sound');
            newCell.innerText = button.querySelector('span').innerText;
            
            mainTrack.appendChild(newCell);
            
            mainTrack.scrollLeft = mainTrack.scrollWidth;
        });
    });
});