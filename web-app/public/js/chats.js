document.querySelector('#usr').addEventListener('keypress', searchEnter)

function searchEnter(event) {
    if (event.key === 'Enter') {
        search()
    }
}
function search() {
    searchItem = document.getElementById('usr').value
fetchRequest(/chats)
}

// Pusher Setup
var pusher = new Pusher('6e5f67bde794d28881ed', {
  encrypted: true
})

var pusherChannel = pusher.subscribe('chat_app')

pusherChannel.bind('new_chat', function(chat) {
  addChatMessage(chat)
})
