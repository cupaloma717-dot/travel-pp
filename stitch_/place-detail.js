document.querySelectorAll('[data-gallery]').forEach((gallery) => {
  const mainImage = gallery.querySelector('[data-gallery-main]');
  const label = gallery.querySelector('[data-gallery-label]');
  const thumbnails = gallery.querySelectorAll('[data-gallery-thumb]');

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
      if (!mainImage) return;
      mainImage.src = thumbnail.dataset.src;
      mainImage.alt = thumbnail.dataset.alt || '';
      if (label) label.textContent = thumbnail.dataset.label || '현장사진';
      thumbnails.forEach((item) => item.classList.remove('is-active'));
      thumbnail.classList.add('is-active');
    });
  });
});

const toast = document.querySelector('[data-toast]');
let toastTimer;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

document.querySelectorAll('[data-share]').forEach((button) => {
  button.addEventListener('click', async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url: window.location.href });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        showToast('페이지 주소를 복사했습니다.');
      } else {
        showToast('주소창의 링크를 복사해 주세요.');
      }
    } catch (error) {
      if (error && error.name !== 'AbortError') showToast('주소창의 링크를 복사해 주세요.');
    }
  });
});
