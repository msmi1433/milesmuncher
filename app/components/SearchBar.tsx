"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { DropdownOption } from "@/types/global";

export default function SearchBar() {
  const dropdownOptions: DropdownOption[] = [
    { value: "", label: "Any Class" },
    { value: "economy", label: "Economy" },
    { value: "p_economy", label: "Premium Economy" },
    { value: "business", label: "Business" },
  ];
  const [dropdownValue, setDropdownValue] = useState<DropdownOption | null>(
    null
  );
  const [pointsBalance, setPointsBalance] = useState<string>("");
  const [validInput, setValidInput] = useState<boolean>(true);
  const router = useRouter();

  const handleSearch = (e: { preventDefault: Function }) => {
    e.preventDefault();
    if (pointsBalance && dropdownValue?.value) {
      router.push(
        `/destinations?points_balance=${pointsBalance}&travel_class=${dropdownValue?.value}`
      );
    } else if (pointsBalance) {
      router.push(`/destinations?points_balance=${pointsBalance}`);
    }
  };

  return (
    <div className="min-w-full p-2 bg-white rounded-b-[3rem] text-sm shadow-xl">
      <form
        className="flex flex-col xl:flex-row justify-between xl:justify-evenly items-center xl:items-start gap-1"
        onSubmit={handleSearch}
      >
        <div className="w-full flex justify-between items-center gap-2">
          <input
            type="text"
            className={`rounded p-2.5 w-1/2 text-xs border border-solid placeholder:text-placeholderText ${
              !validInput
                ? "border border-red"
                : "border border-searchBorder border-solid"
            }`}
            onChange={(e) => {
              if (/^[0-9]*$/.test(e.target.value)) {
                setPointsBalance(e.target.value);
                setValidInput(true);
              } else {
                setPointsBalance("");
                setValidInput(false);
              }
            }}
            placeholder="Miles balance"
          />
          <Select
            className="select bg-white w-1/2 rounded text-xs"
            defaultValue={dropdownValue}
            options={dropdownOptions}
            placeholder="Class (optional)"
            onChange={setDropdownValue}
          />
        </div>
        <p
          className={`text-xs py-0.5 ${
            !validInput ? "text-red" : "text-borderCharcoal"
          }`}
        >
          Please enter a whole number (no commas)
        </p>
        <button className="bg-accentBlue hover:bg-buttonHover text-white font-bold py-2 px-4 rounded">
          Search
        </button>
      </form>
    </div>
  );
}
