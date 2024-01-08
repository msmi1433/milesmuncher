import { debounce } from "@/utils/utilityFunctions";
import { useState } from "react";
import { DropdownOption } from "@/types/global";
import Select from "react-select";

interface Props {
  setPointsBalance: Function;
  setCurrentPage: Function;
  setTravelClass: Function;
  travelClass: string | null;
  pointsBalance: number;
  isError: boolean;
}

const AmendSearchResults = ({
  setPointsBalance,
  setCurrentPage,
  setTravelClass,
  travelClass,
  pointsBalance,
  isError,
}: Props) => {
  const [validInput, setValidInput] = useState<boolean>(true);
  const [validNumLength, setValidNumLength] = useState<boolean>(true);

  const dropdownOptions: DropdownOption[] = [
    { value: "", label: "Any Class" },
    { value: "economy", label: "Economy" },
    { value: "p_economy", label: "Premium Economy" },
    { value: "business", label: "Business" },
  ];

  const handleInput = (value: string) => {
    if (
      /^[0-9]*$/.test(value) &&
      value !== "" &&
      parseFloat(value) <= 999999999
    ) {
      setValidInput(true);
      setValidNumLength(true);
      setPointsBalance(Number(value));
      setCurrentPage(1);
      if (!["economy", "p_economy", "business"].includes(travelClass!))
        setTravelClass("");
    } else if (parseFloat(value) > 999999999) {
      setValidInput(false);
      setValidNumLength(false);
    } else {
      setValidInput(false);
      setValidNumLength(true);
    }
  };

  const debouncedHandleInput = debounce<string[]>(handleInput, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedHandleInput(e.target.value);
  };

  return (
    <div className="w-full flex flex-col py-2 px-4 lg:px-6 xl:px-6 bg-white shadow-sm rounded-b-[1.2rem] rounded-t-lg">
      <div className="flex flex-col justify-between gap-1">
        <p className="text-sm pb-0.5 text-borderCharcoal">
          Update your search:
        </p>
        <div className="flex justify-evenly gap-2">
          <input
            id="balance-input"
            className={`text-xs w-1/2 bg-white rounded p-1.5 placeholder:text-placeholderText ${
              !validInput
                ? "border border-red"
                : "border border-searchBorder border-solid"
            }`}
            type="text"
            placeholder={
              isError
                ? "Miles Balance"
                : pointsBalance.toLocaleString() + " miles"
            }
            onChange={handleChange}
          />
          <Select
            id="class-select"
            className="text-xs select capitalize w-1/2 rounded"
            options={dropdownOptions}
            instanceId={"destinations"}
            placeholder={
              ["economy", "p_economy", "business"].includes(travelClass!)
                ? travelClass === "p_economy"
                  ? "Premium Economy"
                  : travelClass
                : "Class (optional)"
            }
            onChange={(e) => {
              setTravelClass(e?.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <p
          className={`text-xs w-full pt-0.5 ${
            !validInput ? "text-red" : "text-borderCharcoal"
          }`}
        >
          Please enter a whole number (no commas){" "}
          <span className={!validNumLength ? "text-red" : "hidden"}>
            - Number must be smaller than 999,999,999
          </span>
        </p>
      </div>
    </div>
  );
};

export default AmendSearchResults;
