const contactBlock = document.querySelector(".contact-block");
const popup = document.querySelector(".contact-block__inner");
const openPopupButton = document.querySelector(".footer__button");
const closePopupButton = document.querySelector(".contact-block__close");
const form = document.querySelector(".contact-form");
const isEscapeKey = (evt) => evt.key === "Escape";

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
  contactBlock.classList.remove("contact-block--active");
  popup.classList.remove("contact-block__inner--active");
  document.removeEventListener("keydown", onPopupEscKeydown);
  document.removeEventListener("click", onPopupCloseButtonClick);
  document.removeEventListener("click", onWindowCloseByClick);
  form.reset();
}

function openPopup(evt) {
  evt.preventDefault();
  contactBlock.classList.add("contact-block--active");
  popup.classList.add("contact-block__inner--active");
  closePopupButton.addEventListener("click", onPopupCloseButtonClick);
  document.addEventListener("keydown", onPopupEscKeydown);
  document.addEventListener("click", onWindowCloseByClick);
}

openPopupButton.addEventListener("click", openPopup);

form.addEventListener('submit', formSend);

async function formSend(evt) {
  evt.preventDefault();
  let error = formValidate(form);
}

function formValidate(form) {
  let error = 0;
  let requiredInputs = document.querySelectorAll("input[required]");

  for(let i = 0; i < requiredInputs.length; i++) {
    const input = requiredInputs[i];
  }
  console.log(input);
}