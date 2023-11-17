import SearchResults from "./components/SearchResults";
import Link from "next/link";

export default function DestinationsPage() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h1>Destinations</h1>
      <SearchResults />
      <Link href={"#top"}>
        <button>Back to top</button>
      </Link>
    </div>
  );
}
