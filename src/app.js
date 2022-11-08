const contactBlock = document.querySelector('.contact-block');
const popup = document.querySelector('.contact-block__inner');
const openPopupButton = document.querySelector('.footer__button');
const closePopupButton = document.querySelector('.contact-block__close');

openPopupButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    contactBlock.classList.add('contact-block--active');
    popup.classList.add('contact-block__inner--active');
});

closePopupButton.addEventListener('click',() => {
    contactBlock.classList.remove('contact-block--active');
    popup.classList.remove('contact-block__inner--active');
});

document.addEventListener('click', (evt) => {
    if(evt.target === contactBlock) {
        contactBlock.classList.remove('contact-block--active'); 
        popup.classList.remove('contact-block__inner--active');
        popup.classList.remove('contact-block__inner--active');
    }
});