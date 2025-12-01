
// Load business tiles dynamically
function loadBusinessTiles() {
  const container = document.getElementById("businessTiles");
  const businessData = [
    "electronics",
    "agriculture",
    "pharmaceuticals",
    "automotive",
    "construction",
    "textiles",
    "energy",
    "food and beverage",
    "chemicals",
    "technology"
  ];

  const selectedSector = localStorage.getItem("selectedSector"); // retrieve highlighted sector
  container.innerHTML = ""; // Clear container

  businessData.forEach(sector => {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.textContent = sector.charAt(0).toUpperCase() + sector.slice(1);

    // Highlight previously selected tile
    if (selectedSector && selectedSector.toLowerCase() === sector) {
      tile.style.background = "#d4af37";
      tile.style.color = "#0a0a0a";
    }

    tile.addEventListener("click", () => loadSectorSuppliers(sector));
    container.appendChild(tile);
  });

  // Remove highlight after 1 second (optional)
  localStorage.removeItem("selectedSector");
}

// Load suppliers for a specific sector
async function loadSectorSuppliers(sector) {
  try {
    const response = await fetch("api/suppliers.json");
    const data = await response.json();
    const suppliers = data[sector];

    if (!suppliers || suppliers.length === 0) {
      alert("No suppliers found for this sector.");
      return;
    }

    localStorage.setItem("selectedSector", sector); // Save selected sector
    localStorage.setItem("sectorSuppliers", JSON.stringify(suppliers));
    window.location.href = "sector.html"; // Navigate to sector page
  } catch (error) {
    console.error("Error loading suppliers:", error);
    alert("Failed to load suppliers. Try again.");
  }
}

// Search functionality
function searchSector() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const tiles = document.querySelectorAll(".tile");

  tiles.forEach(tile => {
    const sector = tile.textContent.toLowerCase();
    tile.style.display = sector.includes(query) ? "block" : "none";
  });
}

// Initialize tiles on page load
document.addEventListener("DOMContentLoaded", loadBusinessTiles);



