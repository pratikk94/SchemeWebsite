import React, { useState } from "react";
import { Button, Card, Form, InputNumber, Radio, Row } from "antd";
import "../CSS/FormPageScholarship.css";
import Scholarship from "./Scholarship";
import { getResources } from "../utils/util";
type FieldType = {
  gender?: string;
  maxFamilyIncome?: string;
  residence?: string;
  disability?: string;
  reservation?: string;
};

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const FormPageScholarship: React.FC = () => {
  const [gender, setGender] = useState("Male");
  const [maxIncome, setMaxIncome] = useState(0);
  const [residence, setResidence] = useState("In Delhi");
  const [disability, setDisability] = useState("No");
  const [reservation, setReservation] = useState("SC");
  const [submitPressed, setOnSubmitPressed] = useState(false);
  const [ids, setIds] = useState([""]);

  const onChangeGender = (e: any) => {
    console.log("radio checked", e.target.value);
    setGender(e.target.value);
  };

  const onChangeMaxIncome = (e: any) => {
    console.log("Max income :", e);
    setMaxIncome(e);
  };

  const onChangeResidence = (e: any) => {
    console.log("radio checked", e.target.value);
    setResidence(e.target.value);
  };

  const onChangeDisability = (e: any) => {
    console.log("radio checked", e.target.value);
    setDisability(e.target.value);
  };

  const onChangeReservation = (e: any) => {
    console.log("radio checked", e.target.value);
    setReservation(e.target.value);
  };

  return (
    <>
      <Card>
        <Form
          name="scholarship-form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          labelCol={{ span: 6 }} wrapperCol={{ span: 18, offset: 0 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
          onSubmitCapture={() => {
            setIds([]);
            let returnIds = getResources(
              2,
              reservation,
              gender,
              maxIncome,
              residence,
              disability
            );
            if (returnIds.length !== 0) setIds(returnIds);
            setOnSubmitPressed(true);
          }}
          autoComplete="off"
        >
          <Form.Item label="Gender" >
            <Row justify={"start"}>
              <Radio.Group onChange={onChangeGender} value={gender}>
                <Radio value="Male"> Male </Radio>
                <Radio value="Female"> Female </Radio>
                <Radio value="Other"> Other </Radio>
              </Radio.Group>
            </Row>
          </Form.Item>
          <Form.Item
            label="Max family income"
            name="maxFamilyIncome"
            rules={[
              {
                required: true,
                message: "Please input your family income!",
              },
            ]}
          >
            <Row justify={"start"}>
              <InputNumber
                min={0}
                max={1000000000}
                onChange={onChangeMaxIncome}
                value={maxIncome}
              />
            </Row>
          </Form.Item>

          <Form.Item label="Residence">
            <Row justify={"start"}>
              <Radio.Group onChange={onChangeResidence} value={residence}>
                <Radio value="In delhi"> In Delhi </Radio>
                <Radio value="In state/UT"> In State/UT </Radio>
                <Radio value="Other"> Other </Radio>
              </Radio.Group>
            </Row>
          </Form.Item>

          <Form.Item label="Disability">
            <Row justify={"start"}>
              <Radio.Group onChange={onChangeDisability} value={disability}>
                <Radio value="Yes"> Yes </Radio>
                <Radio value="No"> No </Radio>
              </Radio.Group>
            </Row>
          </Form.Item>

          <Form.Item label="Reservation">
            <Row justify={"start"}>
              <Radio.Group onChange={onChangeReservation} value={reservation}>
                <Radio value="SC"> SC </Radio>
                <Radio value="ST"> ST </Radio>
                <Radio value="OBC"> OBC </Radio>
                <Radio value="Other"> Other </Radio>
                <Radio value="Minority"> Minorities </Radio>
              </Radio.Group>
            </Row>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {submitPressed && <Scholarship id={ids} />}
    </>
  );
};
export default FormPageScholarship;
