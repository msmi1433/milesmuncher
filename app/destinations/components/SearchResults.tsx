"use client";

import { Destination } from "@/types/global";
import { getDestinations } from "@/utils/apicalls";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchResults() {
  const queries: { get: Function } = useSearchParams();
  const [pointsBalance, setPointsBalance] = useState<string>(
    queries.get("points_balance")
  );
  const [travelClass, setTravelClass] = useState<string | null>(
    queries.get("travel_class")
  );
  const [destinations, setDestinations] = useState<Destination[]>([]);

  useEffect(() => {
    getDestinations(pointsBalance, travelClass, setDestinations);
  }, []);

  console.log(destinations);

  return (
    <ul className="w-full flex flex-wrap justify-center gap-6">
      {destinations.map((destination) => {
        return (
          <li key={destination.id} className="flex flex-col gap-1 items-center">
            <p>{destination.city}</p>
            <p>{destination.country}</p>
            {travelClass ? (
              <div>
                <p>Off-peak: {destination[travelClass + "_op"]}</p>
                {destination[travelClass + "_p"] ? (
                  <p>Peak: {destination[travelClass + "_p"]}</p>
                ) : null}
              </div>
            ) : (
              <div className="flex justify-evenly gap-2">
                {destination.economy_op ? (
                  <div className="flex flex-col items-center">
                    <p>Economy </p>
                    <p>Off-peak: {destination.economy_op}</p>
                    {destination.economy_p ? (
                      <p>Peak: {destination.economy_p}</p>
                    ) : null}
                  </div>
                ) : null}
                {destination.p_economy_op ? (
                  <div className="flex flex-col items-center">
                    <p>Premium Economy</p>
                    <p>Off-peak: {destination.p_economy_op}</p>
                    {destination.p_economy_p ? (
                      <p>Peak: {destination.economy_p}</p>
                    ) : null}
                  </div>
                ) : null}
                {destination.business_op ? (
                  <div className="flex flex-col items-center">
                    <p>Business</p>
                    <p>Off-peak: {destination.business_op}</p>
                    {destination.business_p ? (
                      <p>Peak: {destination.business_p}</p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
