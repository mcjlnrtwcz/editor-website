export default function (root) {
  return;
  const [video] = root.getElementById('player__video');
  const playpause = root.getElementById('playpause');

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
}
