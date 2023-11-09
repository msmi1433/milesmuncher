"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Dropdown from "react-dropdown";

const SearchBar = () => {
  const [formData, setFormData] = useState({
    searchValue: "",
    dropdownValue: "",
  });
  const router = useRouter();

  const dropdownOptions = [
    "Any Class",
    "Economy",
    "Premium Economy",
    "Business",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/destinations`);
  };

  return (
    <div className="w-full">
      <form
        className="flex justify-between items-start"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className="flex content-center justify-center"
          onChange={(e) => {
            if (/^[0-9]*$/.test(e.target.value)) {
              setFormData((prevState) => ({
                ...prevState,
                searchValue: e.target.value,
              }));
            } else {
              setFormData((prevState) => ({
                ...prevState,
                searchValue: "",
              }));
            }
          }}
          placeholder="Enter your points balance..."
        />
        <Dropdown
          options={dropdownOptions}
          placeholder="Select a travel class (optional)"
          onChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              dropdownValue:
                e.value === "Premium Economy"
                  ? "p_economy"
                  : e.value.toLowerCase(),
            }));
          }}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
