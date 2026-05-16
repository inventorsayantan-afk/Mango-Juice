const canvas = document.getElementById('animation-canvas');
const context = canvas.getContext('2d');

// Optimize image loading and drawing
const frameCount = 240;
const currentFrame = index => `frames/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`;

const images = [];
let loadedImages = 0;

// Set initial canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Preload images
for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.onload = () => {
        loadedImages++;
        if (loadedImages === 1) {
            // Draw first frame as soon as it loads
            drawImageScaled(img);
            canvas.classList.add('loaded');
        }
    };
    img.src = currentFrame(i);
    images.push(img);
}

function drawImageScaled(img) {
    if (!img || !img.complete || img.naturalWidth === 0) return;
    
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    // Use Math.max for object-fit: cover behavior
    const ratio = Math.max(hRatio, vRatio);
    
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0, img.width, img.height,
                      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

// Scroll Animation
window.addEventListener('scroll', () => {
    const scrollContainer = document.querySelector('.scroll-container');
    const containerRect = scrollContainer.getBoundingClientRect();
    const scrolled = -containerRect.top;
    const maxScroll = containerRect.height - window.innerHeight;
    
    // Calculate progress
    const scrollFraction = Math.max(0, Math.min(1, maxScroll > 0 ? scrolled / maxScroll : 0));
    
    // Calculate frame index
    const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
    
    requestAnimationFrame(() => drawImageScaled(images[frameIndex]));
});

// Resize handler
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const scrollContainer = document.querySelector('.scroll-container');
    const containerRect = scrollContainer.getBoundingClientRect();
    const scrolled = -containerRect.top;
    const maxScroll = containerRect.height - window.innerHeight;
    
    const scrollFraction = Math.max(0, Math.min(1, maxScroll > 0 ? scrolled / maxScroll : 0));
    const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
    
    drawImageScaled(images[frameIndex]);
});

// Intersection Observer for Glass Cards animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.glass-card').forEach(card => {
    observer.observe(card);
});

// Modal Logic
const modal = document.getElementById('order-modal');
const closeModalBtns = [document.getElementById('close-modal'), document.getElementById('continue-shopping')];
const orderBtns = document.querySelectorAll('.cta-button');

if (modal) {
    orderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'flex';
            // Slight delay to allow display: flex to apply before transitioning opacity
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modal.classList.add('opacity-100');
            }, 10);
        });
    });

    closeModalBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                modal.classList.remove('opacity-100');
                modal.classList.add('opacity-0');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300); // match duration-300
            });
        }
    });
}
