import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ setQuery }) => {
  const [activeNav, setActiveNav] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Handles search input
  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      setQuery(searchTerm); // Trigger the search
    }
  };

  // Handles search button click
  const handleSearchButtonClick = () => {
    if (searchTerm.trim()) {
      setQuery(searchTerm); // Trigger the search
    }
  };

  // Handles the category navigation (e.g., Cricket, Bollywood)
  const onNavItemClick = (id) => {
    setQuery(id); // Set the query to the selected category
    setActiveNav(id); // Highlight the selected category
  };

  return (
    <nav>
      <div className="container main-nav flex">
        {/* Company logo */}
        <a href="#" onClick={() => window.location.reload()} className="company-logo">
          <img src="./logotype_11187520.png" alt="Company Logo" />
        </a>

        {/* Navigation Links */}
        <div className="nav-links">
          <ul className="flex">
            <li
              className={`hover-link nav-item ${activeNav === "cricket" ? "active" : ""}`}
              id="Cricket"
              onClick={() => onNavItemClick("cricket")}
            >
              Cricket
            </li>
            <li
              className={`hover-link nav-item ${activeNav === "bollywood" ? "active" : ""}`}
              id="Bollywood"
              onClick={() => onNavItemClick("bollywood")}
            >
              Bollywood
            </li>
            <li
              className={`hover-link nav-item ${activeNav === "politics" ? "active" : ""}`}
              id="Politics"
              onClick={() => onNavItemClick("politics")}
            >
              Politics
            </li>
            <li
              className={`hover-link nav-item ${activeNav === "technology" ? "active" : ""}`}
              id="Technology"
              onClick={() => onNavItemClick("technology")}
            >
              Technology
            </li>
            <li
              className={`hover-link nav-item ${activeNav === "food" ? "active" : ""}`}
              id="Food"
              onClick={() => onNavItemClick("food")}
            >
              Food
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="search-bar flex">
          <input
            id="search-text"
            type="text"
            className="news-input"
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            onKeyPress={handleSearch} // Handle "Enter" key for search
          />
          <button
            id="search-button"
            className="search-button"
            onClick={handleSearchButtonClick} // Trigger search on button click
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
