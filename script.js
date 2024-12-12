function serviceClick(serviceName) {
    alert(`You selected: ${serviceName}`);
    console.log(`Service clicked: ${serviceName}`);

    const contactSection = document.querySelector('.contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    document.querySelectorAll('.service').forEach(service => {
        service.classList.remove('highlighted');
    });

    const selectedService = Array.from(document.querySelectorAll('.service')).find(service =>
        service.querySelector('h3').textContent === serviceName
    );

    if (selectedService) {
        selectedService.classList.add('highlighted');
    }
}
