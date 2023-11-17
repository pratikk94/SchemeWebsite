// Step1.tsx
import { InputNumber, Row } from "antd";
import React, { useState } from "react";
import RadioButtonWithImages from "./RadioButtonWithImages";

interface FormPage2Props {
  onChangeResidenace: (data: string) => void;
  onChangeMaxFamilyIncome: (data: number) => void;
}

const FormPage2: React.FC<FormPage2Props> = (props): JSX.Element => {
  // Form fields for Step 1
  const [selectedOption, setSelectedOption] = useState<string>("Delhi");
  const [maxIncome, setMaxIncome] = useState(0);
  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    props.onChangeResidenace(value);
  };

  const onChangeMaxFamilyIncome = (e: any) => {
    setMaxIncome(e);
    props.onChangeMaxFamilyIncome(e);
  };

  const options = [
    {
      value: "Delhi",
      label: "Yes",
      imageUrl: "/male.png",
    },
    {
      value: "Out of Delhi",
      label: "No",
      imageUrl: "/female.png",
    },
  ];
  return (
    <div>
      <h1
        style={{ textAlign: "center", color: "#1A1970", marginBottom: "4vh" }}
      >
        Enter Your Information
      </h1>

      <div>
        <Row>
          <h1
            style={{ textAlign: "left", color: "#1A1970", marginBottom: "2vh" }}
          >
            Are you a resident of Delhi?
          </h1>
        </Row>
        <Row justify="center">
          <RadioButtonWithImages
            options={options}
            size={12}
            selectedOption={selectedOption}
            onChange={handleOptionChange}
          />
        </Row>

        <Row>
          <h1
            style={{ textAlign: "left", color: "#1A1970", marginBottom: "2vh" }}
          >
            What is your annual family income?
          </h1>
        </Row>
        <Row justify="start">
          <InputNumber
            min={0}
            max={1000000000}
            onChange={onChangeMaxFamilyIncome}
            value={maxIncome}
          />
        </Row>
        <br />
        <p style={{ fontSize: "20px" }}>
          *Above two fields are optional and can be skipped for next options.
          <br />
          Although we recommend to fill in all the fields for accurate results
        </p>
      </div>
    </div>
  );
};

export default FormPage2;
