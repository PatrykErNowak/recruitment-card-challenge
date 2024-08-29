export default function () {
  // Card Elements
  const card = document.querySelector('.js-card');
  const cardNumber = document.querySelector('.js-card-number');
  const cardHolder = document.querySelector('.js-card-holder');
  const cardMonth = document.querySelector('.js-card-month');
  const cardYear = document.querySelector('.js-card-year');

  // Form Elements
  const formNumber = document.querySelector('.js-form-number');
  const formHolder = document.querySelector('.js-form-holder');
  const formMonth = document.querySelector('.js-form-month');
  const formYear = document.querySelector('.js-form-year');
  const formCVV = document.querySelector('.js-form-cvv');

  // ---------------------------------------------------------------
  // Functions

  /**
   *Function add specific className to 'Target' Element when register Focus state on Observed Element
   * @param {Element} observedElement
   * @param {Element} targetElement
   * @param {string} className
   */
  function toggleClassOnFocusBlur(observedElement, targetElement, className) {
    observedElement.addEventListener('focus', () => {
      targetElement.classList.add(className);
    });
    observedElement.addEventListener('blur', () => {
      targetElement.classList.remove(className);
    });
  }

  // -------------------------------------------------------------------
  // Event Listeners

  toggleClassOnFocusBlur(formNumber, cardNumber, 'highlight');
  toggleClassOnFocusBlur(formHolder, cardHolder, 'highlight');
  toggleClassOnFocusBlur(formMonth, cardMonth, 'highlight');
  toggleClassOnFocusBlur(formYear, cardYear, 'highlight');
  toggleClassOnFocusBlur(formCVV, card, 'flip');

  // formHolder.addEventListener('input', (e) => {
  //   const value = e.target.value;

  //   if (!value) cardHolder.textContent = 'AD SOYAD';
  //   if (value) cardHolder.textContent = value;
  // });
}
