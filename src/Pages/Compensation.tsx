import React from "react";
import data from "../data/compensation.json";
import { Card } from "antd";
import Footer from "../component/Footer";
const Compensation: React.FC = () => {
  return (
    <div style={{ marginTop: "20vh" }}>
      {data.map((c) => (
        <Card
          style={{ marginLeft: "4vw", marginRight: "4vw", marginTop: "4vw" }}
        >
          <h1 key={c["S. No."]} style={{ color: "#06008B" }}>
            {c["Compensation"]}
          </h1>
          <h2>Eligibility : </h2>
          <p style={{ fontSize: "20px", whiteSpace: "pre-line" }}>
            {c["Eligibility"]}
          </p>
          <h2>Legislation/Policy/SOP: </h2>
          <p style={{ fontSize: "20px", whiteSpace: "pre-line" }}>
            {c["Legislation/Policy/SOP"]}
          </p>
          <h2>Documents required: </h2>
          {c["Documents required"].length === 0 ? (
            <p></p>
          ) : (
            <p style={{ fontSize: "20px", whiteSpace: "pre-line" }}>
              {c["Documents required"]}
            </p>
          )}
        </Card>
      ))}
      <div
        style={{
          backgroundColor: "#03051E",
        }}
      >
        <center>
          <Footer />
        </center>
      </div>
    </div>
  );
};

export default Compensation;
