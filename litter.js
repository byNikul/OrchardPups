// ==========================================
// 🐶 LITTER PAGE LOADER
// ==========================================

/* global LITTERS */
document.addEventListener('DOMContentLoaded', () => {
    // Get litter ID from URL
    const params = new URLSearchParams(window.location.search);
    const litterId = params.get("id");
    const container = document.getElementById("litter-container");

    if (!litterId || typeof LITTERS === 'undefined') {
        container.innerHTML = "<div class='error-msg'>Litter not found.</div>";
        return;
    }

    const litterData = LITTERS.find(l => l.id === litterId);

    if (!litterData) {
        container.innerHTML = "<div class='error-msg'>Invalid Litter ID.</div>";
        return;
    }

    // ==========================================
    // ⚙️ DYNAMIC STATUS LOGIC
    // ==========================================
    function calculateLitterStatus(l) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const allSold = l.puppies && l.puppies.length > 0 && 
                        l.puppies.every(p => p.status.toLowerCase() !== 'available');
        
        if (allSold) return "Found Families";
        if (!l.readyToGoDate || l.readyToGoDate === "Now") return "Ready to go Home";

        const readyDate = new Date(l.readyToGoDate);
        if (isNaN(readyDate.getTime()) || readyDate <= today) return "Ready to go Home";

        return "Available to Reserve";
    }

    function formatReadyDate(dateStr) {
        if (!dateStr || dateStr === "Now") return "Now";
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const readyDate = new Date(dateStr);
        if (isNaN(readyDate.getTime()) || readyDate <= today) return "Now";
        return dateStr;
    }

    const currentStatus = calculateLitterStatus(litterData);
    const litter = { ...litterData, status: currentStatus };

    // ==========================================
    // 🎨 RENDER LAYOUT
    // ==========================================
    // Sort updates by date (newest first)
    const sortedUpdates = [...(litter.updates || [])].sort((a, b) => new Date(b.date) - new Date(a.date));

    container.innerHTML = `
        <div class="litter-hero">
            <div class="litter-header-info">
                <span class="status-badge ${getStatusClass(litter.status)}">${litter.status}</span>
                <h1>${litter.litterName}</h1>
                <div class="header-parents-info">
                    <span><strong>Mom:</strong> ${litter.mom ? `${litter.mom.name} (${litter.mom.breed} | ${litter.mom.weight})` : 'N/A'}</span>
                    <span class="parents-separator">|</span>
                    <span><strong>Dad:</strong> ${litter.dad ? `${litter.dad.name} (${litter.dad.breed} | ${litter.dad.weight})` : 'N/A'}</span>
                </div>
                <h3 class="breed-subtitle">${litter.breed}</h3>
                
                <div class="quick-stats">
                    <div class="stat-item">
                        <i class="fa-solid fa-calendar-days"></i>
                        <label>DOB</label>
                        <span>${litter.dob}</span>
                    </div>
                    <div class="stat-item">
                        <i class="fa-solid fa-clock"></i>
                        <label>Ready Date</label>
                        <span>${formatReadyDate(litter.readyToGoDate)}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="litter-main-grid">
            <!-- Left Column: Media Panel -->
            <section class="media-column">
                <div class="media-viewport-container">
                    <div class="media-header">
                        <span>LITTER GALLERY</span>
                        <div class="media-count" id="media-count">01 / ${String(litter.media.length).padStart(2, "0")}</div>
                    </div>
                    <div class="media-viewport" id="media-viewport">
                        <!-- Media Injected Here -->
                    </div>
                    <div class="media-label" id="media-label"></div>
                    
                    ${litter.media.length > 1 ? `
                    <div class="media-nav">
                        <button id="prev-media"><i class="fa-solid fa-chevron-left"></i></button>
                        <button id="next-media"><i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                    ` : ''}
                </div>

                <div class="description-box">
                    <h2>Meet the Litter</h2>
                    <p>${litter.description}</p>
                    <p><strong>Price:</strong> ${litter.price ? litter.price : "Contact us for pricing"}</p>
                    
                    <h3>The Puppies</h3>
                    <ul>
                        ${litter.puppies ? litter.puppies.map(p => `<li><strong>${p.name}</strong> (${p.gender}) - <em>${p.status}</em></li>`).join('') : '<li>Information coming soon</li>'}
                    </ul>

                </div>
            </section>

            <!-- Right Column: Updates Timeline -->
            <aside class="updates-column">
                <div class="timeline-container">
                    <h2>Puppy Updates</h2>
                    <div class="timeline">
                        ${sortedUpdates.map(update => `
                            <div class="timeline-item">
                                <div class="timeline-date">${update.date}</div>
                                <div class="timeline-content">${update.text}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </aside>
        </div>
    `;

    // ==========================================
    // 🖼 MEDIA LOGIC
    // ==========================================
    let currentMediaIndex = 0;
    const mediaViewport = document.getElementById("media-viewport");
    const mediaLabel = document.getElementById("media-label");
    const mediaCount = document.getElementById("media-count");

    // 🎵 Playful background music - Using your local file
    const bgMusic = new Audio('assets/playful-puppies.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.45;

    function startMusic() {
        bgMusic.play().catch(e => console.log("Music play blocked until interaction."));
    }

    function stopMusic() {
        bgMusic.pause();
    }

    function createVideoElement(src) {
        const video = document.createElement('video');
        // Set muted BEFORE setting src — this is critical
        video.muted = true;
        video.defaultMuted = true;
        video.volume = 0;
        video.controls = true;
        video.className = 'fade-in';
        video.playsInline = true;

        // Prevent user from unmuting via the built-in controls
        video.addEventListener('volumechange', () => {
            if (!video.muted) {
                video.muted = true;
                video.volume = 0;
            }
        });

        // Sync background music to video play/pause
        video.addEventListener('play', () => {
            startMusic();
        });
        video.addEventListener('pause', () => {
            stopMusic();
        });
        video.addEventListener('ended', () => {
            stopMusic();
        });

        // Set src AFTER all event listeners and muting are in place
        video.src = src;
        return video;
    }

    function updateMedia() {
        if (!mediaViewport) return;
        const item = litter.media[currentMediaIndex];

        // Stop music when navigating away from a video
        stopMusic();

        // Clear viewport
        mediaViewport.innerHTML = '';
        
        if (item.type === "image") {
            const blurBg = document.createElement('div');
            blurBg.className = 'media-bg-blur';
            blurBg.style.backgroundImage = `url('${item.src}')`;
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.label;
            img.className = 'fade-in';
            mediaViewport.appendChild(blurBg);
            mediaViewport.appendChild(img);
        } else if (item.type === "video") {
            const blurBg = document.createElement('div');
            blurBg.className = 'media-bg-blur';
            blurBg.style.backgroundImage = `url('${litter.thumbnail}')`;
            const video = createVideoElement(item.src);
            mediaViewport.appendChild(blurBg);
            mediaViewport.appendChild(video);
        }

        if (mediaLabel) mediaLabel.textContent = item.label || "";
        if (mediaCount) {
            mediaCount.textContent = `${String(currentMediaIndex + 1).padStart(2, "0")} / ${String(litter.media.length).padStart(2, "0")}`;
        }
    }

    if (litter.media.length > 0) {
        updateMedia();

        const prevBtn = document.getElementById("prev-media");
        const nextBtn = document.getElementById("next-media");

        if (prevBtn) {
            prevBtn.onclick = () => {
                currentMediaIndex = (currentMediaIndex - 1 + litter.media.length) % litter.media.length;
                updateMedia();
            };
        }
        if (nextBtn) {
            nextBtn.onclick = () => {
                currentMediaIndex = (currentMediaIndex + 1) % litter.media.length;
                updateMedia();
            };
        }
    }

    function getStatusClass(status) {
        if (status === "Available to Reserve") return "tag-available";
        if (status === "Ready to go Home") return "tag-ready";
        return "tag-found";
    }

    // ==========================================
    // REUSE CUSTOM CURSOR LOGIC
    // ==========================================
    initCursor();
});

function initCursor() {
    const cursor = document.getElementById('custom-cursor');
    const cursorText = cursor ? cursor.querySelector('.cursor-text') : null;
    let moveTimeout;

    const puppyStatuses = ["Sniffing details...", "Checking out puppies...", "So many cute faces!", "Puppy love!"];
    const hoverStatuses = ["Go back?", "Next photo!", "Check update!"];

    function getRandomStatus(isHover) {
        const list = isHover ? hoverStatuses : puppyStatuses;
        return list[Math.floor(Math.random() * list.length)];
    }

    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && cursor) {
        document.addEventListener('mousemove', (e) => {
            const isHover = cursor.classList.contains('is-hover');
            const offset = isHover ? 24 : 5; 
            cursor.style.transform = `translate3d(${e.clientX - offset}px, ${e.clientY - offset}px, 0)`;
            
            if (cursorText && !cursor.classList.contains('is-moving')) {
                cursorText.textContent = getRandomStatus(isHover);
            }
            cursor.classList.add('is-moving');
            clearTimeout(moveTimeout);
            moveTimeout = setTimeout(() => {
                cursor.classList.remove('is-moving');
            }, 1500);
        });

        document.addEventListener('mouseover', (e) => {
            const target = e.target;
            if (target.tagName.toLowerCase() === 'a' || 
                target.tagName.toLowerCase() === 'button' || 
                target.closest('a') || 
                target.closest('button')) {
                cursor.classList.add('is-hover');
                if (cursorText) cursorText.textContent = getRandomStatus(true);
            } else {
                cursor.classList.remove('is-hover');
                if (cursorText) cursorText.textContent = getRandomStatus(false);
            }
        });
    }
}

