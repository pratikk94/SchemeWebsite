import React from "react";
import { Col, Divider, Row } from "antd";
import TypeCard from "../component/TypeCard";
import "../CSS/Home.css";
import { useMediaQuery } from "react-responsive";

const Home: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="home">
        <div className="container-type" style={{ height: "80vh" }}>
          <center>
            {isDesktopOrLaptop && (
              <div>
                <Divider orientation="center" />
                <Row
                  style={{ height: "32vh", width: "32vw", marginBottom: "4vh" }}
                >
                  <Col flex={1}>
                    <TypeCard
                      type="Scheme"
                      description="Some information about scheme"
                      id="1"
                      dimHeight="14vh"
                      dimWidth="14vw"
                      url="https://img.freepik.com/premium-vector/books-money-loans-scholarships_603843-825.jpg"
                    />
                  </Col>
                  <Col flex={1}>
                    <TypeCard
                      type="Scholarship"
                      description="Some information about scholarship"
                      id="2"
                      dimHeight="14vh"
                      dimWidth="14vw"
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
                      dimHeight="14vh"
                      dimWidth="14vw"
                      url="/compensation.jpg"
                    />
                  </Col>
                  <Col flex={1}>
                    <TypeCard
                      type="Resources"
                      description="Some information about resources"
                      id="0"
                      dimHeight="14vh"
                      dimWidth="14vw"
                      url="/books.jpg"
                    />
                  </Col>
                </Row>
              </div>
            )}
            {isTabletOrMobile && (
              <div>
                <Divider orientation="center" />

                <TypeCard
                  type="Scheme"
                  description="Some information about scheme"
                  id="1"
                  dimHeight="20vh"
                  dimWidth="28vw"
                  url="https://img.freepik.com/premium-vector/books-money-loans-scholarships_603843-825.jpg"
                />
                <TypeCard
                  type="Scholarship"
                  description="Some information about scholarship"
                  id="2"
                  dimHeight="20vh"
                  dimWidth="28vw"
                  url="/scholarship.jpg"
                />
                <TypeCard
                  type="Compensation"
                  description="Some information about Compensation"
                  id="3"
                  dimHeight="20vh"
                  dimWidth="28vw"
                  url="/compensation.jpg"
                />
                <TypeCard
                  type="Resources"
                  description="Some information about resources"
                  id="0"
                  dimHeight="20vh"
                  dimWidth="28vw"
                  url="/books.jpg"
                />
              </div>
            )}
          </center>
        </div>
      </div>
      <footer>
        <p>All rights reserved ©</p>
      </footer>
    </div>
  );
};

export default Home;
