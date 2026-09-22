// Open: any button with data-modal-target opens the matching dialog
document.querySelectorAll('[data-modal-target]').forEach(trigger => {
  trigger.addEventListener('click', () => {
    document.getElementById(trigger.dataset.modalTarget).showModal();
  });
});

// Close: clicking the enlarged image itself closes its own dialog
document.querySelectorAll('.modal-image').forEach(img => {
  img.addEventListener('click', () => {
    img.closest('dialog').close();
  });
});