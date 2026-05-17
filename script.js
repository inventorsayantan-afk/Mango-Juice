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

// Checkout Modal Logic
const checkoutModal = document.getElementById('checkout-modal');
const checkoutModalContent = document.getElementById('checkout-modal-content');
const closeCheckoutBtn = document.getElementById('close-modal');
const checkoutTriggers = document.querySelectorAll('.checkout-trigger');

const steps = {
    email: document.getElementById('step-email'),
    address: document.getElementById('step-address'),
    payment: document.getElementById('step-payment'),
    success: document.getElementById('step-success')
};

// Inputs
const emailInput = document.getElementById('email-input');
const addressInput = document.getElementById('address-input');
const upiInput = document.getElementById('upi-input');

// Buttons
const btnNextAddress = document.getElementById('btn-next-address');
const btnNextPayment = document.getElementById('btn-next-payment');
const btnPay = document.getElementById('btn-pay');
const btnDone = document.getElementById('btn-done');
const btnBacks = document.querySelectorAll('.btn-back');

// Helper to switch steps
function showStep(stepId) {
    Object.values(steps).forEach(step => {
        if (step) {
            step.classList.add('hidden');
            step.classList.remove('active');
        }
    });
    if (steps[stepId]) {
        steps[stepId].classList.remove('hidden');
        setTimeout(() => steps[stepId].classList.add('active'), 10);
    }
}

// Open modal
checkoutTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
        if(checkoutModal) {
            checkoutModal.classList.remove('opacity-0', 'pointer-events-none');
            checkoutModalContent.classList.remove('scale-95');
            checkoutModalContent.classList.add('scale-100');
            showStep('email');
            if(emailInput) emailInput.value = '';
            if(addressInput) addressInput.value = '';
            if(upiInput) upiInput.value = '';
        }
    });
});

// Close modal
function closeCheckout() {
    if(checkoutModal) {
        checkoutModal.classList.add('opacity-0', 'pointer-events-none');
        checkoutModalContent.classList.remove('scale-100');
        checkoutModalContent.classList.add('scale-95');
    }
}
if(closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckout);

// Back buttons
btnBacks.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const target = e.currentTarget.getAttribute('data-target');
        showStep(target.replace('step-', ''));
    });
});

// Flow
if(btnNextAddress) {
    btnNextAddress.addEventListener('click', () => {
        if (emailInput.value.includes('@')) {
            showStep('address');
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

if(btnNextPayment) {
    btnNextPayment.addEventListener('click', () => {
        if (addressInput.value.trim().length > 5) {
            showStep('payment');
        } else {
            alert('Please enter a valid delivery address.');
        }
    });
}

if(btnPay) {
    btnPay.addEventListener('click', () => {
        if (upiInput.value.includes('@')) {
            // Simulate processing
            document.getElementById('pay-text').classList.add('hidden');
            document.getElementById('pay-spinner').classList.remove('hidden');
            
            setTimeout(() => {
                document.getElementById('pay-text').classList.remove('hidden');
                document.getElementById('pay-spinner').classList.add('hidden');
                showStep('success');
            }, 2000);
        } else {
            alert('Please enter a valid UPI ID (e.g., name@upi).');
        }
    });
}

if(btnDone) {
    btnDone.addEventListener('click', closeCheckout);
}

// Hamburger Menu Logic
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}
