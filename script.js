const modal = document.getElementById('image-modal');
const modalImg = modal.querySelector('.modal-image');

document.querySelectorAll('.thumbnail-button').forEach(button => {
  button.addEventListener('click', () => {
    const thumbnail = button.querySelector('img');
    modalImg.src = thumbnail.src;
    modalImg.alt = thumbnail.alt;
    modal.showModal();
  });
});

modalImg.addEventListener('click', () => modal.close());