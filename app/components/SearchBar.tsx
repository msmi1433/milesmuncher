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
  const [validNumLength, setValidNumLength] = useState<boolean>(true);
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
    <div className="min-w-full p-2 xl:py-2 xl:px-16 bg-white rounded-b-[3rem] text-sm shadow-xl">
      <form
        className="flex flex-col justify-between xl:justify-evenly items-center xl:items-start gap-1"
        onSubmit={handleSearch}
      >
        <div className="w-full flex justify-between items-center gap-2">
          <input
            id="balance-input"
            type="text"
            className={`rounded p-2.5 w-1/2 text-xs border border-solid placeholder:text-placeholderText ${
              !validInput
                ? "border border-red"
                : "border border-searchBorder border-solid"
            }`}
            onChange={(e) => {
              if (
                /^[0-9]*$/.test(e.target.value) &&
                parseFloat(e.target.value) <= 999999999
              ) {
                setPointsBalance(e.target.value);
                setValidInput(true);
                setValidNumLength(true);
              } else if (parseFloat(e.target.value) > 999999999) {
                setPointsBalance("");
                setValidInput(false);
                setValidNumLength(false);
              } else {
                setPointsBalance("");
                setValidInput(false);
                setValidNumLength(true);
              }
            }}
            placeholder="Miles (e.g. 45000)"
          />
          <Select
            id="class-select"
            className="select bg-white w-1/2 rounded text-xs text-left"
            defaultValue={dropdownValue}
            options={dropdownOptions}
            placeholder="Class (optional)"
            onChange={setDropdownValue}
            instanceId={"home"}
          />
        </div>
        <div className="xl:flex xl:justify-between xl:w-full">
          <p
            className={`text-xs pt-0.5 pb-2 ${
              !validInput ? "text-red" : "text-borderCharcoal"
            }`}
          >
            Please enter a whole number (no commas){" "}
            <span className={!validNumLength ? "text-red" : "hidden"}>
              - Number must be smaller than 999,999,999
            </span>
          </p>
          <button className="xl:my-1 xl:self-end bg-accentBlue hover:bg-buttonHover text-white font-bold py-2 px-4 rounded">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
