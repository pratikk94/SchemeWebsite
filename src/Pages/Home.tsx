import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Typography,
  AutoComplete,
  Modal,
  Card,
} from "antd";
import "../CSS/Home.css";
import { useNavigate } from "react-router-dom";
import SchemeCard from "./AllResources/SchemeCard";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import Footer from "../component/Footer";

const { Title } = Typography;

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
  const [options, setOptions] = useState<
    { value: string; label: React.ReactNode; scheme_data: any }[]
  >([]);
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearch = async (value: string) => {
    if (!value) {
      setOptions([]);
      return;
    }

    try {
      const response = await axios.post(
        "https://schemes-api.grevity.in/search_scheme",
        {
          query: value,
        }
      );
      const searchResults = response.data.map((item: any) => {
        return {
          value: item.title,
          label: <div onClick={() => handleSelect(item)}>{item.title}</div>,
          scheme_data: item,
        };
      });
      setOptions(searchResults);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleSelect = (item: any) => {
    console.log("Selected item:", item);
    //navigate("/schemeByCategory"); // Example of navigation on selection
  };

  return (
    <div className="App">
      {/* <video id="bgVideo" controls preload="true" autoPlay loop muted>
        <source src="../landing.mp4" type="video/mp4" />
      </video> */}
      <div className="landing_bg"></div>
      <Modal width={900} open={showModal} onCancel={() => setShowModal(false)}>
        {options.map((option: any) => {
          return <SchemeCard scheme={option.scheme_data} />;
        })}
      </Modal>
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
                <p
                  style={{
                    marginTop: "32px",
                    color: "#8169ff",
                    fontWeight: "bolder",
                    fontSize: "48px",
                  }}
                >
                  Social Security Schemes and Resources for Children and
                  Families in Delhi
                </p>
              </div>
            </div>
            <AutoComplete
              dropdownMatchSelectWidth={400}
              style={{ width: 400, marginRight: 12, marginTop: "48vh" }}
              options={options}
              onSearch={handleSearch}
              // onSelect={handleSelect}
              placeholder="Search your scheme here..."
            >
              <Input
                prefix={<SearchOutlined />}
                size="large"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </AutoComplete>
            <Button
              size="large"
              type="primary"
              onClick={() => setShowModal(true)}
            >
              Search
            </Button>
          </center>

          <div
            style={{
              backgroundColor: "#02051E",
              marginTop: "-56vh",
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
                  marginLeft: "4vw",
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
                      cover={
                        <img
                          alt="example"
                          src="../10.png"
                          style={{ height: "28vh" }}
                        />
                      }
                    >
                      <h2>All schemes</h2>
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
                          src="../11.png"
                          style={{ height: "28vh" }}
                        />
                      }
                    >
                      <h2>Sector wise scheme</h2>
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
                          src="../3.png"
                          style={{ height: "28vh" }}
                        />
                      }
                    >
                      <h2>Find schemes for you</h2>
                    </Card>{" "}
                  </div>
                </Col>
              </Row>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      {/* <footer>
        <p>All rights reserved ©</p>
      </footer> */}
    </div>
  );
};

export default Home;
