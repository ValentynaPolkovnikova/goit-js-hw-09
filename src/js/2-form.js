const storageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formData = JSON.parse(localStorage.getItem(storageKey)) || { message: '', email: '' };
const storageData = localStorage.getItem(storageKey);

function readFormData(form) {
  const message = form.message.value.trim();
  const email = form.email.value.trim();

  return {
    message,
    email,
  };
}

if (formData.message && formData.email) {
const data = JSON.parse(formData);
 form.message.value = formData.message;
 form.email.value = formData.email;
}

form.addEventListener('submit', event => {
 event.preventDefault();
const data = readFormData(event.currentTarget);

 if (formData.message && formData.email) {
 console.log(formData);
 form.reset();
  localStorage.clear();
 } else {
 alert('Будь ласка, заповніть всі поля форми!');
 }
});