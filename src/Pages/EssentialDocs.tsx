import React from "react";
import data from "../data/EssentialDocs.json";
import { Card } from "antd";
const EssentialDocs: React.FC = () => {
  return (
    <div style={{ marginTop: "20vh" }}>
      {data.map((c) => (
        <Card
          style={{ marginLeft: "4vw", marginRight: "4vw", marginTop: "4vw" }}
        >
          <h1 key={c["S. No."]}>{c["Resources"]}</h1>
          <h2>Concerned Dpt.: </h2>
          <p style={{ fontSize: "20px", whiteSpace: "pre-line" }}>
            {c["Concerned Dpt."]}
          </p>
          <h2>Process: </h2>
          <p style={{ fontSize: "20px", whiteSpace: "pre-line" }}>
            {c["Process"]}
          </p>
          <h2>Cost involved: </h2>
          <p style={{ fontSize: "20px", whiteSpace: "pre-line" }}>
            {c["Cost involved"]}
          </p>
          <h2>No. of days it takes to complete process: </h2>
          <p style={{ fontSize: "20px", whiteSpace: "pre-line" }}>
            {c["No. of days it takes to complete process"]}
          </p>
          <h2>Sources: </h2>
          <p style={{ fontSize: "20px", whiteSpace: "pre-line" }}>
            {c["Sources"]}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default EssentialDocs;
