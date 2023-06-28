document.addEventListener('DOMContentLoaded', () => {
  const chatContainer = document.querySelector('.chat-container');
  const chatMessages = document.querySelector('.chat-messages');
  const userInput = document.getElementById('user-message');
  const sendButton = document.getElementById('send-button');

  sendButton.addEventListener('click', () => {
      const userMessage = userInput.value.trim();
      if (userMessage !== '') {
          appendMessage('You', userMessage);
          userInput.value = '';
          getBotResponse(userMessage);
      }
  });

  const appendMessage = (sender, message) => {
      const messageElement = document.createElement('li');
      messageElement.classList.add('message');
      messageElement.innerHTML = `<span class="sender">${sender}: </span>${message}`;
      chatMessages.appendChild(messageElement);
      chatContainer.scrollTop = chatContainer.scrollHeight;
  };

  const getBotResponse = async (userMessage) => {
      const response = await fetch('/get_response', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_message: userMessage })
      });
      const data = await response.json();
      const botResponse = data.response;
      appendMessage('Bot', botResponse);
  };
});
