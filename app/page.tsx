import Image from "next/image";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between p-24">
      <h1>Where can your points take you?</h1>
      <SearchBar />
    </main>
  );
}
