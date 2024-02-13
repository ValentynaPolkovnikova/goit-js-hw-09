const storageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

function readFormData(form) {
  const message = form.message.value.trim();
  const email = form.email.value.trim();

  return {
    message,
    email,
  };
}

form.addEventListener('input', event => {
  const data = readFormData(event.currentTarget);
  const jsonData = JSON.stringify(data);

  localStorage.setItem(storageKey, jsonData);
});

const storageData = localStorage.getItem(storageKey);

if (storageData) {
  const data = JSON.parse(storageData);
  form.message.value = data.message;
  form.email.value = data.email;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  if (data.message && data.email) {
    console.log(data);
    form.reset();
    localStorage.removeItem(storageKey);
  } else {
    alert('Будь ласка, заповніть всі поля форми!');
  }
});