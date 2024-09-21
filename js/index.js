function openServiceDetails(service) {
   let url = '';
    switch (service) {
        case 'all':
            url = 'all.html';
            break;
        case 'doctor':
            url = 'profile.html';
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

function countUp(element) {
    const target = +element.getAttribute('data-target');
    const increment = target / 100;
    let count = 0;
  
    const updateCount = () => {
      count += increment;
      
      if (count < target) {
        element.textContent = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        
        if (format === 'percent') {
          element.textContent = `${target}%`;
        } else if (format === 'plus') {
          element.textContent = `${target}+`;
        } else {
          element.textContent = target;
        }
      }
    };
  
    updateCount();
  }
  
const counters = document.querySelectorAll('.stat');

counters.forEach(counter => {
if (counter.id === 'count') {
    countUp(counter, 'percent'); 
    } else if (counter.id === 'users') {
    countUp(counter, 'plus'); 
    } else {
    countUp(counter); 
    }
});

const btn = document.getElementById("playButton");
const span = document.getElementsByClassName("close")[0];
const video = document.getElementById("videoPlayer");

btn.onclick = function(event) {
  event.stopPropagation(); 
  video.play();
}
if(video.paused){
   video.play()
}else{
   video.pause()
}
