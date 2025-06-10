// DOM elements
const portalCards = document.querySelectorAll('.portal-card');
const transitionOverlay = document.querySelector('.transition-overlay');
const transitionText = document.querySelector('.transition-text');

// Add click event listeners to portal cards
portalCards.forEach(card => {
    card.addEventListener('click', handleCardClick);
    card.addEventListener('mousedown', createRipple);
});

// Handle card click with black hole animation and themed effects
function handleCardClick(e) {
    const card = e.currentTarget;
    const target = card.dataset.target;
    
    // Check if it's the "coming soon" card
    if (card.querySelector('.card-status.coming-soon')) {
        // Show caring effects for the coming soon card
        showCaringEffects();
        showComingSoonMessage();
        return;
    }
    
    // Show themed effects based on target
    if (target === 'digital-self') {
        showDigitalEffects();
    } else if (target === 'managing-caring') {
        showCaringEffects();
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

// Show digital effects
function showDigitalEffects() {
    const digitalEffects = document.querySelector('.digital-effects');
    digitalEffects.classList.add('active');
    
    // Create additional binary elements dynamically
    createBinaryElements();
    
    // Create network connections
    createNetworkConnections();
    
    // Hide effects after animation
    setTimeout(() => {
        digitalEffects.classList.remove('active');
    }, 3000);
}

// Show caring effects
function showCaringEffects() {
    const caringEffects = document.querySelector('.caring-effects');
    caringEffects.classList.add('active');
    
    // Create additional heart elements dynamically
    createHeartElements();
    
    // Hide effects after animation
    setTimeout(() => {
        caringEffects.classList.remove('active');
    }, 3000);
}

// Create dynamic binary elements for digital effect
function createBinaryElements() {
    const digitalParticles = document.querySelector('.digital-particles');
    
    // Create multiple binary particles
    for (let i = 0; i < 8; i++) {
        const binaryElement = document.createElement('div');
        binaryElement.className = 'dynamic-binary';
        binaryElement.textContent = Math.random() > 0.5 ? '1' : '0';
        binaryElement.style.cssText = `
            position: absolute;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            color: #00ff00;
            font-family: 'Courier New', monospace;
            font-size: ${12 + Math.random() * 8}px;
            opacity: 0.8;
            animation: binaryFloat 2s ease-out forwards;
            pointer-events: none;
        `;
        
        digitalParticles.appendChild(binaryElement);
        
        // Remove element after animation
        setTimeout(() => {
            if (digitalParticles.contains(binaryElement)) {
                digitalParticles.removeChild(binaryElement);
            }
        }, 2000);
    }
    
    // Create digital nodes
    createDigitalNodes();
    
    // Create scan lines
    createScanLines();
    
    // Create holographic text
    createHolographicText();
    
    // Add binary float animation
    if (!document.querySelector('#binary-float-style')) {
        const style = document.createElement('style');
        style.id = 'binary-float-style';
        style.textContent = `
            @keyframes binaryFloat {
                0% {
                    transform: translateY(0px) scale(1);
                    opacity: 0;
                }
                25% {
                    opacity: 0.8;
                }
                75% {
                    opacity: 0.6;
                }
                100% {
                    transform: translateY(-100px) scale(0.5);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Create digital nodes
function createDigitalNodes() {
    const digitalParticles = document.querySelector('.digital-particles');
    
    for (let i = 0; i < 6; i++) {
        const node = document.createElement('div');
        node.className = 'digital-node';
        node.style.cssText = `
            position: absolute;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            width: 8px;
            height: 8px;
            background: #00ffff;
            border-radius: 50%;
            box-shadow: 0 0 20px #00ffff;
            animation: nodeGlow 3s ease-in-out infinite;
            pointer-events: none;
        `;
        
        digitalParticles.appendChild(node);
        
        setTimeout(() => {
            if (digitalParticles.contains(node)) {
                digitalParticles.removeChild(node);
            }
        }, 3000);
    }
    
    // Add node glow animation
    if (!document.querySelector('#node-glow-style')) {
        const style = document.createElement('style');
        style.id = 'node-glow-style';
        style.textContent = `
            @keyframes nodeGlow {
                0%, 100% {
                    transform: scale(1);
                    opacity: 0.6;
                    box-shadow: 0 0 10px currentColor;
                }
                50% {
                    transform: scale(1.5);
                    opacity: 1;
                    box-shadow: 0 0 30px currentColor;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Create scan lines
function createScanLines() {
    const digitalParticles = document.querySelector('.digital-particles');
    
    for (let i = 0; i < 3; i++) {
        const scanLine = document.createElement('div');
        scanLine.className = 'scan-line';
        scanLine.style.cssText = `
            position: absolute;
            top: ${Math.random() * 100}%;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #ff0080, transparent);
            animation: scanMove 2s linear infinite;
            pointer-events: none;
            opacity: 0.7;
        `;
        
        digitalParticles.appendChild(scanLine);
        
        setTimeout(() => {
            if (digitalParticles.contains(scanLine)) {
                digitalParticles.removeChild(scanLine);
            }
        }, 2000);
    }
    
    // Add scan move animation
    if (!document.querySelector('#scan-move-style')) {
        const style = document.createElement('style');
        style.id = 'scan-move-style';
        style.textContent = `
            @keyframes scanMove {
                0% {
                    transform: translateY(0px);
                    opacity: 0;
                }
                25% {
                    opacity: 0.7;
                }
                75% {
                    opacity: 0.7;
                }
                100% {
                    transform: translateY(50px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Create holographic text
function createHolographicText() {
    const digitalParticles = document.querySelector('.digital-particles');
    
    const holoTexts = [
        'NEURAL_LINK_ACTIVE',
        'QUANTUM_SYNC',
        'DIGITAL_CONSCIOUSNESS',
        'CYBER_SPACE_ENTRY',
        'MATRIX_LOADING...'
    ];
    
    for (let i = 0; i < 3; i++) {
        const holoText = document.createElement('div');
        holoText.className = 'holographic-text';
        holoText.textContent = holoTexts[Math.floor(Math.random() * holoTexts.length)];
        holoText.style.cssText = `
            position: absolute;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            color: #00ff41;
            font-family: 'Orbitron', sans-serif;
            font-size: ${10 + Math.random() * 6}px;
            font-weight: 600;
            text-shadow: 0 0 10px currentColor;
            animation: holoFlicker 2.5s ease-in-out infinite;
            pointer-events: none;
            white-space: nowrap;
            transform: translate(-50%, -50%);
        `;
        
        digitalParticles.appendChild(holoText);
        
        setTimeout(() => {
            if (digitalParticles.contains(holoText)) {
                digitalParticles.removeChild(holoText);
            }
        }, 2500);
    }
    
    // Add holographic flicker animation
    if (!document.querySelector('#holo-flicker-style')) {
        const style = document.createElement('style');
        style.id = 'holo-flicker-style';
        style.textContent = `
            @keyframes holoFlicker {
                0%, 100% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.8);
                }
                10% {
                    opacity: 0.8;
                    transform: translate(-50%, -50%) scale(1);
                }
                20% {
                    opacity: 0.3;
                    transform: translate(-50%, -50%) scale(1.1);
                }
                30% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
                80% {
                    opacity: 0.9;
                    transform: translate(-50%, -50%) scale(1);
                }
                90% {
                    opacity: 0.2;
                    transform: translate(-50%, -50%) scale(0.9);
                }
            }
        `;        document.head.appendChild(style);
    }
}

// Create network connections
function createNetworkConnections() {
    const digitalParticles = document.querySelector('.digital-particles');
    
    // Create connection lines between random points
    for (let i = 0; i < 4; i++) {
        const connection = document.createElement('div');
        connection.className = 'network-connection';
        
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = Math.random() * 100;
        const endY = Math.random() * 100;
        
        const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
        const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
        
        connection.style.cssText = `
            position: absolute;
            top: ${startY}%;
            left: ${startX}%;
            width: ${length * 3}px;
            height: 2px;
            background: linear-gradient(90deg, #00ffff, #ff0080, #00ffff);
            transform-origin: 0 50%;
            transform: rotate(${angle}deg);
            animation: connectionPulse 2s ease-in-out infinite;
            pointer-events: none;
            opacity: 0.6;
        `;
        
        digitalParticles.appendChild(connection);
        
        setTimeout(() => {
            if (digitalParticles.contains(connection)) {
                digitalParticles.removeChild(connection);
            }
        }, 2000);
    }
    
    // Add connection pulse animation
    if (!document.querySelector('#connection-pulse-style')) {
        const style = document.createElement('style');
        style.id = 'connection-pulse-style';
        style.textContent = `
            @keyframes connectionPulse {
                0%, 100% {
                    opacity: 0.2;
                    box-shadow: 0 0 5px currentColor;
                }
                50% {
                    opacity: 0.8;
                    box-shadow: 0 0 15px currentColor;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Create dynamic heart elements for caring effect
function createHeartElements() {
    const heartParticles = document.querySelector('.heart-particles');
    
    // Create multiple heart particles
    const heartSymbols = ['♥', '💕', '💖', '✨', '🌸'];
    
    for (let i = 0; i < 6; i++) {
        const heartElement = document.createElement('div');
        heartElement.className = 'dynamic-heart';
        heartElement.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heartElement.style.cssText = `
            position: absolute;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            color: ${['#ff6b9d', '#ff9a9e', '#ffc3a0', '#ffafbd'][Math.floor(Math.random() * 4)]};
            font-size: ${16 + Math.random() * 12}px;
            opacity: 0.8;
            animation: heartRise 3s ease-out forwards;
            pointer-events: none;
            text-shadow: 0 0 10px currentColor;
        `;
        
        heartParticles.appendChild(heartElement);
        
        // Remove element after animation
        setTimeout(() => {
            if (heartParticles.contains(heartElement)) {
                heartParticles.removeChild(heartElement);
            }
        }, 3000);
    }
    
    // Add heart rise animation
    if (!document.querySelector('#heart-rise-style')) {
        const style = document.createElement('style');
        style.id = 'heart-rise-style';
        style.textContent = `
            @keyframes heartRise {
                0% {
                    transform: translateY(20px) scale(0.8) rotate(0deg);
                    opacity: 0;
                }
                25% {
                    opacity: 1;
                    transform: translateY(0px) scale(1) rotate(5deg);
                }
                50% {
                    transform: translateY(-20px) scale(1.1) rotate(-5deg);
                }
                75% {
                    transform: translateY(-40px) scale(1) rotate(3deg);
                    opacity: 0.8;
                }
                100% {
                    transform: translateY(-80px) scale(0.6) rotate(0deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
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
