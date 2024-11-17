function generateResume() {
    // Collecting the values from the form fields
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const languages = (document.getElementById('languages') as HTMLTextAreaElement).value;
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const hobbies = (document.getElementById('hobbies') as HTMLTextAreaElement).value;
    const certifications = (document.getElementById('certifications') as HTMLTextAreaElement).value;

    // Debugging: check if data is being fetched correctly
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Skills:", skills);
    console.log("Languages:", languages);
    console.log("Objective:", objective);
    console.log("Education:", education);
    console.log("Experience:", experience);
    console.log("Hobbies:", hobbies);
    console.log("Certifications:", certifications);

    // Resume content fields
    const resumeContent = document.getElementById('resumeContent');
    const resumeName = document.getElementById('resumeName');
    const resumePhone = document.getElementById('resumePhone');
    const resumeEmail = document.getElementById('resumeEmail');
    const resumeLinkedIn = document.getElementById('resumeLinkedIn') as HTMLAnchorElement;
    const resumeSkills = document.getElementById('resumeSkills');
    const resumeLanguages = document.getElementById('resumeLanguages');
    const resumeObjective = document.getElementById('resumeObjective');
    const resumeEducation = document.getElementById('resumeEducation');
    const resumeExperience = document.getElementById('resumeExperience');
    const resumeHobbies = document.getElementById('resumeHobbies');
    const resumeCertifications = document.getElementById('resumeCertifications');

    // Check if all elements exist
    if (
        resumeContent &&
        resumeName &&
        resumePhone &&
        resumeEmail &&
        resumeLinkedIn &&
        resumeSkills &&
        resumeLanguages &&
        resumeObjective &&
        resumeEducation &&
        resumeExperience &&
        resumeHobbies &&
        resumeCertifications
    ) {
        // Populating the resume with user data
        resumeName.innerText = name;
        resumePhone.innerText = phone;
        resumeEmail.innerText = email;
        resumeLinkedIn.href = linkedin;
        resumeLinkedIn.innerText = linkedin;
        resumeSkills.innerText = skills;
        resumeLanguages.innerText = languages;
        resumeObjective.innerText = objective;
        resumeEducation.innerText = education;
        resumeExperience.innerText = experience;
        resumeHobbies.innerText = hobbies;
        resumeCertifications.innerText = certifications;

        // Show the resume content
        resumeContent.style.display = 'flex';
    } else {
        console.error("One or more resume fields are missing.");
    }
}
