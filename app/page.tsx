import SearchBar from "./components/SearchBar";
import Image from "next/image";
import placeholderImage from "../public/jk-placeholder-image.jpg";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center gap-5">
      <Image src={placeholderImage} alt="hero image" />
      <h1 className="text-xl">Where can your miles take you?</h1>
      <SearchBar />
      <div>
        <p>
          Enter your points balance in the search bar above to find out where
          you can fly to with your air miles.
        </p>
        <div className="text-sm">
          <h3>Tips</h3>
          <p>
            You can select a desired travel class in the search bar to filter
            your results down to a specific class of travel.
          </p>
          <p>
            Remember to include your points balance from partner reward
            programmes such as American Express if applicable, as these points
            can be transferred into your chosen airlines loyalty programme.
          </p>
        </div>
        <p></p>
      </div>
    </main>
  );
}
