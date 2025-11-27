document.addEventListener('DOMContentLoaded', () => {

    // ===== 1. DATA TOPIK TEKNOLOGI (UPDATED TO ENGLISH) =====
    const techTopics = [
        {
            icon: 'fa-robot',
            title: 'AI Basics (Artificial Intelligence)',
            content: 'AI is the simulation of human intelligence in machines. It allows computers to learn from experience, adjust to new inputs, and perform human-like tasks. Examples include self-driving cars and AI tutors like this one.'
        },
        {
            icon: 'fa-sitemap',
            title: 'What is an Algorithm?',
            content: 'An algorithm is a set of step-by-step instructions or rules to be followed to solve a problem or complete a task. Think of it as a recipe: "First, do this... Second, do that..." to get a specific result.'
        },
        {
            icon: 'fa-server',
            title: 'What is a Server?',
            content: 'A server is a powerful computer that "serves" data to other computers (called "clients") over a network. When you visit a website, your computer is a client requesting data from that website\'s server.'
        },
        {
            icon: 'fa-shield-halved',
            title: 'Cybersecurity Basics',
            content: 'Cybersecurity is the practice of protecting systems, networks, and data from digital attacks. This includes using strong passwords, being aware of phishing scams, and using antivirus software.'
        },
        {
            icon: 'fa-laptop-code',
            title: 'IT Careers',
            content: 'The "Information Technology" field is vast. Careers include Software Developer (writing code), Network Administrator (managing networks), Cybersecurity Analyst (protecting data), and UI/UX Designer (designing how websites look and feel).'
        },
        // --- EXPANDED CONTENT (Now fully in English) ---
        {
            icon: 'fa-database',
            title: 'Big Data',
            content: 'Big Data refers to extremely large and complex data sets that cannot be managed with traditional data processing tools. It is analyzed to find patterns, trends, and associations.'
        },
        {
            icon: 'fa-wifi',
            title: 'Cloud Computing',
            content: 'Cloud computing is the delivery of computing services (such as servers, storage, databases, networking, software, and analytics) over the Internet ("the cloud").'
        },
        {
            icon: 'fa-terminal',
            title: 'Programming Languages',
            content: 'Programming languages like Python, JavaScript, and C++ allow us to give instructions to computers. Each language has its own syntax and specific applications, from web development to game creation.'
        },
        {
            icon: 'fa-chain-broken',
            title: 'What is Blockchain?',
            content: 'Blockchain is a system where records of transactions (blocks) are linked together in a chain. It is secured and nearly impossible to alter, making it the foundation for cryptocurrencies and secure records.'
        },
        {
            icon: 'fa-lock',
            title: 'Encryption',
            content: 'Encryption is the process of converting information into a secret code (ciphertext). This ensures that only authorized parties can access and read the sensitive data.'
        }
    ];

    // ===== 2. DOM REFERENCES =====
    const accordion = document.getElementById('tech-accordion');

    // ===== 3. FUNCTIONS =====
    
    function populateAccordion() {
        if (!accordion) return;

        techTopics.forEach(topic => {
            const item = document.createElement('div');
            item.className = 'accordion-item';

            item.innerHTML = `
                <button class="accordion-header"> 
                    <i class="fas ${topic.icon} accordion-icon"></i>
                    <span class="accordion-title">${topic.title}</span>
                    <i class="fas fa-chevron-down accordion-arrow"></i>
                </button>
                <div class="accordion-content">
                    <p>${topic.content}</p>
                </div>
            `;
            
            accordion.appendChild(item);
        });
        
        // Add Event Listeners after creation
        addAccordionListeners();
    }


    // Function to toggle accordion (Fixed Syntax)
    function addAccordionListeners() {
        const headers = accordion.querySelectorAll('.accordion-header');

        headers.forEach(header => {
            header.addEventListener('click', () => { 
                const item = header.parentElement;
                
                // Close all other items
                document.querySelectorAll('.accordion-item').forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle the clicked item
                item.classList.toggle('active');
            });
        });
    }

    // Start!
    populateAccordion();
});
