// ✅ Add this line at the VERY TOP of your script.js file!
// Replace with your Google Web App URL (from Apps Script deployment)
const scriptUrl = 'https://script.google.com/macros/s/AKfycbx0o2Mr0RBO4gi6WnNhmFWvzzBwpk40l5AChj2zOEOuaG1zGxmot-co3WSS6eD6U9YV/exec';

// Function to show the selected form and hide others
function showForm(formId) {
  // Hide all form sections
  document.querySelectorAll('.form-section').forEach(section => {
    section.style.display = 'none';
  });

  // Show the selected form section
  document.getElementById(formId).style.display = 'block';
}

// Rest of your code...
// Function to show the selected form and hide others
function showForm(formId) {
  // Hide all form sections
  document.querySelectorAll('.form-section').forEach(section => {
    section.style.display = 'none';
  });

  // Show the selected form section
  document.getElementById(formId).style.display = 'block';
}

// Initialize the first form as active
showForm('accountFormSection');

// Fetch ASINs for the dropdown
async function fetchAsins() {
  const response = await fetch(`${scriptUrl}?action=getAsins`);
  const data = await response.json();
  const asinSelect = document.getElementById('asinOrder');
  asinSelect.innerHTML = data.map(asin => `<option value="${asin}">${asin}</option>`).join('');
}

// Handle form submissions
document.getElementById('accountForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  await fetch(scriptUrl, {
    method: 'POST',
    body: JSON.stringify({ action: 'addAccount', data }),
    headers: { 'Content-Type': 'application/json' }
  });
  e.target.reset();
});

// Repeat for other forms (sellerForm, orderForm, ratingsForm)

// Fetch and display data
async function fetchData() {
  const response = await fetch(`${scriptUrl}?action=getData`);
  const data = await response.json();
  const dataDisplay = document.getElementById('dataDisplay');
  dataDisplay.innerHTML = JSON.stringify(data, null, 2);
}

// Initialize
fetchAsins();
fetchData();