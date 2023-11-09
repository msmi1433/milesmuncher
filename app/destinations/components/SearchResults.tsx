"use client";

import { getDestinations } from "@/utils/apicalls";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchResults() {
  const queries = useSearchParams();
  const [pointsBalance, setPointsBalance] = useState(
    queries.get("points_balance")
  );
  const [travelClass, setTravelClass] = useState(queries.get("travel_class"));
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getDestinations(pointsBalance, travelClass, setDestinations);
  }, []);

  return <div>SearchResults</div>;
}
