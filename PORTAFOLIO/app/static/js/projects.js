document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const links = card.querySelectorAll('.project-links a');
        
        links.forEach(link => {
            link.addEventListener('mouseenter', (e) => {
                e.target.style.color = '#2980b9';
            });
            
            link.addEventListener('mouseleave', (e) => {
                e.target.style.color = '#3498db';
            });
        });
    });
});