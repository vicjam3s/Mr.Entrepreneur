//for sector.html
document.addEventListener("DOMContentLoaded", () => {
  const sector = localStorage.getItem("selectedSector");
  const suppliers = JSON.parse(localStorage.getItem("sectorSuppliers") || "[]");

  const sectorTitle = document.getElementById("sectorTitle");
  const suppliersList = document.getElementById("suppliersList");

  if (!sector || suppliers.length === 0) {
    sectorTitle.textContent = "No suppliers found";
    return;
  }

  sectorTitle.textContent = `Suppliers in ${sector.charAt(0).toUpperCase() + sector.slice(1)}`;

  suppliersList.innerHTML = suppliers.map(s => `
    <div class="supplier-card">
      <h3>${s.name}</h3>
      <p><strong>Country:</strong> ${s.country}</p>
      <p><strong>Email:</strong> <a href="mailto:${s.email}">${s.email}</a></p>
      <p><strong>Phone:</strong> ${s.phone}</p>
      <p><strong>Website:</strong> <a href="${s.website}" target="_blank">${s.website}</a></p>
    </div>
  `).join("");
});
// Back button functionality
const backBtn = document.getElementById("backButton");
backBtn.addEventListener("click", () => {
  window.location.href = "main.html";
});
