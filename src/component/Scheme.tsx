import React from "react";
import { Card, Col, Collapse, Divider, Row, Typography } from "antd";
import schemeData from "../data/data.json";

import {
  HomeOutlined,
  InfoCircleOutlined,
  ManOutlined,
  WomanOutlined,
} from "@ant-design/icons";
interface SchemeProps {
  id: string[];
  type: number;
}

const Scheme: React.FC<SchemeProps> = (props): JSX.Element => {
  let schemeDB: any;
  if (props.type === 1) {
    schemeDB = schemeData["scheme"];
  } else {
    schemeDB = schemeData["scholarship"];
  }
  let fabricateData: (props: string[]) => string[] = function (
    props: string[]
  ): string[] {
    let data: string[] = [];
    for (let j: number = 0; j < props.length; j++) {
      for (let i: number = 0; i < schemeDB.length; i++) {
        if (schemeDB[i]["id"] === props[j]) {
          data.push(JSON.stringify(schemeDB[i]));
        }
      }
    }
    return data;
  };

  let interimDataArray = fabricateData(props.id);
  return interimDataArray.length === 0 ? (
    <h1>No scheme Found</h1>
  ) : (
    <div style={{ width: "64vw" }}>
      <Collapse
        items={interimDataArray.map((interimdata, index) => {
          return {
            id: (index + 1).toString(),
            label: JSON.parse(interimdata)["name"],
            children: <SchemeCard schemeData={interimdata} />,
          };
        })}
      />
    </div>
  );
};
export default Scheme;

const { Title, Text } = Typography;
const SchemeCard = ({ schemeData }: any) => {
  const {
    name,
    award_entitlement,
    gender,
    max_income,
    residence,
    disability,
    eligibility,
    document_required,
    application_link,
    grievance_redressal,
  } = JSON.parse(schemeData);

  return (
    <Card
      key={name}
      title={
        <Title style={{ marginTop: 24 }} level={2}>
          {name}
        </Title>
      }
      bordered
      style={{
        textAlign: "start",
        backgroundColor: "#f1faff",
        margin: "2vh",
      }}
    >
      <Title level={4}>
        <InfoCircleOutlined /> Award/Entitlement:
      </Title>
      <div dangerouslySetInnerHTML={{ __html: award_entitlement }}></div>

      <Row
        style={{ marginTop: 12, marginBottom: 12 }}
        justify={"space-between"}
      >
        <Col>
          <Title level={4}>Gender:</Title>
          <Text>
            {gender == "Female" ? <WomanOutlined /> : <ManOutlined />} {gender}
          </Text>
        </Col>
        <Col>
          <Title level={4}>Max Family Income:</Title>
          <Text>Rs.{max_income}</Text>
        </Col>
        <Col>
          <Title level={4}>Disability:</Title>
          <Text>{disability}</Text>
        </Col>
      </Row>
      <Title level={4}>
        <HomeOutlined /> Residence:
      </Title>
      <Text>{residence}</Text>

      <Divider />

      <Title level={4}>Eligibility:</Title>
      <div dangerouslySetInnerHTML={{ __html: eligibility }}></div>

      <Title level={4}>Document Required:</Title>
      <div dangerouslySetInnerHTML={{ __html: document_required }}></div>

      <Title level={4}>Application Link:</Title>
      <div dangerouslySetInnerHTML={{ __html: application_link }}></div>

      <Title level={4}>Grievance Redressal:</Title>
      <div dangerouslySetInnerHTML={{ __html: grievance_redressal }}></div>
    </Card>
  );
};
