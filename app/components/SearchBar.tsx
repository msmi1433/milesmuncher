"use client";
import { useState } from "react";
import Dropdown from "react-dropdown";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = async (e) => {
    // do something
  };

  const dropdownOptions = [
    "Any Class",
    "Economy",
    "Premium Economy",
    "Business",
  ];

  return (
    <div>
      <input
        type="text"
        className="flex content-center justify-center"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          handleInputChange(e);
        }}
        placeholder="Enter your points balance..."
      />
      <Dropdown
        options={dropdownOptions}
        placeholder="Select a travel class (optional)"
        onChange={(e) => {
          console.log(e.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
