// DOM elements
const portalCards = document.querySelectorAll('.portal-card');
const transitionOverlay = document.querySelector('.transition-overlay');
const transitionText = document.querySelector('.transition-text');

// Add click event listeners to portal cards
portalCards.forEach(card => {
    card.addEventListener('click', handleCardClick);
    card.addEventListener('mousedown', createRipple);
});

// Handle card click with black hole animation
function handleCardClick(e) {
    const card = e.currentTarget;
    const target = card.dataset.target;
    
    // Check if it's the "coming soon" card
    if (card.querySelector('.card-status.coming-soon')) {
        showComingSoonMessage();
        return;
    }
    
    // Create black hole vortex effect
    createBlackHoleVortex(e);
    
    // Add clicked class for animation
    card.classList.add('clicked');
    
    // Show transition overlay
    setTimeout(() => {
        showTransitionOverlay(target);
    }, 600);
    
    // Navigate after animation
    setTimeout(() => {
        navigateToProject(target);
    }, 2000);
}

// Create black hole vortex effect
function createBlackHoleVortex(e) {
    const vortex = document.createElement('div');
    vortex.className = 'black-hole-vortex';
    
    // Position the vortex at the click location
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    vortex.style.left = centerX + 'px';
    vortex.style.top = centerY + 'px';
    vortex.style.transform = 'translate(-50%, -50%) scale(0)';
    
    document.body.appendChild(vortex);
    
    // Remove vortex after animation
    setTimeout(() => {
        if (document.body.contains(vortex)) {
            document.body.removeChild(vortex);
        }
    }, 1200);
}

// Create ripple effect on mouse down
function createRipple(e) {
    const card = e.currentTarget;
    const ripple = card.querySelector('.ripple-effect');
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    
    // Reset animation
    setTimeout(() => {
        ripple.style.animation = '';
    }, 600);
}

// Show transition overlay with animation
function showTransitionOverlay(target) {
    // Update transition text based on target
    if (target === 'digital-self') {
        transitionText.textContent = 'Entering Digital Self...';
    } else if (target === 'managing-caring') {
        transitionText.textContent = 'Entering Managing and Caring for Yourself...';
    }
    
    transitionOverlay.classList.add('active');
}

// Navigate to the project
function navigateToProject(target) {
    if (target === 'digital-self') {
        // Navigate to the actual Digital Self project
        window.location.href = 'https://jerichodelosreyes.github.io/digiselfMain/';
    } else if (target === 'managing-caring') {
        // Replace with actual Managing and Caring project URL when available
        window.location.href = 'https://your-managing-caring-project-url.com';
    }
}

// Show coming soon message
function showComingSoonMessage() {
    // Create and show a modern notification
    const notification = document.createElement('div');
    notification.className = 'coming-soon-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-clock"></i>
            <h3>Coming Soon!</h3>
            <p>The "Managing and Caring for Yourself" project is currently under development. Stay tuned!</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Add styles for the notification
    const style = document.createElement('style');
    style.textContent = `
        .coming-soon-notification {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            z-index: 2000;
            text-align: center;
            animation: popIn 0.3s ease-out;
            max-width: 400px;
            width: 90%;
        }
        
        .notification-content i {
            font-size: 3rem;
            color: #ff9800;
            margin-bottom: 15px;
        }
        
        .notification-content h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
            color: #333;
        }
        
        .notification-content p {
            color: #666;
            line-height: 1.5;
        }
        
        @keyframes popIn {
            from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'popOut 0.3s ease-in forwards';
        setTimeout(() => {
            document.body.removeChild(notification);
            document.head.removeChild(style);
        }, 300);
    }, 3000);
    
    // Add popOut animation
    const popOutStyle = document.createElement('style');
    popOutStyle.textContent = `
        @keyframes popOut {
            to {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
        }
    `;
    document.head.appendChild(popOutStyle);
}

// Add hover effects for better interactivity
portalCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        if (!card.classList.contains('clicked')) {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('clicked')) {
            card.style.transform = 'translateY(0) scale(1)';
        }
    });
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && transitionOverlay.classList.contains('active')) {
        transitionOverlay.classList.remove('active');
        // Reset clicked state
        portalCards.forEach(card => card.classList.remove('clicked'));
    }
});

// Add loading animation when page loads
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for floating shapes
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.floating-shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const xPos = (x - 0.5) * speed * 20;
        const yPos = (y - 0.5) * speed * 20;
        
        shape.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});

// Add smooth scrolling for better UX
document.documentElement.style.scrollBehavior = 'smooth';
