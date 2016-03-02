const socket = io();

let $connectionCount = document.getElementById('connection-count');
let $statusMessage   = document.getElementById('status-message');
let $buttons         = document.querySelectorAll('#choices button');

for (let i = 0; i < $buttons.length; i++) {
  $buttons[i].addEventListener('click', (event) => {
    socket.send('voteCast', event.target.innerText);
  });
};

socket.on('usersConnected', (count) => {
  $connectionCount.innerText = `Connected Users: ${count}`;
});

socket.on('statusMessage', (message) => {
  $statusMessage.innerText = message;
});

socket.on('voteCount', (votes) => {
  console.log(votes);
});
