document.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    // SCROLL PARALLAX — clouds + sun move at different speeds
    // We offset `top` (not transform) so it doesn't conflict with
    // the cloud drift animation which already uses translateX.
    // ============================================================
    const clouds = document.querySelectorAll('.cloud');
    const sunGlow = document.querySelector('.sun-glow');
    const SUN_SPEED = 0.04;

    // Store each cloud's baseline top in px after initial layout
    const cloudBaseTops = [];
    clouds.forEach(cloud => {
        cloudBaseTops.push(cloud.offsetTop);
    });
    let sunBaseTop = sunGlow ? sunGlow.offsetTop : 0;

    let ticking = false;

    function applyParallax() {
        const scrollY = window.scrollY;

        clouds.forEach((cloud, i) => {
            const speed = parseFloat(cloud.dataset.speed) || 0.1;
            cloud.style.top = `${cloudBaseTops[i] + scrollY * speed}px`;
        });

        if (sunGlow) {
            sunGlow.style.top = `${sunBaseTop + scrollY * SUN_SPEED}px`;
        }

        ticking = false;
    }

    function updateBasePositions() {
        cloudBaseTops.length = 0;
        clouds.forEach(cloud => {
            // Temporarily reset top to get true baseline
            const currentTop = cloud.style.top;
            cloud.style.top = '';
            cloudBaseTops.push(cloud.offsetTop);
            cloud.style.top = currentTop;
        });
        if (sunGlow) {
            const currentSunTop = sunGlow.style.top;
            sunGlow.style.top = '';
            sunBaseTop = sunGlow.offsetTop;
            sunGlow.style.top = currentSunTop;
        }
    }

    window.addEventListener('resize', updateBasePositions);

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(applyParallax);
            ticking = true;
        }
    }, { passive: true });

    const blossomContainer = document.getElementById('blossom-container');
    const LEAF_COUNT = 80; // Increased for 300vh coverage

    const leafSVG = `
        <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
            <path d="M495.2 240.2l-77.9-19 63.8-59c5.6-5.2 6.8-13.7 2.7-20.4-4.1-6.7-12.5-9-19.4-5.3L336.8 210l58-102.5c3.6-6.4 1.8-14.6-4-19.1-5.9-4.5-14.2-4.1-19.6 1.1L303 153V61.1c0-7.3-5.5-13.6-12.8-14.3-7.5-.7-14 5.2-14.2 12.7V153l-68.2-63.5c-5.4-5.2-13.7-5.6-19.6-1.1-5.8 4.5-7.6 12.7-4 19.1L242.2 210 114.6 136.5c-6.9-3.7-15.3-1.4-19.4 5.3-4.1 6.7-2.9 15.2 2.7 20.4l63.8 59-77.9 19c-7.4 1.8-12 8.9-10.7 16.5 1.3 7.6 8.5 13 16.2 12.5l94.6-5.8-67.6 61.9c-5.6 5.1-6.7 13.5-2.6 20.1 4.1 6.6 12.5 8.7 19.3 5L248 288.6l1 151c0 4.4 3.6 8 8 8h10c4.4 0 8-3.6 8-8l1-151 114.9 61.8c6.8 3.7 15.2 1.6 19.3-5 4.1-6.6 3-15-2.6-20.1l-67.6-61.9 94.6 5.8c7.7.5 14.9-4.9 16.2-12.5 1.3-7.6-3.3-14.7-10.7-16.5z"/>
        </svg>
    `;

    // A playful, baby-spring palette for the leaves
    const colors = [
        '#C1E1C1', // Mint green
        '#A3D1A3', // Sage green
        '#FFFACA', // Soft yellow
        '#FFD1DC', // Blush pink (spring red maples)
        '#B5D8EB'  // Soft sky blue (whimsical)
    ];

    function createLeaf() {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        leaf.innerHTML = leafSVG;

        const size = Math.random() * 20 + 15; // 15px to 35px
        const left = Math.random() * 100; // 0% to 100vw
        const top = Math.random() * 280; // Scatter up to the horizon line
        const animDuration = Math.random() * 8 + 10; // 10s to 18s
        const animDelay = Math.random() * -20;
        const color = colors[Math.floor(Math.random() * colors.length)];

        const drift = Math.random() * 200 - 100; // -100px to 100px drift

        leaf.style.width = `${size}px`;
        leaf.style.height = `${size}px`;
        leaf.style.left = `${left}vw`;
        leaf.style.top = `${top}vh`;
        leaf.style.setProperty('--drift', `${drift}px`);
        leaf.style.animationDuration = `${animDuration}s`;
        leaf.style.animationDelay = `${animDelay}s`;
        leaf.style.color = color;

        blossomContainer.appendChild(leaf);
    }

    // Initialize the leaves
    if (blossomContainer) {
        for (let i = 0; i < LEAF_COUNT; i++) {
            createLeaf();
        }
    }

    // ============================================================
    // CUSTOM CURSOR - Paw tracking and hover detection
    // ============================================================
    const cursor = document.querySelector('.custom-cursor');
    const interactiveElements = document.querySelectorAll('a, button, .glass-card, .logo, .house-layer, .front-trees');

    document.addEventListener('mousemove', (e) => {
        // Skip cursor movement if hidden (mobile)
        if (window.innerWidth <= 768) return;
        
        // Smoothly position the paw cursor
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
});
