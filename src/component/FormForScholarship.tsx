import React, { useState } from "react";
import { Button, Card, Form, InputNumber, Radio } from "antd";
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
  const [gender, setGender] = useState("Female");
  const [maxIncome, setMaxIncome] = useState(0);
  const [residence, setResidence] = useState("All");
  const [disability, setDisability] = useState("NA");
  const [reservation, setReservation] = useState("All");
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
    <div className="FormPageSchlarship">
      <div className="container-type" style={{ height: "80vh" }}>
        <Card className="FormPageSchlarshipCard">
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 20 }}
            style={{
              maxWidth: "32vw",
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            onSubmitCapture={() => {
              console.log(gender);
              console.log(maxIncome);
              console.log(residence);
              console.log(reservation);
              console.log(disability);
              let returnIds = getResources(
                1,
                gender,
                maxIncome,
                residence,
                reservation,
                disability
              );
              if (returnIds.length !== 0) setIds(returnIds);
              setOnSubmitPressed(true);
            }}
            autoComplete="off"
          >
            <Form.Item label="Gender">
              <Radio.Group onChange={onChangeGender} value={gender}>
                <Radio value="Male"> Male </Radio>
                <Radio value="Female"> Female </Radio>
                <Radio value="Other"> Other </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item<FieldType>
              label="Max family income"
              name="maxFamilyIncome"
              rules={[
                {
                  required: true,
                  message: "Please input your family income!",
                },
              ]}
            >
              <InputNumber
                min={0}
                max={1000000000}
                defaultValue={0}
                onChange={onChangeMaxIncome}
                value={maxIncome}
              />
            </Form.Item>

            <Form.Item label="Residence">
              <Radio.Group onChange={onChangeResidence} value={residence}>
                <Radio value="In delhi"> In Delhi </Radio>
                <Radio value="In state/UT"> In State/UT </Radio>
                <Radio value="Other"> Other </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Disability">
              <Radio.Group onChange={onChangeDisability} value={disability}>
                <Radio value="Yes"> Yes </Radio>
                <Radio value="No"> No </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Reservation">
              <Radio.Group onChange={onChangeReservation} value={reservation}>
                <Radio value="SC"> SC </Radio>
                <Radio value="ST"> ST </Radio>
                <Radio value="OBC"> OBC </Radio>
                <Radio value="Other"> Other </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
        {submitPressed && <Scholarship id={ids} />}
      </div>
    </div>
  );
};
export default FormPageScholarship;
