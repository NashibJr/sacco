import React from "react";
import Card from "./Card";
import QuickLinkComponent from "./QuickLinkComponent";
import { quickLinks } from "./dummy/constants";
import { useNavigate } from "react-router-dom";

const QuickLinks = () => {
  // const navigate = useNavigate();
  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      <Card>
        <h2 className="quicklink-h">Quick Links</h2>
        <div className="quick-links-content">
          {quickLinks.map((link, index) => (
            <QuickLinkComponent
              key={index}
              image={link.image}
              label={link.label}
              // handleNavigate={() => navigate(`${link.route}`)}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default QuickLinks;
