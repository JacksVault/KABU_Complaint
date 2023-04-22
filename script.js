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
const aboutLink = document.getElementById("about-link");
        const aboutMessage = "Welcome to our complaint reporting site for Kabarak University. We created this site to provide a safe and anonymous platform for students to report incidents of harassment by security guards. We believe that every student has the right to feel safe and respected on campus, and we are committed to addressing these concerns through proper channels.\n\nOur team worked hard to develop a simple and user-friendly interface that allows students to submit their complaints quickly and easily. We understand that reporting harassment can be a difficult and emotional experience, which is why we have designed this site to be as straightforward and supportive as possible.\n\nWe hope that this site will serve as a valuable resource for the Kabarak University community, and that it will help to foster a safe and inclusive campus culture for all students.";
        const aboutMessageDisplay = () => {
          alert(aboutMessage);
        }
        aboutLink.addEventListener("click", aboutMessageDisplay);
