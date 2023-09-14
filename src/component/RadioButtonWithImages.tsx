import React, { useState } from "react";
import "../CSS/RadioButton.css";
import { Col, Row } from "antd";
interface RadioButtonOption {
  value: string;
  label: string;
  imageUrl: string;
}

interface RadioButtonProps {
  options: RadioButtonOption[];
  selectedOption: string;
  onChange: (value: string) => void;
  size: number;
}

const RadioButtonWithImages: React.FC<RadioButtonProps> = ({
  options,
  selectedOption,
  onChange,
  size,
}) => {
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setSelectedRadioButtonValue(selectedValue);
    onChange(selectedValue);
  };

  const [selectedRadioButtonValue, setSelectedRadioButtonValue] =
    useState(selectedOption);
  console.log(selectedRadioButtonValue);
  return (
    <Row>
      {options.map((option) => (
        <Col span={size}>
          <label
            key={option.value}
            className={`radio-button-label ${
              selectedRadioButtonValue === option.value ? "selected" : ""
            }`}
            style={{ width: "6vw", height: "100px", marginRight: "2vw" }}
          >
            <input
              type="radio"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleOptionChange}
              style={{ display: "none", margin: "2vw" }}
            />
            <img
              src={option.imageUrl}
              alt={option.label}
              style={{
                width: "4vw",
                height: "6vh",
              }}
            />
            <p style={{ display: "inline" }}>{option.label}</p>
          </label>
        </Col>
      ))}
    </Row>
  );
};

export default RadioButtonWithImages;
