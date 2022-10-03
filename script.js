(() => {
  /* Main video player
  ============================================================ */

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

  /* Components
  ============================================================ */
  const parser = new DOMParser();
  fetch('component.html').then((response) =>
    response.text().then((text) => {
      const parsedDocument = parser.parseFromString(text, 'text/html');
      const component = parsedDocument.getElementById('component');
      const targetElement = document.createElement('div');
      // Clone the template content to reuse it multiple times
      targetElement.append(component.content.cloneNode(true));
      document.body.append(targetElement);
    })
  );
})();
