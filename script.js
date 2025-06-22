// Mobile Navigation
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Loader
setTimeout(() => {
    const loaderContainer = document.querySelector('.loader-container');
    const loader = document.querySelector('.loader');
    
    // Add fade-out classes
    loaderContainer.classList.add('fade-out');
    loader.classList.add('fade-out');
    
    // Remove elements after animation completes
    setTimeout(() => {
        loaderContainer.style.display = 'none';
    }, 500);
}, 1000);

// Enhanced audio autoplay with multiple strategies
document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bg-music');
    bgMusic.volume = 0.05;

    // Auto-click home nav link to trigger music
    const homeLink = document.querySelector('.nav-link[href="#home"]');
    if (homeLink) {
        homeLink.click();
    }
    
    // Try autoplay multiple times with increasing delays
    const tryAutoplay = (attempts = 0) => {
        if (attempts >= 5) {
            console.log('Autoplay failed after 5 attempts');
            return;
        }
        
        bgMusic.play().then(() => {
            console.log('Audio autoplay successful on attempt', attempts + 1);
        }).catch(() => {
            console.log('Autoplay attempt', attempts + 1, 'failed');
            setTimeout(() => tryAutoplay(attempts + 1), 2000);
        });
    };
    
    tryAutoplay();
});


// Smooth scrolling and active nav link
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

function changeActiveNav() {
    let index = sections.length;

    while(--index && window.scrollY + 200 < sections[index].offsetTop) {}
    
    navItems.forEach((link) => link.classList.remove('active'));
    if (navItems[index]) {
        navItems[index].classList.add('active');
    }
}

window.addEventListener('scroll', changeActiveNav);

// Project filtering functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active filter button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter project cards
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all section elements
const animateSections = document.querySelectorAll('.section');
animateSections.forEach(section => {
    observer.observe(section);
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Show success message (in a real app, you'd send this to a server)
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Enhanced hero section animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate hero elements
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'all 0.8s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 200);
    }
    
    if (heroDescription) {
        heroDescription.style.opacity = '0';
        heroDescription.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroDescription.style.transition = 'all 0.8s ease';
            heroDescription.style.opacity = '1';
            heroDescription.style.transform = 'translateY(0)';
        }, 400);
    }
    
    if (heroButtons) {
        heroButtons.style.opacity = '0';
        heroButtons.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroButtons.style.transition = 'all 0.8s ease';
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
        }, 600);
    }
    
    if (heroVisual) {
        heroVisual.style.opacity = '0';
        heroVisual.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            heroVisual.style.transition = 'all 1s ease';
            heroVisual.style.opacity = '1';
            heroVisual.style.transform = 'scale(1)';
        }, 800);
    }
});

// Floating particles animation
function createFloatingParticles() {
    const heroBackground = document.querySelector('.hero-background');
    if (!heroBackground) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 255, 136, 0.6);
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${5 + Math.random() * 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        heroBackground.appendChild(particle);
    }
}

// Add floating particle animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize floating particles
document.addEventListener('DOMContentLoaded', createFloatingParticles);

// Typing effect for hero subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', () => {
    const heroSubtitle = document.querySelector('.hero-description');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        setTimeout(() => {
            typeWriter(heroSubtitle, originalText, 50);
        }, 1000);
    }
});

// Skills animation in data visualization
document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.animationDelay = `${index * 0.2}s`;
        }, 1000);
    });
});

// Smooth reveal on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.fade-in:not(.visible)');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Enhanced button interactions
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn, .btn-link');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });
});

// Blog card interactions
document.addEventListener('DOMContentLoaded', () => {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.cursor = 'pointer';
        });
        
        card.addEventListener('click', () => {
            // In a real app, you'd navigate to the blog post
            console.log('Navigate to blog post');
        });
    });
});

// Project card interactions
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card, .featured-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(changeActiveNav, 10));
window.addEventListener('scroll', debounce(revealOnScroll, 10));