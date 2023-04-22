const complaintForm = document.getElementById('complaint-form');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

complaintForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const registrationNumber = document.getElementById('registration-number').value;
  const schoolEmail = document.getElementById('school-email').value;
  const statementOfComplaint = document.getElementById('statement-of-complaint').value;

  // You can use Firebase's SDK to submit the complaint data to the database
  // Here's an example of how you can use Firebase's Realtime Database:
  const complaintsRef = firebase.database().ref('complaints');
  const newComplaintRef = complaintsRef.push();
  newComplaintRef.set({
    registrationNumber: registrationNumber,
    schoolEmail: schoolEmail,
    statementOfComplaint: statementOfComplaint
  }, (error) => {
    if (error) {
      errorMessage.classList.remove('hidden');
      successMessage.classList.add('hidden');
    } else {
      successMessage.classList.remove('hidden');
      errorMessage.classList.add('hidden');
      complaintForm.reset();
    }
  });
});

//About

