// Elements
var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
// Function to generate the resume content
function generateResume(data) {
    return "\n        <h2>Generated Resume</h2>\n        <p><strong>Name:</strong> ".concat(data.name, "</p>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Education:</strong> ").concat(data.education, "</p>\n        <p><strong>Experience:</strong> ").concat(data.experience, "</p>\n        <p><strong>Skills:</strong> ").concat(data.skills, "</p>\n        <p><strong>Description:</strong> ").concat(data.description, "</p>\n        <button id=\"editResume\">Edit Resume</button>\n    ");
}
// Function to handle form submission and resume generation
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from refreshing the page
        // Retrieve values from the form fields
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var description = document.getElementById('description').value;
        // Generate and display the resume in the output div
        resumeOutput.innerHTML = generateResume({ name: name, email: email, education: education, experience: experience, skills: skills, description: description });
        // Add listener to the "Edit Resume" button
        var editButton = document.getElementById('editResume');
        if (editButton) {
            editButton.addEventListener('click', function () {
                // Populate the form with the existing resume data for editing
                document.getElementById('name').value = name;
                document.getElementById('email').value = email;
                document.getElementById('education').value = education;
                document.getElementById('experience').value = experience;
                document.getElementById('skills').value = skills;
                document.getElementById('description').value = description;
                // Scroll back to the form for easy editing
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });
}
else {
    console.error('Form or output div not found in the DOM.');
}
