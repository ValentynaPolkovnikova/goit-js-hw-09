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
 event.preventDefault();
const data = readFormData(event.currentTarget);
const jsonData = JSON.stringify(data);
localStorage.setItem(storageKey, jsonData);
});
const formData = localStorage.getItem(storageKey);

if (formData) {
const data = JSON.parse(formData);
form.message.value = data.message || '';
form.email.value = data.email || '';
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const newForm = {
message: event.currentTarget.elements.message.value.trim(),
email: event.currentTarget.elements.email.value.trim(),
  };

if (newForm.message && newForm.email) {
console.log(newForm);
localStorage.removeItem(storageKey);
  form.reset();
} else {
alert('Будь ласка, заповніть всі поля форми!');
}
});