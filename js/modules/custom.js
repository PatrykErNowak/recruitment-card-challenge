export default function () {
  // Card Elements
  const card = document.querySelector('.js-card');
  const cardNumber = document.querySelector('.js-card-number');
  const cardHolder = document.querySelector('.js-card-holder');
  const cardMonth = document.querySelector('.js-card-month');
  const cardYear = document.querySelector('.js-card-year');
  const cardCVV = document.querySelector('.js-card-cvv');

  // Form Elements
  const formNumber = document.querySelector('.js-form-number');
  const formHolder = document.querySelector('.js-form-holder');
  const formMonth = document.querySelector('.js-form-month');
  const formYear = document.querySelector('.js-form-year');
  const formCVV = document.querySelector('.js-form-cvv');

  // Logos
  const mastercardLogos = document.querySelectorAll('.js-mastercard');
  const visaLogos = document.querySelectorAll('.js-visa');

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

  function changeCardTypeLogo(e) {
    const value = e.target.value;
    const isMastercard = /^5[1-5]/.test(value);

    if (isMastercard) {
      mastercardLogos.forEach((logo) => logo.classList.add('active'));
      visaLogos.forEach((logo) => logo.classList.remove('active'));
    } else {
      mastercardLogos.forEach((logo) => logo.classList.remove('active'));
      visaLogos.forEach((logo) => logo.classList.add('active'));
    }
  }

  function displayNumbers(e) {
    const value = e.target.value;
    const numbers = value.split('');

    if (value.length < cardNumber.children.length)
      cardNumber.children[value.length].classList.remove('filed');

    if (value.length > 0) {
      cardNumber.children[value.length - 1].innerHTML = numbers.at(
        value.length - 1
      );
      cardNumber.children[value.length - 1].classList.add('filed');
    }
  }

  function makeAnimatioHolder() {
    let holderName = '';

    return function (value) {
      if (value > holderName) {
        cardHolder.textContent = value.substring(0, value.length - 1);
        cardHolder.insertAdjacentHTML(
          'beforeend',
          `<span class="rotateLeft">${value[value.length - 1] || ''}</span>`
        );
        holderName = value;
      }
      if (value < holderName) {
        cardHolder.textContent = value;

        holderName = value;
      }

      if (!value) {
        holderName = 'AD SOYAD';
        cardHolder.textContent = holderName;
      }
    };
  }
  const animateHolder = makeAnimatioHolder();

  // -------------------------------------------------------------------
  // Event Listeners

  toggleClassOnFocusBlur(formNumber, cardNumber, 'highlight');
  toggleClassOnFocusBlur(formHolder, cardHolder, 'highlight');
  toggleClassOnFocusBlur(formMonth, cardMonth, 'highlight');
  toggleClassOnFocusBlur(formYear, cardYear, 'highlight');
  toggleClassOnFocusBlur(formCVV, card, 'flip');

  // Fill Card
  formNumber.addEventListener('input', (e) => {
    changeCardTypeLogo(e);
    displayNumbers(e);
  });

  formHolder.addEventListener('input', (e) => {
    const value = e.target.value;
    animateHolder(value);
  });

  formMonth.addEventListener('change', (e) => {
    const value = String(e.target.value).padStart(2, '0');
    cardMonth.innerHTML = `<span class="fadeUp">${value}</span>`;
  });

  formYear.addEventListener('change', (e) => {
    const value = String(e.target.value).substring(2);
    cardYear.innerHTML = `<span class="fadeUp">${value}</span>`;
  });

  formCVV.addEventListener(
    'input',
    (e) => (cardCVV.textContent = e.target.value)
  );

  // Form Validation
  formNumber.addEventListener('beforeinput', (e) => {
    if (e.data !== null && !/[0-9]/.test(e.data)) e.preventDefault();
  });
  formHolder.addEventListener('beforeinput', (e) => {
    if (e.data !== null && !/[a-zA-Z\s]/.test(e.data)) e.preventDefault();
  });
  formCVV.addEventListener('beforeinput', (e) => {
    if (e.data !== null && !/[0-9]/.test(e.data)) e.preventDefault();
  });
}
