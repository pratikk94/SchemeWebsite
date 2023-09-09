import React from "react";
import { Col, Divider, Row } from "antd";
import TypeCard from "../component/TypeCard";
import "../CSS/Home.css";
import { url } from "inspector";

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
                  url="https://img.freepik.com/premium-vector/books-money-loans-scholarships_603843-825.jpg"
                />
              </Col>
              <Col flex={1}>
                <TypeCard
                  type="Scholarship"
                  description="Some information about scholarship"
                  id="2"
                  url="/scholarship.jpg"
                />
              </Col>
            </Row>

            <Row style={{ height: "32vh", width: "32vw" }}>
              <Col flex={1}>
                <TypeCard
                  type="Compensation"
                  description="Some information about Compensation"
                  id="3"
                  url="/compensation.jpg"
                />
              </Col>
              <Col flex={1}>
                <TypeCard
                  type="Resources"
                  description="Some information about resources"
                  id="0"
                  url="/books.jpg"
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
