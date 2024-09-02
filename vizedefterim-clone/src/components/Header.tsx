// src/components/Header/Header.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaCog, FaTimes, FaUndo } from "react-icons/fa";
import "./Header.css";

const Header: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  const resetSettings = () => {
    setTheme("light");
    document.body.setAttribute("data-theme", "light");
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/">
            <img
              src="https://cdn.prod.website-files.com/63daf1fa1abcbc5e7969d7c9/64e3fb32b48d060d24d57f48_UHvG1gPP7hOG4yULDKEAjWSzuTtwUAcwsiLsUe7SY0U.png"
              alt="Logo"
              className="logo-image"
            />
          </Link>
        </div>

        {/* Header Right Section */}
        <div className="header-right">
          {/* Language Selector */}
          <div className="language-selector">
            <select className="language-dropdown">
              <option value="en">English</option>
              <option value="tr">Türkçe</option>
            </select>
          </div>

          {/* Login Button */}
          <div className="login-section">
            <Link to="/login" className="login-button">
              Login
            </Link>
          </div>

          {/* Settings Icon */}
          <div className="settings-icon" onClick={toggleSidebar}>
            <FaCog />
          </div>

          {/* Sidebar */}
          <div className={`settings-sidebar ${isSidebarOpen ? "open" : ""}`}>
            <div className="settings-header">
              <span className="settings-title">Settings</span>
              <button className="settings-close" onClick={toggleSidebar}>
                <FaTimes />
              </button>
            </div>
            <button className="settings-reset" onClick={resetSettings}>
              <FaUndo /> Reset
            </button>
            <div className="settings-tabbar">
              <div
                className={`settings-tab ${theme === "light" ? "active" : ""}`}
                onClick={() => handleThemeChange("light")}
              >
                <FaSun />
                Light
              </div>
              <div
                className={`settings-tab ${theme === "dark" ? "active" : ""}`}
                onClick={() => handleThemeChange("dark")}
              >
                <FaMoon />
                Dark
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
