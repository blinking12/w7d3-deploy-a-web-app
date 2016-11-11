document.getElementById('message').addEventListener('keypress', searchEnter)

var messageInput = document.getElementById('message')

function searchEnter(event) {
    if (event.key === 'Enter') {
        fetchIt()
        // console.log('Enter')
    }
}
function fetchIt() {
    fetch('/chats', {
	method: 'post',
    headers: {
	       'Content-Type': 'application/json'
       },
	body: JSON.stringify({
	    message: messageInput.value
	})
});

}

function addChatMessage(chat) {
    var messages = document.getElementById('messages')
    var othersMessage = document.createElement('li')
    var othersMessageText = chat.message
    othersMessage.classList.add('list-group-item')
    othersMessage.innerHTML = othersMessageText
    messages.insertBefore(othersMessage, messages.childNodes[0])
    messageInput.value = ''
}

// Pusher Setup
var pusher = new Pusher('6e5f67bde794d28881ed', {
  encrypted: true
})

var pusherChannel = pusher.subscribe('chat_app')

pusherChannel.bind('new_chat', function(chat) {
  addChatMessage(chat)
})
