document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validaciones básicas
        if (!name || !email || !message) {
            alert('Por favor, complete todos los campos');
            return;
        }
        
        // Aquí podrías añadir lógica de envío de formulario
        console.log('Formulario enviado:', { name, email, message });
        alert('Mensaje enviado exitosamente');
        contactForm.reset();
    });
});