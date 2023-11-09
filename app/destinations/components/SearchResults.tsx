"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchResults() {
  const searchResults = useSearchParams();
  const [pointsBalance, setPointsBalance] = useState(
    searchResults.get("points_balance")
  );
  const [travelClass, setTravelClass] = useState(
    searchResults.get("travel_class")
  );

  return <div>SearchResults</div>;
}
