# Mr. Entrepreneur

**Project Overview**
Mr. Entrepreneur is a web application designed to connect local vendors and shops with various manufacturers. The platform provides an easy way to browse business sectors, view supplier contacts, and manage connections.

---

## Features

### Main Features

* **Business Tiles:** Displays all business sectors in a 2x5 grid layout for easy browsing.
* **Supplier Contacts:** Each sector tile contains contacts of suppliers associated with that sector.
* **Interactive UI:** Users can click on a sector to view more details about suppliers.

### JavaScript Functionality

* **Dynamic Tile Rendering:** The `script.js` file iterates over `businessData` and dynamically generates tiles on the page.
* **Data Storage:** All business sectors and supplier contacts are stored in a JSON-like structure (`businessData`) in `script.js`.
* **Event Handling:** JavaScript handles user interactions, like clicking on a tile to expand or view detailed supplier information.
* **Separation of Concerns:** HTML provides structure, CSS provides styling, and JS manages logic and interactivity.

---

## Project Structure

```
Mr-Entrepreneur/
├─ index.html       # Main landing page
├─ sector.html+js      # Detailed sector pages
├─ style.css        # Styling for layout and themes
├─ script.js        # JavaScript for dynamic rendering and interaction
└─ assets/          # Images or other resources
```

---

## How It Works

1. Open `index.html` in a browser.
2. JavaScript reads the `businessData` array and creates tiles for each sector.
3. Tiles display the sector name and allow users to click for more information.
4. CSS ensures a responsive, styled grid layout for better user experience.

---

## Future Improvements

* Add search and filter functionality for sectors and suppliers.
* Include a dark mode toggle (if not already implemented).
* Integrate with a backend database for real-time updates.

---

**Tech Stack:** HTML, CSS, JavaScript.)
