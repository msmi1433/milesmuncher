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
    <div className="min-w-full p-2 border border-borderCharcoal rounded text-sm">
      <form
        className="flex flex-col xl:flex-row justify-between xl:justify-evenly items-center xl:items-start gap-4"
        onSubmit={handleSearch}
      >
        <div className="w-full flex justify-between items-center gap-2">
          <input
            type="text"
            className="rounded p-2 w-1/2 text-xs"
            onChange={(e) => {
              if (/^[0-9]*$/.test(e.target.value)) {
                setPointsBalance(e.target.value);
              } else {
                setPointsBalance("");
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
        <button>Search</button>
      </form>
    </div>
  );
}
