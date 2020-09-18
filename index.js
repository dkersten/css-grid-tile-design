const mainSection = document.querySelector ('main');
const closeBtn = document.querySelector ('.overlay button.closeBtn');

const showOverlay = () => {
  const overlay = document.querySelector ('div.overlay');
  overlay.classList.add ('shown');
  overlay.classList.remove ('hidden');
};

const populateOverlayContent = btn => {
  const card = btn.parentNode;
  const contentHeadline = card.children[0].textContent;
  const overlayContainer = document.querySelector ('div.overlay-container');

  //   create container that the content (headline, etc.) will be dynamically rendered
  overlayContainer.insertAdjacentHTML (
    'afterbegin',
    `
    <div class="overlay-content"></div>
    `
  );

  //   populate created container with dynamic content
  const overlayContent = document.querySelector ('div.overlay-content');

  overlayContent.insertAdjacentHTML (
    'afterbegin',
    `<h3>${contentHeadline}</h3>`
  );
};

mainSection.addEventListener ('click', e => {
  if (e.target.tagName === 'BUTTON') {
    showOverlay ();
    populateOverlayContent (e.target);
  }
});

closeBtn.addEventListener ('click', e => {
  hideOverlay ();
});

const hideOverlay = () => {
  const overlay = document.querySelector ('div.overlay');
  const overlayContent = document.querySelector ('div.overlay-content');
  // remove all children of
  overlayContent.querySelectorAll ('*').forEach (n => n.remove ());
  overlay.classList.add ('hidden');
  overlay.classList.remove ('shown');
};
