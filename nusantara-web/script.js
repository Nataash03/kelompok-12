document.addEventListener('DOMContentLoaded', function () {
    
    // Navbar scroll 
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Toggle Mobile Navigation 
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        navLinks.classList.toggle('open');
    });
    
    // Smooth Scroll 
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const targetPosition = target.offsetTop - 80;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu
                navLinks.classList.remove('open');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.nav-links') && !e.target.closest('#hamburger')) {
            navLinks.classList.remove('open');
            hamburger.classList.remove('active');
        }
    });
    
    // Visited hotspots tracking (in-memory storage)
    let visitedHotspots = {};
    
    // Map Hotspot Functions 
    const mapHotspots = document.querySelectorAll('.map-hotspot');
    mapHotspots.forEach(hotspot => {
        hotspot.addEventListener('click', function () {
            const title = this.getAttribute('data-title');
            const info = this.getAttribute('data-info');
            const imgSrc = this.getAttribute('data-img');
            const hotspotId = this.getAttribute('data-id');
            
            // Mark as visited
            this.classList.add('visited');
            visitedHotspots[hotspotId] = true;
            console.log(`Hotspot visited: ${hotspotId}`);
            
            openModal(title, `<p>${info}</p>`, imgSrc);
        });
    });
    
    // Viewed cards tracking (in-memory storage)
    let viewedCards = {};
    
    // Journey Card Functions 
    const journeyCards = document.querySelectorAll('.journey-card');
    journeyCards.forEach(card => {
        card.addEventListener('click', function () {
            const topic = this.getAttribute('data-topic');
            const title = this.querySelector('h3').textContent;
            
            // Mark as viewed
            this.classList.add('viewed');
            viewedCards[topic] = true;
            console.log(`Card viewed: ${topic}`);
            
            // Navigate to detail page
            window.location.href = `detail.html?topic=${topic}`;
        });
    });
    
    // Modal Functions 
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupText = document.getElementById('popup-text');
    const popupImg = document.getElementById('popup-img');
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    function openModal(title, content, imgSrc) {
        popupTitle.textContent = title;
        popupText.innerHTML = content;
        
        if (imgSrc && imgSrc !== 'null' && imgSrc !== '') {
            popupImg.setAttribute('src', imgSrc);
            popupImg.classList.add('show');
        } else {
            popupImg.classList.remove('show');
        }
        
        popup.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        popup.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
    
    // Close modal on close button 
    modalClose.addEventListener('click', closeModal);
    
    // Close modal on overlay click 
    modalOverlay.addEventListener('click', closeModal);
    
    // Close modal on ESC key 
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && popup.classList.contains('show')) {
            closeModal();
        }
    });
    
    // Hero parallax effect 
    window.addEventListener('scroll', function () {
        const scrolled = window.scrollY;
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });
    
    // Scroll Animation for Cards 
    function animateOnScroll() {
        journeyCards.forEach(card => {
            const elementTop = card.getBoundingClientRect().top;
            const elementBottom = card.getBoundingClientRect().bottom;
            const viewportHeight = window.innerHeight;
            
            if (elementBottom > 0 && elementTop < viewportHeight) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initial state for cards
    journeyCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger on page load
    
    // Initialize 
    console.log('Javanese Culture Website Loaded Successfully!');
    
});