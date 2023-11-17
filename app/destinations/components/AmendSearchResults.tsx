import Dropdown from "react-dropdown";
import { debounce } from "@/utils/utilityFunctions";
import { useState } from "react";

interface Props {
  setPointsBalance: Function;
  setCurrentPage: Function;
  setTravelClass: Function;
  travelClass: string | null;
  destinationLength: number;
  currentPage: number;
  maxPages: number;
  pointsBalance: number;
}

const AmendSearchResults = ({
  setPointsBalance,
  setCurrentPage,
  setTravelClass,
  travelClass,
  destinationLength,
  currentPage,
  maxPages,
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
      setPointsBalance(Number(value));
      setValidInput(true);
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
        {destinationLength ? (
          <div className="flex justify-center gap-2">
            <button
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage((currentPage: number) => currentPage - 1);
                }
              }}
            >
              Previous
            </button>
            <p>
              Page {currentPage} of {maxPages}
            </p>
            <button
              onClick={() => {
                if (currentPage < maxPages) {
                  setCurrentPage((currentPage: number) => currentPage + 1);
                }
              }}
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AmendSearchResults;
