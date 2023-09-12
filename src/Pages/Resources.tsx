import React from "react";
import "../CSS/Home.css";
import Scholarship from "../component/Scholarship";

const Resources: React.FC = () => (
  <div className="home">
    <div className="container-type" style={{ height: "80vh" }}>
      <center>
        <Scholarship id={["scholarship_1"]} />
      </center>
    </div>
  </div>
);

export default Resources;
