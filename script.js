/* global LITTERS, HAPPY_TAILS */
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
    const LEAF_COUNT = 150; // Increased for full coverage

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
        const left = Math.random() * 100; // 0% to 100%
        const top = Math.random() * 95; // Scatter up to near the bottom
        const animDuration = Math.random() * 8 + 10; // 10s to 18s
        const animDelay = Math.random() * -20;
        const color = colors[Math.floor(Math.random() * colors.length)];

        const drift = Math.random() * 200 - 100; // -100px to 100px drift

        leaf.style.width = `${size}px`;
        leaf.style.height = `${size}px`;
        leaf.style.left = `${left}%`;
        leaf.style.top = `${top}%`;
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
    // CUSTOM CURSOR - Puppy Theme Status Cursor
    // ============================================================
    const cursor = document.getElementById('custom-cursor');
    const cursorText = cursor ? cursor.querySelector('.cursor-text') : null;
    let moveTimeout;

    const puppyStatuses = [
        "Sniffing around...",
        "Exploring the orchard...",
        "Wagging tail...",
        "Looking for treats...",
        "Spring is here!",
        "Happy paws...",
        "Searching for a home..."
    ];

    const hoverStatuses = [
        "Take me home?",
        "Look here! 🐾",
        "Found a puppy!",
        "Woof! Click me!",
        "So much love here!"
    ];

    function getRandomStatus(isHover) {
        const list = isHover ? hoverStatuses : puppyStatuses;
        return list[Math.floor(Math.random() * list.length)];
    }

    // Check if device supports hover before attaching mouse events
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && cursor) {
        document.body.classList.add('js-cursor-active');
        document.addEventListener('mousemove', (e) => {
            const isHover = cursor.classList.contains('is-hover');
            const offset = isHover ? 24 : 5;
            cursor.style.transform = `translate3d(${e.clientX - offset}px, ${e.clientY - offset}px, 0)`;

            // Update status text if not already showing one or occasionally change
            if (cursorText && !cursor.classList.contains('is-moving')) {
                cursorText.textContent = getRandomStatus(isHover);
            }

            cursor.classList.add('is-moving');

            clearTimeout(moveTimeout);
            moveTimeout = setTimeout(() => {
                cursor.classList.remove('is-moving');
            }, 1500); // Keep text visible for a bit after stopping
        });

        const addHover = () => {
            cursor.classList.add('is-hover');
            if (cursorText) cursorText.textContent = getRandomStatus(true);
        };
        const removeHover = () => {
            cursor.classList.remove('is-hover');
            if (cursorText) cursorText.textContent = getRandomStatus(false);
        };

        document.addEventListener('mouseover', (e) => {
            const target = e.target;
            if (target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('interactive') ||
                target.closest('.glass-card') ||
                target.closest('.header-logo') ||
                target.closest('.house-layer') ||
                target.closest('.front-trees')) {
                addHover();
            } else {
                removeHover();
            }
        });
    }
    // ============================================================
    // DYNAMIC LITTER LISTINGS
    // ============================================================
    const littersGrid = document.getElementById('litters-grid');

    function getStatusClass(status) {
        if (status.includes("reserve")) return "tag-available";
        if (status.includes("Ready")) return "tag-ready";
        return "tag-found";
    }

    function renderLitters() {
        if (!littersGrid || typeof LITTERS === 'undefined') return;

        // Sorting Logic: Ready to go (0) > Available to reserve (1) > Found families (2)
        const priority = {
            "Ready to go": 0,
            "Available to reserve": 1,
            "Found families": 2
        };

        const sortedLitters = [...LITTERS].sort((a, b) => {
            return (priority[a.status] ?? 99) - (priority[b.status] ?? 99);
        });

        littersGrid.innerHTML = sortedLitters.map(litter => `
            <a href="litter.html?id=${litter.id}" class="litter-card">
                <div class="litter-thumb-wrapper">
                    <span class="litter-tag ${getStatusClass(litter.status)}">${litter.status}</span>
                    <div class="litter-thumb-bg" style="background-image: url('${litter.thumbnail}')"></div>
                    <img src="${litter.thumbnail}" alt="${litter.breed}" class="litter-thumb">
                </div>
                <div class="litter-content">
                    <div class="litter-title">${litter.litterName}</div>
                    
                    <div class="litter-expandable">
                        <div class="litter-parents"><strong>Parents:</strong> ${litter.parents}</div>
                        <div class="litter-breed">${litter.breed}</div>
                        <div class="litter-info-row">
                            <div class="info-item">
                                <label>DOB</label>
                                <span>${litter.dob}</span>
                            </div>
                            <div class="info-item">
                                <label>Availability</label>
                                <span>${litter.availability}</span>
                            </div>
                        </div>

                        <div class="litter-desc">
                            <strong>Price:</strong> ${litter.price ? litter.price : "Contact us for pricing"}
                        </div>

                        <div class="litter-footer">
                            View Litter Details <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </a>
        `).join('');
    }

    // Initialize Listings
    renderLitters();

    // Render Happy Tails
    renderHappyTails();

    // ============================================================
    // FAQ ACCORDION LOGIC
    // ============================================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = '0';
                }
            });

            // Toggle current item
            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            
            if (!isActive) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });
});

// ==========================================
// HAPPY TAILS SLIDER LOGIC
// ==========================================

let currentSlide = 0;
let slideInterval;

function renderHappyTails() {
    const track = document.getElementById('tails-track');
    const dotsContainer = document.getElementById('slider-dots');

    if (!track || !HAPPY_TAILS.length) return;

    // Render Slides
    track.innerHTML = HAPPY_TAILS.map(tail => `
        <div class="tail-slide">
            <div class="tail-image-side">
                <img src="${tail.image}" alt="${tail.familyName}">
            </div>
            <div class="tail-text-side">
                <div class="tail-quote-icon">
                    <i class="fa-solid fa-quote-left"></i>
                </div>
                <div class="tail-message">"${tail.message}"</div>
                <div class="tail-family">${tail.familyName}</div>
                <div class="tail-puppy">Adopted ${tail.puppyName}</div>
            </div>
        </div>
    `).join('');

    // Render Dots
    dotsContainer.innerHTML = HAPPY_TAILS.map((_, index) => `
        <div class="dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></div>
    `).join('');

    // Slider Controls
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');

    if (prevBtn) prevBtn.onclick = () => moveSlide(-1);
    if (nextBtn) nextBtn.onclick = () => moveSlide(1);

    // Auto Slide
    startSlideShow();
}

function moveSlide(direction) {
    stopSlideShow();
    currentSlide = (currentSlide + direction + HAPPY_TAILS.length) % HAPPY_TAILS.length;
    updateSlider();
    startSlideShow();
}

function goToSlide(index) {
    stopSlideShow();
    currentSlide = index;
    updateSlider();
    startSlideShow();
}

function updateSlider() {
    const track = document.getElementById('tails-track');
    const dots = document.querySelectorAll('.dot');

    if (!track) return;

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % HAPPY_TAILS.length;
        updateSlider();
    }, 6000); // 6 seconds per slide
}

function stopSlideShow() {
    clearInterval(slideInterval);
}
