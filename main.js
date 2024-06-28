// Optional: Add JavaScript for form submission or other interactions
// Example: Form submission with AJAX for file upload
document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Files uploaded successfully!');
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error uploading files.');
    });
});
<script>
    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting
        
        // Validate form fields
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let feedback = document.getElementById("feedback").value.trim();

        if (name === "" || email === "" || feedback === "") {
            alert("Please fill in all fields");
            return;
        }

        // Simulate sending feedback to server (in a real application, you would send this data to a server using AJAX or fetch)
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Feedback:", feedback);

        // Show a success message
        alert("Feedback submitted successfully!");

        // Reset the form
        document.getElementById("feedbackForm").reset();
    });
</script>
