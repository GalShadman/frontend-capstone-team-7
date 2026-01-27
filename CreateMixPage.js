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

            const instrumentLabel = document.createElement('span');
            instrumentLabel.innerText = instrumentName;
            newCell.appendChild(instrumentLabel);

            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '×';
            deleteBtn.classList.add('delete-btn');

            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation(); 
                newCell.remove();
            });

            newCell.appendChild(deleteBtn);
            mainTrack.appendChild(newCell);
            
            mainTrack.scrollTo({
                top: mainTrack.scrollHeight,
                left: mainTrack.scrollWidth,
                behavior: 'smooth'
            });
        });
    });
});