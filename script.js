document.addEventListener('DOMContentLoaded', () => {
    const backgroundContainer = document.querySelector('.background-container');

    // Subtle parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // Move the background slightly in the opposite direction of the mouse
        // Using a small coefficient so the movement is subtle and premium
        const moveX = (x - 0.5) * 20; 
        const moveY = (y - 0.5) * 20;
        
        backgroundContainer.style.transform = `scale(1.05) translate(${-moveX}px, ${-moveY}px)`;
    });
});
