import React from "react";
import { Col, Divider, Row } from "antd";
import TypeCard from "../component/TypeCard";
import "../CSS/Home.css";

const Home: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <div className="home">
        <div className="container-type" style={{ height: "80vh" }}>
          <center>
            <Divider orientation="center" />
            <Row style={{ height: "32vh", width: "32vw", marginBottom: "4vh" }}>
              <Col flex={1}>
                <TypeCard
                  type="Scheme"
                  description="Some information about scheme"
                  id="1"
                />
              </Col>
              <Col flex={1}>
                <TypeCard
                  type="Scholarship"
                  description="Some information about scholarship"
                  id="2"
                />
              </Col>
            </Row>

            <Row style={{ height: "32vh", width: "32vw" }}>
              <Col flex={1}>
                <TypeCard
                  type="Compensation"
                  description="Some information about Compensation"
                  id="3"
                />
              </Col>
              <Col flex={1}>
                <TypeCard
                  type="Resources"
                  description="Some information about resources"
                  id="0"
                />
              </Col>
            </Row>
          </center>
        </div>
      </div>
    </header>
  </div>
);

export default Home;
