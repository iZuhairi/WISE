document.addEventListener('DOMContentLoaded', () => {

    // Pemalar Graviti (g)
    const g = 9.81; 
    
    // ==========================================================
    // ===== 1. SIMULATOR: POTENTIAL ENERGY (PE) - ASAL =====
    // ==========================================================
    const peMass = document.getElementById('pe-mass');
    const peHeight = document.getElementById('pe-height');
    const peMassValue = document.getElementById('pe-mass-value');
    const peHeightValue = document.getElementById('pe-height-value');
    const peOutput = document.getElementById('pe-output');

    function calculatePE() {
        const mass = parseFloat(peMass.value);
        const height = parseFloat(peHeight.value);
        const potentialEnergy = mass * g * height;

        peMassValue.textContent = `${mass} kg`;
        peHeightValue.textContent = `${height} m`;
        peOutput.textContent = `Potential Energy (PE) = ${potentialEnergy.toFixed(2)} Joules`;
    }

    if (peMass && peHeight) {
        peMass.addEventListener('input', calculatePE);
        peHeight.addEventListener('input', calculatePE);
        calculatePE(); 
    }

    // ==========================================================
    // ===== 2. SIMULATOR: STATE OF MATTER (SM) - ASAL =====
    // ==========================================================
    const smTemp = document.getElementById('sm-temp');
    const smTempValue = document.getElementById('sm-temp-value');
    const smOutput = document.getElementById('sm-output');
    const smVisual = document.getElementById('sm-visual');

    function updateState() {
        const temp = parseFloat(smTemp.value);
        let state = '';
        let icon = '';
        let stateClass = '';

        if (temp <= 0) {
            state = 'Solid (Ice)'; // Tukar untuk lebih jelas
            icon = 'fa-snowflake';
            stateClass = 'state-solid';
        } else if (temp > 0 && temp < 100) {
            state = 'Liquid (Water)';
            icon = 'fa-water';
            stateClass = 'state-liquid';
        } else {
            state = 'Gas (Steam)';
            icon = 'fa-cloud';
            stateClass = 'state-gas';
        }

        smTempValue.textContent = `${temp} °C`;
        smOutput.textContent = `State: ${state}`;
        smVisual.innerHTML = `<i class="fas ${icon}"></i>`;
        smVisual.className = `visual-state ${stateClass}`;
    }

    if (smTemp) {
        smTemp.addEventListener('input', updateState);
        updateState();
    }

    // ==========================================================
    // ===== 3. SIMULATOR: PROJECTILE MOTION (PM) - ASAL =====
    // ==========================================================
    const pmVelocity = document.getElementById('pm-velocity');
    const pmAngle = document.getElementById('pm-angle');
    const pmVelocityValue = document.getElementById('pm-velocity-value');
    const pmAngleValue = document.getElementById('pm-angle-value');
    const pmOutput = document.getElementById('pm-output');

    function calculatePM() {
        const v = parseFloat(pmVelocity.value);
        const theta = parseFloat(pmAngle.value);
        const thetaRad = theta * (Math.PI / 180);
        const range = (Math.pow(v, 2) * Math.sin(2 * thetaRad)) / g;

        pmVelocityValue.textContent = `${v} m/s`;
        pmAngleValue.textContent = `${theta} °`;
        pmOutput.textContent = `Range (Distance) = ${range.toFixed(2)} meters`;
    }

    if (pmVelocity && pmAngle) {
        pmVelocity.addEventListener('input', calculatePM);
        pmAngle.addEventListener('input', calculatePM);
        calculatePM(); 
    }

    // ==========================================================
    // ===== 4. MODUL CIRCUIT BUILDER (Ohm's Law: I = V/R) - BARU =====
    // ==========================================================
    
    const voltageSlider = document.getElementById('voltage-slider');
    const resistanceSlider = document.getElementById('resistance-slider');
    const voltageOutput = document.getElementById('voltage-output');
    const resistanceOutput = document.getElementById('resistance-output');
    const runCircuitBtn = document.getElementById('run-circuit-btn');
    const currentResult = document.getElementById('current-result');
    const lightBulb = document.getElementById('light-bulb');
    const lightStatus = document.getElementById('light-status');
    
    if (voltageSlider && resistanceSlider) {
        let V = parseFloat(voltageSlider.value);
        let R = parseFloat(resistanceSlider.value);

        function updateCircuitValues() {
            V = parseFloat(voltageSlider.value);
            R = parseFloat(resistanceSlider.value);
            voltageOutput.textContent = `${V} V`;
            resistanceOutput.textContent = `${R} Ω`;
            
            // Reset visual bila slider digerakkan
            if(lightBulb) lightBulb.style.color = 'var(--text-color)';
            if(lightBulb) lightBulb.style.opacity = '0.3';
            if(currentResult) currentResult.textContent = '0 A';
            if(lightStatus) lightStatus.textContent = 'Click Simulate to run';
        }

        function calculateCircuit() {
            const current = V / R; 
            const currentRounded = current.toFixed(2);
            
            if(currentResult) currentResult.textContent = `${currentRounded} A`;
            
            let brightness;
            let status;
            
            if (current > 0.5) {
                brightness = Math.min(1.0, current / 1.5);
                if(lightBulb) lightBulb.style.color = 'yellow';
                if(lightBulb) lightBulb.style.opacity = brightness;
                
                if (current > 5.0) {
                    status = 'WARNING: Circuit Overloaded!';
                    if(lightBulb) lightBulb.style.color = 'red';
                } else if (current > 2.0) {
                    status = 'Bright: High Current Flow';
                } else {
                    status = 'Normal Brightness';
                }
            } else if (current > 0) {
                if(lightBulb) lightBulb.style.color = 'yellow';
                if(lightBulb) lightBulb.style.opacity = '0.1';
                status = 'Dim: Low Current Flow';
            } else {
                if(lightBulb) lightBulb.style.color = 'var(--text-color)';
                if(lightBulb) lightBulb.style.opacity = '0.3';
                status = 'No Current (R cannot be 0)';
            }
            
            if(lightStatus) lightStatus.textContent = status;
        }

        voltageSlider.addEventListener('input', updateCircuitValues);
        resistanceSlider.addEventListener('input', updateCircuitValues);
        runCircuitBtn.addEventListener('click', calculateCircuit);
        
        updateCircuitValues();
    }


    // ==========================================================
    // ===== 5. MODUL ORBITAL DYNAMICS - BARU =====
    // ==========================================================
    const massSlider = document.getElementById('planet-mass-slider');
    const velocitySlider = document.getElementById('initial-velocity-slider');
    const massOutput = document.getElementById('planet-mass-output');
    const velocityOutput = document.getElementById('initial-velocity-output');
    const simulateOrbitBtn = document.getElementById('simulate-orbit-btn');
    const orbitResult = document.getElementById('orbit-result');
    const orbitVisual = document.getElementById('orbit-visual');
    
    if (massSlider && velocitySlider) {
        let mass = parseFloat(massSlider.value);
        let velocity = parseFloat(velocitySlider.value);

        const CRITICAL_VELOCITY = 30;
        const ESCAPE_VELOCITY = 42; 

        function updateOrbitalValues() {
            mass = parseFloat(massSlider.value);
            velocity = parseFloat(velocitySlider.value);
            massOutput.textContent = `${mass.toFixed(1)} M_E`;
            velocityOutput.textContent = `${velocity} km/s`;
            
            if(orbitVisual) orbitVisual.innerHTML = '<i class="fas fa-circle state-gas"></i>';
            if(orbitResult) orbitResult.innerHTML = 'Orbit: <span class="result-highlight">Ready</span>';
        }

        function calculateOrbit() {
            const effectiveVelocity = velocity * (1.5 / mass); 
            let result;
            let iconClass;

            if (effectiveVelocity > ESCAPE_VELOCITY) {
                result = 'Escape: Planet leaves orbit!';
                iconClass = 'fas fa-arrow-up state-solid'; 
            } else if (effectiveVelocity > CRITICAL_VELOCITY * 1.2) {
                result = 'Hyperbolic: Unstable Orbit';
                iconClass = 'fas fa-infinity state-liquid';
            } else if (effectiveVelocity < CRITICAL_VELOCITY * 0.8) {
                result = 'Collision: Spiral towards Sun';
                iconClass = 'fas fa-times state-solid'; 
            } else if (effectiveVelocity >= CRITICAL_VELOCITY * 0.9 && effectiveVelocity <= CRITICAL_VELOCITY * 1.1) {
                result = 'Stable: Near-Circular Orbit';
                iconClass = 'fas fa-sync state-liquid';
            } else {
                result = 'Stable Ellipse: Normal Orbit';
                iconClass = 'fas fa-adjust state-gas';
            }
            
            if(orbitVisual) orbitVisual.innerHTML = `<i class="${iconClass}"></i>`;
            if(orbitResult) orbitResult.innerHTML = `Orbit: <span class="result-highlight">${result}</span>`;
        }

        massSlider.addEventListener('input', updateOrbitalValues);
        velocitySlider.addEventListener('input', updateOrbitalValues);
        simulateOrbitBtn.addEventListener('click', calculateOrbit);
        
        updateOrbitalValues();
    }


    // ==========================================================
    // ===== 6. MODUL CHEMICAL REACTION BALANCER - BARU =====
    // ==========================================================
    
    const reactionInput = document.getElementById('reaction-input');
    const balanceReactionBtn = document.getElementById('balance-reaction-btn');
    const balanceResult = document.getElementById('balance-result');

    if (reactionInput && balanceReactionBtn) {
        function balanceReaction() {
            const input = reactionInput.value.trim().toLowerCase().replace(/\s/g, ''); // Buang ruang
            let resultEquation = `Equation: <span class="result-highlight">Unrecognized Reaction.</span>`;

            if (input === 'h2+o2=h2o') {
                resultEquation = 'Equation: <span class="result-highlight">2H₂ + O₂ → 2H₂O</span>';
            } else if (input === 'c+o2=co2') {
                resultEquation = 'Equation: <span class="result-highlight">C + O₂ → CO₂</span>';
            } else if (input === 'n2+h2=nh3') {
                resultEquation = 'Equation: <span class="result-highlight">N₂ + 3H₂ → 2NH₃ (Ammonia)</span>';
            }

            if(balanceResult) balanceResult.innerHTML = resultEquation;
        }

        balanceReactionBtn.addEventListener('click', balanceReaction);
    }
    
});
