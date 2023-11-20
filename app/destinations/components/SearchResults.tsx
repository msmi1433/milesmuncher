"use client";

import { Destination } from "@/types/global";
import { getDestinations } from "@/utils/apicalls";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import AmendSearchResults from "./AmendSearchResults";
import DestinationCard from "./DestinationCard";
import PageNavigation from "./PageNavigation";

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
      <AmendSearchResults
        setPointsBalance={setPointsBalance}
        setCurrentPage={setCurrentPage}
        setTravelClass={setTravelClass}
        travelClass={travelClass}
        pointsBalance={pointsBalance}
      />
      {travelClass ? (
        <h2 className="text-center pb-6">
          {pointsBalance.toLocaleString()} air miles will take you to all of
          these destinations in{" "}
          {travelClass === "p_economy" ? "premium economy" : travelClass} ...
        </h2>
      ) : (
        <h2 className="text-center pb-6">
          {pointsBalance.toLocaleString()} air miles will take you to all of
          these destinations...
        </h2>
      )}
      <PageNavigation
        destinationLength={destinations.length}
        currentPage={currentPage}
        maxPages={maxPages}
        setCurrentPage={setCurrentPage}
      />
      <DestinationCard destinations={destinations} travelClass={travelClass} />
    </section>
  );
}
