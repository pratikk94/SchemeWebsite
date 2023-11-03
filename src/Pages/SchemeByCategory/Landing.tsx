import { Card, Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
//import "../CSS/SchemeByCategry.css";
const Landing: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div style={{ paddingTop: "8vh" }}>
      <center>
        <h1>Choose one of the following category</h1>
      </center>
      <div style={{ padding: "4vh" }}>
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
                  navigate("/schemes-list", { state: { category: "Skill" }});
                }}
                hoverable
                style={{ width: "72%" }}
                cover={
                  <img
                    className="img_scheme_by_category"
                    alt="example"
                    src="../folders.avif"
                    style={{ height: "28vh" }}
                  />
                }
              >
                <h2>Skills</h2>
              </Card>{" "}
            </div>
          </Col>
          <Col xs={24} sm={12} xl={8}>
            <div style={{ height: "100%", paddingLeft: "12%" }}>
              <Card
                hoverable
                onClick={() => {
                  navigate("/schemes-list", { state: { category: "Livelihood" }});
                }}
                style={{ width: "72%" }}
                cover={
                  <img
                    alt="example"
                    src="../folder_by_c.webp"
                    style={{ height: "28vh" }}
                  />
                }
              >
                <h2>Livelihood</h2>
              </Card>{" "}
            </div>
          </Col>
          <Col xs={24} sm={12} xl={8}>
            <div style={{ height: "100%", paddingLeft: "12%" }}>
              <Card
                hoverable
                style={{ width: "72%" }}
                onClick={() => {
                  navigate("/schemes-list", { state: { category: "Health" }});
                }}
                cover={
                  <img
                    alt="example"
                    src="../folder_for_me.jpeg"
                    style={{ height: "28vh" }}
                  />
                }
              >
                <h2>Health and nutriton</h2>
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
                  navigate("/schemes-list", { state: { category: "Education" }});
                }}
                style={{ width: "72%" }}
                cover={
                  <img
                    alt="example"
                    src="../folders.avif"
                    style={{ height: "28vh" }}
                  />
                }
              >
                <h2>Education</h2>
              </Card>{" "}
            </div>
          </Col>
          <Col xs={24} sm={12} xl={8}>
            <div style={{ height: "100%", paddingLeft: "12%" }}>
              <Card
                hoverable
                onClick={() => {
                  navigate("/schemes-list", { state: { category: "Women_and_child" }});
                }}
                style={{ width: "72%" }}
                cover={
                  <img
                    alt="example"
                    src="../folder_by_c.webp"
                    style={{ height: "28vh" }}
                  />
                }
              >
                <h2>Woman and child</h2>
              </Card>{" "}
            </div>
          </Col>
          <Col xs={24} sm={12} xl={8}>
            <div style={{ height: "100%", paddingLeft: "12%" }}>
              <Card
                hoverable
                onClick={() => {
                  navigate("/schemes-list", { state: { category: "Miscellaneous" }});
                }}
                style={{ width: "72%" }}
                cover={
                  <img
                    alt="example"
                    src="../folder_for_me.jpeg"
                    style={{ height: "28vh" }}
                  />
                }
              >
                <h2>Miscelleneous</h2>
              </Card>{" "}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Landing;