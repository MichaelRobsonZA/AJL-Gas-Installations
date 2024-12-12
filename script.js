// Function to handle service button clicks
function serviceClick(serviceName) {
    alert(`You selected: ${serviceName}`);
    console.log(`Service clicked: ${serviceName}`);

    const contactSection = document.querySelector('.contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Remove highlights and clicked effects from all services
    document.querySelectorAll('.service').forEach(service => {
        service.classList.remove('highlighted');
        service.classList.remove('clicked');
    });

    // Highlight and animate the clicked service
    const selectedService = Array.from(document.querySelectorAll('.service')).find(service =>
        service.querySelector('h3').textContent === serviceName
    );

    if (selectedService) {
        selectedService.classList.add('highlighted', 'clicked');
    }
}

// Function to synchronize GIFs and make them vibrant
window.onload = function() {
    const gifs = document.querySelectorAll('.service img');
    gifs.forEach(gif => {
        gif.src = gif.src; // Trigger a reload of the GIF

        // Add vibrant effect to GIFs
        gif.style.filter = 'brightness(1.2) saturate(1.5)';
        gif.style.transition = 'filter 0.3s ease-in-out';

        // Add hover effect for extra vibrancy
        gif.addEventListener('mouseover', () => {
            gif.style.filter = 'brightness(1.5) saturate(2)';
        });
        gif.addEventListener('mouseout', () => {
            gif.style.filter = 'brightness(1.2) saturate(1.5)';
        });
    });
}

// Initializing the vibrant effect when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const gifs = document.querySelectorAll('.service[_{{{CITATION{{{_1{](https://github.com/84bluedevil/portfolio/tree/8823b61b72da0a978fb05ca8bee7d41312daed9b/scripts%2FsendMessage.php)[_{{{CITATION{{{_2{](https://github.com/Santa0727/sandwichmap-net/tree/7594d53a73c9e6d0ee8cb2a6028782c044d60c89/resources%2Fviews%2Flayouts%2Fcss.blade.php)    gifs.forEach(gif => {
        gif.src = gif.src; // Trigger a reload of the GIF
    });
});
