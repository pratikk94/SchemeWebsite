import { Card, Typography, Tag, Button, Space, Modal } from "antd";
import { useState } from "react";

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
        <Title level={2}>{scheme.title}</Title>
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

export default SchemeCard;
