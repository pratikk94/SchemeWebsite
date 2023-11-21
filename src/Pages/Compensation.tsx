import React from "react";
import data from "../data/compensation.json";
import { Card } from "antd";
import Footer from "../component/Footer";
const Compensation: React.FC = () => {
  return (
    <div style={{ marginTop: "10vh", backgroundColor: "#fcfcff" }}>
      <center>
        <p
          style={{
            margin: "2vw",
            fontSize: "48px",
            fontWeight: 900,
            marginTop: "0vh",
            color: "#1A196F",
          }}
        >
          Compensation
        </p>
      </center>
      {data.map((c) => (
        <Card
          style={{ marginLeft: "4vw", marginRight: "4vw", marginTop: "2vw" }}
        >
          <h1 key={c["S. No."]} style={{ color: "#06008B" }}>
            {c["Compensation"]}
          </h1>
          <h2>Eligibility : </h2>
          <br />
          <p style={{ fontSize: "20px", whiteSpace: "pre-line" }}>
            {c["Eligibility"]}
          </p>
          <br />
          <h2>Legislation/Policy/SOP: </h2>
          <br />
          <p
            style={{ fontSize: "20px", whiteSpace: "pre-line" }}
            dangerouslySetInnerHTML={{ __html: c["Legislation/Policy/SOP"] }}
          />

          <br />
          <h2>Documents required: </h2>
          <br />
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
