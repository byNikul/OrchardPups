// ==========================================
// 🐶 LITTER PAGE LOADER
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Get litter ID from URL
    const params = new URLSearchParams(window.location.search);
    const litterId = params.get("id");
    const container = document.getElementById("litter-container");

    if (!litterId || typeof LITTERS === 'undefined') {
        container.innerHTML = "<div class='error-msg'>Litter not found.</div>";
        return;
    }

    const litter = LITTERS.find(l => l.id === litterId);

    if (!litter) {
        container.innerHTML = "<div class='error-msg'>Invalid Litter ID.</div>";
        return;
    }

    // ==========================================
    // 🎨 RENDER LAYOUT
    // ==========================================
    container.innerHTML = `
        <div class="litter-hero">
            <div class="litter-header-info">
                <span class="status-badge ${getStatusClass(litter.status)}">${litter.status}</span>
                <h1>${litter.litterName}</h1>
                <div class="header-parents-info"><strong>Parents:</strong> ${litter.parents}</div>
                <h3 class="breed-subtitle">${litter.breed}</h3>
                
                <div class="quick-stats">
                    <div class="stat-item">
                        <i class="fa-solid fa-calendar-heart"></i>
                        <label>DOB</label>
                        <span>${litter.dob}</span>
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
                    ${litter.fullDescription}
                </div>
            </section>

            <!-- Right Column: Updates Timeline -->
            <aside class="updates-column">
                <div class="timeline-container">
                    <h2>Puppy Updates</h2>
                    <div class="timeline">
                        ${litter.updates.map(update => `
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

    function updateMedia() {
        if (!mediaViewport) return;
        const item = litter.media[currentMediaIndex];
        
        if (item.type === "image") {
            mediaViewport.innerHTML = `<img src="${item.src}" alt="${item.label}" class="fade-in">`;
        } else if (item.type === "video") {
            mediaViewport.innerHTML = `<video src="${item.src}" controls class="fade-in"></video>`;
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
        if (status.includes("reserve")) return "tag-available";
        if (status.includes("Ready")) return "tag-ready";
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
