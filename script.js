// Language Management
let currentLanguage = 'tr';

const translations = {
    tr: {
        'nav-home': 'Ana Sayfa',
        'nav-services': 'Hizmetlerimiz',
        'nav-about': 'Hakkımızda',
        'nav-contact': 'İletişim',
        'hero-title': '🥇 GPSR, ESPR, KKDIK, REACH, Biyosidal Uyumluluk Uzmanı',
        'hero-subtitle': 'İstanbul\'un Uyumluluk Danışmanı',
        'hero-description': '✅ GPSR Uyumluluk Danışmanlığı<br>✅ ESPR Uyumluluk Danışmanlığı<br>✅ KKDIK Uyumluluk Danışmanlığı<br>✅ REACH Uyumluluk Danışmanlığı<br>✅ Biyosidal Ürün Güvenliği<br>✅ SDS Hazırlama<br>✅ Etiket Hazırlama<br>✅ Ürün Güvenliği',
        'hero-phone': 'Hemen Ara: +90 532 509 77 58',
        'hero-consultation': 'Ücretsiz Danışmanlık',
        'hero-support': '7/24 Destek',
        'hero-slogan': 'Uyumluluk Güvenle Buluşuyor',
        'hero-subtitle-2': 'Regulatory Affairs & Legal Consultancy',
        'services-title': '🥇 Uzman Hizmetlerimiz',
        'services-subtitle': 'GPSR, ESPR, KKDIK, REACH, Biyosidal ürün güvenliği ve SDS etiket hazırlama alanında İstanbul\'un uzmanı',
        'about-title': 'Hakkımızda',
        'about-description': '<strong>Pier Compliance</strong>, İstanbul\'un GPSR, ESPR, KKDIK, REACH, Biyosidal ürün güvenliği ve SDS etiket hazırlama uzmanı olarak, kimyasal uyumluluk ve düzenleyici işler alanında 15+ yıl deneyimle hizmet vermektedir.',
        'about-years': 'Yıl Deneyim',
        'about-projects': 'Başarılı Proje',
        'about-team': 'Uzman Kadro',
        'about-support': 'Destek',
        'about-expert': '🥇 İstanbul\'un Uzmanı',
        'about-expert-desc': 'GPSR, ESPR, KKDIK, REACH alanında lider konum',
        'about-global': '🌍 Dünya Çapında Hizmet',
        'about-global-desc': 'Türkiye ve AB pazarında hizmet',
        'about-quick': '⚡ Hızlı Çözüm',
        'about-quick-desc': '7/24 acil durum desteği',
        'about-reliable': '🛡️ Güvenilir Hizmet',
        'about-reliable-desc': '%100 müşteri memnuniyeti',
        'contact-title': 'İletişim',
        'contact-subtitle': 'Hemen iletişime geçin, ücretsiz danışmanlık alın!',
        'contact-phone': 'Telefon',
        'contact-email': 'E-posta',
        'contact-address': 'Adres',
        'contact-hours': 'Çalışma Saatleri',
        'contact-address-value': 'İstanbul, Türkiye',
        'contact-hours-value': 'Pazartesi - Cuma: 09:00 - 18:00',
        'form-name': 'Ad Soyad',
        'form-email': 'E-posta',
        'form-phone': 'Telefon',
        'form-service': 'Hizmet',
        'form-service-select': 'Hizmet Seçin',
        'form-service-gpsr': 'GPSR Uyumluluk',
        'form-service-espr': 'ESPR Uyumluluk',
        'form-service-kkdik': 'KKDIK Uyumluluk',
        'form-service-reach': 'REACH Uyumluluk',
        'form-service-biocidal': 'Biyosidal Ürün Güvenliği',
        'form-service-sds': 'SDS Hazırlama',
        'form-service-label': 'Etiket Hazırlama',
        'form-service-product-safety': 'Ürün Güvenliği',
        'form-message': 'Mesajınız',
        'form-send': 'Gönder',
        'footer-expert': '🥇 İstanbul\'un GPSR, ESPR, KKDIK, REACH, Biyosidal Uyumluluk Uzmanı',
        'footer-slogan': 'Uyumluluk Güvenle Buluşuyor',
        'footer-services': '🥇 Uzman Hizmetlerimiz',
        'footer-contact': '📞 İletişim',
        'footer-copyright': 'Tüm hakları saklıdır. | 🥇 İstanbul\'un Uyumluluk Uzmanı',
        'language-tr': 'TR',
        'language-en': 'EN'
    },
    en: {
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        'hero-title': '🥇 GPSR, ESPR, KKDIK, REACH, Biocidal Compliance Expert',
        'hero-subtitle': 'Istanbul\'s Compliance Consultant',
        'hero-description': '✅ GPSR Compliance Consultancy<br>✅ ESPR Compliance Consultancy<br>✅ KKDIK Compliance Consultancy<br>✅ REACH Compliance Consultancy<br>✅ Biocidal Product Safety<br>✅ SDS Preparation<br>✅ Label Preparation<br>✅ Product Safety',
        'hero-phone': 'Call Now: +90 532 509 77 58',
        'hero-consultation': 'Free Consultation',
        'hero-support': '24/7 Support',
        'hero-slogan': 'Compliance Meets Security',
        'hero-subtitle-2': 'Regulatory Affairs & Legal Consultancy',
        'services-title': '🥇 Expert Services',
        'services-subtitle': 'Istanbul\'s expert in GPSR, ESPR, KKDIK, REACH, Biocidal product safety and SDS label preparation',
        'about-title': 'About Us',
        'about-description': '<strong>Pier Compliance</strong>, as Istanbul\'s GPSR, ESPR, KKDIK, REACH, Biocidal product safety and SDS label preparation expert, provides services with 15+ years of experience in chemical compliance and regulatory affairs.',
        'about-years': 'Years Experience',
        'about-projects': 'Successful Projects',
        'about-team': 'Expert Team',
        'about-support': 'Support',
        'about-expert': '🥇 Istanbul\'s Expert',
        'about-expert-desc': 'Leading position in GPSR, ESPR, KKDIK, REACH fields',
        'about-global': '🌍 Worldwide Service',
        'about-global-desc': 'Service in Turkey and EU market',
        'about-quick': '⚡ Quick Solution',
        'about-quick-desc': '24/7 emergency support',
        'about-reliable': '🛡️ Reliable Service',
        'about-reliable-desc': '100% customer satisfaction',
        'contact-title': 'Contact',
        'contact-subtitle': 'Contact us now, get free consultation!',
        'contact-phone': 'Phone',
        'contact-email': 'Email',
        'contact-address': 'Address',
        'contact-hours': 'Working Hours',
        'contact-address-value': 'Istanbul, Turkey',
        'contact-hours-value': 'Monday - Friday: 09:00 - 18:00',
        'form-name': 'Full Name',
        'form-email': 'Email',
        'form-phone': 'Phone',
        'form-service': 'Service',
        'form-service-select': 'Select Service',
        'form-service-gpsr': 'GPSR Compliance',
        'form-service-espr': 'ESPR Compliance',
        'form-service-kkdik': 'KKDIK Compliance',
        'form-service-reach': 'REACH Compliance',
        'form-service-biocidal': 'Biocidal Product Safety',
        'form-service-sds': 'SDS Preparation',
        'form-service-label': 'Label Preparation',
        'form-service-product-safety': 'Product Safety',
        'form-message': 'Your Message',
        'form-send': 'Send',
        'footer-expert': '🥇 Istanbul\'s GPSR, ESPR, KKDIK, REACH, Biocidal Compliance Expert',
        'footer-slogan': 'Compliance Meets Security',
        'footer-services': '🥇 Expert Services',
        'footer-contact': '📞 Contact',
        'footer-copyright': 'All rights reserved. | 🥇 Istanbul\'s Compliance Expert',
        'language-tr': 'TR',
        'language-en': 'EN'
    }
};

// Language switching function
function toggleLanguage() {
    currentLanguage = currentLanguage === 'tr' ? 'en' : 'tr';
    updateLanguage();
    updateLanguageToggle();
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-tr][data-en]');
    elements.forEach(element => {
        const trText = element.getAttribute('data-tr');
        const enText = element.getAttribute('data-en');
        
        if (currentLanguage === 'tr') {
            element.textContent = trText;
        } else {
            element.textContent = enText;
        }
    });
    
    // Update HTML content for elements with HTML
    const htmlElements = document.querySelectorAll('[data-tr][data-en]');
    htmlElements.forEach(element => {
        const trHtml = element.getAttribute('data-tr');
        const enHtml = element.getAttribute('data-en');
        
        if (element.tagName === 'P' && (trHtml.includes('<br>') || enHtml.includes('<br>'))) {
            if (currentLanguage === 'tr') {
                element.innerHTML = trHtml;
            } else {
                element.innerHTML = enHtml;
            }
        }
    });
    
    // Update form options
    updateFormOptions();
}

function updateLanguageToggle() {
    const toggleSpan = document.querySelector('.language-toggle span');
    if (toggleSpan) {
        toggleSpan.textContent = currentLanguage.toUpperCase();
    }
}

function updateFormOptions() {
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        const options = serviceSelect.querySelectorAll('option');
        options.forEach(option => {
            const trText = option.getAttribute('data-tr');
            const enText = option.getAttribute('data-en');
            
            if (trText && enText) {
                if (currentLanguage === 'tr') {
                    option.textContent = trText;
                } else {
                    option.textContent = enText;
                }
            }
        });
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = mobileToggle.querySelectorAll('span');
    if (mobileToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    updateLanguage();
    updateLanguageToggle();
    
    // Smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                const mobileToggle = document.querySelector('.mobile-menu-toggle');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileToggle.classList.remove('active');
                    const spans = mobileToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            }
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission();
        });
    }
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .about-features .feature, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form submission handler
function handleFormSubmission() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    
    // Get form values
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !phone || !service || !message) {
        showNotification('Lütfen tüm alanları doldurun.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Geçerli bir e-posta adresi girin.', 'error');
        return;
    }
    
    // Phone validation
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
        showNotification('Geçerli bir telefon numarası girin.', 'error');
        return;
    }
    
    // Simulate form submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
    
    // Simulate API call
    setTimeout(() => {
        showNotification('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.', 'success');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0.25rem;
            margin-left: auto;
        }
        
        .notification-close:hover {
            opacity: 0.8;
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Phone number click handler
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="tel:"]')) {
        e.preventDefault();
        const phoneNumber = e.target.getAttribute('href').replace('tel:', '');
        
        // Show confirmation dialog
        if (confirm(`Telefon numarasını aramak istiyor musunuz?\n${phoneNumber}`)) {
            window.location.href = `tel:${phoneNumber}`;
        }
    }
});

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(function() {
    // Header scroll effect
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Service worker registration for PWA features
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Analytics tracking (if needed)
function trackEvent(eventName, eventData = {}) {
    // Google Analytics 4 tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Custom tracking
    console.log('Event tracked:', eventName, eventData);
}

// Track form submissions
document.addEventListener('submit', function(e) {
    if (e.target.id === 'contactForm') {
        trackEvent('form_submit', {
            form_name: 'contact_form',
            service: e.target.querySelector('#service').value
        });
    }
});

// Track phone clicks
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="tel:"]')) {
        trackEvent('phone_click', {
            phone_number: e.target.getAttribute('href').replace('tel:', '')
        });
    }
});

// Track service card clicks
document.addEventListener('click', function(e) {
    if (e.target.closest('.service-card')) {
        const serviceCard = e.target.closest('.service-card');
        const serviceName = serviceCard.querySelector('h3').textContent;
        trackEvent('service_card_click', {
            service_name: serviceName
        });
    }
}); 