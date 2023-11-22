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
}

const AmendSearchResults = ({
  setPointsBalance,
  setCurrentPage,
  setTravelClass,
  travelClass,
  pointsBalance,
}: Props) => {
  const [validInput, setValidInput] = useState<boolean>(true);

  const dropdownOptions: DropdownOption[] = [
    { value: "", label: "Any Class" },
    { value: "economy", label: "Economy" },
    { value: "p_economy", label: "Premium Economy" },
    { value: "business", label: "Business" },
  ];

  const handleInput = (value: string) => {
    if (/^[0-9]*$/.test(value) && value !== "") {
      setValidInput(true);
      setPointsBalance(Number(value));
      setCurrentPage(1);
    } else {
      setValidInput(false);
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
            className={`w-1/2 bg-white rounded p-1.5 placeholder:text-placeholderText ${
              !validInput
                ? "border border-red"
                : "border border-searchBorder border-solid"
            }`}
            type="text"
            placeholder={`${pointsBalance.toLocaleString()} miles`}
            onChange={handleChange}
          />
          <Select
            className="select capitalize w-1/2 rounded"
            options={dropdownOptions}
            instanceId={"destinations"}
            placeholder={
              travelClass
                ? travelClass === "p_economy"
                  ? "Premium Economy"
                  : travelClass
                : "Class"
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
          Please enter a whole number (no commas)
        </p>
      </div>
    </div>
  );
};

export default AmendSearchResults;
