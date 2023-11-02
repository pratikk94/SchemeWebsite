import React from "react";
import { Col, Row } from "antd";
import "../CSS/Home.css";
import Card from "antd/es/card/Card";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  /**
   * Function to navigate to scheme by category page.
   */
  function onSubmit() {
    navigate("/schemeByCategory");
  }

  return (
    <div className="App">
      <video id="bgVideo" controls preload="true" autoPlay loop muted>
        <source src="../landing.mp4" type="video/mp4" />
      </video>
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
            <h1 className="heroDivider" style={{ marginBottom: "8vh" }}>
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
                    style={{ width: "72%" }}
                    onClick={() => {
                      navigate("/all-resources");
                    }}
                    cover={<img alt="example" src="../folders.avif" />}
                  >
                    <h2>See all resources</h2>
                  </Card>
                </div>
              </Col>
              <Col xs={24} sm={12} xl={8}>
                <div style={{ height: "100%" }}>
                  <Card
                    hoverable
                    style={{ width: "72%" }}
                    onClick={onSubmit}
                    cover={
                      <img
                        alt="example"
                        src="../folder_by_c.webp"
                        style={{ height: "28vh" }}
                      />
                    }
                  >
                    <h2>Find resources by category</h2>
                  </Card>{" "}
                </div>
              </Col>
              <Col xs={24} sm={12} xl={8}>
                <div style={{ height: "100%" }}>
                  <Card
                    hoverable
                    style={{ width: "72%" }}
                    cover={
                      <img
                        alt="example"
                        src="../folder_for_me.jpeg"
                        style={{ height: "28vh" }}
                      />
                    }
                  >
                    <h2>Find resources for me</h2>
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
