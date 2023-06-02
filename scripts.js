// Start with the first skill
let currentSkillIndex = 0;

// Get references to elements
const skills = document.querySelectorAll('.skill');
const previousButton = document.getElementById('previous-skill');
const nextButton = document.getElementById('next-skill');

// Show the first skill
skills[currentSkillIndex].style.display = 'block';

// Handle previous button
previousButton.addEventListener('click', function() {
    // Hide current skill
    skills[currentSkillIndex].style.display = 'none';

    // Move to previous skill
    currentSkillIndex--;
    if (currentSkillIndex < 0) {
        currentSkillIndex = skills.length - 1;
    }

    // Show new skill
    skills[currentSkillIndex].style.display = 'block';
});

// Handle next button
nextButton.addEventListener('click', function() {
    // Hide current skill
    skills[currentSkillIndex].style.display = 'none';

    // Move to next skill
    currentSkillIndex++;
    if (currentSkillIndex >= skills.length) {
        currentSkillIndex = 0;
    }

    // Show new skill
    skills[currentSkillIndex].style.display = 'block';
});
