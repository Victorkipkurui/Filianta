function openServiceDetails(service) {
   let url = '';
    switch (service) {
        case 'all':
            url = 'all.html';
            break;
        case 'labor-delivery':
            url = 'labor-delivery.html';
            break;
        case 'pain-management':
            url = 'pain-management.html';
            break;
        case 'postnatal-care':
            url = 'postnatal-care.html';
            break;
        case 'nicu':
            url = 'nicu.html';
            break;
        default:
            url = 'index.html'; 
    }

        window.location.href = url;
    }

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
navbar.classList.toggle('active');
});
    