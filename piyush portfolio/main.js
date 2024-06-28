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
