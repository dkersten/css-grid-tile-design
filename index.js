const mainSection = document.querySelector ('main');

mainSection.addEventListener ('click', e => {
  if (e.target.tagName === 'A') {
    console.log (e.target);
  }
});
