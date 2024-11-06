// src/validateForm.js
export function validateForm(event) {
  event.preventDefault(); // Prevent form submission to run validation first

  // Clear any existing error messages
  const errorElements = document.querySelectorAll('.text-red-500');
  errorElements.forEach(el => el.classList.add('hidden'));

  let valid = true;

  // Validate the "Choose a Number" input
  const numberChoice = document.getElementById('numberChoice');
  const numberChoiceValue = parseInt(numberChoice.value, 10);
  if (isNaN(numberChoiceValue) || numberChoiceValue < 100 || numberChoiceValue > 900 || numberChoiceValue % 100 !== 0) {
    document.getElementById('numberChoice-error').classList.remove('hidden');
    valid = false;
  }

  // Validate other required inputs in the form
  const inputs = document.querySelectorAll('#contactForm input[required]:not(#numberChoice)');
  inputs.forEach(input => {
    if (!input.value.trim()) {
      document.getElementById(`${input.name}-error`).classList.remove('hidden');
      valid = false;
    }
  });

  // Validate textarea if present and required
  const textarea = document.getElementById('textarea');
  if (textarea && textarea.value.trim() === '') {
    document.getElementById('textarea-error').classList.remove('hidden');
    valid = false;
  }

  // Validate disclaimer checkbox
  const disclaimer = document.getElementById('disclaimer');
  if (disclaimer && !disclaimer.checked) {
    document.getElementById('disclaimer-error').classList.remove('hidden');
    valid = false;
  }

  // Submit the form if all validations pass
  if (valid) {
    document.getElementById('contactForm').submit();
  }
}
