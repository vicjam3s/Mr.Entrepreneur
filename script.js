/* =============================
   BUSINESS & SUPPLIER DATA
============================= */
const businessData = [
    {
        sector: "Agriculture",
        suppliers: [
            {
                name: "GreenFarm Supplies Ltd",
                phone: "+254 712 440 120",
                email: "info@greenfarm.co.ke",
                location: "Eldoret"
            }
        ]
    },
    {
        sector: "Fashion & Clothing",
        suppliers: [
            {
                name: "Royal Tailor Manufacturers",
                phone: "+254 723 880 321",
                email: "support@royaltailors.co.ke",
                location: "Eastleigh, Nairobi"
            }
        ]
    },
    {
        sector: "Electronics",
        suppliers: [
            {
                name: "TechPro Industries",
                phone: "+254 701 334 556",
                email: "sales@techpro.co.ke",
                location: "Nairobi CBD"
            }
        ]
    },
    {
        sector: "Construction",
        suppliers: [
            {
                name: "BuildRight Cement Co.",
                phone: "+254 745 889 100",
                email: "contact@buildright.co.ke",
                location: "Thika"
            }
        ]
    },
    {
        sector: "Food & Beverage",
        suppliers: [
            {
                name: "FreshBite Manufacturers",
                phone: "+254 733 221 490",
                email: "orders@freshbite.co.ke",
                location: "Nakuru"
            }
        ]
    },
    {
        sector: "Pharmaceuticals",
        suppliers: [
            {
                name: "MediCare Labs",
                phone: "+254 722 556 118",
                email: "info@medicarelabs.co.ke",
                location: "Industrial Area, Nairobi"
            }
        ]
    },
    {
        sector: "Furniture",
        suppliers: [
            {
                name: "HomeWood Manufacturers",
                phone: "+254 748 330 901",
                email: "hello@homewood.co.ke",
                location: "Kisumu"
            }
        ]
    },
    {
        sector: "Cosmetics",
        suppliers: [
            {
                name: "BeautyGlow Ltd",
                phone: "+254 729 550 674",
                email: "glow@beautyglow.co.ke",
                location: "Mombasa"
            }
        ]
    },
    {
        sector: "Automotive",
        suppliers: [
            {
                name: "AutoWorks Factory",
                phone: "+254 789 112 445",
                email: "service@autoworks.co.ke",
                location: "Nairobi – Ngong Road"
            }
        ]
    },
    {
        sector: "Stationery Supplies",
        suppliers: [
            {
                name: "WriteWell Paper Co.",
                phone: "+254 700 224 889",
                email: "contact@writewell.co.ke",
                location: "Westlands, Nairobi"
            }
        ]
    }
];


/* =============================
   BUSINESS TILES
============================= */
function loadBusinessTiles() {
    const container = document.getElementById("businessTiles");
    if (!container) return; // prevent errors if page doesn't have tiles

    businessData.forEach(item => {
        const tile = document.createElement("div");
        tile.className = "tile";
        tile.textContent = item.sector;

        // When tile is clicked → show supplier details
        tile.addEventListener("click", () => {
            showSupplierDetails(item);
        });

        container.appendChild(tile);
    });
}

// Show Supplier Details (Popup / Panel)
function showSupplierDetails(item) {
    const detailsBox = document.getElementById("supplierDetails");
    if (!detailsBox) return;

    const supplierListHTML = item.suppliers.map(supplier => `
        <div class="supplier-card">
            <h3>${supplier.name}</h3>
            <p><strong>Phone:</strong> ${supplier.phone}</p>
            <p><strong>Email:</strong> ${supplier.email}</p>
            <p><strong>Location:</strong> ${supplier.location}</p>
        </div>
    `).join("");

    detailsBox.innerHTML = `
        <h2>${item.sector} – Suppliers</h2>
        ${supplierListHTML}
        <button id="closeDetails">Close</button>
    `;
    detailsBox.style.display = "block";

    // Close button
    document.getElementById("closeDetails").addEventListener("click", () => {
        detailsBox.style.display = "none";
    });
}


/* =============================
   SEARCH BAR
============================= */
function searchSector() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsBox = document.getElementById("searchResults");

    if (!resultsBox) return;

    resultsBox.innerHTML = "";

    if (input === "") return;

    const results = businessData.filter(item =>
        item.sector.toLowerCase().includes(input)
    );

    if (results.length === 0) {
        resultsBox.innerHTML = "<p>No matching businesses found.</p>";
        return;
    }

    results.forEach(result => {
        const div = document.createElement("div");
        div.className = "result-item";
        div.textContent = `${result.sector} → Supplier: ${result.suppliers[0].name}`;
        resultsBox.appendChild(div);
    });
}


/* =============================
   SIMPLE PAGE SWITCH
============================= */
function goToMainPage() {
    window.location.href = "main.html";
}


/* =============================
   MANAGEMENT PAGE LOADER
============================= */
function loadManagement() {
    const team = [
        { name: "Victor.J.", role: "Founder", image: "images/m1.jpg" },
        { name: "Sarah K.", role: "Co-Founder", image: "images/m2.jpg" },
        { name: "John P.", role: "Operations Manager", image: "images/m3.jpg" }
    ];

    const container = document.getElementById("managementContainer");
    if (!container) return;

    team.forEach(member => {
        const card = document.createElement("div");
        card.className = "manager-card";

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;

        container.appendChild(card);
    });
}

