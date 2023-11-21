import { Col, Form, Input, Modal, Row, Select, Spin, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Typography, Tag, Button, Space, Layout } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Footer from "../../component/Footer";
import "../../CSS/AllResources.css";
const { Content } = Layout;
const { Option } = Select;
const { Title, Paragraph } = Typography;

const SchemeCard = ({ scheme }: any) => {
  const [benefitsExpanded, setBenefitsExpanded] = useState(false);
  const [eligibilityExpanded, setEligibilityExpanded] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [isGrievanceModalOpen, setIsGrievanceModalOpen] = useState(false);
  const showModal = () => {
    setIsApplicationModalOpen(true);
  };
  const handleOk = () => {
    setIsApplicationModalOpen(false);
  };
  const handleCancel = () => {
    setIsApplicationModalOpen(false);
  };
  const showGrievanceModal = () => {
    setIsGrievanceModalOpen(true);
  };
  const handleGrievanceOk = () => {
    setIsGrievanceModalOpen(false);
  };
  const handleGrievanceCancel = () => {
    setIsGrievanceModalOpen(false);
  };
  // Toggle for Benefits text
  const toggleBenefitsText = () => {
    setBenefitsExpanded(!benefitsExpanded);
  };

  // Toggle for Eligibility text
  const toggleEligibilityText = () => {
    setEligibilityExpanded(!eligibilityExpanded);
  };

  // Render text with a "Show more" link for Benefits
  const renderBenefitsText = (text: any, maxLength = 100) => {
    if (text.length <= maxLength || benefitsExpanded) {
      return text;
    }
    return (
      <>
        {`${text.substring(0, maxLength).trim()}... `}
        <a onClick={toggleBenefitsText}>Show more</a>
      </>
    );
  };

  // Render text with a "Show more" link for Eligibility
  const renderEligibilityText = (text: any, maxLength = 100) => {
    if (text.length <= maxLength || eligibilityExpanded) {
      return text;
    }
    return (
      <>
        {`${text.substring(0, maxLength).trim()}... `}
        <a onClick={toggleEligibilityText}>Show more</a>
      </>
    );
  };

  return (
    <Card bordered={false} style={{ width: "100%", marginTop: 16 }}>
      <Typography>
        <Title level={2} style={{ color: "#00008B" }}>
          {scheme.title}
        </Title>
        <Paragraph style={{ fontSize: "20px" }}>
          <strong>Type:</strong> <Tag color="blue">{scheme.type}</Tag>
        </Paragraph>
        {scheme.benefits && (
          <Paragraph style={{ whiteSpace: "pre-line", fontSize: "20px" }}>
            <strong>Benefits:</strong>
            {renderBenefitsText(scheme.benefits)}
          </Paragraph>
        )}
        {scheme.eligibility && (
          <Paragraph style={{ whiteSpace: "pre-line", fontSize: "20px" }}>
            <strong>Eligibility:</strong>
            {renderEligibilityText(scheme.eligibility)}
          </Paragraph>
        )}
        <Paragraph style={{ whiteSpace: "pre-line", fontSize: "20px" }}>
          <strong>Documents Required:</strong>
          <br />
          {/* <List
            dataSource={}
            renderItem={(item: any) => (
              <List.Item style={{ whiteSpace: "pre-line", fontSize: "20px" }}>
                {item}
              </List.Item>
            )}
            size="small"
          /> */}

          {scheme.documents_required}
        </Paragraph>
      </Typography>
      <Space>
        <Button type="primary" onClick={showModal}>
          Application Process
        </Button>
        <Modal
          title="Application Process"
          open={isApplicationModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Paragraph style={{ whiteSpace: "pre-line", fontSize: "20px" }}>
            {scheme.application_link}
          </Paragraph>
        </Modal>
        <Button onClick={showGrievanceModal}>Grievance Redressal</Button>
        <Modal
          title="Grievance Redressal"
          open={isGrievanceModalOpen}
          onOk={handleGrievanceOk}
          onCancel={handleGrievanceCancel}
        >
          <Paragraph style={{ whiteSpace: "pre-line", fontSize: "20px" }}>
            {scheme.grievance_redressal}
          </Paragraph>
        </Modal>
      </Space>
    </Card>
  );
};

const SearchPanel = ({ onSearch }: any) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    const filters = {
      ...values,
      min_age: values.min_age || null,
      max_age: values.max_age || null,
    };

    console.log(filters);

    onSearch(filters);
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Row gutter={24} align={"bottom"}>
        <Col xs={24} sm={12} xl={6}>
          <Form.Item
            label={<p style={{ fontSize: "20px" }}>Resource</p>}
            name="type"
          >
            <Select placeholder="Please select a resource">
              <Option value="Livelihood">Livelihood</Option>
              <Option value="Skill">Skill</Option>
              <Option value="Scholarship">Scholarship</Option>
              <Option value="Miscellaneous">Miscellaneous</Option>
              <Option value="Women_and_child">Women and child</Option>
              <Option value="Health">Health</Option>
              <Option value="Education">Education</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} xl={6}>
          <Form.Item
            label={<p style={{ fontSize: "20px" }}>Min Age</p>}
            name="min_age"
          >
            <Input placeholder="Min Age" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} xl={6}>
          <Form.Item
            label={<p style={{ fontSize: "20px" }}>Max age</p>}
            name="max_age"
          >
            <Input placeholder="Max Age" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} xl={6}>
          <Form.Item
            label={<p style={{ fontSize: "20px" }}>Gender</p>}
            name="gender"
          >
            <Select placeholder="Select Gender">
              <Option value={null}>All</Option>
              <Option value="Female">Female only</Option>
              <Option value="Others">Other only</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              <SearchOutlined /> Search
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

const AllResourcesIndex = (props: any) => {
  const [schemes, setSchemes] = useState<any[] | null>(null);

  useEffect(() => {
    fetchSchemes({});
  }, []);

  // Fetch Schemes based on the filter
  const fetchSchemes = (filters: any) => {
    axios
      .post(`https://schemes-api.grevity.in/schemes`, {
        data: filters,
      })
      .then((response) => {
        if (response && response.data) {
          setSchemes(response.data);
        } else {
          message.error("Failed to fetch schemes");
        }
      })
      .catch((error) => {
        message.error("An error occurred while fetching schemes");
      });
  };

  return (
    <Layout>
      <Content className="content">
        <center>
          <p
            style={{
              margin: "2vw",
              fontSize: "48px",
              fontWeight: 900,
              marginTop: "0vh",
              color: "#1A196F",
            }}
          >
            All schemes
          </p>
        </center>
        <SearchPanel onSearch={fetchSchemes} />
        {schemes == null ? (
          <Spin spinning={true} />
        ) : schemes.length > 0 ? (
          <>
            <Typography.Text
              strong
              style={{ color: "red" }}
            >{`${schemes.length} Schemes Found`}</Typography.Text>
            {schemes.map((scheme, index) => (
              <SchemeCard key={index} scheme={scheme} />
            ))}
          </>
        ) : (
          <h1>No schemes found</h1>
        )}
      </Content>
      <Footer />
    </Layout>
  );
};

export default AllResourcesIndex;
