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

  function onSubmitForm() {
    navigate("/form/1");
  }

  return (
    <div className="App">
      {/* <video id="bgVideo" controls preload="true" autoPlay loop muted>
        <source src="../landing.mp4" type="video/mp4" />
      </video> */}
      <div className="landing_bg"></div>
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
                <h1 style={{ color: "green", fontSize: "48px" }}>
                  Delhi Social Security Schemes and Resources Website <br />
                  for Children and their Families
                </h1>
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
                    <h2>See all schemes</h2>
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
                    <h2>Find schemes by category</h2>
                  </Card>{" "}
                </div>
              </Col>
              <Col xs={24} sm={12} xl={8}>
                <div style={{ height: "100%" }}>
                  <Card
                    hoverable
                    style={{ width: "72%" }}
                    onClick={onSubmitForm}
                    cover={
                      <img
                        alt="example"
                        src="../folder_for_me.jpeg"
                        style={{ height: "28vh" }}
                      />
                    }
                  >
                    <h2>Find schemes for me</h2>
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
