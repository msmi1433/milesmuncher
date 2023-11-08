"use client";
import { useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = async (e) => {
    // do something
  };

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
    </div>
  );
};

export default SearchBar;
