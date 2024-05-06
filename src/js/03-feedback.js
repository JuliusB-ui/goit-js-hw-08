import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const emailEl = document.querySelector('label [name="email"]');
const messageEl = document.querySelector('label [name="message"]');

const STORAGE_KEY = 'feedback-form-state';

function onPageReload() {
  const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedMessage) {
    emailEl.value = savedMessage.email;
    messageEl.value = savedMessage.message;
  }
}

onPageReload();

function onFormInput() {
  const email = emailEl.value;
  const message = messageEl.value;

  const formData = {
    email,
    message,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(e) {
  e.preventDefault();
  const email = emailEl.value;
  const message = messageEl.value;

  if (email === '' || message === '') {
    alert('Enter both input parameters');
    form.reset();
    return;
  }
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}

form.addEventListener('submit', onFormSubmit);
