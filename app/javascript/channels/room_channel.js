import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
   console.log('Active')
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#message').append("<div class='message'>"+ data.content + "</div>")
   
    // Called when there's incoming data on the websocket for this channel
  }
});
