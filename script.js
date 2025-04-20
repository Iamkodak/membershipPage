document.getElementById('membership-form').addEventListener('submit', async function (e) {
  e.preventDefault(); // Prevent page reload on form submission

  // Collect all form data
  const formData = {
      fullname: document.getElementById('fullname')?.value || '',
      dob: document.getElementById('dob')?.value || '',
      address: document.getElementById('Address')?.value || '',
      city: document.getElementById('city')?.value || '',
      state: document.getElementById('state')?.value || '',
      zip: document.getElementById('zip')?.value || '',
      phone: document.getElementById('number')?.value || '',
      email: document.getElementById('email')?.value || '',
      emergencyName: document.getElementById('emergencyName')?.value || '',
      emergencyRelationship: document.getElementById('emergencyRelationship')?.value || '',
      emergencyPhoneNumber: document.getElementById('emergencyPhonenumber')?.value || '',
      membershipType: document.getElementById('membershipType')?.value || '',
      preferredEvent: document.getElementById('preferredEvent')?.value || '',
      tshirt: document.getElementById('tshirt')?.value || '',
      hear: document.getElementById('hear')?.value || '',
      condition: document.getElementById('condition')?.value || '',
  };

  try {
    const response = await fetch('https://backend-atc0.onrender.com/submit-form', { // Replace with your actual backend URL
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
  });

      if (response.ok) {
          showThankYouPopup(); // Show pop-up confirmation screen
      } else {
          alert('Error: Unable to submit the form. Please try again.');
      }
  } catch (error) {
      console.error('Error:', error);
      alert('Failed to connect to the backend.');
  }
});

// Function to show the "Thank You" pop-up screen and hide the form
function showThankYouPopup() {
  const popup = document.getElementById('thank-you-popup');
  const form = document.getElementById('membership-form');
  
  popup.style.display = 'block'; // Make the pop-up visible
  form.style.display = 'none';  // Hide the form
}