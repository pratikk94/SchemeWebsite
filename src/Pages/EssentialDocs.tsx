import React from "react";
import data from "../data/EssentialDocs.json";
import { Card } from "antd";
import Footer from "../component/Footer";
const EssentialDocs: React.FC = () => {
  return (
    <div style={{ marginTop: "20vh" }}>
      {data.map((c) => (
        <Card
          style={{ marginLeft: "4vw", marginRight: "4vw", marginTop: "4vw" }}
        >
          <h1 key={c["S. No."]} style={{ color: "#06008B" }}>
            {c["Resources"]}
          </h1>
          <br />
          <h2>Concerned Department: </h2>
          <p
            style={{ fontSize: "20px", whiteSpace: "pre-line" }}
            dangerouslySetInnerHTML={{ __html: c["Concerned Dpt."] }}
          />
          <br />
          <h2>Process: </h2>
          <p
            style={{ fontSize: "20px", whiteSpace: "pre-line" }}
            dangerouslySetInnerHTML={{ __html: c["Process"] }}
          />

          {c["Cost involved"].trim().length === 0 ? (
            <p></p>
          ) : (
            <div>
              <h2>Cost involved: </h2>
              <p style={{ fontSize: "20px", whiteSpace: "pre-line" }}>
                {c["Cost involved"]}
              </p>
            </div>
          )}
          <br />
          {c["No. of days it takes to complete process"].trim().length === 0 ? (
            <p></p>
          ) : (
            <div>
              <h2>No. of days it takes to complete process: </h2>
              <p style={{ fontSize: "20px", whiteSpace: "pre-line" }}>
                {c["No. of days it takes to complete process"]}
              </p>
            </div>
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

export default EssentialDocs;
