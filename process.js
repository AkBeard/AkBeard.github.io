function openModal(videoSrc, title, description) {
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const modalTitle = document.getElementById('modalVideoTitle');
  const modalDesc = document.getElementById('modalVideoDescription');

  modal.style.display = 'flex'; // Use flex to center it
  modalVideo.src = videoSrc;
  modalVideo.load();
  modalVideo.play();
  modalTitle.textContent = title;
  modalDesc.textContent = description;
}

function closeModal() {
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');

  modal.style.display = 'none';
  modalVideo.pause();
  modalVideo.src = ''; // Reset the video
}

// Optional: Close modal when clicking outside
window.addEventListener('click', function (event) {
  const modal = document.getElementById('videoModal');
  if (event.target === modal) {
    closeModal();
  }
});
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});
