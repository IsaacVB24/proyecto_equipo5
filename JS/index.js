
const heroButton = document.querySelector('.btn-warning');
if (heroButton) {
    heroButton.addEventListener('click', () => {
        const productosSection = document.querySelector('#productos');
        if (productosSection) {
            productosSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Carousel
const testimoniosCarousel = document.querySelector('#testimoniosCarousel');
if (testimoniosCarousel) {
    const carouselInstance = new bootstrap.Carousel(testimoniosCarousel, {
        interval: 4000,
        ride: 'carousel'
    });
}

// Productos
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
        card.classList.add('hovered');
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        card.classList.remove('hovered');
    });
});

// productos 2
const productButtons = document.querySelectorAll('.btn-warning');
productButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('¡Gracias por tu interés! Pronto añadiremos más detalles sobre esta compra.');
    });
});

