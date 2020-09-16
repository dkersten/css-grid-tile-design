const mainSection = document.querySelector ('main');
const closeBtn = document.querySelector ('.overlay > button');

mainSection.addEventListener ('click', e => {
  if (e.target.tagName === 'BUTTON') {
    showOverlay ();
  }
});

closeBtn.addEventListener ('click', e => {
  hideOverlay ();
});

const showOverlay = () => {
  const overlay = document.querySelector ('div.overlay');
  overlay.classList.add ('shown');
  overlay.classList.remove ('hidden');
};

const hideOverlay = () => {
  const overlay = document.querySelector ('div.overlay');
  overlay.classList.add ('hidden');
  overlay.classList.remove ('shown');
};
