// Enhanced particle system
function createAdvancedParticles() {
    const container = document.getElementById('bg-animation');
    const particleCount = 80;
    
    // Create floating particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = Math.random() > 0.7 ? 'large' : Math.random() > 0.4 ? 'medium' : 'small';
        particle.className = `particle ${size}`;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        container.appendChild(particle);
    }
    
    // Create matrix-style flowing lines
    for (let i = 0; i < 10; i++) {
        const line = document.createElement('div');
        line.className = 'matrix-line';
        line.style.top = Math.random() * 100 + '%';
        line.style.width = (Math.random() * 200 + 100) + 'px';
        line.style.animationDelay = Math.random() * 4 + 's';
        line.style.animationDuration = (Math.random() * 2 + 3) + 's';
        container.appendChild(line);
    }
}

// Enhanced typewriter effect
function typeWriter() {
    const texts = [
        "Protecting Digital Assets",
        "Ethical Hacking Expert",
        "Security Research Specialist",
        "Red Team Operations",
        "Quantum Cryptography Pioneer"
    ];
    const typewriterElement = document.getElementById('typewriter');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// Smooth scrolling with offset
function initSmoothScroll() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Enhanced intersection observer for animations
function initScrollAnimations() {
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
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Enhanced card interactions
function initCardEffects() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateX(5deg)';
            this.style.boxShadow = '0 25px 50px rgba(255, 153, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg)';
            this.style.boxShadow = 'none';
        });
        
        // Add click effect
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-15px) rotateX(5deg) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-15px) rotateX(5deg) scale(1)';
            }, 150);
        });
    });
}

// Enhanced skill list interactions
function initSkillEffects() {
    document.querySelectorAll('.skill-list li').forEach(skill => {
        skill.addEventListener('mouseenter', function() {
            this.style.color = '#00ff88';
            this.style.transform = 'translateX(15px)';
        });
        
        skill.addEventListener('mouseleave', function() {
            this.style.color = '#c0c7d1';
            this.style.transform = 'translateX(0)';
        });
    });
}

// Loading screen
function initLoadingScreen() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('loading').classList.add('hidden');
        }, 1000);
    });
}

// Tech tag hover effects
function initTechTagEffects() {
    document.querySelectorAll('.tech-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 153, 0, 0.25)';
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 8px 25px rgba(255, 153, 0, 0.3)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 153, 0, 0.15)';
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Navigation highlighting
function initNavHighlight() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.color = '#b0b8c4';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = '#00ff88';
            }
        });
    });
}

// Initialize all features
document.addEventListener('DOMContentLoaded', function() {
    initLoadingScreen();
    createAdvancedParticles();
    setTimeout(typeWriter, 1500);
    initSmoothScroll();
    initScrollAnimations();
    initCardEffects();
    initSkillEffects();
    initTechTagEffects();
    initNavHighlight();
    
    // Add some random glitch effects
    setInterval(() => {
        const cards = document.querySelectorAll('.card');
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        randomCard.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            randomCard.style.filter = 'none';
        }, 200);
    }, 10000);
});

// Parallax effect for background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const bg = document.getElementById('bg-animation');
    bg.style.transform = `translateY(${scrolled * 0.1}px)`;
});

document.getElementById("generate-preview").addEventListener("click", async () => {
    const url = document.getElementById("link-input").value;
    const preview = await fetchLinkPreview(url);
    displayPreview(preview);
});

async function fetchLinkPreview(url) {
    const apiKey = "a328961f9b29818a71b89bd59a84005a";
    const response = await fetch(`https://api.linkpreview.net/?key=${apiKey}&q=${encodeURIComponent(url)}`);
    const data = await response.json();
    return data;
}

function displayPreview(data) {
    const container = document.getElementById("link-preview-container");
    container.innerHTML = `
        <div style="
            border: 1px solid #444; 
            border-radius: 10px; 
            padding: 15px; 
            background: #222; 
            color: white; 
            max-width: 500px;
            margin-top: 20px;">
            <img src="${data.image}" alt="Thumbnail" style="width:100%; border-radius: 8px;" />
            <h3>${data.title}</h3>
            <p>${data.description}</p>
            <a href="${data.url}" target="_blank" style="color: #00d4ff;">${data.url}</a>
        </div>
    `;
}


// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const sections = Array.from(document.querySelectorAll('section'));
        const currentSection = sections.find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom > 100;
        });
        
        if (currentSection) {
            const currentIndex = sections.indexOf(currentSection);
            let targetIndex;
            
            if (e.key === 'ArrowDown') {
                targetIndex = (currentIndex + 1) % sections.length;
            } else {
                targetIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
            }
            
            sections[targetIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});
