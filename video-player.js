(() => {
  const [video] = document.getElementsByClassName('player__video');
  const playpause = document.getElementById('playpause');

  function playPause() {
    if (video.paused || video.ended) {
      playpause.setAttribute('data-state', 'play');
    } else {
      playpause.setAttribute('data-state', 'pause');
    }
  }

  video.addEventListener(
    'play',
    () => {
      playPause();
    },
    false
  );
  video.addEventListener(
    'pause',
    () => {
      playPause();
    },
    false
  );
  playpause.addEventListener('click', () => {
    video.paused || video.ended ? video.play() : video.pause();
  });
})();
