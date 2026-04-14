// js/main.js

// Functionality for dynamic content rendering
function renderContent() {
    // Dynamic content rendering logic here
}

// Typing animation
function typingAnimation(element, text, index) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typingAnimation(element, text, index), 100);
    }
}

// Smooth scrolling
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Mobile menu functionality
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

// Form handling
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Handle form data submission logic here
}

// Interactive features initialization
window.onload = function() {
    renderContent();
    const typingElement = document.getElementById('typingEffect');
    typingAnimation(typingElement, 'Hello World!', 0);
    const scrollButton = document.getElementById('scrollButton');
    scrollButton.addEventListener('click', () => smoothScroll('targetSection'));
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
    const form = document.getElementById('myForm');
    form.addEventListener('submit', handleFormSubmit);
};