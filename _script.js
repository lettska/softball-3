// Sample team data
const teamMembers = [
    {
        name: 'Sarah Johnson',
        position: 'Pitcher',
        number: '12',
        image: 'https://source.unsplash.com/300x300/?athlete'
    },
    {
        name: 'Emily Rodriguez',
        position: 'Catcher',
        number: '24',
        image: 'https://source.unsplash.com/300x300/?softball'
    },
    {
        name: 'Jessica Chen',
        position: 'First Base',
        number: '7',
        image: 'https://source.unsplash.com/300x300/?player'
    },
    // Add more team members as needed
];

// Sample schedule data
const gameSchedule = [
    {
        date: '2024-03-15',
        opponent: 'Eagles',
        location: 'Home Field',
        time: '2:00 PM'
    },
    {
        date: '2024-03-22',
        opponent: 'Hawks',
        location: 'Away Field',
        time: '3:30 PM'
    },
    // Add more games as needed
];

// Function to populate team members
function populateTeam() {
    const teamGrid = document.querySelector('.team-grid');
    teamMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'team-member';
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.position}</p>
            <p>#${member.number}</p>
        `;
        teamGrid.appendChild(memberCard);
    });
}

// Function to populate schedule
function populateSchedule() {
    const scheduleContainer = document.querySelector('.schedule-container');
    const scheduleTable = document.createElement('table');
    scheduleTable.innerHTML = `
        <thead>
            <tr>
                <th>Date</th>
                <th>Opponent</th>
                <th>Location</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
            ${gameSchedule.map(game => `
                <tr>
                    <td>${new Date(game.date).toLocaleDateString()}</td>
                    <td>${game.opponent}</td>
                    <td>${game.location}</td>
                    <td>${game.time}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
    scheduleContainer.appendChild(scheduleTable);
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData);
    
    // Here you would typically send the form data to a server
    console.log('Contact form submitted:', formObject);
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Handle tryout form submission
document.getElementById('tryout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData);
    
    // Here you would typically send the form data to a server
    console.log('Tryout form submitted:', formObject);
    alert('Thank you for your tryout request! We will contact you with more information soon.');
    this.reset();
});

// Mobile menu handling
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').length > 1) { // Ignore single # links
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add touch support for dropdowns on mobile
    if ('ontouchstart' in window) {
        document.querySelectorAll('.dropdown > a, .sub-dropdown > a').forEach(dropdownToggle => {
            dropdownToggle.addEventListener('click', function(e) {
                e.preventDefault();
                const parent = this.parentElement;
                const wasActive = parent.classList.contains('active');
                
                // Close all dropdowns
                document.querySelectorAll('.dropdown, .sub-dropdown').forEach(item => {
                    item.classList.remove('active');
                });

                // Toggle clicked dropdown
                if (!wasActive) {
                    parent.classList.add('active');
                }
            });
        });
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    populateTeam();
    populateSchedule();

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}); 