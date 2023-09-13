import React, { useState } from "react";
import {
  Button,
  Card,
  Form,
  InputNumber,
  Radio,
  DatePicker,
  Space,
  Row,
} from "antd";
import "../CSS/FormPageScholarship.css";
import type { DatePickerProps } from "antd/es/date-picker";
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

interface FormPageProps {
  type: number;
  gender: string;
  maxFamilyIncome: number;
  residence: string;
  disability: string;
  reservation: string;
}

const FormPage: React.FC<FormPageProps> = (props): JSX.Element => {
  const [gender, setGender] = useState(props.gender);
  const [maxIncome, setMaxIncome] = useState(props.maxFamilyIncome);
  const [residence, setResidence] = useState(props.residence);
  const [disability, setDisability] = useState(props.disability);
  const [reservation, setReservation] = useState(props.reservation);

  const [ids, setIds] = useState([""]);
  const [age, setAge] = useState(0);
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

  const onChangeDate = (
    value: DatePickerProps["value"],
    dateString: string
  ) => {
    var time = new Date().getTime() - new Date(dateString).getTime();
    setAge(Math.floor(time / (365 * 3600 * 24 * 1000)));
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
              setIds([]);
              let returnIds = getResources(
                props.type,
                reservation,
                gender,
                maxIncome,
                residence,
                disability,
                age
              );

              if (returnIds.length !== 0) setIds(returnIds);
            }}
            autoComplete="off"
          >
            <Form.Item label="Gender">
              <Row justify={"start"}>
                <Radio.Group onChange={onChangeGender} value={gender}>
                  <Radio value="Male"> Male </Radio>
                  <Radio value="Female"> Female </Radio>
                  <Radio value="Other"> Other </Radio>
                </Radio.Group>
              </Row>
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

            <Form.Item label="DateOfBirth">
              <Row justify={"start"}>
                <Space direction="vertical" size={12}>
                  <DatePicker onChange={onChangeDate} />
                </Space>
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
              <Row justify={"start"}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Row>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};
export default FormPage;
