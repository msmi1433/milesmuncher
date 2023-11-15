import SearchResults from "./components/SearchResults";

export default function DestinationsPage() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h1>Destinations</h1>
      <SearchResults />
    </div>
  );
}
