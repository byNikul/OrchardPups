// ============================================================
//  CONFIG
// ============================================================
let GALLERY_IMAGES = [];
const PAGE_SIZE = 40;       // images per "Load More" batch
let currentIndex = 0;       // next image to render
let lightboxIndex = 0;      // current image in lightbox
let renderedImages = [];    // all currently visible img elements

// ============================================================
//  INIT
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
    await initGalleryData();

    // Update stats counter
    const statCount = document.getElementById('stat-count');
    if (statCount) {
        const count = GALLERY_IMAGES.length;
        if (count >= 500) { 
            statCount.textContent = "250+"; // Fallback mode
        } else if (count >= 50) {
            statCount.textContent = (Math.floor(count / 50) * 50) + "+";
        } else if (count >= 10) {
            statCount.textContent = (Math.floor(count / 10) * 10) + "+";
        } else {
            statCount.textContent = count;
        }
    }

    // Render first batch
    renderBatch();

    // Load More button
    const loadBtn = document.getElementById('load-more-btn');
    if (loadBtn) {
        loadBtn.addEventListener('click', () => {
            renderBatch();
        });
    }

    // Keyboard nav for lightbox
    document.addEventListener('keydown', (e) => {
        const lb = document.getElementById('lightbox');
        if (!lb || !lb.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') navigateLightbox(1);
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
    });

    // Lightbox close / arrow buttons
    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
    document.getElementById('lightbox-prev').addEventListener('click', () => navigateLightbox(-1));
    document.getElementById('lightbox-next').addEventListener('click', () => navigateLightbox(1));

    // Close on backdrop click
    document.getElementById('lightbox').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeLightbox();
    });

    // Touch/swipe support for lightbox
    let touchStartX = 0;
    const lightboxEl = document.getElementById('lightbox');
    lightboxEl.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    lightboxEl.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) {
            navigateLightbox(dx < 0 ? 1 : -1);
        }
    }, { passive: true });
});

// ============================================================
//  DYNAMIC DIRECTORY LOADING
// ============================================================
async function initGalleryData() {
    try {
        // Attempt to fetch directory index (works natively on Live Server and some hosts)
        const response = await fetch('assets/HappyTails/GeneralGallery/');
        if (response.ok) {
            const text = await response.text();
            // Scrape the HTML for image links
            const matches = text.match(/href="([^"]+\.(jpg|jpeg|png))"/gi);
            if (matches) {
                const uniqueFiles = new Set();
                matches.forEach(m => {
                    let file = m.replace(/href="|"/gi, '').split('/').pop();
                    uniqueFiles.add('assets/HappyTails/GeneralGallery/' + decodeURIComponent(file));
                });
                
                GALLERY_IMAGES = Array.from(uniqueFiles);
                
                // Shuffle the images for a random display order
                for (let i = GALLERY_IMAGES.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [GALLERY_IMAGES[i], GALLERY_IMAGES[j]] = [GALLERY_IMAGES[j], GALLERY_IMAGES[i]];
                }
                
                if (GALLERY_IMAGES.length > 0) {
                    console.log(`Successfully loaded ${GALLERY_IMAGES.length} images directly from directory!`);
                    return;
                }
            }
        }
    } catch (e) {
        console.warn('Directory fetch failed.', e);
    }

    // Fallback: If server blocks directory reading, we sequence through guesses
    console.log('Using sequential fallback loading (Server blocked directory reading).');
    for (let i = 1; i <= 500; i++) {
        GALLERY_IMAGES.push(`assets/HappyTails/GeneralGallery/${i}.jpg`);
    }
    
    // Shuffle the fallback array too
    for (let i = GALLERY_IMAGES.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [GALLERY_IMAGES[i], GALLERY_IMAGES[j]] = [GALLERY_IMAGES[j], GALLERY_IMAGES[i]];
    }
}

// ============================================================
//  RENDER BATCH
// ============================================================
function renderBatch() {
    const grid = document.getElementById('gallery-grid');
    const loadBtn = document.getElementById('load-more-btn');
    const allLoadedMsg = document.getElementById('all-loaded-msg');

    if (!grid) return;

    const end = Math.min(currentIndex + PAGE_SIZE, GALLERY_IMAGES.length);
    const fragment = document.createDocumentFragment();

    for (let i = currentIndex; i < end; i++) {
        const src = GALLERY_IMAGES[i];
        if (!src) continue;
        const item = createGalleryItem(src, i);
        fragment.appendChild(item);
    }

    grid.appendChild(fragment);
    currentIndex = end;

    // Hide load more if all loaded
    if (currentIndex >= GALLERY_IMAGES.length) {
        if (loadBtn) loadBtn.style.display = 'none';
        if (allLoadedMsg) allLoadedMsg.style.display = 'block';
    }
}

// ============================================================
//  CREATE GALLERY ITEM
// ============================================================
function createGalleryItem(src, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.index = index;

    // Blur background layer (matches site's existing blur pattern)
    const blurDiv = document.createElement('div');
    blurDiv.className = 'gallery-item-blur';
    blurDiv.style.backgroundImage = `url('${src}')`;

    // Main image
    const img = document.createElement('img');
    img.alt = `Orchard Pups photo`;
    img.loading = 'lazy';
    img.decoding = 'async';

    // Fade in on load, check if blur bg needed
    img.addEventListener('load', () => {
        img.classList.add('loaded');
        if (img.naturalWidth < img.naturalHeight * 0.85) {
            item.classList.add('needs-blur');
        }
    });

    // If an image doesn't exist (important for fallback mode), hide it
    img.addEventListener('error', () => {
        item.remove();
        GALLERY_IMAGES[index] = null; // Mark invalid so lightbox skips it
    });

    img.src = src;

    // Hover overlay with expand icon
    const overlay = document.createElement('div');
    overlay.className = 'gallery-item-overlay';
    overlay.innerHTML = '<i class="fa-solid fa-expand"></i>';

    // Click to open lightbox
    item.addEventListener('click', () => openLightbox(index));

    item.appendChild(blurDiv);
    item.appendChild(img);
    item.appendChild(overlay);

    return item;
}

// ============================================================
//  LIGHTBOX
// ============================================================
function openLightbox(index) {
    lightboxIndex = index;
    const lb = document.getElementById('lightbox');
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    showLightboxImage(lightboxIndex);
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    lb.classList.remove('open');
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    let attempts = 0;
    do {
        lightboxIndex = (lightboxIndex + direction + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
        attempts++;
        if (attempts > GALLERY_IMAGES.length) return; // safeguard
    } while (GALLERY_IMAGES[lightboxIndex] === null); // skip broken images

    showLightboxImage(lightboxIndex);

    // Auto-load more if navigating near the end of rendered images
    if (lightboxIndex >= currentIndex - 10 && currentIndex < GALLERY_IMAGES.length) {
        renderBatch();
    }
}

function showLightboxImage(index) {
    const img = document.getElementById('lightbox-img');
    const blur = document.getElementById('lightbox-blur');
    const counter = document.getElementById('lightbox-counter');

    const src = GALLERY_IMAGES[index];
    if (!src) return;

    // Fade out, swap, fade in
    img.style.opacity = '0';
    setTimeout(() => {
        img.src = src;
        blur.style.backgroundImage = `url('${src}')`;
        img.onload = () => { img.style.opacity = '1'; };
        if (img.complete) img.style.opacity = '1';
    }, 150);

    if (counter) {
        // Count valid images only for an accurate display number
        const validTotal = GALLERY_IMAGES.filter(img => img !== null).length;
        // Count how many valid images precede this one to get current number
        const currentValidNum = GALLERY_IMAGES.slice(0, index + 1).filter(img => img !== null).length;
        counter.textContent = `${currentValidNum} / ${validTotal}`;
    }
}
