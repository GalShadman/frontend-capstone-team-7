document.addEventListener('DOMContentLoaded', () => {
    const instrumentButtons = document.querySelectorAll('.card');
    const trackCells = document.querySelectorAll('.track-cell');

    let currentAudio = null;

    instrumentButtons.forEach(button => {
        button.addEventListener('click', () => {
            const soundFile = button.getAttribute('data-sound');


            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }

            if (soundFile) {
                currentAudio = new Audio(soundFile);
                currentAudio.play().catch(e => console.error("Error:", e));
            }

            for (let cell of trackCells) {
                if (!cell.classList.contains('active-sound')) {
                    cell.classList.add('active-sound');
                    cell.innerText = button.querySelector('span').innerText;

                    cell.style.display = "flex";
                    cell.style.alignItems = "center";
                    cell.style.justifyContent = "center";
                    cell.style.fontSize = "12px";
                    cell.style.color = "white";

                    break;
                }
            }
        });
    });
});