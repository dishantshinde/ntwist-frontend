// Get references to the form, its inputs, the submit button, and modal elements
const form = document.getElementById("contactForm");
const inputs = form.querySelectorAll("input, textarea");
const submitButton = form.querySelector('button[type="submit"]');
const modal = document.getElementById("confirmationModal");
const closeBtn = document.getElementById("closeBtn");

// Function to check if all form fields are filled
function checkFormFields() {
  const allFilled = Array.from(inputs).every(
    (input) => input.value.trim() !== ""
  );
  // Enable or disable the submit button based on form completeness
  submitButton.disabled = !allFilled;
}

// Initial check on page load
checkFormFields();

// Add input event listener to all input and textarea fields
inputs.forEach((input) => {
  input.addEventListener("input", checkFormFields);
});

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  modal.style.display = "block"; // Show confirmation modal
  form.reset(); // Clear form fields
  checkFormFields(); // Re-check form fields to disable the submit button
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close the modal if user clicks outside of it
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
