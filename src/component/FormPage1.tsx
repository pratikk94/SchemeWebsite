import { DatePicker, DatePickerProps, Row } from "antd";
import React, { useState } from "react";
import RadioButtonWithImages from "./RadioButtonWithImages";
import dayjs from "dayjs";
import "dayjs/locale/en"; // Import the desired locale

// Set Day.js locale to 'en' (English) or your preferred locale
dayjs.locale("en");
interface FormPage1Props {
  onChangeGender: (data: string) => void;
  gender: string;
  age: string;
  date: string;
  onChangeAge: (data: number) => void;
  onChangeDate: (data: string) => void;
}
dayjs.locale("en");

const FormPage1: React.FC<FormPage1Props> = (props): JSX.Element => {
  // Form fields for Step 1
  const [selectedOption, setSelectedOption] = useState(props.gender);
  // Custom date format for parsing and formatting using Day.js
  const dateFormat = "YYYY-MM-DD";

  // Date parser function
  const dateParser = (value: dayjs.Dayjs | null): dayjs.Dayjs | null => {
    if (!value) return null;
    return value;
  };

  //  Date formatter function
  //  const dateFormatter = (value: dayjs.Dayjs | null): string => {
  //     return value ? value.format(dateFormat) : "";
  //   };

  let date;
  if (props.date !== "") date = dayjs(props.date, "YYYY/MM/DD");
  else date = dayjs(new Date().toLocaleDateString(), "DD/MM?/YYYY");
  console.log(date);
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(date);

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    props.onChangeGender(value);
  };

  const onChangeDate = (
    value: DatePickerProps["value"],
    dateString: string
  ) => {
    var time = new Date().getTime() - new Date(dateString).getTime();
    props.onChangeAge(Math.floor(time / (365 * 3600 * 24 * 1000)));
    props.onChangeDate(dateString);
  };

  const options = [
    {
      value: "Male",
      label: "Male",
      imageUrl: "/male.png",
    },
    {
      value: "Female",
      label: "Female",
      imageUrl: "/female.png",
    },
    {
      value: "Other",
      label: "Other",
      imageUrl: "/other.png",
    },
  ];

  return (
    <div>
      <h1
        style={{ textAlign: "center", color: "#964B00", marginBottom: "8vh" }}
      >
        Enter basic information
      </h1>

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
          size={8}
        />
        <Row>
          <h2
            style={{ textAlign: "left", color: "#964B00", marginBottom: "2vh" }}
          >
            Enter your birthdate
          </h2>
        </Row>
        <Row justify="start">
          <DatePicker
            value={selectedDate}
            onChange={(date, dateString) => {
              onChangeDate(date, dateString);
              setSelectedDate(dateParser(date));
            }}
            format={dateFormat}
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

export default FormPage1;
