import {
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Spin,
  message,
} from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Typography, List, Tag, Button, Space, Layout } from "antd";
const { Content } = Layout;
const { Option } = Select;
const { Title, Paragraph } = Typography;

const SchemeCard = ({ scheme }: any) => {
  const [benefitsExpanded, setBenefitsExpanded] = useState(false);
  const [eligibilityExpanded, setEligibilityExpanded] = useState(false);

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
        <Title level={1} style={{ color: "#00008B" }}>
          {scheme.title}
        </Title>
        <Paragraph style={{ whiteSpace: "pre-line", fontSize: "20px" }}>
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
          <p>{scheme.documents_required}</p>
          {/* <List
            dataSource={scheme.documents_required?.split("\n")}
            renderItem={(item: any) => (
              <List.Item style={{ whiteSpace: "pre-line", fontSize: "20px" }}>
                {item}
              </List.Item>
            )}
            size="small"
          /> */}
        </Paragraph>
      </Typography>
      <Space>
        <Button type="primary" href={scheme.application_link}>
          Apply Now
        </Button>
        <Button href={`mailto:${scheme.grievance_redressal}`}>
          Contact Support
        </Button>
      </Space>
    </Card>
  );
};

const SearchPanel = ({ onSearch, type }: any) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    // Provide default values for min_age and max_age if not specified
    const filters = {
      type,
      ...values,
      min_age: values.min_age || null,
      max_age: values.max_age || null,
    };

    console.log(filters);

    onSearch(filters);
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Row gutter={16}>
        <Col span={4}>
          <Form.Item label="Min Age" name="min_age">
            <Input placeholder="Min Age" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Max Age" name="max_age">
            <Input placeholder="Max Age" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Gender" name="gender">
            <Select placeholder="Select Gender">
              {/* <Option value="male">Male</Option> */}
              <Option value="Female">Female</Option>
              <Option value={null}>Other</Option>
            </Select>
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
    </Form>
  );
};

const SchemesListIndex = (props: any) => {
  const { state } = useLocation();

  const [schemes, setSchemes] = useState<any[] | null>(null);

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

  useEffect(() => {
    // Initialize with default filters based on location state
    fetchSchemes({
      type: state.category,
    });
  }, [state]);

  return (
    <Layout>
      <Content style={{ padding: "100px 150px" }}>
        <SearchPanel onSearch={fetchSchemes} type={state.category} />
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
    </Layout>
  );
};

export default SchemesListIndex;
