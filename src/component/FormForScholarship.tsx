import React from "react";
import { Button, Card, Form, Input, Radio } from "antd";
import "../CSS/FormPageScholarship.css";
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

const FormPageScholarship: React.FC = () => (
  <div className="FormPageSchlarship">
    <div className="container-type" style={{ height: "80vh" }}>
      <center>
        <Card className="FormPageSchlarshipCard">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="Gender">
              <Radio.Group>
                <Radio value="Male"> Male </Radio>
                <Radio value="Female"> Female </Radio>
                <Radio value="Other"> Other </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item<FieldType>
              label="Max family income"
              name="maxFamilyIncome"
              rules={[
                { required: true, message: "Please input your family income!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Residence">
              <Radio.Group>
                <Radio value="In delhi"> In Delhi </Radio>
                <Radio value="In state/UT"> In State/UT </Radio>
                <Radio value="Other"> Other </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Disability">
              <Radio.Group>
                <Radio value="Yes"> Yes </Radio>
                <Radio value="No"> No </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Reservation">
              <Radio.Group>
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
      </center>
    </div>
  </div>
);
export default FormPageScholarship;
