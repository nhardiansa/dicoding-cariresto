const SkipToContentInitiator = {
  init({ skipContentButton, target }) {
    skipContentButton.addEventListener('click', (e) => {
      e.preventDefault();
      target.focus();
    });
  },
};

export default SkipToContentInitiator;
