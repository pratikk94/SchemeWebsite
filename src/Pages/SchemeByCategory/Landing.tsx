import { Card, Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/SchemeByCategry.css";
import Footer from "../../component/Footer";
const Landing: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div
      className="mainBg"
      style={{
        paddingTop: "8vh",
      }}
    >
      {/* <center>
        <h1 style={{ color: "white" }}>Choose one of the following category</h1>
      </center> */}
      <div
        style={{
          paddingTop: "4vh",
          paddingBottom: "4vh",
          border: "solid 10px white",
          borderRadius: "20px",
          margin: "4vh",
        }}
      >
        <Row
          style={{
            width: "100vw",
            alignContent: "start",
            justifyContent: "space-around",
          }}
        >
          <Col xs={24} sm={12} xl={8}>
            <div style={{ height: "100%", paddingLeft: "12%" }}>
              <Card
                onClick={() => {
                  navigate("/schemes-list", { state: { category: "Skill" } });
                }}
                hoverable
                style={{
                  width: "72%",
                  paddingLeft: "3vw",
                  paddingRight: "3vw",
                  paddingTop: "1vw",
                  background: "transparent",
                  border: "solid 6px white",
                }}
                cover={
                  <img
                    className="img_scheme_by_category"
                    alt="example"
                    src="../skills.png"
                    style={{ height: "20vh" }}
                  />
                }
              >
                <h2
                  style={{
                    backgroundColor: "white",
                    textAlign: "center",
                    fontSize: "24px",
                  }}
                >
                  Skills
                </h2>
              </Card>{" "}
            </div>
          </Col>
          <Col xs={24} sm={12} xl={8}>
            <div style={{ height: "100%", paddingLeft: "12%" }}>
              <Card
                hoverable
                onClick={() => {
                  navigate("/schemes-list", {
                    state: { category: "Livelihood" },
                  });
                }}
                style={{
                  width: "72%",
                  paddingLeft: "3vw",
                  paddingRight: "3vw",
                  paddingTop: "1vw",
                  background: "transparent",
                  border: "solid 6px white",
                }}
                cover={
                  <img
                    alt="example"
                    src="../9.png"
                    style={{ height: "20vh" }}
                  />
                }
              >
                <h2
                  style={{
                    backgroundColor: "white",
                    textAlign: "center",
                    fontSize: "24px",
                  }}
                >
                  Livelihood
                </h2>
              </Card>{" "}
            </div>
          </Col>
          <Col xs={24} sm={12} xl={8}>
            <div style={{ height: "100%", paddingLeft: "12%" }}>
              <Card
                hoverable
                style={{
                  width: "72%",
                  paddingLeft: "3vw",
                  paddingRight: "3vw",
                  paddingTop: "1vw",
                  background: "transparent",
                  border: "solid 6px white",
                }}
                onClick={() => {
                  navigate("/schemes-list", { state: { category: "Health" } });
                }}
                cover={
                  <img
                    alt="example"
                    src="../HandN.jpeg"
                    style={{ height: "20vh" }}
                  />
                }
              >
                <h2
                  style={{
                    backgroundColor: "white",
                    textAlign: "center",
                    fontSize: "24px",
                  }}
                >
                  Health and nutriton
                </h2>
              </Card>{" "}
            </div>
          </Col>
        </Row>
        <Row
          style={{
            width: "100vw",
            alignContent: "start",
            justifyContent: "space-around",
            marginTop: "2vh",
          }}
        >
          <Col xs={24} sm={12} xl={8}>
            <div style={{ height: "100%", paddingLeft: "12%" }}>
              <Card
                hoverable
                onClick={() => {
                  navigate("/schemes-list", {
                    state: { category: "Education" },
                  });
                }}
                style={{
                  width: "72%",
                  paddingLeft: "3vw",
                  paddingRight: "3vw",
                  paddingTop: "1vw",
                  background: "transparent",
                  border: "solid 6px white",
                }}
                cover={
                  <img
                    alt="example"
                    src="../8.png"
                    style={{ height: "20vh" }}
                  />
                }
              >
                <h2
                  style={{
                    backgroundColor: "white",
                    textAlign: "center",
                    fontSize: "24px",
                  }}
                >
                  Education
                </h2>
              </Card>{" "}
            </div>
          </Col>
          <Col xs={24} sm={12} xl={8}>
            <div style={{ height: "100%", paddingLeft: "12%" }}>
              <Card
                hoverable
                onClick={() => {
                  navigate("/schemes-list", {
                    state: { category: "Women_and_child" },
                  });
                }}
                style={{
                  width: "72%",
                  paddingLeft: "3vw",
                  paddingRight: "3vw",
                  paddingTop: "1vw",
                  background: "transparent",
                  border: "solid 6px white",
                }}
                cover={
                  <img
                    alt="example"
                    src="../WandC.jpeg"
                    style={{ height: "20vh" }}
                  />
                }
              >
                <h2
                  style={{
                    backgroundColor: "white",
                    textAlign: "center",
                    fontSize: "24px",
                  }}
                >
                  Woman and child
                </h2>
              </Card>{" "}
            </div>
          </Col>
          <Col xs={24} sm={12} xl={8}>
            <div style={{ height: "100%", paddingLeft: "12%" }}>
              <Card
                hoverable
                onClick={() => {
                  navigate("/schemes-list", {
                    state: { category: "Miscellaneous" },
                  });
                }}
                style={{
                  width: "72%",
                  paddingLeft: "3vw",
                  paddingRight: "3vw",
                  paddingTop: "1vw",
                  background: "transparent",
                  border: "solid 6px white",
                }}
                cover={
                  <img
                    alt="example"
                    src="../Misc.jpeg"
                    style={{ height: "20vh" }}
                  />
                }
              >
                <h2
                  style={{
                    backgroundColor: "white",
                    textAlign: "center",
                    fontSize: "24px",
                  }}
                >
                  Miscelleneous
                </h2>
              </Card>{" "}
            </div>
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  );
};
export default Landing;
