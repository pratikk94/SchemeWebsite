import React, { useState } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import "../CSS/Home.css";
import Card from "antd/es/card/Card";
import { useNavigate } from "react-router-dom";
import data from "../data/schemes.json";
import SchemeCard from "./AllResources/SchemeCard";
import { UserOutlined } from "@ant-design/icons";
const Home: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  interface FormValues {
    searchText: string;
  }
  /**
   * Function to navigate to scheme by category page.
   */
  function onSubmit() {
    navigate("/schemeByCategory");
  }

  function onSubmitForm() {
    navigate("/form/1");
  }

  let [ans, setAns] = useState<any[]>([]);
  let [searchClicked, setSearchClicked] = useState(false);
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const handleSearch = (queryForm: FormValues) => {
    console.log("Clicked");
    let query = queryForm["searchText"];
    console.log(query);
    // Check each object in the array
    for (const obj of data["schemes"]) {
      // Check each value in the object
      for (const key in obj) {
        let v = JSON.parse(JSON.stringify(obj));
        if (typeof v[key] === "string") {
          if (v[key].includes(query)) {
            ans.push(obj);
          }
        }
      }
    }

    setAns(ans);
    console.log(ans);
    setSearchClicked(true);
  };

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
                <h1 style={{ color: "#8169ff", fontSize: "48px" }}>
                  Delhi Social Security Schemes and Resources Website <br />
                  for Children and their Families
                </h1>
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleSearch}
                  onFinishFailed={onFinishFailed}
                >
                  <Row
                    gutter={16}
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Col span={6}>
                      <Form.Item
                        name="searchText"
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input
                          prefix={<UserOutlined />}
                          placeholder="Username"
                        />
                      </Form.Item>
                    </Col>

                    <Col span={4}>
                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          Search
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>

                  <div style={{ textAlign: "left" }}>
                    {ans.length === 0 ? (
                      <p />
                    ) : (
                      ans.map((scheme, index) => (
                        <SchemeCard key={index} scheme={scheme} />
                      ))
                    )}
                  </div>
                </Form>
              </div>
            </div>

            {!searchClicked ? (
              <div
                style={{
                  backgroundColor: "#02051E",
                  marginTop: "-4vh",
                  marginBottom: "4vh",
                }}
              >
                <h1
                  className="heroDivider"
                  style={{ marginBottom: "-4vh", paddingTop: "20vh" }}
                ></h1>

                <div
                  style={{
                    backgroundImage: "../images/bg.png",
                    backgroundSize: "100vw 100vh",
                    backgroundRepeat: "no-repeat",
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
                </div>
              </div>
            ) : (
              <p></p>
            )}
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
