// Basic functionality for navigation and interactive features
document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript Loaded!");
});

// Adding a new product dynamically
document.getElementById("add-product-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("product-name").value;
    const price = document.getElementById("product-price").value;
  
    const table = document.getElementById("product-list");
    const newRow = document.createElement("tr");
  
    // Add product details in editable format
    newRow.innerHTML = `
      <td>#</td>
      <td class="editable" contenteditable="true">${name}</td>
      <td class="editable" contenteditable="true">$${price}</td>
      <td>
        <button onclick="saveProduct(this)">Save</button>
        <button onclick="deleteProduct(this)">Delete</button>
      </td>
    `;
    table.appendChild(newRow);
    alert("Product added!");
    this.reset(); // Clear the form
  });
  
  // Function to "Save" changes made to a product
  function saveProduct(button) {
    const row = button.closest("tr");
    const cells = row.querySelectorAll(".editable");
  
    // Example: Just an alert for now. You can send this data to a backend later.
    const updatedName = cells[0].innerText;
    const updatedPrice = cells[1].innerText;
  
    alert(`Product saved!\nName: ${updatedName}\nPrice: ${updatedPrice}`);
  }
  
  // Function to delete a product
  function deleteProduct(button) {
    if (confirm("Are you sure you want to delete this product?")) {
      const row = button.closest("tr");
      row.remove();
      alert("Product deleted!");
    }
  }
  