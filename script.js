function generateResume() {
    // Collecting the values from the form fields
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var linkedin = document.getElementById('linkedin').value;
    var skills = document.getElementById('skills').value;
    var languages = document.getElementById('languages').value;
    var objective = document.getElementById('objective').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var hobbies = document.getElementById('hobbies').value;
    var certifications = document.getElementById('certifications').value;
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
    var resumeContent = document.getElementById('resumeContent');
    var resumeName = document.getElementById('resumeName');
    var resumePhone = document.getElementById('resumePhone');
    var resumeEmail = document.getElementById('resumeEmail');
    var resumeLinkedIn = document.getElementById('resumeLinkedIn');
    var resumeSkills = document.getElementById('resumeSkills');
    var resumeLanguages = document.getElementById('resumeLanguages');
    var resumeObjective = document.getElementById('resumeObjective');
    var resumeEducation = document.getElementById('resumeEducation');
    var resumeExperience = document.getElementById('resumeExperience');
    var resumeHobbies = document.getElementById('resumeHobbies');
    var resumeCertifications = document.getElementById('resumeCertifications');
    // Check if all elements exist
    if (resumeContent &&
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
        resumeCertifications) {
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
    }
    else {
        console.error("One or more resume fields are missing.");
    }
}
