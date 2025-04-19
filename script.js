document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('membership-form').addEventListener('submit', async function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        console.log(`Email: ${email}`); // Debugging log

        // Add the rest of your code here
    });
});
document.getElementById('membership-form').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    // Debugging log
    console.log("Form submission triggered!");
  
    // Gather form data
    const formData = {
      fullname: document.getElementById('fullname').value,
      email: document.getElementById('email').value,
    };
  
    // Send form data to backend
    const response = await fetch('http://localhost:3000/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      // Debugging log
      console.log("Form submitted successfully. Showing popup.");
      // Show the popup
      document.getElementById('thank-you-popup').style.display = 'block';
    } else {
      alert('An error occurred. Please try again.');
    }
  });