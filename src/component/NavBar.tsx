import { NavLink } from "react-router-dom";
import "../CSS/NavBar.css";
import { useState } from "react";
import { Col, Input, Modal, Row, message } from "antd";
import axios from "axios";
export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");

  const handleOk = () => {
    if (feedback === "" || user === "" || phone === "") {
      message.error("Please fill all the fields!");
      return;
    } else {
      setIsModalOpen(false);
      axios.post("https://schemes-api.grevity.in/feedback", {
        feedback: feedback,
        user: user,
        phone: phone,
      });
      message.success("Feedback submitted successfully!");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    // <nav className="navbar-container">
    //   <NavLink
    //     to="/"
    //     className={({ isActive }) => (isActive ? "active" : "inactive")}
    //   >
    //     Home
    //   </NavLink>
    //   <NavLink
    //     to="/form"
    //     className={({ isActive }) => (isActive ? "active" : "inactive")}
    //   >
    //     Form
    //   </NavLink>

    //   <NavLink
    //     to="/about"
    //     className={({ isActive }) => (isActive ? "active" : "inactive")}
    //   >
    //     About
    //   </NavLink>
    //   <NavLink
    //     to="/contact"
    //     className={({ isActive }) => (isActive ? "active" : "inactive")}
    //   >
    //     Contact
    //   </NavLink>
    // </nav>
    <div>
      <div style={{ height: "120px" }}>
        <h1 className="logo">
          {/* <NavLink to="/"> */}
          <img
            className="logoIcon"
            src="../logo.jpeg"
            alt="LOGO"
            style={{ zIndex: 101 }}
          />
          <p
            className="logoOfWebsite"
            style={{
              // fontSize: "1.5rem",
              display: "inline",
              alignItems: "start",
              position: "absolute",
              top: "20px",
              marginTop: "20px",
              color: "#731816",
              zIndex: 101,
            }}
          >
            Delhi Commission for Protection of Child Rights (DCPCR)
            <br />
            Government of NCT of Delhi
          </p>
          {/* </NavLink> */}
        </h1>
      </div>
      <nav className="navbar">
        <Modal
          title="Your Feedback"
          open={isModalOpen}
          okText={"Submit Feedback"}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Row style={{ marginBottom: 14 }} gutter={[16, 16]}>
            <Col span={12}>
              <Input
                onChange={(e) => setUser(e.target.value)}
                placeholder="Enter your name..."
              />
            </Col>
            <Col span={12}>
              <Input
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number..."
              />
            </Col>
          </Row>
          <Input.TextArea
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback here..."
          />
        </Modal>
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul
            className="menu-items"
            style={{ position: "absolute", right: 32 }}
          >
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#1890ff" : "inherit",
                })}
                to="/"
              >
                {/* <HomeOutlined />  */}
                <p className="navbarItem">Home</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#1890ff" : "inherit",
                })}
                to="/about"
              >
                {/* <InfoCircleOutlined />  */}
                <p className="navbarItem">About</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#1890ff" : "inherit",
                })}
                to="/imp-links"
              >
                {/* <FormOutlined /> */}
                <p className="navbarItem">Resources</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#1890ff" : "inherit",
                })}
                to="/compensation"
              >
                {/* <PhoneOutlined />  */}
                <p className="navbarItem">Compensation</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#1890ff" : "inherit",
                })}
                to="/essentialDocs"
              >
                {/* <PhoneOutlined />  */}
                <p className="navbarItem">Essential Docs</p>
              </NavLink>
            </li>
            <li>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setIsModalOpen(true)}
              >
                {/* <MessageOutlined />  */}
                <p className="navbarItem" style={{ fontWeight: 500 }}>
                  Feedback
                </p>
              </div>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#1890ff" : "inherit",
                })}
                to="/contact"
              >
                {/* <PhoneOutlined />  */}
                <p className="navbarItem">Contact Us</p>
              </NavLink>
            </li>
          </ul>
          {/* <h1 className="logo">
          <NavLink to="/">
            <img
              className="logoIcon"
              src="../logo.jpeg"
              alt="LOGO"
              style={{}}
            />
            <p
              className="logoOfWebsite"
              style={{
                // fontSize: "1.5rem",
                display: "inline",
                alignItems: "start",
                position: "absolute",
                top: "40px",
                color: "#731816",
              }}
            >
              Delhi Commission for Protection of Child Rights
              <br />
              (DCPCR) Government of NCT of Delhi
            </p>
          </NavLink>
        </h1> */}
        </div>
      </nav>
    </div>
  );
}
