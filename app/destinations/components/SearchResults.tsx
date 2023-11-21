"use client";

import { Destination } from "@/types/global";
import { getDestinations } from "@/utils/apicalls";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import AmendSearchResults from "./AmendSearchResults";
import DestinationCard from "./DestinationCard";
import PageNavigation from "./PageNavigation";
import Link from "next/link";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getDestinations(
      pointsBalance,
      travelClass,
      currentPage,
      setDestinations,
      setMaxPages
    ).then(() => {
      setIsLoading(false);
    });
  }, [travelClass, pointsBalance, currentPage]);

  return (
    <section className="flex flex-col max-w-full gap-2 items-center">
      <AmendSearchResults
        setPointsBalance={setPointsBalance}
        setCurrentPage={setCurrentPage}
        setTravelClass={setTravelClass}
        travelClass={travelClass}
        pointsBalance={pointsBalance}
      />
      {travelClass ? (
        <h2 className="text-center text-xl pb-2">
          <span className="font-semibold underline decoration-accentBlue">
            {pointsBalance.toLocaleString()}
          </span>{" "}
          air miles can take you to all of these destinations in{" "}
          <span className="font-semibold underline decoration-accentBlue">
            {travelClass === "p_economy" ? "premium economy" : travelClass}...
          </span>
        </h2>
      ) : (
        <h2 className="text-center text-xl pb-2">
          <span className="font-semibold underline decoration-accentBlue">
            {pointsBalance.toLocaleString()}
          </span>{" "}
          air miles can take you to...
        </h2>
      )}

      <PageNavigation
        destinationLength={destinations.length}
        currentPage={currentPage}
        maxPages={maxPages}
        setCurrentPage={setCurrentPage}
      />
      <DestinationCard
        destinations={destinations}
        travelClass={travelClass}
        isLoading={isLoading}
      />
      <Link href={"#top"}>
        <button>Back to top</button>
      </Link>
    </section>
  );
}
