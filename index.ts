// Elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement | null;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement | null;

// Function to generate the resume content
function generateResume(data: {
    name: string,
    email: string,
    education: string,
    experience: string,
    skills: string,
    description: string
}) {
    return `
        <h2>Generated Resume</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Education:</strong> ${data.education}</p>
        <p><strong>Experience:</strong> ${data.experience}</p>
        <p><strong>Skills:</strong> ${data.skills}</p>
        <p><strong>Description:</strong> ${data.description}</p>
        <button id="editResume">Edit Resume</button>
    `;
}

// Function to handle form submission and resume generation
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent form from refreshing the page

        // Retrieve values from the form fields
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;
        const description = (document.getElementById('description') as HTMLInputElement).value;

        // Generate and display the resume in the output div
        resumeOutput.innerHTML = generateResume({ name, email, education, experience, skills, description });

        // Add listener to the "Edit Resume" button
        const editButton = document.getElementById('editResume') as HTMLButtonElement;
        if (editButton) {
            editButton.addEventListener('click', () => {
                // Populate the form with the existing resume data for editing
                (document.getElementById('name') as HTMLInputElement).value = name;
                (document.getElementById('email') as HTMLInputElement).value = email;
                (document.getElementById('education') as HTMLInputElement).value = education;
                (document.getElementById('experience') as HTMLInputElement).value = experience;
                (document.getElementById('skills') as HTMLInputElement).value = skills;
                (document.getElementById('description') as HTMLInputElement).value = description;

                // Scroll back to the form for easy editing
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });
} else {
    console.error('Form or output div not found in the DOM.');
}
