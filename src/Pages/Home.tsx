import React from "react";
import { Col, Row } from "antd";
import "../CSS/Home.css";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";

const Home: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="home">
        <div className="container-type" style={{ height: "80vh" }}>
          <center>
            <div
              className="heroLanding"
              style={{
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
              }}
            />

            <div className="hero" style={{ color: "#ffffff", opacity: 1 }}>
              <div className="bottom-div"></div>
              <div className="top-div">
                <h1 style={{ color: "black" }}>Headline of website</h1>
                <h3 style={{ color: "black" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  luctus dolor at lorem dictum tempus. Vivamus nulla lacus,
                  commodo at tristique in, elementum non elit.
                </h3>
              </div>
            </div>
            <h1 style={{ marginTop: "72vh", marginBottom: "8vh" }}>
              Some line about services offered
            </h1>
            <Row
              style={{
                width: "100vw",
                alignContent: "start",
                justifyContent: "space-around",
              }}
            >
              <Col xs={24} sm={12} xl={8}>
                <div style={{ height: "100%" }}>
                  <Card
                    hoverable
                    style={{ width: "64%" }}
                    cover={<img alt="example" src="../folders.avif" />}
                  >
                    <Meta
                      title="See all resources"
                      description="www.instagram.com"
                    />
                  </Card>
                </div>
              </Col>
              <Col xs={24} sm={12} xl={8}>
                <div style={{ height: "100%" }}>
                  <Card
                    hoverable
                    style={{ width: "64%" }}
                    cover={
                      <img
                        alt="example"
                        src="../folder_by_c.webp"
                        style={{ height: "28vh" }}
                      />
                    }
                  >
                    <Meta
                      title="Find resources by category"
                      description="www.instagram.com"
                    />
                  </Card>{" "}
                </div>
              </Col>
              <Col xs={24} sm={12} xl={8}>
                <div style={{ height: "100%" }}>
                  <Card
                    hoverable
                    style={{ width: "64%" }}
                    cover={
                      <img
                        alt="example"
                        src="../folder_for_me.jpeg"
                        style={{ height: "28vh" }}
                      />
                    }
                  >
                    <Meta
                      title="Find resources for me"
                      description="www.instagram.com"
                    />
                  </Card>{" "}
                </div>
              </Col>
            </Row>
          </center>
        </div>
      </div>
      {/* <footer>
        <p>All rights reserved ©</p>
      </footer> */}
    </div>
  );
};

export default Home;
