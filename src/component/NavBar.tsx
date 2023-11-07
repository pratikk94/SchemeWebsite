import { NavLink } from "react-router-dom";
import "../CSS/NavBar.css";
import {
  FormOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  MessageOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
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
        <ul className="menu-items" style={{ position: "absolute", right: 32 }}>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#1890ff" : "inherit",
              })}
              to="/"
            >
              {/* <HomeOutlined />  */}
              Home
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
              About
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
              Resources
            </NavLink>
          </li>
          <li>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setIsModalOpen(true)}
            >
              {/* <MessageOutlined />  */}
              <p style={{ fontWeight: 500 }}>Feedback</p>
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
              Contact us
            </NavLink>
          </li>
        </ul>
        <h1 className="logo">
          <NavLink to="/">
            <img
              src="../logo.jpeg"
              style={{
                width: "120px",
                height: "120px",
                display: "inline",
                position: "absolute",
                left: "4vw",
              }}
            />
            <p
              style={{
                fontSize: "2vw",
                display: "inline",
                alignItems: "start",
                position: "absolute",
                top: "80px",
                left: "12vw",
                color: "#731816",
              }}
            >
              Delhi Commission For Protection of Child Rights
            </p>
          </NavLink>
        </h1>
      </div>
    </nav>
  );
}
