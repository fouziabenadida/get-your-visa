import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
