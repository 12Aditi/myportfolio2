const sections = document.querySelectorAll('.section');
let currentSection = 0;

function showSection(index) {
    sections.forEach((section, i) => {
        section.classList.remove('active');
        if (i === index) {
            section.classList.add('active');
        }
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSection = (currentSection + 1) % sections.length;
    showSection(currentSection);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSection = (currentSection - 1 + sections.length) % sections.length;
    showSection(currentSection);
});

// Initialize the first section
showSection(currentSection);

// Toggle Dark Mode
document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});