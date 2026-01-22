const instrumentButtons = document.querySelectorAll('.card');
const trackCells = document.querySelectorAll('.track-cell');

instrumentButtons.forEach(button => {
    button.addEventListener('click', () => {
        const soundPath = button.getAttribute('data-sound');
        
        if (soundPath) {
            const audio = new Audio(soundPath);
            audio.play();
        }

        for (let cell of trackCells) {
            if (!cell.classList.contains('active-sound')) {
                cell.classList.add('active-sound');
                
                cell.innerText = button.querySelector('span').innerText;
                cell.style.fontSize = "10px";
                cell.style.textAlign = "center";
                cell.style.color = "white";
                
                break; 
            }
        }
    });
});