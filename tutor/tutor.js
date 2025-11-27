document.addEventListener('DOMContentLoaded', () => {

const systemPrompt = `
You are WISE, a friendly science teacher for Sudents (Age range 13-25).
Explain using simple English, short paragraphs, and analogies.
Avoid unnecessary details unless asked.
`;
    
    // Fungsi utama untuk menghantar mesej
    async function sendMessage() {
        const input = document.getElementById('input');
        const msg = input.value;

        if (msg.trim() === '') return;

        appendMessage(msg, 'user');
        input.value = '';

        // Tambah 'typing' indicator
        appendMessage('...', 'bot typing');

        try {
            // URL ini bergantung pada backend Python Flask/Server anda
            const res = await fetch('http://127.0.0.1:5000/chat', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ message: msg })
            });
            const data = await res.json();
            
            // Buang 'typing' indicator
            removeTypingIndicator();
            
            appendMessage(data.reply, 'bot');

        } catch (error) {
            // Handle error jika server tak running
            removeTypingIndicator();
            appendMessage('Error: Could not connect to the AI server. Please ensure the server is running on http://127.0.0.1:5000.', 'bot error');
            console.error('Fetch error:', error);
        }
    }

    function appendMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;
        msgDiv.textContent = text;
        
        const messagesContainer = document.getElementById('messages');
        messagesContainer.appendChild(msgDiv);

        // Auto-scroll ke mesej terbaru
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function removeTypingIndicator() {
        const typingMessage = document.querySelector('.message.typing');
        if (typingMessage) {
            typingMessage.remove();
        }
    }


    // ==========================================================
    // ===== EVENT LISTENERS (KEMAS KINI DAN TAMBAHAN) =====
    // ==========================================================

    // 1. Listener untuk hantar mesej guna 'Enter' pada input field
    const inputField = document.getElementById('input');
    if (inputField) {
        inputField.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // 2. Listener untuk butang send (ID BARU: 'send-btn')
    const sendBtn = document.getElementById('send-btn');
    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }
    
    // 3. Listener untuk Sidebar Topics (Isikan input field)
    const sidebarItems = document.querySelectorAll('.sidebar-list li');

    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            const topic = item.textContent.trim();
            
            // Set input field value
            if (inputField) {
                inputField.value = `Tell me about ${topic} and how it relates to modern science.`;
                inputField.focus(); 
            }
        });
    });

});

fetch("http://127.0.0.1:5000/chat", {
   method: "POST",
   headers: {"Content-Type": "application/json"},
   body: JSON.stringify({ message: userMessege })
})
