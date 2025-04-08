
const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');
togglePassword.addEventListener('click', function() {
  const type = passwordField.type === 'password' ? 'text' : 'password';
  passwordField.type = type;
  this.classList.toggle('fa-eye-slash');
});
const form = document.querySelector('form');
const emailField = document.getElementById('email');
 passwordField = document.getElementById('password');
form.addEventListener('submit', function(event) {
  event.preventDefault();  
  
  let valid = true;
  if (emailField.value.trim() === '' || !validateEmail(emailField.value)) {
    valid = false;
    alert('Please enter a valid email address.');
  }
  if (passwordField.value.trim() === '') {
    valid = false;
    alert('Password cannot be empty.');
  }

  if (valid) {
    alert('Form submitted successfully!');
  }
});
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  let valid = true;
  errorMessage.classList.add('d-none');  // نخفي الرسالة لو في محاولة جديدة للإرسال

  if (emailField.value.trim() === '' || !validateEmail(emailField.value)) {
    valid = false;
    errorMessage.textContent = 'Please enter a valid email address.';
  }

  if (passwordField.value.trim() === '') {
    valid = false;
    errorMessage.textContent = 'Password cannot be empty.';
  }

  if (valid) {
    alert('Form submitted successfully!');
  } else {
    errorMessage.classList.remove('d-none');  // نظهر الرسالة لو في خطأ
  }
});

