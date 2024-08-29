export default function () {
  const cardHolder = document.querySelector('.js-card-holder');
  const formHolder = document.querySelector('.js-form-holder');

  formHolder.addEventListener('input', (e) => {
    const value = e.target.value;

    cardHolder.textContent = value;
  });
}
