import Dropdown from "react-dropdown";
import { debounce } from "@/utils/utilityFunctions";
import { useState } from "react";

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

  const dropdownOptions = [
    "Any Class",
    "Economy",
    "Premium Economy",
    "Business",
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
    <div className="flex flex-col">
      <p>Update your search:</p>
      <div className="flex flex-col justify-between">
        <div className="flex justify-evenly gap-4">
          <input
            className={`w-2/3 ${!validInput ? "border border-red-600" : null}`}
            type="text"
            placeholder={`${pointsBalance.toLocaleString()} miles`}
            onChange={handleChange}
          />
          <Dropdown
            className="select capitalize"
            options={dropdownOptions}
            placeholder={travelClass ? travelClass : "Travel class..."}
            onChange={(e) => {
              setTravelClass(
                e.value === "Premium Economy"
                  ? "p_economy"
                  : e.value === "Any Class"
                  ? ""
                  : e.value.toLowerCase()
              );
              setCurrentPage(1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AmendSearchResults;
