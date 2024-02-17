const storageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formData = readFormData(form);

function readFormData(form) {
  const message = form.message.value.trim();
  const email = form.email.value.trim();

  return {
    message,
    email,
  };
}

if (formData.message && formData.email) {
  form.message.value = formData.message;
  form.email.value = formData.email;
}

form.addEventListener('input', event => {
  formData = readFormData(event.currentTarget);
  const jsonData = JSON.stringify(formData);
  localStorage.setItem(storageKey, jsonData);
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.message && formData.email) { 
    console.log(formData);
    form.reset();
    localStorage.removeItem(storageKey);
  } else {
    alert('Будь ласка, заповніть всі поля форми!');
  }
});