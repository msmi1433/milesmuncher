import Image from "next/image";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between">
      <h1>Where can your points take you?</h1>
      <SearchBar />
    </main>
  );
}
