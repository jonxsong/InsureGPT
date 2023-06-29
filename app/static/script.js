document.addEventListener("DOMContentLoaded", () => {
    const chatForm = document.querySelector(".chat-input");
    const input = document.querySelector("#user-message");
    const chatMessages = document.querySelector(".chat-messages");
  
    const sendMessage = () => {
      const message = input.value.trim();
  
      if (message === "") {
        return;
      }
  
      const userMessage = document.createElement("li");
      userMessage.classList.add("user-message");
      userMessage.innerText = "You:  " + message;
      chatMessages.appendChild(userMessage);
  
      input.value = "";
  
      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ question: message }),
      })
        .then((response) => response.text())
        .then((result) => {
          const botMessage = document.createElement("li");
          botMessage.classList.add("bot-message");
          botMessage.innerText = "InsureGPT:  " + result;
          chatMessages.appendChild(botMessage);
          chatMessages.scrollTop = chatMessages.scrollHeight;
        })
        .catch((error) => console.error("Error:", error));
    };
  
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      sendMessage();
    });
  
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
      }
    });
  });
  