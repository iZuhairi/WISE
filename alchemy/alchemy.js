/*
   =======================================
   ===== ALCHEMY LAB (KEMAS KINI) =====
   =======================================
   Menggabungkan:
   1. Logik 'Combine' & 'Available Elements' (dari awak)
   2. Logik 'Periodic Table' (baru)
*/
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================
    // ===== 1. DATA (DARI JS AWAK) UNTUK 'AVAILABLE' & 'COMBINE'
    // ==========================================================
    const elements = {
        // Real Elements
        'H': { name: 'Hydrogen', symbol: 'H', category: 'Basic', danger: 'High', description: 'A light, highly flammable gas. The most abundant element.' },
        'O': { name: 'Oxygen', symbol: 'O', category: 'Basic', danger: 'Medium', description: 'A reactive gas essential for respiration.' },
        'C': { name: 'Carbon', symbol: 'C', category: 'Basic', danger: 'Low', description: 'The basis of all known life.' },
        'Fe': { name: 'Iron', symbol: 'Fe', category: 'Metal', danger: 'Low', description: 'A strong, common metal used in construction.' },
        'Au': { name: 'Gold', symbol: 'Au', category: 'Metal', danger: 'Low', description: 'A precious, non-reactive metal.' },
        'Na': { name: 'Sodium', symbol: 'Na', category: 'Metal', danger: 'Very High', description: 'A soft, highly reactive alkali metal.' },
        'Cl': { name: 'Chlorine', symbol: 'Cl', category: 'Basic', danger: 'High', description: 'A pale green, toxic gas.' },
        'Si': { name: 'Silicon', symbol: 'Si', category: 'Metalloid', danger: 'Low', description: 'The second most abundant element, key to electronics.' },
        
        // Fantasy Elements
        'Fire': { name: 'Fire', symbol: '🔥', category: 'Ethereal', danger: 'High', description: 'The essence of heat, light, and destruction.' },
        'Water': { name: 'Water', symbol: '💧', category: 'Ethereal', danger: 'Low', description: 'The essence of life, change, and purification.' },
        'Earth': { name: 'Earth', symbol: '🌍', category: 'Ethereal', danger: 'Low', description: 'The essence of stability, strength, and substance.' },
        'Air': { name: 'Air', symbol: '💨', category: 'Ethereal', danger: 'Low', description: 'The essence of intellect, freedom, and movement.' },
        'Aether': { name: 'Aether', symbol: '✨', category: 'Ethereal', danger: 'Medium', description: 'The fifth element, filling the void of space.' },
        'Light': { name: 'Light', symbol: '☀️', category: 'Ethereal', danger: 'Low', description: 'The essence of creation, clarity, and truth.' },
        'Shadow': { name: 'Shadow', symbol: '🌑', category: 'Ethereal', danger: 'Medium', description: 'The essence of mystery, potential, and the unknown.' },
        'Spirit': { name: 'Spirit', symbol: '👻', category: 'Ethereal', danger: 'Unknown', description: 'The immaterial essence of a being.' },
        'Life': { name: 'Life', symbol: '🌱', category: 'Ethereal', danger: 'Low', description: 'The force that animates and connects all living things.' },
        'Prima': { name: 'Prima Materia', symbol: '🌀', category: 'Origin', danger: 'Unknown', description: 'The primitive, formless base of all matter.' },

        // Compound Elements (Hasil)
        'H2O': { name: 'Water (Compound)', symbol: 'H₂O', category: 'Compound', danger: 'Low', description: 'A simple compound of Hydrogen and Oxygen. Essential for life.' },
        'NaCl': { name: 'Salt', symbol: 'NaCl', category: 'Compound', danger: 'Low', description: 'Sodium Chloride. A common crystalline mineral.' },
        'Twilight': { name: 'Twilight', symbol: '🌇', category: 'Compound', danger: 'Low', description: 'The balance between light and dark.' },
        'Steam': { name: 'Steam', symbol: '♨️', category: 'Compound', danger: 'Medium', description: 'The gaseous state of water. A source of power.' },
        'Lava': { name: 'Lava', symbol: '🌋', category: 'Compound', danger: 'Very High', description: 'Molten rock expelled by a volcano.' },
        'Energy': { name: 'Energy', symbol: '⚡', category: 'Compound', danger: 'High', description: 'The fundamental force of action and change.' }
    };

    const recipes = {
        'Hydrogen_Oxygen': 'H2O',
        'Sodium_Chlorine': 'NaCl',
        'Light_Shadow': 'Twilight',
        'Fire_Water': 'Steam',
        'Earth_Fire': 'Lava',
        'Aether_Fire': 'Energy',
        'H_O': 'H2O', // Simbol
        'Na_Cl': 'NaCl',
    };

    // ==========================================================
    // ===== 2. DATA BARU UNTUK MODUL 'PERIODIC TABLE' (ATAS)
    // ==========================================================
    // Data ini HANYA untuk paparan 'Periodic Table' di atas
    // s = Symbol, n = Name, r = Row, c = Column, cat = Category

// GANTIKAN DENGAN BLOK KOD BARU INI (LENGKAP DENGAN NOMBOR ATOM 'an:')
const periodicTableData = [
    // s = Symbol, n = Name, r = Row, c = Column, cat = Category, an = Atomic Number
    { s: 'H', n: 'Hydrogen', r: 1, c: 1, cat: 'cat-reactive-nonmetal', an: 1 },
    { s: 'He', n: 'Helium', r: 1, c: 18, cat: 'cat-noble-gas', an: 2 },
    { s: 'Li', n: 'Lithium', r: 2, c: 1, cat: 'cat-alkali-metal', an: 3 },
    { s: 'Be', n: 'Beryllium', r: 2, c: 2, cat: 'cat-alkaline-earth', an: 4 },
    { s: 'B', n: 'Boron', r: 2, c: 13, cat: 'cat-metalloid', an: 5 },
    { s: 'C', n: 'Carbon', r: 2, c: 14, cat: 'cat-reactive-nonmetal', an: 6 },
    { s: 'N', n: 'Nitrogen', r: 2, c: 15, cat: 'cat-reactive-nonmetal', an: 7 },
    { s: 'O', n: 'Oxygen', r: 2, c: 16, cat: 'cat-reactive-nonmetal', an: 8 },
    { s: 'F', n: 'Fluorine', r: 2, c: 17, cat: 'cat-reactive-nonmetal', an: 9 },
    { s: 'Ne', n: 'Neon', r: 2, c: 18, cat: 'cat-noble-gas', an: 10 },
    { s: 'Na', n: 'Sodium', r: 3, c: 1, cat: 'cat-alkali-metal', an: 11 },
    { s: 'Mg', n: 'Magnesium', r: 3, c: 2, cat: 'cat-alkaline-earth', an: 12 },
    { s: 'Al', n: 'Aluminium', r: 3, c: 13, cat: 'cat-post-transition', an: 13 },
    { s: 'Si', n: 'Silicon', r: 3, c: 14, cat: 'cat-metalloid', an: 14 },
    { s: 'P', n: 'Phosphorus', r: 3, c: 15, cat: 'cat-reactive-nonmetal', an: 15 },
    { s: 'S', n: 'Sulfur', r: 3, c: 16, cat: 'cat-reactive-nonmetal', an: 16 },
    { s: 'Cl', n: 'Chlorine', r: 3, c: 17, cat: 'cat-reactive-nonmetal', an: 17 },
    { s: 'Ar', n: 'Argon', r: 3, c: 18, cat: 'cat-noble-gas', an: 18 },
    { s: 'K', n: 'Potassium', r: 4, c: 1, cat: 'cat-alkali-metal', an: 19 },
    { s: 'Ca', n: 'Calcium', r: 4, c: 2, cat: 'cat-alkaline-earth', an: 20 },
    { s: 'Sc', n: 'Scandium', r: 4, c: 3, cat: 'cat-transition-metal', an: 21 },
    { s: 'Ti', n: 'Titanium', r: 4, c: 4, cat: 'cat-transition-metal', an: 22 },
    { s: 'V', n: 'Vanadium', r: 4, c: 5, cat: 'cat-transition-metal', an: 23 },
    { s: 'Cr', n: 'Chromium', r: 4, c: 6, cat: 'cat-transition-metal', an: 24 },
    { s: 'Mn', n: 'Manganese', r: 4, c: 7, cat: 'cat-transition-metal', an: 25 },
    { s: 'Fe', n: 'Iron', r: 4, c: 8, cat: 'cat-transition-metal', an: 26 },
    { s: 'Co', n: 'Cobalt', r: 4, c: 9, cat: 'cat-transition-metal', an: 27 },
    { s: 'Ni', n: 'Nickel', r: 4, c: 10, cat: 'cat-transition-metal', an: 28 },
    { s: 'Cu', n: 'Copper', r: 4, c: 11, cat: 'cat-transition-metal', an: 29 },
    { s: 'Zn', n: 'Zinc', r: 4, c: 12, cat: 'cat-transition-metal', an: 30 },
    { s: 'Ga', n: 'Gallium', r: 4, c: 13, cat: 'cat-post-transition', an: 31 },
    { s: 'Ge', n: 'Germanium', r: 4, c: 14, cat: 'cat-metalloid', an: 32 },
    { s: 'As', n: 'Arsenic', r: 4, c: 15, cat: 'cat-metalloid', an: 33 },
    { s: 'Se', n: 'Selenium', r: 4, c: 16, cat: 'cat-reactive-nonmetal', an: 34 },
    { s: 'Br', n: 'Bromine', r: 4, c: 17, cat: 'cat-reactive-nonmetal', an: 35 },
    { s: 'Kr', n: 'Krypton', r: 4, c: 18, cat: 'cat-noble-gas', an: 36 },
    { s: 'Rb', n: 'Rubidium', r: 5, c: 1, cat: 'cat-alkali-metal', an: 37 },
    { s: 'Sr', n: 'Strontium', r: 5, c: 2, cat: 'cat-alkaline-earth', an: 38 },
    { s: 'Y', n: 'Yttrium', r: 5, c: 3, cat: 'cat-transition-metal', an: 39 },
    { s: 'Zr', n: 'Zirconium', r: 5, c: 4, cat: 'cat-transition-metal', an: 40 },
    { s: 'Nb', n: 'Niobium', r: 5, c: 5, cat: 'cat-transition-metal', an: 41 },
    { s: 'Mo', n: 'Molybdenum', r: 5, c: 6, cat: 'cat-transition-metal', an: 42 },
    { s: 'Tc', n: 'Technetium', r: 5, c: 7, cat: 'cat-transition-metal', an: 43 },
    { s: 'Ru', n: 'Ruthenium', r: 5, c: 8, cat: 'cat-transition-metal', an: 44 },
    { s: 'Rh', n: 'Rhodium', r: 5, c: 9, cat: 'cat-transition-metal', an: 45 },
    { s: 'Pd', n: 'Palladium', r: 5, c: 10, cat: 'cat-transition-metal', an: 46 },
    { s: 'Ag', n: 'Silver', r: 5, c: 11, cat: 'cat-transition-metal', an: 47 },
    { s: 'Cd', n: 'Cadmium', r: 5, c: 12, cat: 'cat-transition-metal', an: 48 },
    { s: 'In', n: 'Indium', r: 5, c: 13, cat: 'cat-post-transition', an: 49 },
    { s: 'Sn', n: 'Tin', r: 5, c: 14, cat: 'cat-post-transition', an: 50 },
    { s: 'Sb', n: 'Antimony', r: 5, c: 15, cat: 'cat-metalloid', an: 51 },
    { s: 'Te', n: 'Tellurium', r: 5, c: 16, cat: 'cat-metalloid', an: 52 },
    { s: 'I', n: 'Iodine', r: 5, c: 17, cat: 'cat-reactive-nonmetal', an: 53 },
    { s: 'Xe', n: 'Xenon', r: 5, c: 18, cat: 'cat-noble-gas', an: 54 },
    { s: 'Cs', n: 'Caesium', r: 6, c: 1, cat: 'cat-alkali-metal', an: 55 },
    { s: 'Ba', n: 'Barium', r: 6, c: 2, cat: 'cat-alkaline-earth', an: 56 },
    { s: '57-71', n: 'Lanthanides', r: 6, c: 3, cat: 'cat-lanthanide-placeholder', an: null },
    { s: 'Hf', n: 'Hafnium', r: 6, c: 4, cat: 'cat-transition-metal', an: 72 },
    { s: 'Ta', n: 'Tantalum', r: 6, c: 5, cat: 'cat-transition-metal', an: 73 },
    { s: 'W', n: 'Tungsten', r: 6, c: 6, cat: 'cat-transition-metal', an: 74 },
    { s: 'Re', n: 'Rhenium', r: 6, c: 7, cat: 'cat-transition-metal', an: 75 },
    { s: 'Os', n: 'Osmium', r: 6, c: 8, cat: 'cat-transition-metal', an: 76 },
    { s: 'Ir', n: 'Iridium', r: 6, c: 9, cat: 'cat-transition-metal', an: 77 },
    { s: 'Pt', n: 'Platinum', r: 6, c: 10, cat: 'cat-transition-metal', an: 78 },
    { s: 'Au', n: 'Gold', r: 6, c: 11, cat: 'cat-transition-metal', an: 79 },
    { s: 'Hg', n: 'Mercury', r: 6, c: 12, cat: 'cat-transition-metal', an: 80 },
    { s: 'Tl', n: 'Thallium', r: 6, c: 13, cat: 'cat-post-transition', an: 81 },
    { s: 'Pb', n: 'Lead', r: 6, c: 14, cat: 'cat-post-transition', an: 82 },
    { s: 'Bi', n: 'Bismuth', r: 6, c: 15, cat: 'cat-post-transition', an: 83 },
    { s: 'Po', n: 'Polonium', r: 6, c: 16, cat: 'cat-post-transition', an: 84 },
    { s: 'At', n: 'Astatine', r: 6, c: 17, cat: 'cat-metalloid', an: 85 },
    { s: 'Rn', n: 'Radon', r: 6, c: 18, cat: 'cat-noble-gas', an: 86 },
    { s: 'Fr', n: 'Francium', r: 7, c: 1, cat: 'cat-alkali-metal', an: 87 },
    { s: 'Ra', n: 'Radium', r: 7, c: 2, cat: 'cat-alkaline-earth', an: 88 },
    { s: '89-103', n: 'Actinides', r: 7, c: 3, cat: 'cat-actinide-placeholder', an: null },
    { s: 'Rf', n: 'Rutherfordium', r: 7, c: 4, cat: 'cat-transition-metal', an: 104 },
    { s: 'Db', n: 'Dubnium', r: 7, c: 5, cat: 'cat-transition-metal', an: 105 },
    { s: 'Sg', n: 'Seaborgium', r: 7, c: 6, cat: 'cat-transition-metal', an: 106 },
    { s: 'Bh', n: 'Bohrium', r: 7, c: 7, cat: 'cat-transition-metal', an: 107 },
    { s: 'Hs', n: 'Hassium', r: 7, c: 8, cat: 'cat-transition-metal', an: 108 },
    { s: 'Mt', n: 'Meitnerium', r: 7, c: 9, cat: 'cat-transition-metal', an: 109 },
    { s: 'Ds', n: 'Darmstadtium', r: 7, c: 10, cat: 'cat-transition-metal', an: 110 },
    { s: 'Rg', n: 'Roentgenium', r: 7, c: 11, cat: 'cat-transition-metal', an: 111 },
    { s: 'Cn', n: 'Copernicium', r: 7, c: 12, cat: 'cat-transition-metal', an: 112 },
    { s: 'Nh', n: 'Nihonium', r: 7, c: 13, cat: 'cat-post-transition', an: 113 },
    { s: 'Fl', n: 'Flerovium', r: 7, c: 14, cat: 'cat-post-transition', an: 114 },
    { s: 'Mc', n: 'Moscovium', r: 7, c: 15, cat: 'cat-post-transition', an: 115 },
    { s: 'Lv', n: 'Livermorium', r: 7, c: 16, cat: 'cat-post-transition', an: 116 },
    { s: 'Ts', n: 'Tennessine', r: 7, c: 17, cat: 'cat-post-transition', an: 117 },
    { s: 'Og', n: 'Oganesson', r: 7, c: 18, cat: 'cat-noble-gas', an: 118 },
    { s: 'La', n: 'Lanthanum', r: 9, c: 3, cat: 'cat-lanthanide', an: 57 },
    { s: 'Ce', n: 'Cerium', r: 9, c: 4, cat: 'cat-lanthanide', an: 58 },
    { s: 'Pr', n: 'Praseodymium', r: 9, c: 5, cat: 'cat-lanthanide', an: 59 },
    { s: 'Nd', n: 'Neodymium', r: 9, c: 6, cat: 'cat-lanthanide', an: 60 },
    { s: 'Pm', n: 'Promethium', r: 9, c: 7, cat: 'cat-lanthanide', an: 61 },
    { s: 'Sm', n: 'Samarium', r: 9, c: 8, cat: 'cat-lanthanide', an: 62 },
    { s: 'Eu', n: 'Europium', r: 9, c: 9, cat: 'cat-lanthanide', an: 63 },
    { s: 'Gd', n: 'Gadolinium', r: 9, c: 10, cat: 'cat-lanthanide', an: 64 },
    { s: 'Tb', n: 'Terbium', r: 9, c: 11, cat: 'cat-lanthanide', an: 65 },
    { s: 'Dy', n: 'Dysprosium', r: 9, c: 12, cat: 'cat-lanthanide', an: 66 },
    { s: 'Ho', n: 'Holmium', r: 9, c: 13, cat: 'cat-lanthanide', an: 67 },
    { s: 'Er', n: 'Erbium', r: 9, c: 14, cat: 'cat-lanthanide', an: 68 },
    { s: 'Tm', n: 'Thulium', r: 9, c: 15, cat: 'cat-lanthanide', an: 69 },
    { s: 'Yb', n: 'Ytterbium', r: 9, c: 16, cat: 'cat-lanthanide', an: 70 },
    { s: 'Lu', n: 'Lutetium', r: 9, c: 17, cat: 'cat-lanthanide', an: 71 },
    { s: 'Ac', n: 'Actinium', r: 10, c: 3, cat: 'cat-actinide', an: 89 },
    { s: 'Th', n: 'Thorium', r: 10, c: 4, cat: 'cat-actinide', an: 90 },
    { s: 'Pa', n: 'Protactinium', r: 10, c: 5, cat: 'cat-actinide', an: 91 },
    { s: 'U', n: 'Uranium', r: 10, c: 6, cat: 'cat-actinide', an: 92 },
    { s: 'Np', n: 'Neptunium', r: 10, c: 7, cat: 'cat-actinide', an: 93 },
    { s: 'Pu', n: 'Plutonium', r: 10, c: 8, cat: 'cat-actinide', an: 94 },
    { s: 'Am', n: 'Americium', r: 10, c: 9, cat: 'cat-actinide', an: 95 },
    { s: 'Cm', n: 'Curium', r: 10, c: 10, cat: 'cat-actinide', an: 96 },
    { s: 'Bk', n: 'Berkelium', r: 10, c: 11, cat: 'cat-actinide', an: 97 },
    { s: 'Cf', n: 'Californium', r: 10, c: 12, cat: 'cat-actinide', an: 98 },
    { s: 'Es', n: 'Einsteinium', r: 10, c: 13, cat: 'cat-actinide', an: 99 },
    { s: 'Fm', n: 'Fermium', r: 10, c: 14, cat: 'cat-actinide', an: 100 },
    { s: 'Md', n: 'Mendelevium', r: 10, c: 15, cat: 'cat-actinide', an: 101 },
    { s: 'No', n: 'Nobelium', r: 10, c: 16, cat: 'cat-actinide', an: 102 },
    { s: 'Lr', n: 'Lawrencium', r: 10, c: 17, cat: 'cat-actinide', an: 103 }
];



    // ==========================================================
    // ===== 3. DOM REFERENCES (DARI JS AWAK + 1 BARU)
    // ==========================================================
    
    // Rujukan BARU
    const periodicTableNew = document.getElementById('periodic-table-new');
    
    // Rujukan LAMA (dari JS awak)
    const elementGrid = document.getElementById('element-grid');
    const slotA = document.getElementById('slot-a');
    const slotB = document.getElementById('slot-b');
    const detailsPanel = document.getElementById('details-panel');
    const detailName = document.getElementById('detail-name');
    const detailCategory = document.getElementById('detail-category');
    const detailDanger = document.getElementById('detail-danger');
    const detailDescription = document.getElementById('detail-description');
    const detailsPlaceholder = document.querySelector('.details-placeholder');
    const combineBtn = document.getElementById('combine-button');
    const clearBtn = document.getElementById('clear-button');
    const combineResult = document.getElementById('combine-result');
    const combineChamber = document.getElementById('combine-chamber');

    // ===== 4. STATE (DARI JS AWAK) =====
    let slotAElement = null;
    let slotBElement = null;

    // ==========================================================
    // ===== 5. FUNGSI (DARI JS AWAK + 1 BARU)
    // ==========================================================

    // --- FUNGSI BARU UNTUK 'PERIODIC TABLE' (ATAS) ---
    function populatePeriodicTable() {
        if (!periodicTableNew) return; // Pastikan 'div' wujud

        // Kosongkan 'placeholder' text
        periodicTableNew.innerHTML = '';
        
        periodicTableData.forEach(el => {
            const card = document.createElement('div');
            // Guna 'element-card-small' (stail sama) & stail kategori
            card.className = `element-card-small ${el.cat}`; 
            
            // Letak di grid
            card.style.gridRow = el.r;
            card.style.gridColumnStart = el.c;
            // Untuk 'Lanthanides' rentang 15 kolum
            if (el.cspan) {
                card.style.gridColumnEnd = `span ${el.cspan}`;
            }
            
            card.innerHTML = `
                <div class="element-symbol">${el.s}</div>
                <div class="element-name">${el.n}</div>
            `;
            
            // Tambah 'listener' untuk tunjuk 'details'
            card.addEventListener('click', () => {
                // Cari elemen ini dalam 'database' utama awak (jika ada)
                const key = el.s; // cth: 'H'
                if (elements[key]) {
                    showDetails(elements[key]);
                } else {
                    // Jika tiada dalam 'database', cipta 'details' ringkas
                    const simpleEl = {
                        name: el.n,
                        symbol: el.s,
                        category: el.cat.replace('cat-', '').replace('-', ' '),
                        danger: 'Unknown',
                        description: 'This element is not yet available for crafting.'
                    };
                    showDetails(simpleEl);
                }
            });
            
            periodicTableNew.appendChild(card);
        });
    }

    // --- FUNGSI-FUNGSI DARI JS AWAK (Tak berubah) ---

    // Populate grid with (available/craftable) elements
    function populateGrid() {
        elementGrid.innerHTML = ''; // Kosongkan grid
        for (const key in elements) {
            // Tunjuk SEMUA elemen (termasuk hasil) dalam grid 'Available'
            // Awak boleh ubah logik ini (cth: guna 'Discovered' Set)
            const el = elements[key];
            const card = document.createElement('div');
            card.className = 'element-card-small';
            card.dataset.id = key; // Guna key (e.g., 'H', 'Fe', 'Fire') sebagai ID
            card.innerHTML = `
                <div class="element-symbol">${el.symbol}</div>
                <div class="element-name">${el.name}</div>
            `;
            card.addEventListener('click', () => handleElementClick(el, key));
            elementGrid.appendChild(card);
        }
    }

    // Handle klik pada elemen di grid (Available)
    function handleElementClick(element, key) {
        showDetails(element);
        addToSlot(element, key);
    }

    // Tunjuk info di Details Panel
    function showDetails(element) {
        if (detailsPlaceholder) detailsPlaceholder.style.display = 'none';
        detailName.textContent = `${element.name} (${element.symbol})`;
        detailCategory.textContent = `Category: ${element.category}`;
        detailDanger.textContent = `Danger Level: ${element.danger}`;
        detailDescription.textContent = element.description;
        
        // Warna ikut Danger Level
        detailDanger.className = 'danger-level'; // Reset
        let dangerClass = element.danger.toLowerCase().split(' ')[0];
        detailDanger.classList.add(`danger-${dangerClass}`);
    }

    // Masukkan elemen ke slot
    function addToSlot(element, key) {
        if (!slotAElement) {
            slotAElement = { ...element, key: key };
            slotA.innerHTML = `<div class="element-symbol">${element.symbol}</div><span>${element.name}</span>`;
            slotA.classList.add('filled');
        } else if (!slotBElement) {
            slotBElement = { ...element, key: key };
            slotB.innerHTML = `<div class="element-symbol">${element.symbol}</div><span>${element.name}</span>`;
            slotB.classList.add('filled');
        }
        if (slotAElement && slotBElement) {
            combineBtn.classList.add('pulse');
        }
    }

    // Kosongkan slot
    function clearSlots(clearAll = true) {
        if (clearAll) {
            slotAElement = null;
            slotA.innerHTML = 'Slot A';
            slotA.classList.remove('filled');
        }
        slotBElement = null;
        slotB.innerHTML = 'Slot B';
        slotB.classList.remove('filled');
        
        combineBtn.classList.remove('pulse');
        combineResult.innerHTML = '<p>Select two elements to combine.</p>';
        combineResult.className = 'combine-result'; // Reset class
    }

    // Fungsi Combine
    function combineElements() {
        if (!slotAElement || !slotBElement) {
            showResult('Please select two elements.', 'fail');
            return;
        }

        const key1 = slotAElement.name;
        const key2 = slotBElement.name;
        const recipeKey = [key1, key2].sort().join('_');

        const keySymbol1 = slotAElement.key;
        const keySymbol2 = slotBElement.key;
        const recipeKeySymbol = [keySymbol1, keySymbol2].sort().join('_');
        
        let resultKey = null;

        if (recipes[recipeKey]) {
            resultKey = recipes[recipeKey];
        } else if (recipes[recipeKeySymbol]) {
            resultKey = recipes[recipeKeySymbol];
        }

        if (resultKey && elements[resultKey]) {
            const resultElement = elements[resultKey];
            showResult(`Success! You created ${resultElement.name}!`, 'success');
            animateCombine('success');
            
            clearSlots(false); // Kosongkan B sahaja
            slotAElement = { ...resultElement, key: resultKey };
            slotA.innerHTML = `<div class="element-symbol">${resultElement.symbol}</div><span>${resultElement.name}</span>`;
            slotA.classList.add('filled');
            
            showDetails(resultElement);

        } else {
            showResult('Combination failed. The elements fizzled away.', 'fail');
            animateCombine('fail');
            clearSlots(); // Kosongkan semua
        }
    }

    // Tunjuk mesej hasil
    function showResult(message, status) {
        combineResult.innerHTML = `<p>${message}</p>`;
        combineResult.className = `combine-result ${status}`;
    }

    // Animasikan chamber
    function animateCombine(status) {
        combineChamber.classList.add(status);
        setTimeout(() => {
            combineChamber.classList.remove(status);
        }, 500); // Padankan dengan durasi animasi CSS
    }

    // ==========================================================
    // ===== 6. EVENT LISTENERS & INIT
    // ==========================================================
    
    // (Listener lama dari JS awak)
    combineBtn.addEventListener('click', combineElements);
    clearBtn.addEventListener('click', () => clearSlots(true));
    
    // MULA!
    populateGrid(); // Panggil fungsi LAMA (untuk 'Available Elements')
    populatePeriodicTable(); // Panggil fungsi BARU (untuk 'Periodic Table')
});
