document.getElementById('membership-form').addEventListener('submit', async function (e) {
  e.preventDefault(); // Prevent page reload on form submission

  // Collect form data
  const formData = {
      fullname: document.getElementById('fullname')?.value || '',
      email: document.getElementById('email')?.value || '',
      dob: document.getElementById('dob')?.value || '',
      address: document.getElementById('Address')?.value || '',
      city: document.getElementById('city')?.value || '',
      state: document.getElementById('state')?.value || '',
      zip: document.getElementById('zip')?.value || '',
      phone: document.getElementById('number')?.value || '',
      emergencyName: document.getElementById('emergencyname')?.value || '',
      emergencyRelationship: document.getElementById('emergencyRelationship')?.value || '',
      emergencyPhoneNumber: document.getElementById('emergencyPhonenumber')?.value || '',
      membershipType: document.getElementById('membershipType')?.value || '',
      preferredEvent: document.getElementById('preferredEvent')?.value || '',
      tshirt: document.getElementById('tshirt')?.value || '',
      hear: document.getElementById('hear')?.value || '',
      condition: document.getElementById('condition')?.value || '',
  };

  try {
      const response = await fetch('https://backend-1-tsgk.onrender.com/submit-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
      });

      if (response.ok) {
          hideMembershipPage(); // Hide the membership details
          showThankYouPopup(); // Show the "Thank You" pop-up
      } else {
          alert('Error: Unable to submit the form. Please try again.');
      }
  } catch (error) {
      console.error('Error:', error);
      alert('Failed to connect to the backend.');
  }
});

// Function to hide the Membership Details
function hideMembershipPage() {
  const membershipSection = document.querySelector('.container'); // Selects the membership container
  membershipSection.style.display = 'none'; // Hides the membership page completely
}

// Function to show the "Thank You" pop-up screen
function showThankYouPopup() {
  const popup = document.getElementById('thank-you-popup');
  popup.style.display = 'block'; // Makes the pop-up visible
}