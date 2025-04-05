document.addEventListener('DOMContentLoaded', () => {
    // Cerrar mensajes flash automáticamente
    const flashMessages = document.querySelectorAll('.flash-messages .alert');
    
    flashMessages.forEach(message => {
        setTimeout(() => {
            message.style.transition = 'opacity 0.5s';
            message.style.opacity = 0;
            setTimeout(() => message.remove(), 500);
        }, 3000);
    });

    // Menú responsivo (opcional)
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});