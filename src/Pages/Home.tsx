import React, { useState } from "react";
import { Button, Col, Form, Input, Row, Typography, AutoComplete, Modal } from "antd";
import "../CSS/Home.css";
import { useNavigate } from "react-router-dom";
import SchemeCard from "./AllResources/SchemeCard";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";

const { Title } = Typography

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
  const [options, setOptions] = useState<{ value: string; label: React.ReactNode, scheme_data: any }[]>([]);
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false)


  const handleSearch = async (value: string) => {
    if (!value) {
      setOptions([]);
      return;
    }

    try {
      const response = await axios.post('https://schemes-api.grevity.in/search_scheme', {
        query: value,
      });
      const searchResults = response.data.map((item: any) => {
        return {
          value: item.title,
          label: (
            <div onClick={() => handleSelect(item)}>
              {item.title}
            </div>
          ),
          scheme_data: item
        };
      });
      setOptions(searchResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleSelect = (item: any) => {
    console.log("Selected item:", item);
    navigate("/schemeByCategory"); // Example of navigation on selection
  };

  return (
    <div className="App">
      {/* <video id="bgVideo" controls preload="true" autoPlay loop muted>
        <source src="../landing.mp4" type="video/mp4" />
      </video> */}
      <div className="landing_bg"></div>
      <Modal width={900} open={showModal} onCancel={() => setShowModal(false)}>
        {options.map((option: any) => {
          return <SchemeCard scheme={option.scheme_data} />
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
                <Title level={2} style={{ margin: 0, color: "#8169ff", fontWeight: "bolder" }}>Delhi Social Security Schemes and Resources</Title>
                <Title level={3} style={{ margin: 8, color: "#8169ff", fontWeight: "bold" }}>for Children and their Families</Title>
                <AutoComplete
                  dropdownMatchSelectWidth={400}
                  style={{ width: 400, marginRight: 12 }}
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
                <Button size="large" type="primary" onClick={() => setShowModal(true)}>
                  Search
                </Button>
              </div>
            </div>
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
