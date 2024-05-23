document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chatMessages");
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.getElementById("sendButton");

    sendButton.addEventListener("click", function() {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.textContent = messageText;
            chatMessages.appendChild(messageElement);
            messageInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    messageInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });
});