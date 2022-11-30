import Inputmask from 'inputmask';
import JustValidate from 'just-validate';

const contactBlock = document.querySelector('.contact-block');
const popup = document.querySelector('.contact-block__inner');
const openPopupButton = document.querySelector('.footer__button');
const closePopupButton = document.querySelector('.contact-block__close');
const submitPopupButton = document.querySelector('.contact-form__button');
const form = document.getElementById('contact-form');
const email = document.getElementById('email');

const isEscapeKey = (evt) => evt.key === 'Escape';

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

const onPopupCloseButtonClick = () => {
  closePopup();
};

const onWindowCloseByClick = (evt) => {
  closePopupByClick(evt);
};

function closePopupByClick(evt) {
  if (evt.target === contactBlock) {
    closePopup();
  }
}

function closePopup() {
  contactBlock.classList.remove('contact-block--active');
  popup.classList.remove('contact-block__inner--active');
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onPopupCloseButtonClick);
  document.removeEventListener('click', onWindowCloseByClick);
  form.reset();
}

function openPopup(evt) {
  evt.preventDefault();
  contactBlock.classList.add('contact-block--active');
  popup.classList.add('contact-block__inner--active');
  closePopupButton.addEventListener('click', onPopupCloseButtonClick);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onWindowCloseByClick);
}

openPopupButton.addEventListener('click', openPopup);

const tel = document.querySelector('.input-tel');
const telMask = new Inputmask('+79999999999');
telMask.mask(tel);

const validation = new JustValidate('form',
{
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid #940101',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: '#940101',
    textDecoration: 'underlined',
  },
  focusInvalidField: false,
  lockForm: false,
});

validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Поле должно содержать минимум три символа',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Это поле обязательно',
    },
  ])
  .addField('.input-email', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите ваш email',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Введите корректный email',
    },
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = tel.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ])
  .onSuccess((event) => {
    console.log('Validation passes and form submited');

    let formData = new FormData(event.target);
    console.log(...formData);

    let response = fetch('sendmail.php', {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      let result = response.json();
      alert(result.message);
      form.reset();
    } else {
      alert('Ошибка');
    }
  });

