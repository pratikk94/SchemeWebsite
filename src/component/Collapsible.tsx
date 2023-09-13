import { Card } from "antd";
import React, { useState } from "react";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <Card
      className="collapsible"
      style={{ marginLeft: "16vw", marginRight: "16vw" }}
    >
      <div className="collapsible-header" onClick={toggleCollapse}>
        <h3 style={{ display: "inline" }}>{title}</h3>
        <span className={`arrow-icon ${isOpen ? "open" : ""}`}>&#9654;</span>
      </div>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </Card>
  );
};

export default Collapsible;
