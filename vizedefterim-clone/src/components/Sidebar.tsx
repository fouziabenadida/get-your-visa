import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "←" : "☰"}
      </button>
      <nav className="navigation">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/tracking" className="nav-link">
          Track Visa
        </Link>
        <Link to="/appointments" className="nav-link">
          Appointments
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
