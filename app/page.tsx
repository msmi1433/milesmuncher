import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1>Where can your points take you?</h1>
      <SearchBar />
    </main>
  );
}
