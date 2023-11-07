import React from "react";
import data from "../data/compensation.json";
import { Card } from "antd";
const Compensation: React.FC = () => {
  return (
    <div style={{ marginTop: "20vh" }}>
      {data.map((c) => (
        <Card
          style={{ marginLeft: "4vw", marginRight: "4vw", marginTop: "4vw" }}
        >
          <h1 key={c["S. No."]}>{c["Compensation"]}</h1>
          <h2>Eligibility : </h2>
          <p style={{ fontSize: "20px" }}>{c["Eligibility"]}</p>
          <h2>Legislation/Policy/SOP: </h2>
          <p style={{ fontSize: "20px" }}>{c["Legislation/Policy/SOP"]}</p>
          <h2>Documents required: </h2>
          <p style={{ fontSize: "20px" }}>{c["Documents required"]}</p>
        </Card>
      ))}
    </div>
  );
};

export default Compensation;
