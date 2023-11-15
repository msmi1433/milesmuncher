"use client";

import { Destination } from "@/types/global";
import { getDestinations } from "@/utils/apicalls";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Dropdown from "react-dropdown";

export default function SearchResults() {
  const queries: { get: Function } = useSearchParams();
  const [pointsBalance, setPointsBalance] = useState<number>(
    Number(queries.get("points_balance"))
  );
  const [travelClass, setTravelClass] = useState<string | null>(
    queries.get("travel_class")
  );
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPages, setMaxPages] = useState<number>(0);
  const [searchInput, setSearchInput] = useState<string>("");

  const dropdownOptions = [
    "Any Class",
    "Economy",
    "Premium Economy",
    "Business",
  ];

  const handleSearch = (e: { preventDefault: Function }) => {
    e.preventDefault();
    if (searchInput) {
      setPointsBalance(Number(searchInput));
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    getDestinations(
      pointsBalance,
      travelClass,
      currentPage,
      setDestinations,
      setMaxPages
    );
  }, [travelClass, pointsBalance, currentPage]);

  return (
    <section className="flex flex-col max-w-full pt-6 gap-2 items-center">
      {travelClass ? (
        <h2 className="text-center pb-6">
          {pointsBalance.toLocaleString()} air miles will take you to all of
          these destinations in{" "}
          {travelClass === "p_economy" ? "Premium Economy" : travelClass} ...
        </h2>
      ) : (
        <h2 className="text-center pb-6">
          {pointsBalance.toLocaleString()} air miles will take you to all of
          these destinations...
        </h2>
      )}
      <div className="flex flex-col">
        <p>Update your search:</p>
        <div className="flex flex-col justify-between">
          <div className="flex justify-evenly gap-4">
            <form onSubmit={handleSearch}>
              <input
                className="w-2/3"
                type="text"
                placeholder="Points"
                onChange={(e) => {
                  if (/^[0-9]*$/.test(e.target.value)) {
                    setSearchInput(e.target.value);
                  } else {
                    setSearchInput("");
                  }
                }}
              />
              <button>Submit</button>
            </form>
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
          {destinations.length ? (
            <div className="flex justify-center gap-2">
              <button
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage((currentPage) => currentPage - 1);
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
                    setCurrentPage((currentPage) => currentPage + 1);
                  }
                }}
              >
                Next
              </button>
            </div>
          ) : null}
        </div>
      </div>
      {destinations.length ? (
        <ul className="w-full flex flex-wrap justify-center gap-6">
          {destinations.map((destination) => {
            return (
              <li
                key={destination.id}
                className="w-full flex flex-col gap-1 items-center border-2 border-solid rounded p-2 "
              >
                {travelClass ? (
                  destination[travelClass + "_op"] ? (
                    <div className="flex flex-col items-center">
                      <p>{destination.city}</p>
                      <p>{destination.country}</p>
                      <p>
                        {destination[travelClass + "_op"].toLocaleString()}{" "}
                        miles
                      </p>
                      {destination[travelClass + "_p"] ? (
                        <p>
                          (Peak:{" "}
                          {destination[travelClass + "_p"].toLocaleString()})
                        </p>
                      ) : null}
                    </div>
                  ) : null
                ) : (
                  <div className="flex flex-col items-center gap-1">
                    <p>{destination.city}</p>
                    <p>{destination.country}</p>
                    <div className="flex justify-evenly gap-3 text-sm">
                      {destination.economy_op ? (
                        <div className="flex flex-col items-center text-center">
                          <p>Economy</p>
                          <p>{destination.economy_op.toLocaleString()} miles</p>
                          {destination.economy_p ? (
                            <p>
                              (Peak: {destination.economy_p.toLocaleString()})
                            </p>
                          ) : null}
                        </div>
                      ) : null}
                      {destination.p_economy_op ? (
                        <div className="flex flex-col items-center text-center">
                          <p>Premium</p>
                          <p>
                            {destination.p_economy_op.toLocaleString()} miles
                          </p>
                          {destination.p_economy_p ? (
                            <p>
                              (Peak: {destination.economy_p.toLocaleString()})
                            </p>
                          ) : null}
                        </div>
                      ) : null}
                      {destination.business_op ? (
                        <div className="flex flex-col items-center text-center">
                          <p>Business</p>
                          <p>
                            {destination.business_op.toLocaleString()} miles
                          </p>
                          {destination.business_p ? (
                            <p>
                              (Peak: {destination.business_p.toLocaleString()})
                            </p>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry, no destinations found!</p>
      )}
    </section>
  );
}
