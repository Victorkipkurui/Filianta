function openProfileDetails(service) {
  let url = '';
   switch (service) {
       case 'doctor':
           url = 'profile.html';
           break;
       case 'doctor1':
           url = 'doctor.html';
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
