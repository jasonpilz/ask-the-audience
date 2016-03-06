'use strict';

const socket = io();

let $connectionCount = document.getElementById('connection-count');
let $statusMessage   = document.getElementById('status-message');
let $buttons         = document.querySelectorAll('#choices button');
let $votes           = document.getElementById('votes');
let $yourVote        = document.getElementById('your-vote');

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
  $votes.innerText = "A: " + votes.A +  "  --  " +
                     "B: " + votes.B +  "  --  " +
                     "C: " + votes.C +  "  --  " +
                     "D: " + votes.D

})

socket.on('voted', (vote) => {
  $yourVote.innerText = `Your Vote: ${vote}`;
});
