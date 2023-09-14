import React, { useState } from "react";
import "../CSS/RadioButton.css";
import { Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";
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

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  let sizeLabel: string = isDesktopOrLaptop ? "8vw" : "24vw";
  let sizeImage: string = isDesktopOrLaptop ? "4vw" : "12vw";

  return (
    <Row>
      {options.map((option) => (
        <Col span={size}>
          <label
            key={option.value}
            className={`radio-button-label ${
              selectedRadioButtonValue === option.value ? "selected" : ""
            }`}
            style={{ width: sizeLabel, height: "100px", marginRight: "2vw" }}
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
                width: sizeImage,
                height: "6vh",
              }}
            />
            <p style={{ display: "block" }}>{option.label}</p>
          </label>
        </Col>
      ))}
    </Row>
  );
};

export default RadioButtonWithImages;
