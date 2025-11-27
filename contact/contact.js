document.addEventListener('DOMContentLoaded', () => {

    const contactForm = document.getElementById('contact-form');
    const modal = document.getElementById('feedback-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // Fungsi untuk tunjuk modal custom
    function showCustomAlert(message) {
        document.getElementById('modal-message').textContent = message;
        modal.classList.add('show');
    }

    // Fungsi untuk tutup modal
    function hideCustomAlert() {
        modal.classList.remove('show');
    }

    // Tambah listener untuk tutup modal
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', hideCustomAlert);
        // Boleh tutup dengan klik di luar kotak mesej juga
        modal.addEventListener('click', (e) => {
            if (e.target.id === 'feedback-modal') {
                hideCustomAlert();
            }
        });
    }
    
    
    if (contactForm) {
        
        contactForm.addEventListener('submit', function(e) {
            
            e.preventDefault(); 

            // Kumpulkan data borang (sama macam asal)
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            // const subject = document.getElementById('contact-subject').value;
            // const message = document.getElementById('contact-message').value;

            // Logik Simulasi
            console.log("--- Borang Dihantar (Simulasi) ---");
            console.log(`Nama: ${name}`);
            // ...

            // 4. Maklum Balas Menggunakan MODAL CUSTOM
            contactForm.reset(); 
            const successMessage = `Thank You, ${name}! for your feedback.`;
            showCustomAlert(successMessage);
        });
    }
});
