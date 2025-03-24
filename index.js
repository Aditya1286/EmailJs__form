// EmailJS Configuration and Form Submission Handler

// Initialize EmailJS with public key
(function(){
    emailjs.init({
        publicKey: "cA9fZgMQoJqPXzlzX",
    });
})();

/**
 * Submit feedback form and send email via EmailJS
 * @param {Event} event - Form submission event
 */
function submitFeedback(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Collect form data
    const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        category: document.getElementById("category").value,
        course: document.getElementById("subject").value.trim(),
        message: document.getElementById("description").value.trim()
    };

    // Basic validation to ensure all fields are filled
    if (Object.values(formData).some(value => !value)) {
        alert("Please fill in all fields.");
        return;
    }

    // Send email using EmailJS
    emailjs.send("service_4nvyxnd", "template_2zw1yra", formData)
        .then(() => {
            // Reset form and show success message
            document.getElementById('feedbackForm').reset();
            document.getElementById('successMessage').classList.remove('hidden');
        })
        .catch((error) => {
            // Log error and show alert on failure
            console.error("Email send failed:", error);
            alert("Failed to submit feedback. Please try again.");
        });
}

/**
 * Close the success message modal
 */
function closeSuccessMessage() {
    document.getElementById('successMessage').classList.add('hidden');
}

// Attach event listener to form submission
document.getElementById('feedbackForm').addEventListener('submit', submitFeedback);
