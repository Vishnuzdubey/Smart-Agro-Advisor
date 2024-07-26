let currentChat = 'contact1';
const chats = {
    contact1: [],
    contact2: [],
    contact3: []
};

function selectChat(contact) {
    currentChat = contact;
    document.getElementById('contact-name').innerText = contact;
    loadChat();
}

function loadChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = '';
    chats[currentChat].forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', message.type);
        messageElement.innerText = message.text;
        chatBox.appendChild(messageElement);
    });
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value;

    if (messageText.trim() !== "") {
        const chatBox = document.getElementById('chat-box');

        // Create a new message element
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.innerText = messageText;

        // Add the message to the chat box
        chatBox.appendChild(messageElement);

        // Add the message to the chat history
        chats[currentChat].push({ type: 'sent', text: messageText });

        // Clear the input
        messageInput.value = '';

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Load the initial chat
selectChat(currentChat);
