const divKeys = document.querySelector('.keys');

function removeTransition(e) {
  if (e.propertyName === 'transform') {
    e.target.className = 'key';
  }
}

function playSound(e) {
  // selecting el based on its attr
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const divKey = document.querySelector(`div[data-key="${e.keyCode}"]`);

  audio.currentTime = 0; // rewinds to start
  audio.play();
  divKey.classList.add('playing');
}

window.addEventListener('keydown', playSound);
divKeys.addEventListener('transitionend', removeTransition);
