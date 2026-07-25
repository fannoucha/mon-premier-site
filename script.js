const chats = document.querySelectorAll(".chat")
chats.forEach(function(chat) {
    chat.addEventListener("click", function() {
        chat.classList.toggle("agrandie");
    });
});