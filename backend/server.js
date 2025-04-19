const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Enable CORS middleware
app.use(cors({ origin: 'http://127.0.0.1:5500' })); // Specify the frontend origin

app.use(bodyParser.json()); // Middleware to parse JSON

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'outlook', // Example: Gmail
    auth: {
        user: 'Mchandler.managemant6757@outlook.com', // Replace with your email
        pass: 'Ayomide123?' // Replace with your password or app-specific password
    }
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const { fullname, email } = req.body;

    if (!fullname || !email) {
        return res.status(400).send('Full Name and Email are required.');
    }

    console.log('Form received:', { fullname, email });

    // Schedule email for 24 hours later
    setTimeout(() => {
        const mailOptions = {
            from: 'Mchandler.managemant6757@outlook.com',
            to: email,
            subject: 'Membership Application Accepted',
            text: `Hello ${fullname},\n\nYour membership application has been accepted! Welcome to our community.\n\nBest regards,\nYour Team`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent successfully:', info.response);
            }
        });
    }, 24 * 60 * 60 * 1000); // 24-hour delay

    res.status(200).send('Form submitted successfully. Auto-reply will be sent after 24 hours.');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

fetch('http://localhost:3000/submit-form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
});
