// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Highlight current page in navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPath) {
            link.classList.add('active');
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, section').forEach(el => {
    observer.observe(el);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.backgroundPosition = `center ${rate}px`;
    }
});

// Player filtering and view toggle functionality (only on players page)
if (document.querySelector('.filter-btn')) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const viewButtons = document.querySelectorAll('.view-btn');
    const cardsContainer = document.querySelector('.cards');
    const tableContainer = document.querySelector('.table-container');
    const cards = document.querySelectorAll('.card[data-position]');
    const tableRows = document.querySelectorAll('.players-table tbody tr[data-position]');

    // View toggle functionality
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all view buttons
            viewButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const viewValue = button.getAttribute('data-view');

            if (viewValue === 'cards') {
                cardsContainer.style.display = 'grid';
                tableContainer.style.display = 'none';
            } else {
                cardsContainer.style.display = 'none';
                tableContainer.style.display = 'block';
            }
        });
    });

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Filter cards
            cards.forEach(card => {
                const position = card.getAttribute('data-position');

                if (filterValue === 'all' || position === filterValue) {
                    card.style.removeProperty('display');
                    card.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    card.style.display = 'none';
                }
            });

            // Filter table rows
            tableRows.forEach(row => {
                const position = row.getAttribute('data-position');

                if (filterValue === 'all' || position === filterValue) {
                    row.style.removeProperty('display');
                    row.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });
}

// Player data for modal
const playerData = {
    'John Doe': {
        image: 'c:\\Users\\USER\\OneDrive\\Desktop\\WEB DESIGN ASSIGNMENT\\assets\\img\\p1.jpg',
        position: 'Striker',
        age: 25,
        club: 'Premier League Aspirant',
        nationality: 'Sierra Leonean',
        height: '6\'2"',
        weight: '185 lbs',
        foot: 'Right',
        role: 'Starter',
        goals: 15,
        assists: 8,
        appearances: 28,
        cleanSheets: 0,
        bio: 'John Doe is a dynamic striker known for his exceptional finishing and aerial ability. With over 15 goals this season, he has proven to be a reliable goal scorer for his club. His dedication to the sport and commitment to representing Sierra Leone make him a valuable asset to the national team.'
    },
    'Jane Smith': {
        image: 'c:\\Users\\USER\\OneDrive\\Desktop\\WEB DESIGN ASSIGNMENT\\assets\\img\\p2.jpg',
        position: 'Midfielder',
        age: 22,
        club: 'Rising Star',
        nationality: 'Sierra Leonean',
        height: '5\'9"',
        weight: '165 lbs',
        foot: 'Left',
        role: 'Starter',
        goals: 5,
        assists: 12,
        appearances: 25,
        cleanSheets: 0,
        bio: 'Jane Smith is a creative midfielder with excellent vision and passing range. Her ability to control the midfield and create scoring opportunities has made her an integral part of her team. She continues to develop her skills and aims to make a significant impact at the international level.'
    },
    'Mike Johnson': {
        image: 'c:\\Users\\USER\\OneDrive\\Desktop\\WEB DESIGN ASSIGNMENT\\assets\\img\\p3.jpg',
        position: 'Defender',
        age: 28,
        club: 'Experienced Pro',
        nationality: 'Sierra Leonean',
        height: '6\'0"',
        weight: '180 lbs',
        foot: 'Right',
        role: 'Senior',
        goals: 2,
        assists: 3,
        appearances: 30,
        cleanSheets: 8,
        bio: 'Mike Johnson is a solid defender with extensive experience in professional football. His leadership qualities and defensive prowess have earned him respect among teammates and coaches alike. He serves as a mentor to younger players and is committed to strengthening Sierra Leone\'s defensive line.'
    },
    'Sarah Lee': {
        image: 'c:\\Users\\USER\\OneDrive\\Desktop\\WEB DESIGN ASSIGNMENT\\assets\\img\\p4.jpg',
        position: 'Goalkeeper',
        age: 24,
        club: 'Elite Keeper',
        nationality: 'Sierra Leonean',
        height: '5\'11"',
        weight: '170 lbs',
        foot: 'Right',
        role: 'Substitute',
        goals: 0,
        assists: 0,
        appearances: 15,
        cleanSheets: 6,
        bio: 'Sarah Lee is a talented goalkeeper with quick reflexes and excellent shot-stopping abilities. Her consistent performances have made her a reliable backup option. She is dedicated to improving her skills and contributing to the national team\'s success.'
    },
    'David Kim': {
        image: 'c:\\Users\\USER\\OneDrive\\Desktop\\WEB DESIGN ASSIGNMENT\\assets\\img\\p5.jpg',
        position: 'Winger',
        age: 26,
        club: 'Speed Demon',
        nationality: 'Sierra Leonean',
        height: '5\'8"',
        weight: '160 lbs',
        foot: 'Left',
        role: 'Starter',
        goals: 8,
        assists: 10,
        appearances: 26,
        cleanSheets: 0,
        bio: 'David Kim is a pacey winger known for his dribbling skills and ability to beat defenders. His speed and agility make him a constant threat on the flanks. He is passionate about football and proud to represent Sierra Leone internationally.'
    },
    'Emma Brown': {
        image: 'c:\\Users\\USER\\OneDrive\\Desktop\\WEB DESIGN ASSIGNMENT\\assets\\img\\p6.jpg',
        position: 'Forward',
        age: 23,
        club: 'Goal Scorer',
        nationality: 'Sierra Leonean',
        height: '5\'7"',
        weight: '155 lbs',
        foot: 'Right',
        role: 'Substitute',
        goals: 12,
        assists: 4,
        appearances: 20,
        cleanSheets: 0,
        bio: 'Emma Brown is a clinical finisher with an eye for goal. Her ability to find the back of the net consistently has made her a valuable squad member. She is focused on developing her all-around game and making a bigger impact for her club and country.'
    },
    'Ahmed Conteh': {
        image: 'c:\\Users\\USER\\OneDrive\\Desktop\\WEB DESIGN ASSIGNMENT\\assets\\img\\p7.jpg',
        position: 'Goalkeeper',
        age: 27,
        club: 'Wall of Steel',
        nationality: 'Sierra Leonean',
        height: '6\'1"',
        weight: '185 lbs',
        foot: 'Right',
        role: 'Senior',
        goals: 0,
        assists: 0,
        appearances: 32,
        cleanSheets: 12,
        bio: 'Ahmed Conteh is a commanding presence in goal, known for his shot-stopping and distribution. His experience and reliability have made him a cornerstone of his team. He is committed to developing young goalkeepers and strengthening Sierra Leone\'s goalkeeping standards.'
    },
    'Mariam Bangura': {
        image: 'c:\\Users\\USER\\OneDrive\\Desktop\\WEB DESIGN ASSIGNMENT\\assets\\img\\p8.jpg',
        position: 'Defender',
        age: 24,
        club: 'Iron Curtain',
        nationality: 'Sierra Leonean',
        height: '5\'10"',
        weight: '175 lbs',
        foot: 'Right',
        role: 'Starter',
        goals: 1,
        assists: 2,
        appearances: 29,
        cleanSheets: 9,
        bio: 'Mariam Bangura is a composed defender with excellent positioning and tackling ability. Her defensive solidity has been crucial to her team\'s success. She is dedicated to her craft and aims to contribute to Sierra Leone\'s defensive stability.'
    },
    'Joseph Sesay': {
        image: 'c:\\Users\\USER\\OneDrive\\Desktop\\WEB DESIGN ASSIGNMENT\\assets\\img\\p9.jpg',
        position: 'Midfielder',
        age: 26,
        club: 'Playmaker',
        nationality: 'Sierra Leonean',
        height: '5\'10"',
        weight: '170 lbs',
        foot: 'Right',
        role: 'Substitute',
        goals: 3,
        assists: 9,
        appearances: 22,
        cleanSheets: 0,
        bio: 'Joseph Sesay is a box-to-box midfielder with good stamina and work rate. His ability to contribute both defensively and offensively makes him versatile. He is focused on improving his game and representing Sierra Leone with pride.'
    },
    'Fatima Koroma': {
        image: 'c:\\Users\\USER\\OneDrive\\Desktop\\WEB DESIGN ASSIGNMENT\\assets\\img\\p10.jpg',
        position: 'Forward',
        age: 22,
        club: 'Rising Talent',
        nationality: 'Sierra Leonean',
        height: '5\'6"',
        weight: '150 lbs',
        foot: 'Left',
        role: 'Youth',
        goals: 6,
        assists: 5,
        appearances: 18,
        cleanSheets: 0,
        bio: 'Fatima Koroma is a promising young forward with great potential. Her technical skills and goal-scoring instinct have caught the attention of scouts. She is committed to her development and excited about her future in football.'
    },
    'Samuel Kamara': {
        image: 'c:\\Users\\USER\\OneDrive\\Desktop\\WEB DESIGN ASSIGNMENT\\assets\\img\\p11.jpg',
        position: 'Defender',
        age: 29,
        club: 'Veteran Defender',
        nationality: 'Sierra Leonean',
        height: '6\'0"',
        weight: '185 lbs',
        foot: 'Right',
        role: 'Senior',
        goals: 2,
        assists: 1,
        appearances: 31,
        cleanSheets: 10,
        bio: 'Samuel Kamara is a veteran defender with years of experience at the highest level. His leadership and defensive expertise have been invaluable to his teams. He is passionate about mentoring young players and strengthening Sierra Leone football.'
    },
    'Amina Jalloh': {
        image: 'c:\\Users\\USER\\OneDrive\\Desktop\\WEB DESIGN ASSIGNMENT\\assets\\img\\p12.jpg',
        position: 'Midfielder',
        age: 25,
        club: 'Creative Midfielder',
        nationality: 'Sierra Leonean',
        height: '5\'8"',
        weight: '165 lbs',
        foot: 'Right',
        role: 'Starter',
        goals: 4,
        assists: 11,
        appearances: 27,
        cleanSheets: 0,
        bio: 'Amina Jalloh is a creative midfielder with excellent passing range and vision. Her ability to unlock defenses has made her a key playmaker. She is dedicated to her craft and proud to represent Sierra Leone internationally.'
    },
    'Mohamed Fornah': {
        image: 'c:\\Users\\USER\\OneDrive\\Desktop\\WEB DESIGN ASSIGNMENT\\assets\\img\\p13.jpg',
        position: 'Forward',
        age: 21,
        club: 'Young Prospect',
        nationality: 'Sierra Leonean',
        height: '5\'9"',
        weight: '165 lbs',
        foot: 'Right',
        role: 'Youth',
        goals: 4,
        assists: 3,
        appearances: 16,
        cleanSheets: 0,
        bio: 'Mohamed Fornah is a young prospect with raw talent and potential. His pace and finishing ability show promise for the future. He is focused on his development and eager to make his mark in professional football.'
    },
    'Grace Stevens': {
        image: 'c:\\Users\\USER\\OneDrive\\Desktop\\WEB DESIGN ASSIGNMENT\\assets\\img\\p14.jpg',
        position: 'Goalkeeper',
        age: 30,
        club: 'Experienced Keeper',
        nationality: 'Sierra Leonean',
        height: '5\'10"',
        weight: '175 lbs',
        foot: 'Right',
        role: 'Starter',
        goals: 0,
        assists: 0,
        appearances: 33,
        cleanSheets: 11,
        bio: 'Grace Stevens is an experienced goalkeeper with a wealth of knowledge and skill. Her shot-stopping and command of the area have been crucial to her team\'s success. She is committed to developing the next generation of goalkeepers in Sierra Leone.'
    },
    'Isabella Tucker': {
        image: 'c:\\Users\\USER\\OneDrive\\Desktop\\WEB DESIGN ASSIGNMENT\\assets\\img\\p15.jpg',
        position: 'Midfielder',
        age: 19,
        club: 'Youth Academy',
        nationality: 'Sierra Leonean',
        height: '5\'5"',
        weight: '140 lbs',
        foot: 'Left',
        role: 'Youth',
        goals: 2,
        assists: 4,
        appearances: 12,
        cleanSheets: 0,
        bio: 'Isabella Tucker is a young midfielder with great potential and technical ability. Her vision and passing skills are developing rapidly. She is excited about her football journey and committed to representing Sierra Leone at the highest level.'
    }
};

// Modal functionality (only on players page)
if (document.getElementById('playerModal')) {
    const modal = document.getElementById('playerModal');
    const closeBtn = document.querySelector('.close');

    // Function to open modal with player data
    function openPlayerModal(playerName) {
        const data = playerData[playerName];
        if (!data) return;

        // Populate modal with player data
        document.getElementById('modalPlayerImage').src = data.image;
        document.getElementById('modalPlayerName').textContent = playerName;
        document.getElementById('modalPlayerRole').textContent = data.role;
        document.getElementById('modalPlayerPosition').textContent = data.position;
        document.getElementById('modalPlayerAge').textContent = data.age;
        document.getElementById('modalPlayerClub').textContent = data.club;
        document.getElementById('modalPlayerNationality').textContent = data.nationality;
        document.getElementById('modalPlayerHeight').textContent = data.height;
        document.getElementById('modalPlayerWeight').textContent = data.weight;
        document.getElementById('modalPlayerFoot').textContent = data.foot;
        document.getElementById('modalPlayerGoals').textContent = data.goals;
        document.getElementById('modalPlayerAssists').textContent = data.assists;
        document.getElementById('modalPlayerAppearances').textContent = data.appearances;
        document.getElementById('modalPlayerCleanSheets').textContent = data.cleanSheets;
        document.getElementById('modalPlayerBio').textContent = data.bio;

        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Close modal when clicking close button
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Add event listeners to all profile buttons
    document.addEventListener('DOMContentLoaded', function() {
        // Card view buttons
        const cardButtons = document.querySelectorAll('.card .btn-small');
        cardButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const playerName = this.closest('.card').querySelector('h3').textContent;
                openPlayerModal(playerName);
            });
        });

        // Table view buttons
        const tableButtons = document.querySelectorAll('.players-table .btn-small');
        tableButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const playerName = this.closest('tr').querySelector('.table-player-info span').textContent;
                openPlayerModal(playerName);
            });
        });
    });
}

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .card.animate {
        animation: fadeIn 0.6s ease-out;
    }

    section.animate {
        animation: fadeIn 0.8s ease-out;
    }
`;
document.head.appendChild(style);

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);

    // Update icon based on current theme
    if (currentTheme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Toggle icon
        if (newTheme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
});
