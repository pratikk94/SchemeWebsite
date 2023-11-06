import React, { useState } from "react";
import { Input } from "antd";

// Define props if you need to pass some from the parent component
interface SearchBoxProps {
  onSearch: (value: string) => void; // Function to call when a search is submitted
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  // State to hold the input value
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Input.Search
      placeholder="Search..."
      enterButton
      value={searchTerm}
      style={{ width: "40vw" }}
      onChange={(e) => setSearchTerm(e.target.value)}
      onSearch={onSearch}
    />
  );
};

export default SearchBox;
