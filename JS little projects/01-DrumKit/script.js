window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio){
    return;
  }
  audio.currentTime = 0;
  audio.play();

  const key = document.querySelector(`.block-keys__key[data-key="${e.keyCode}"]`);
  key.classList.add('playing');

  function removeAnimation(e){
    if (e.propertyName != 'transform'){
      return;
    }
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.block-keys__key');
  keys.forEach(key => key.addEventListener('transitionend', removeAnimation));

});