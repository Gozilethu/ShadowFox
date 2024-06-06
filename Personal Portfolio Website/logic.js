// Function to open an image in a new tab
function openImage(imageUrl) {
    window.open(imageUrl, '_blank');
}

// Default image URLs in case no URL is provided when calling the function
const defaultImageUrls = [
    'images/IMG-20240301-WA0001.jpg',
    'images/mabutho02.jpg',
    'images/mabutho03.jpg'
];

// Function to open an image in a new tab with a default URL if no URL is provided
function openImageWithDefault(imageUrl = defaultImageUrls[0]) {
    window.open(imageUrl, '_blank');
}

// Function to show the sidebar
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

// Function to hide the sidebar
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// Function to animate the progress bars
function animateSkills() {
    var skills = document.querySelectorAll('.skill');
    skills.forEach(function(skill) {
        var progressBar = skill.querySelector('.bar');
        var skillName = skill.querySelector('p').textContent;
        var skillLevel = getSkillLevel(skillName);
        progressBar.style.width = skillLevel + '%';
    });
}

// Call the function to animate skills when the page loads
window.onload = function() {
    animateSkills();
};

// Function to animate the bar charts
function animateSkills() {
    var skills = document.querySelectorAll('.skill');
    skills.forEach(function(skill) {
        var bar = skill.querySelector('.bar');
        var height = parseInt(bar.style.height);
        animateBar(bar, height);
    });
}

// Function to animate individual bars
function animateBar(bar, height) {
    var currentHeight = 0;
    var interval = setInterval(function() {
        if (currentHeight >= height) {
            clearInterval(interval);
        } else {
            currentHeight++;
            bar.style.height = currentHeight + '%';
        }
    }, 10); 
}

// Call the function to animate skills when the page loads
window.onload = function() {
    animateSkills();
};


