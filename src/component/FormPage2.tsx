// Step1.tsx
import { DatePicker, DatePickerProps, InputNumber, Row } from "antd";
import React, { useState } from "react";
import RadioButtonWithImages from "./RadioButtonWithImages";

interface FormPage2Props {
  onChangeResidenace: (data: string) => void;
  onChangeMaxFamilyIncome: (data: number) => void;
}

const FormPage2: React.FC<FormPage2Props> = (props): JSX.Element => {
  // Form fields for Step 1
  const [selectedOption, setSelectedOption] = useState<string>("option1");
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
      label: "Delhi",
      imageUrl: "/male.png",
    },
    {
      value: "Out of Delhi",
      label: "Out of Delhi",
      imageUrl: "/female.png",
    },
  ];
  return (
    <div>
      <h3
        style={{ textAlign: "center", color: "#964B00", marginBottom: "8vh" }}
      >
        Enter basic information
      </h3>

      <div>
        <Row>
          <h2
            style={{ textAlign: "left", color: "#964B00", marginBottom: "2vh" }}
          >
            How do you identify yourself?
          </h2>
        </Row>

        <RadioButtonWithImages
          options={options}
          selectedOption={selectedOption}
          onChange={handleOptionChange}
        />
        <Row>
          <h2
            style={{ textAlign: "left", color: "#964B00", marginBottom: "2vh" }}
          >
            Enter your annual family income
          </h2>
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
        <p>
          *Above two fields are optional and can be skipped for next options.
          <br />
          Although we recommend to fill in all the fields for accurate results
        </p>
      </div>
    </div>
  );
};

export default FormPage2;
