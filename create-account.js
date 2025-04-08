const form = document.getElementById('create-account-form');
const fullName = document.getElementById('full-name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirm-password');

// دالة للتحقق من صحة البريد الإلكتروني
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// إضافة حدث الـ submit
form.addEventListener('submit', function(event) {
  event.preventDefault();  // منع الإرسال مباشرة

  let valid = true;

  // التحقق من البيانات
  if (fullName.value.trim() === '') {
    alert('Full Name is required!');
    valid = false;
  }

  if (emailField.value.trim() === '' || !validateEmail(emailField.value)) {
    alert('Please enter a valid email address!');
    valid = false;
  }

  if (passwordField.value.trim() === '') {
    alert('Password is required!');
    valid = false;
  }

  if (confirmPasswordField.value.trim() === '' || confirmPasswordField.value !== passwordField.value) {
    alert('Passwords do not match!');
    valid = false;
  }

  if (valid) {
    alert('Account created successfully!');
    // هنا ممكن نضيف أي عملية بعد إنشاء الحساب زي توجيه المستخدم لصفحة دخول
    window.location.href = 'index.html';  // الانتقال لصفحة الـ Login بعد التسجيل
  }
});
