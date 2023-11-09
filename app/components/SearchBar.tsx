"use client";
import { useState } from "react";
import Dropdown from "react-dropdown";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");

  const dropdownOptions = [
    "Any Class",
    "Economy",
    "Premium Economy",
    "Business",
  ];

  return (
    <div className="w-full">
      <form className="flex justify-between items-start" action="">
        <input
          type="text"
          className="flex content-center justify-center"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="Enter your points balance..."
        />
        <Dropdown
          options={dropdownOptions}
          placeholder="Select a travel class (optional)"
          onChange={(e) => {
            setDropdownValue(e.value);
          }}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
