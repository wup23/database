// ✅ Replace with your Google Apps Script Web App URL
const scriptUrl = 'https://script.google.com/macros/s/AKfycbx0o2Mr0RBO4gi6WnNhmFWvzzBwpk40l5AChj2zOEOuaG1zGxmot-co3WSS6eD6U9YV/exec';

// Function to show the selected form
function showForm(formId) {
  document.querySelectorAll('.form-section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(formId).style.display = 'block';
}

// Initialize the first form as active
showForm('accountFormSection');

// ✅ Handle Account Form Submission
document.getElementById('accountForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent the form from submitting and refreshing the page

  try {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Log the data to ensure it's being captured correctly
    console.log('Account Form Data:', data);

    const response = await fetch(scriptUrl, {
      method: 'POST',
      body: JSON.stringify({ action: 'addAccount', data }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) throw new Error('Submission failed');
    alert('Account submitted successfully!');
    e.target.reset(); // Clear the form
  } catch (error) {
    console.error('Error:', error);
    alert('Account submission failed. Check the console for details.');
  }
});

// ✅ Handle Seller Form Submission
document.getElementById('sellerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log('Seller Form Data:', data);

    const response = await fetch(scriptUrl, {
      method: 'POST',
      body: JSON.stringify({ action: 'addSeller', data }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) throw new Error('Submission failed');
    alert('Seller submitted successfully!');
    e.target.reset();
  } catch (error) {
    console.error('Error:', error);
    alert('Seller submission failed. Check the console for details.');
  }
});

// ✅ Handle Order Form Submission
document.getElementById('orderForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log('Order Form Data:', data);

    const response = await fetch(scriptUrl, {
      method: 'POST',
      body: JSON.stringify({ action: 'addOrder', data }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) throw new Error('Submission failed');
    alert('Order submitted successfully!');
    e.target.reset();
  } catch (error) {
    console.error('Error:', error);
    alert('Order submission failed. Check the console for details.');
  }
});

// ✅ Handle Ratings Form Submission
document.getElementById('ratingsForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log('Ratings Form Data:', data);

    const response = await fetch(scriptUrl, {
      method: 'POST',
      body: JSON.stringify({ action: 'addRating', data }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) throw new Error('Submission failed');
    alert('Ratings submitted successfully!');
    e.target.reset();
  } catch (error) {
    console.error('Error:', error);
    alert('Ratings submission failed. Check the console for details.');
  }
});

// Fetch ASINs for the dropdown
async function fetchAsins() {
  const response = await fetch(`${scriptUrl}?action=getAsins`);
  const data = await response.json();
  const asinSelect = document.getElementById('asinOrder');
  asinSelect.innerHTML = data.map(asin => `<option value="${asin}">${asin}</option>`).join('');
}

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
