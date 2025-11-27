document.addEventListener('DOMContentLoaded', () => {

    // ===== 1. DATA ELEMEN (SELESAI & LENGKAP) =====
    // Semua elemen yang diperlukan (Fantasy, Compound, 118 Real)
    const elements = {
        // === ELEMEN ASAS & LOGIK (25 ITEM) ===
        'H': { name: 'Hydrogen', symbol: 'H', category: 'Basic', danger: 'High', description: 'A light, highly flammable gas. The most abundant element.', fact: 'Hydrogen is the lightest element on the periodic table.' },
        'O': { name: 'Oxygen', symbol: 'O', category: 'Basic', danger: 'Medium', description: 'A reactive gas essential for respiration.', fact: 'Liquid oxygen is pale blue and paramagnetic.' },
        'C': { name: 'Carbon', symbol: 'C', category: 'Basic', danger: 'Low', description: 'The basis of all known life.', fact: 'Carbon can form diamonds, the hardest natural substance.' },
        'Fe': { name: 'Iron', symbol: 'Fe', category: 'Metal', danger: 'Low', description: 'A strong, common metal used in construction.', fact: 'Iron is the final element produced in a star\'s core before a supernova.' },
        'Au': { name: 'Gold', symbol: 'Au', category: 'Metal', danger: 'Low', description: 'A precious, non-reactive metal.', fact: 'Gold is edible in small quantities (as gold leaf).' },
        'Na': { name: 'Sodium', symbol: 'Na', category: 'Alkali Metal', danger: 'Very High', description: 'A soft, highly reactive alkali metal.', fact: 'Sodium explodes violently when it comes into contact with water.' },
        'Cl': { name: 'Chlorine', symbol: 'Cl', category: 'Basic', danger: 'High', description: 'A pale green, toxic gas.', fact: 'Chlorine was used as a chemical weapon in World War I.' },
        'Si': { name: 'Silicon', symbol: 'Si', category: 'Metalloid', danger: 'Low', description: 'The second most abundant element, key to electronics.', fact: 'Silicon Valley gets its name from silicon-based computer chips.' },
        'Fire': { name: 'Fire', symbol: '🔥', category: 'Ethereal', danger: 'High', description: 'The essence of heat, light, and destruction.', fact: 'Fire is a chemical reaction (combustion), not an element itself.' },
        'Water': { name: 'Water', symbol: '💧', category: 'Ethereal', danger: 'Low', description: 'The essence of life, change, and purification.', fact: 'Water is one of the few substances that expands when it freezes.' },
        'Earth': { name: 'Earth', symbol: '🌍', category: 'Ethereal', danger: 'Low', description: 'The essence of stability, strength, and substance.', fact: 'The concept of "Earth" as a classical element dates back to ancient Greece.' },
        'Air': { name: 'Air', symbol: '💨', category: 'Ethereal', danger: 'Low', description: 'The essence of intellect, freedom, and movement.', fact: 'Air is mostly composed of Nitrogen (78%), not Oxygen (21%).' },
        'Aether': { name: 'Aether', symbol: '✨', category: 'Ethereal', danger: 'Medium', description: 'The fifth element, filling the void of space.', fact: 'Aether was once believed to be the substance that allowed light to travel through space.' },
        'Light': { name: 'Light', symbol: '☀️', category: 'Ethereal', danger: 'Low', description: 'The essence of creation, clarity, and truth.', fact: 'Light behaves as both a particle (photon) and a wave.' },
        'Shadow': { name: 'Shadow', symbol: '🌑', category: 'Ethereal', danger: 'Medium', description: 'The essence of mystery, potential, and the unknown.', fact: 'A shadow is not a substance, but the absence of light.' },
        'Spirit': { name: 'Spirit', symbol: '👻', category: 'Ethereal', danger: 'Unknown', description: 'The immaterial essence of a being.', fact: 'The concept of "Spirit" or "Anima" is central to many philosophical traditions.' },
        'Life': { name: 'Life', symbol: '🌱', category: 'Ethereal', danger: 'Low', description: 'The force that animates and connects all living things.', fact: 'Scientists still debate the exact definition of "life".' },
        'Prima': { name: 'Prima Materia', symbol: '🌀', category: 'Origin', danger: 'Unknown', description: 'The primitive, formless base of all matter.', fact: 'In alchemy, Prima Materia is the starting point for creating the Philosopher\'s Stone.' },
        'H2O': { name: 'Water (Compound)', symbol: 'H₂O', category: 'Compound', danger: 'Low', description: 'A simple compound of Hydrogen and Oxygen.', fact: 'The H-O-H bond angle in water is 104.5 degrees.' },
        'NaCl': { name: 'Salt', symbol: 'NaCl', category: 'Compound', danger: 'Low', description: 'Sodium Chloride. A common crystalline mineral.', fact: 'Salt (Sodium Chloride) is essential for animal life.' },
        'Twilight': { name: 'Twilight', symbol: '🌇', category: 'Compound', danger: 'Low', description: 'The balance between light and dark.', fact: 'Twilight is the illumination of the lower atmosphere when the Sun is not directly visible.' },
        'Steam': { name: 'Steam', symbol: '♨️', category: 'Compound', danger: 'Medium', description: 'The gaseous state of water. A source of power.', fact: 'The Industrial Revolution was powered primarily by steam engines.' },
        'Lava': { name: 'Lava', symbol: '🌋', category: 'Compound', danger: 'Very High', description: 'Molten rock expelled by a volcano.', fact: 'Lava can reach temperatures over 1,200°C (2,200°F).' },
        'Energy': { name: 'Energy', symbol: '⚡', category: 'Compound', danger: 'High', description: 'The fundamental force of action and change.', fact: 'Einstein\'s formula E=mc² links energy and mass.' },

        // === TAMBAHAN ELEMEN SEBENAR (93 ITEM) ===
        'He': { name: 'Helium', symbol: 'He', category: 'Noble Gas', danger: 'Low', description: 'A non-reactive gas, the second lightest element.', fact: 'Helium is used in balloons and makes your voice high-pitched.' },
        'Li': { name: 'Lithium', symbol: 'Li', category: 'Alkali Metal', danger: 'High', description: 'A soft, highly reactive metal.', fact: 'Lithium is the key component in rechargeable batteries.' },
        'Be': { name: 'Beryllium', symbol: 'Be', category: 'Alkaline Earth', danger: 'High', description: 'A light but strong metal, used in alloys.', fact: 'Beryllium is transparent to X-rays, making it useful in medical imaging.' },
        'B': { name: 'Boron', symbol: 'B', category: 'Metalloid', danger: 'Low', description: 'A metalloid used in borosilicate glass (like Pyrex).', fact: 'Boron can form materials that are almost as hard as diamond.' },
        'N': { name: 'Nitrogen', symbol: 'N', category: 'Basic', danger: 'Low', description: 'A non-reactive gas that makes up 78% of Earth\'s atmosphere.', fact: 'Liquid nitrogen is cold enough to flash-freeze objects on contact.' },
        'F': { name: 'Fluorine', symbol: 'F', category: 'Basic', danger: 'Very High', description: 'The most electronegative and reactive of all elements.', fact: 'Fluoride, a compound of Fluorine, is used in toothpaste to prevent cavities.' },
        'Ne': { name: 'Neon', symbol: 'Ne', category: 'Noble Gas', danger: 'Low', description: 'A noble gas famous for its bright reddish-orange glow in signs.', fact: 'Neon signs only glow red; other "neon" colors come from different gases.' },
        'Mg': { name: 'Magnesium', symbol: 'Mg', category: 'Alkaline Earth', danger: 'Medium', description: 'A light, flammable metal that burns with a brilliant white light.', fact: 'Magnesium is essential for all living cells and is used in flares.' },
        'Al': { name: 'Aluminium', symbol: 'Al', category: 'Metal', danger: 'Low', description: 'A lightweight, non-corroding metal. Used in cans and aircraft.', fact: 'Aluminium was once more valuable than gold.' },
        'P': { name: 'Phosphorus', symbol: 'P', category: 'Basic', danger: 'High', description: 'A reactive non-metal. One form (white phosphorus) glows in the dark.', fact: 'Phosphorus is essential for life; it forms the backbone of DNA.' },
        'S': { name: 'Sulfur', symbol: 'S', category: 'Basic', danger: 'Low', description: 'A yellow non-metal known for its distinct "rotten egg" smell in compounds.', fact: 'Sulfur is used in gunpowder and to vulcanize rubber.' },
        'Ar': { name: 'Argon', symbol: 'Ar', category: 'Noble Gas', danger: 'Low', description: 'A non-reactive noble gas, used in light bulbs to protect the filament.', fact: 'Argon makes up about 1% of the Earth\'s atmosphere.' },
        'K': { name: 'Potassium', symbol: 'K', category: 'Alkali Metal', danger: 'High', description: 'A highly reactive alkali metal. Its name comes from "potash".', fact: 'Potassium is the "K" in "NPK" fertilizer and is vital for plant growth.' },
        'Ca': { name: 'Calcium', symbol: 'Ca', category: 'Alkaline Earth', danger: 'Medium', description: 'A metal that is essential for strong bones and teeth.', fact: 'Calcium is the "Ca" in "calcium carbonate," the main component of chalk.' },
        'Sc': { name: 'Scandium', symbol: 'Sc', category: 'Transition Metal', danger: 'Low', description: 'A rare metal added to aluminium alloys for strength.', fact: 'Scandium is used in high-performance sports equipment like bicycle frames.' },
        'Ti': { name: 'Titanium', symbol: 'Ti', category: 'Transition Metal', danger: 'Low', description: 'A metal with an extremely high strength-to-weight ratio.', fact: 'Titanium is used in medical implants because the human body does not reject it.' },
        'V': { name: 'Vanadium', symbol: 'V', category: 'Transition Metal', danger: 'Low', description: 'A hard, silvery-grey metal used to make steel alloys.', fact: 'Vanadium steel is very tough and is used to make tools.' },
        'Cr': { name: 'Chromium', symbol: 'Cr', category: 'Transition Metal', danger: 'Low', description: 'A shiny, hard metal used in stainless steel and chrome plating.', fact: 'Chromium gives gemstones like rubies (red) and emeralds (green) their color.' },
        'Mn': { name: 'Manganese', symbol: 'Mn', category: 'Transition Metal', danger: 'Low', description: 'A metal used in steel production to improve hardness.', fact: 'Manganese is an essential nutrient for life, but toxic in high doses.' },
        'Co': { name: 'Cobalt', symbol: 'Co', category: 'Transition Metal', danger: 'Medium', description: 'A hard, magnetic metal used in magnets and high-strength alloys.', fact: 'Cobalt is used to create a deep blue color in glass and pigments.' },
        'Ni': { name: 'Nickel', symbol: 'Ni', category: 'Transition Metal', danger: 'Low', description: 'A silvery-white metal used in coins and stainless steel.', fact: 'The Earth\'s core is believed to be made of iron and nickel.' },
        'Cu': { name: 'Copper', symbol: 'Cu', category: 'Metal', danger: 'Low', description: 'A reddish-orange metal known for its excellent electrical conductivity.', fact: 'Copper is naturally antibacterial and is used in plumbing and doorknobs.' },
        'Zn': { name: 'Zinc', symbol: 'Zn', category: 'Metal', danger: 'Low', description: 'A metal used to "galvanize" (protect) steel from rust.', fact: 'Zinc is a key ingredient in sunscreen (zinc oxide).' },
        'Ga': { name: 'Gallium', symbol: 'Ga', category: 'Metal', danger: 'Low', description: 'A soft, silvery metal with a very low melting point.', fact: 'Gallium will melt in your hand (at 29.7°C or 85.5°F).' },
        'Ge': { name: 'Germanium', symbol: 'Ge', category: 'Metalloid', danger: 'Low', description: 'A semiconductor used in early transistors and electronics.', fact: 'Germanium is used in night-vision goggles as it\'s transparent to infrared light.' },
        'As': { name: 'Arsenic', symbol: 'As', category: 'Metalloid', danger: 'Very High', description: 'A notoriously toxic metalloid, historically used as a poison.', fact: 'Small amounts of arsenic are used in computer chips.' },
        'Se': { name: 'Selenium', symbol: 'Se', category: 'Basic', danger: 'High', description: 'A non-metal used in photocopiers and solar cells.', fact: 'Selenium is a vital nutrient, but the difference between "enough" and "toxic" is very small.' },
        'Br': { name: 'Bromine', symbol: 'Br', category: 'Basic', danger: 'High', description: 'One of only two elements (the other is Mercury) that is liquid at room temperature.', fact: 'Bromine has a strong, unpleasant smell and is used as a flame retardant.' },
        'Kr': { name: 'Krypton', symbol: 'Kr', category: 'Noble Gas', danger: 'Low', description: 'A non-reactive noble gas used in high-intensity lighting.', fact: 'Krypton (Kryptonite) is the fictional weakness of Superman.' },
        'Rb': { name: 'Rubidium', symbol: 'Rb', category: 'Alkali Metal', danger: 'High', description: 'A highly reactive alkali metal, similar to potassium.', fact: 'Rubidium is used in atomic clocks, the most accurate clocks ever made.' },
        'Sr': { name: 'Strontium', symbol: 'Sr', category: 'Alkaline Earth', danger: 'Low', description: 'A metal that burns with a brilliant red color.', fact: 'Strontium is the element used to create the bright red color in fireworks.' },
        'Y': { name: 'Yttrium', symbol: 'Y', category: 'Lanthanide', danger: 'Low', description: 'A silvery metal, one of the "rare-earth" elements.', fact: 'Yttrium was used to make the red color in old CRT television screens.' },
        'Zr': { name: 'Zirconium', symbol: 'Zr', category: 'Transition Metal', danger: 'Low', description: 'A strong, heat-resistant metal used in nuclear reactors.', fact: 'The gemstone "cubic zirconia" is a synthetic crystal of zirconium oxide.' },
        'Nb': { name: 'Niobium', symbol: 'Nb', category: 'Transition Metal', danger: 'Low', description: 'A metal used in steel alloys, especially for gas pipelines.', fact: 'Niobium is used in superconducting magnets for MRI machines.' },
        'Mo': { name: 'Molybdenum', symbol: 'Mo', category: 'Transition Metal', danger: 'Low', description: 'A metal with a very high melting point, used in steel alloys.', fact: 'Molybdenum is essential for life, found in enzymes in most living things.' },
        'Tc': { name: 'Technetium', symbol: 'Tc', category: 'Transition Metal', danger: 'High', description: 'A radioactive element; the lightest element with no stable isotopes.', fact: 'Technetium (from Greek "technetos" - artificial) was the first element to be artificially produced.' },
        'Ru': { name: 'Ruthenium', symbol: 'Ru', category: 'Transition Metal', danger: 'Low', description: 'A rare, hard metal from the platinum group.', fact: 'Ruthenium is used to make extremely durable electrical contacts.' },
        'Rh': { name: 'Rhodium', symbol: 'Rh', category: 'Transition Metal', danger: 'Low', description: 'One of the rarest and most valuable precious metals.', fact: 'Rhodium is used to coat jewelry (like white gold) to make it shiny and hard.' },
        'Pd': { name: 'Palladium', symbol: 'Pd', category: 'Transition Metal', danger: 'Low', description: 'A rare, silvery-white precious metal.', fact: 'Palladium is used in catalytic converters (in cars) to reduce harmful emissions.' },
        'Ag': { name: 'Silver', symbol: 'Ag', category: 'Metal', danger: 'Low', description: 'A precious metal, known for having the highest electrical conductivity.', fact: 'Silver (Ag) gets its symbol from the Latin word "argentum".' },
        'Cd': { name: 'Cadmium', symbol: 'Cd', category: 'Metal', danger: 'High', description: 'A toxic heavy metal used in rechargeable batteries.', fact: 'Cadmium is used to create bright red, orange, and yellow pigments for paint.' },
        'In': { name: 'Indium', symbol: 'In', category: 'Metal', danger: 'Low', description: 'A soft, silvery metal used in LCD and touch screens.', fact: 'Indium Tin Oxide (ITO) is the transparent conductive layer on your phone screen.' },
        'Sn': { name: 'Tin', symbol: 'Sn', category: 'Metal', danger: 'Low', description: 'A soft, silvery metal used in "tin cans" (which are actually steel).', fact: 'Tin (Sn) gets its symbol from the Latin word "stannum".' },
        'Sb': { name: 'Antimony', symbol: 'Sb', category: 'Metalloid', danger: 'High', description: 'A toxic metalloid used as a flame retardant.', fact: 'Antimony (Sb) gets its symbol from the Latin "stibium".' },
        'Te': { name: 'Tellurium', symbol: 'Te', category: 'Metalloid', danger: 'High', description: 'A rare metalloid used in solar panels and alloys.', fact: 'Tellurium compounds, if ingested, make your breath smell strongly of garlic.' },
        'I': { name: 'Iodine', symbol: 'I', category: 'Basic', danger: 'Medium', description: 'A non-metal that turns into a purple gas when heated (sublimation).', fact: 'Iodine is essential for human health (thyroid function); it\'s added to "iodized" salt.' },
        'Xe': { name: 'Xenon', symbol: 'Xe', category: 'Noble Gas', danger: 'Low', description: 'A heavy, rare noble gas used in specialized lights.', fact: 'Xenon is used in high-intensity "xenon" headlights for cars.' },
        'Cs': { name: 'Caesium', symbol: 'Cs', category: 'Alkali Metal', danger: 'Very High', description: 'A highly reactive metal that explodes in water. Melts at 28.5°C.', fact: 'Caesium is the "heart" of atomic clocks, which define the modern second.' },
        'Ba': { name: 'Barium', symbol: 'Ba', category: 'Alkaline Earth', danger: 'High', description: 'A soft, silvery metal. Its compounds are toxic.', fact: 'Barium sulfate is given as a "barium meal" to patients for X-rays of the digestive tract.' },
        'La': { name: 'Lanthanum', symbol: 'La', category: 'Lanthanide', danger: 'Low', description: 'The first element of the Lanthanide (rare-earth) series.', fact: 'Lanthanum is used in high-quality camera lenses and night-vision goggles.' },
        'Ce': { name: 'Cerium', symbol: 'Ce', category: 'Lanthanide', danger: 'Low', description: 'The most abundant of the "rare-earth" metals.', fact: 'Mischmetal, which contains cerium, is used to make "flints" for lighters.' },
        'Pr': { name: 'Praseodymium', symbol: 'Pr', category: 'Lanthanide', danger: 'Low', description: 'A rare-earth metal used to create a yellow color in glass.', fact: 'Praseodymium is used in welder\'s goggles to filter out specific light.' },
        'Nd': { name: 'Neodymium', symbol: 'Nd', category: 'Lanthanide', danger: 'Low', description: 'A rare-earth metal used to make extremely powerful magnets.', fact: 'Neodymium magnets are used in headphones, hard drives, and electric motors.' },
        'Pm': { name: 'Promethium', symbol: 'Pm', category: 'Lanthanide', danger: 'High', description: 'A radioactive rare-earth element. All isotopes are unstable.', fact: 'Promethium is used to create "glow-in-the-dark" luminous paint.' },
        'Sm': { name: 'Samarium', symbol: 'Sm', category: 'Lanthanide', danger: 'Low', description: 'A rare-earth metal used in magnets and cancer treatment.', fact: 'Samarium-cobalt magnets were the strongest permanent magnets before Neodymium.' },
        'Eu': { name: 'Europium', symbol: 'Eu', category: 'Lanthanide', danger: 'Low', description: 'A rare-earth metal used to create the red color in old CRT TVs.', fact: 'Europium is one of the most reactive rare-earth elements.' },
        'Gd': { name: 'Gadolinium', symbol: 'Gd', category: 'Lanthanide', danger: 'Low', description: 'A rare-earth metal with unusual magnetic properties.', fact: 'Gadolinium is used as a contrast agent in MRI scans.' },
        'Tb': { name: 'Terbium', symbol: 'Tb', category: 'Lanthanide', danger: 'Low', description: 'A rare-earth metal used to create green phosphors.', fact: 'Terbium is used in "green" lasers and energy-efficient light bulbs.' },
        'Dy': { name: 'Dysprosium', symbol: 'Dy', category: 'Lanthanide', danger: 'Low', description: 'A rare-earth metal added to magnets to help them resist demagnetization.', fact: 'The name "Dysprosium" comes from the Greek "dysprositos," meaning "hard to get".' },
       'Ho': { name: 'Holmium', symbol: 'Ho', category: 'Lanthanide', danger: 'Low', description: 'A rare-earth metal with the highest magnetic strength of any element.', fact: 'Holmium is used in medical lasers (Holmium YAG laser) for surgery.' },
        'Er': { name: 'Erbium', symbol: 'Er', category: 'Lanthanide', danger: 'Low', description: 'A rare-earth metal used to create a pink color in glass.', fact: 'Erbium is used in fiber-optic cables to amplify the signal.' },
        'Tm': { name: 'Thulium', symbol: 'Tm', category: 'Lanthanide', danger: 'Low', description: 'The rarest of the "rare-earth" metals.', fact: 'Thulium is used in portable X-ray machines.' },
        'Yb': { name: 'Ytterbium', symbol: 'Yb', category: 'Lanthanide', danger: 'Low', description: 'A rare-earth metal used in certain types of steel.', fact: 'Ytterbium is named after Ytterby, a village in Sweden where many rare-earths were found.' },
        'Lu': { name: 'Lutetium', symbol: 'Lu', category: 'Lanthanide', danger: 'Low', description: 'The last element in the Lanthanide series.', fact: 'Lutetium is one of the densest and hardest rare-earth metals.' },
        'Hf': { name: 'Hafnium', symbol: 'Hf', category: 'Transition Metal', danger: 'Low', description: 'A dense, corrosion-resistant metal used in nuclear reactors.', fact: 'Hafnium is chemically very similar to Zirconium, making them hard to separate.' },
        'Ta': { name: 'Tantalum', symbol: 'Ta', category: 'Transition Metal', danger: 'Low', description: 'A rare, hard, blue-gray metal highly resistant to corrosion.', fact: 'Tantalum is used to make compact capacitors, vital for mobile phones.' },
        'W': { name: 'Tungsten', symbol: 'W', category: 'Transition Metal', danger: 'Low', description: 'A metal with the highest melting point of all elements.', fact: 'Tungsten (W, from "Wolfram") is used for the filament in incandescent light bulbs.' },
        'Re': { name: 'Rhenium', symbol: 'Re', category: 'Transition Metal', danger: 'Low', description: 'A very rare metal with one of the highest melting points.', fact: 'Rhenium is added to jet engine turbine blades to withstand extreme heat.' },
        'Os': { name: 'Osmium', symbol: 'Os', category: 'Transition Metal', danger: 'Low', description: 'The densest naturally occurring element.', fact: 'Osmium is used in the tips of fountain pens and other high-wear applications.' },
        'Ir': { name: 'Iridium', symbol: 'Ir', category: 'Transition Metal', danger: 'Low', description: 'The second-densest element, and the most corrosion-resistant.', fact: 'The "K-T boundary" layer of clay that marks the extinction of the dinosaurs is rich in Iridium.' },
        'Pt': { name: 'Platinum', symbol: 'Pt', category: 'Transition Metal', danger: 'Low', description: 'A dense, rare, and highly valuable precious metal.', fact: 'Platinum is a key component in catalytic converters and chemotherapy drugs.' },
        'Hg': { name: 'Mercury', symbol: 'Hg', category: 'Metal', danger: 'Very High', description: 'The only metal that is liquid at room temperature. Highly toxic.', fact: 'Mercury (Hg, from "hydrargyrum" - water-silver) was used in old thermometers.' },
        'Tl': { name: 'Thallium', symbol: 'Tl', category: 'Metal', danger: 'Very High', description: 'A soft, toxic metal, infamously known as "the poisoner\'s poison".', fact: 'Thallium was used in rat poisons until it was banned for safety reasons.' },
        'Pb': { name: 'Lead', symbol: 'Pb', category: 'Metal', danger: 'High', description: 'A soft, dense heavy metal. Highly toxic.', fact: 'Lead (Pb, from "plumbum") was used by the Romans for plumbing, leading to widespread poisoning.' },
        'Bi': { name: 'Bismuth', symbol: 'Bi', category: 'Metal', danger: 'Low', description: 'A heavy metal with low toxicity, known for its iridescent crystals.', fact: 'Bismuth is a key ingredient in Pepto-Bismol.' },
        'Po': { name: 'Polonium', symbol: 'Po', category: 'Metalloid', danger: 'Very High', description: 'An extremely radioactive and toxic metalloid.', fact: 'Polonium was discovered by Marie Curie and named after her homeland, Poland.' },
        'At': { name: 'Astatine', symbol: 'At', category: 'Metalloid', danger: 'Very High', description: 'A highly radioactive element; the rarest naturally occurring element.', fact: 'It is estimated that less than one gram of Astatine exists on Earth at any given time.' },
        'Rn': { name: 'Radon', symbol: 'Rn', category: 'Noble Gas', danger: 'High', description: 'A radioactive noble gas; one of the heaviest gases.', fact: 'Radon is a significant cause of lung cancer, seeping into basements from the ground.' },
        'Fr': { name: 'Francium', symbol: 'Fr', category: 'Alkali Metal', danger: 'Very High', description: 'A highly radioactive and rare alkali metal.', fact: 'Francium is the least stable of the first 103 elements; its most stable isotope lasts only 22 minutes.' },
        'Ra': { name: 'Radium', symbol: 'Ra', category: 'Alkaline Earth', danger: 'Very High', description: 'A highly radioactive metal discovered by Marie Curie.', fact: 'Radium was once used in "glow-in-the-dark" paint for watch dials, with tragic health consequences.' },
        'Ac': { name: 'Actinium', symbol: 'Ac', category: 'Actinide', danger: 'Very High', description: 'A radioactive element, the first of the Actinide series.', fact: 'Actinium is about 150 times more radioactive than radium.' },
        'Th': { name: 'Thorium', symbol: 'Th', category: 'Actinide', danger: 'High', description: 'A weakly radioactive metal, explored as a safer alternative to uranium.', fact: 'Thorium is named after Thor, the Norse god of thunder.' },
        'Pa': { name: 'Protactinium', symbol: 'Pa', category: 'Actinide', danger: 'Very High', description: 'A dense, radioactive metal.', fact: 'Protactinium is one of the rarest and most expensive naturally occurring elements.' },
        'U': { name: 'Uranium', symbol: 'U', category: 'Actinide', danger: 'Very High', description: 'A heavy, radioactive metal, the primary fuel for nuclear reactors.', fact: 'Uranium is the heaviest naturally occurring element on Earth.' },
        'Np': { name: 'Neptunium', symbol: 'Np', category: 'Actinide', danger: 'Very High', description: 'A radioactive metal, the first "transuranic" element.', fact: 'Neptunium is named after the planet Neptune, just as Uranium is named after Uranus.' },
        'Pu': { name: 'Plutonium', symbol: 'Pu', category: 'Actinide', danger: 'Very High', description: 'A heavy, radioactive metal, famously used in nuclear weapons.', fact: 'Plutonium (Pu) was infamously used in the "Fat Man" atomic bomb.' },
        'Am': { name: 'Americium', symbol: 'Am', category: 'Actinide', danger: 'High', description: 'A synthetic, radioactive metal.', fact: 'Tiny amounts of Americium are used in household smoke detectors.' },
        'Cm': { name: 'Curium', symbol: 'Cm', category: 'Actinide', danger: 'Very High', description: 'A synthetic, radioactive metal.', fact: 'Curium is named in honor of Marie and Pierre Curie.' },
        'Bk': { name: 'Berkelium', symbol: 'Bk', category: 'Actinide', danger: 'Very High', description: 'A synthetic, radioactive metal.', fact: 'Berkelium was named after the city of Berkeley, California, where it was discovered.' },
        'Cf': { name: 'Californium', symbol: 'Cf', category: 'Actinide', danger: 'Very High', description: 'A synthetic, radioactive metal.', fact: 'Californium is extremely expensive, costing millions of dollars per microgram.' },
        'Es': { name: 'Einsteinium', symbol: 'Es', category: 'Actinide', danger: 'Very High', description: 'A synthetic, radioactive metal.', fact: 'Einsteinium was discovered in the debris of the first hydrogen bomb test.' },
        'Fm': { name: 'Fermium', symbol: 'Fm', category: 'Actinide', danger: 'Very High', description: 'A synthetic, radioactive metal.', fact: 'Fermium is named after Enrico Fermi, a pioneer of nuclear physics.' },
        'Md': { name: 'Mendelevium', symbol: 'Md', category: 'Actinide', danger: 'Very High', description: 'A synthetic, radioactive metal.', fact: 'Mendelevium is named after Dmitri Mendeleev, the father of the periodic table.' },
        'No': { name: 'Nobelium', symbol: 'No', category: 'Actinide', danger: 'Very High', description: 'A synthetic, radioactive metal.', fact: 'Nobelium is named after Alfred Nobel, the founder of the Nobel Prize.' },
        'Lr': { name: 'Lawrencium', symbol: 'Lr', category: 'Actinide', danger: 'Very High', description: 'A synthetic, radioactive metal.', fact: 'Lawrencium is named after Ernest Lawrence, inventor of the cyclotron.' },
        'Rf': { name: 'Rutherfordium', symbol: 'Rf', category: 'Transition Metal', danger: 'Very High', description: 'A highly radioactive, synthetic element.', fact: 'Rutherfordium is named after Ernest Rutherford, the father of nuclear physics.' },
        'Db': { name: 'Dubnium', symbol: 'Db', category: 'Transition Metal', danger: 'Very High', description: 'A highly radioactive, synthetic element.', fact: 'Named after Dubna, the town in Russia where a major nuclear research center (JINR) is located.' },
        'Sg': { name: 'Seaborgium', symbol: 'Sg', category: 'Transition Metal', danger: 'Very High', description: 'A highly radioactive, synthetic element.', fact: 'Named after Glenn T. Seaborg, the only person to have an element named after him while still alive.' },
        'Bh': { name: 'Bohrium', symbol: 'Bh', category: 'Transition Metal', danger: 'Very High', description: 'A highly radioactive, synthetic element.', fact: 'Bohrium is named after Niels Bohr, a fundamental contributor to quantum theory.' },
        'Hs': { name: 'Hassium', symbol: 'Hs', category: 'Transition Metal', danger: 'Very High', description: 'A highly radioactive, synthetic element.', fact: 'Hassium is named after the German state of Hesse (Hassia in Latin).' },
        'Mt': { name: 'Meitnerium', symbol: 'Mt', category: 'Transition Metal', danger: 'Very High', description: 'A highly radioactive, synthetic element.', fact: 'Meitnerium is named in honor of Lise Meitner, a pioneer in nuclear fission.' },
        'Ds': { name: 'Darmstadtium', symbol: 'Ds', category: 'Transition Metal', danger: 'Very High', description: 'A highly radioactive, synthetic element.', fact: 'Named after the city of Darmstadt, Germany, where it was discovered.' },
        'Rg': { name: 'Roentgenium', symbol: 'Rg', category: 'Transition Metal', danger: 'Very High', description: 'A highly radioactive, synthetic element.', fact: 'Roentgenium is named in honor of Wilhelm Röntgen, the discoverer of X-rays.' },
        'Cn': { name: 'Copernicium', symbol: 'Cn', category: 'Transition Metal', danger: 'Very High', description: 'A highly radioactive, synthetic element.', fact: 'Copernicium is named after Nicolaus Copernicus, the astronomer.' },
        'Nh': { name: 'Nihonium', symbol: 'Nh', category: 'Metal', danger: 'Very High', description: 'A highly radioactive, synthetic element.', fact: 'Nihonium is named after Japan ("Nihon" means Japan in Japanese), where it was discovered.' },
        'Fl': { name: 'Flerovium', symbol: 'Fl', category: 'Metal', danger: 'Very High', description: 'A highly radioactive, synthetic element.', fact: 'Flerovium is named after the Flerov Laboratory of Nuclear Reactions in Russia.' },
        'Mc': { name: 'Moscovium', symbol: 'Mc', category: 'Metal', danger: 'Very High', description: 'A highly radioactive, synthetic element.', fact: 'Moscovium is named after Moscow Oblast, the region where the research center is located.' },
        'Lv': { name: 'Livermorium', symbol: 'Lv', category: 'Metal', danger: 'Very High', description: 'A highly radioactive, synthetic element.', fact: 'Livermorium is named after the Lawrence Livermore National Laboratory in California.' },
        'Ts': { name: 'Tennessine', symbol: 'Ts', category: 'Metalloid', danger: 'Very High', description: 'A highly radioactive, synthetic element.', fact: 'Tennessine is named after the state of Tennessee, a center for element research.' },
        'Og': { name: 'Oganesson', symbol: 'Og', category: 'Noble Gas', danger: 'Very High', description: 'A highly radioactive, synthetic element. The heaviest element known.', fact: 'Oganesson is named after Yuri Oganessian, a pioneer in superheavy element research.' }
    };
    
    // ===== 2. DOM REFERENCES =====
    const grid = document.getElementById('encyclopedia-grid');
    const searchInput = document.getElementById('search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const noResultsMessage = document.getElementById('no-results');
    const moreFiltersToggle = document.getElementById('more-filters-toggle');
    const extraFiltersDiv = document.getElementById('extra-filters');

    // ===== 3. FUNCTIONS =====

    // Cipta dan papar kad elemen
    function displayElements(elementsToDisplay) {
        grid.innerHTML = ''; // Kosongkan grid
        let resultsFound = false;

        for (const key in elementsToDisplay) {
            resultsFound = true;
            const el = elementsToDisplay[key];
            const card = document.createElement('div');
            card.className = 'encyclopedia-card';
            
            // Tambah class untuk warna border
            card.classList.add(`category-${el.category.toLowerCase().split(' ')[0]}`);

            card.innerHTML = `
                <div class="card-header">
                    <div class="card-symbol">${el.symbol}</div>
                    <div class="card-title-group">
                        <h3 class="card-title">${el.name}</h3>
                        <span class="card-category">${el.category}</span>
                    </div>
                </div>
                <div class="card-body">
                    <p class="card-description">${el.description}</p>
                    <p class="card-fact"><strong>Fun Fact:</strong> ${el.fact || 'N/A'}</p>
                </div>
                <div class="card-footer">
                    <span class="card-danger danger-${el.danger.toLowerCase().split(' ')[0]}">
                        <i class="fas fa-biohazard"></i> Danger: ${el.danger}
                    </span>
                </div>
            `;
            grid.appendChild(card);
        }

        // Tunjuk mesej jika tiada hasil
        noResultsMessage.style.display = resultsFound ? 'none' : 'block';
    }

    // Fungsi utama untuk filter dan search
    function filterAndSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

        const filteredElements = {};
        
        for (const key in elements) {
            const el = elements[key];
            const name = el.name.toLowerCase();
            const symbol = el.symbol.toLowerCase();
            const category = el.category.toLowerCase();
            const description = el.description.toLowerCase();

            // Cek 1: Adakah ia match filter kategori?
            const categoryMatch = (activeFilter === 'all') || (category === activeFilter.toLowerCase());

            // Cek 2: Adakah ia match search term?
            const searchMatch = (name.includes(searchTerm)) || 
                                (symbol.includes(searchTerm)) || 
                                (category.includes(searchTerm)) ||
                                (description.includes(searchTerm));

            if (categoryMatch && searchMatch) {
                filteredElements[key] = el;
            }
        }

        displayElements(filteredElements);
    }

    // ===== 4. EVENT LISTENERS =====

    // Listener untuk search bar (setiap kali taip)
    searchInput.addEventListener('input', filterAndSearch);

    // Listener untuk butang filter
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Tukar class 'active'
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Jalankan fungsi filter
            filterAndSearch();
        });
    });
    
    if (moreFiltersToggle) {
        moreFiltersToggle.addEventListener('click', () => {
            // Hanya toggle di desktop/tablet (di mobile ia akan sentiasa 'flex' melalui CSS)
            if (window.innerWidth > 767) { 
                extraFiltersDiv.classList.toggle('show');

                // Tukar ikon arrow
                const icon = moreFiltersToggle.querySelector('i');
                if (extraFiltersDiv.classList.contains('show')) {
                    icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
                } else {
                    icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
                }
            }
        });
    }

    // Mula! Papar semua elemen semasa page load
    displayElements(elements);
});