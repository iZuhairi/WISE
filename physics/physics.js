document.addEventListener('DOMContentLoaded', () => {

// ===== 1. DATA KAD FIZIK (DIKEMAS KINI) =====
const physicsTopics = [
    {
        icon: 'fa-apple-whole',
        title: 'Newton\'s Law of Gravity',
        description: 'Gravity is the force by which a planet or other body draws objects toward its center. The force of gravity keeps all of the planets in orbit around the sun.',
        color: 'var(--primary-color)' // Cyan
    },
    {
        icon: 'fa-bolt',
        title: 'Types of Energy',
        description: 'Energy comes in many forms, such as kinetic (motion), potential (stored), thermal (heat), chemical, and nuclear. It can be converted from one form to another.',
        color: 'var(--secondary-color)' // Magenta
    },
    {
        icon: 'fa-person-running',
        title: 'Newton\'s Laws of Motion',
        description: 'Three fundamental laws: 1) An object in motion stays in motion. 2) Force equals mass times acceleration (F=ma). 3) For every action, there is an equal and opposite reaction.',
        color: '#00FF00' // Neon Green
    },
    {
        icon: 'fa-wave-square',
        title: 'Theory of Relativity',
        description: 'Einstein\'s theory that space and time are relative. It includes E=mc², meaning energy and mass are interchangeable.',
        color: '#FFFF00' // Neon Yellow
    },
    {
        icon: 'fa-atom',
        title: 'Quantum Physics',
        description: 'The study of matter and energy at the most fundamental level. It describes nature at the scale of atoms and subatomic particles.',
        color: '#8A2BE2' // Blue-Violet
    },
    {
        icon: 'fa-lightbulb',
        title: 'Electromagnetism',
        description: 'The interaction of electric currents or fields and magnetic fields. This fundamental force is responsible for light, electricity, and radio waves.',
        color: '#FF4500' // Orange-Red
    },
    {
        icon: 'fa-water',
        title: 'Fluid Dynamics',
        description: 'The study of how liquids and gases flow and the forces acting upon them. Essential for understanding aerodynamics and pipe flow.',
        color: '#00BFFF' // Deep Sky Blue
    },
    {
        icon: 'fa-temperature-three-quarters',
        title: 'Thermodynamics',
        description: 'The science of heat and temperature and their relation to energy and work. Defines laws governing energy transfer and entropy.',
        color: '#FF69B4' // Hot Pink
    },
    {
        icon: 'fa-cubes',
        title: 'Solid-State Physics',
        description: 'The study of rigid matter (solids). Focuses on crystal structure, electronic properties, and defects, essential for modern electronics.',
        color: '#3CB371' // Medium Sea Green
    },
    {
        icon: 'fa-bullseye',
        title: 'Wave Optics',
        description: 'The study of light as a wave, explaining phenomena like diffraction (bending around corners) and interference (wave superposition).',
        color: '#FFA07A' // Light Salmon
    },
    {
        icon: 'fa-feather-pointed',
        title: 'Classical Mechanics',
        description: 'Describes the motion of macroscopic objects, from projectiles to machine parts. It governs motion in the absence of quantum effects or relativity.',
        color: '#808080' // Gray
    },
    {
        icon: 'fa-satellite',
        title: 'Astrophysics',
        description: 'Applies the laws of physics to astronomical objects like stars, planets, and galaxies to understand their birth, life, and death.',
        color: '#4B0082' // Indigo
    }
];


    // ===== 2. DOM REFERENCES =====
    const grid = document.getElementById('physics-grid');
    const startBtn = document.getElementById('start-anim-btn');
    const resetBtn = document.getElementById('reset-anim-btn');
    const ball = document.getElementById('motion-ball');

    // ===== 3. FUNCTIONS =====

    // Cipta dan papar kad info
    function populatePhysicsCards() {
        if (!grid) return;
        
        grid.innerHTML = ''; // Kosongkan grid
        physicsTopics.forEach(topic => {
            const card = document.createElement('div');
            card.className = 'physics-card';
            card.style.borderColor = topic.color;
            
            card.innerHTML = `
                <div class="physics-card-icon" style="color: ${topic.color}; text-shadow: 0 0 10px ${topic.color};">
                    <i class="fas ${topic.icon}"></i>
                </div>
                <div class="physics-card-content">
                    <h3>${topic.title}</h3>
                    <p>${topic.description}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // Fungsi Animasi
    function startAnimation() {
        if (!ball) return;
        // Tambah class yang ada 'animation'
        ball.classList.add('animate-gravity');
    }

    function resetAnimation() {
        if (!ball) return;
        // Buang class untuk reset
        ball.classList.remove('animate-gravity');
    }

    // ===== 4. EVENT LISTENERS =====
    if (startBtn) {
        startBtn.addEventListener('click', startAnimation);
    }
    if (resetBtn) {
        resetBtn.addEventListener('click', resetAnimation);
    }

    // Mula!
    populatePhysicsCards();
});


