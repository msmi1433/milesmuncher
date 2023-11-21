import SearchBar from "./components/SearchBar";
import Image from "next/image";
import placeholderImage from "../public/jk-placeholder-image.jpg";
import heroImage from "../public/vecteezy_queue-in-airport-people-waiting-registration_13086260.jpg";

export default function Home() {
  return (
    <>
      <main className="h-full flex flex-col items-center gap-5">
        <section className="flex flex-col items-center bg-white rounded-lg text-center shadow-sm">
          <Image
            src={heroImage}
            alt="cartoon of passengers waiting to board a flight"
            className="rounded-b-2xl rounded-t-lg shadow-md"
          />
          <div className="p-4 flex flex-col items-center gap-2">
            <h1 className="text-xl">
              Where can your miles take{" "}
              <span className=" text-accentBlue">you?</span>
            </h1>
            <h3>
              Unlock the potential of your air miles and points with MilesMate
            </h3>
          </div>
        </section>
        <section className="flex flex-col items-center gap-4 border-borderCharcoal bg-accentBlue rounded-lg shadow-lg">
          <SearchBar />
          <p className="text-center text-lg text-white px-4 pb-4">
            Enter your points balance in the search bar above to find out where
            you can fly to with your air miles.
          </p>
        </section>
        <section className="w-full flex flex-col bg-white rounded-lg shadow-sm text-sm gap-2 p-4">
          <h3 className="font-semibold text-lg">Tips</h3>
          <p>
            <span className="font-semibold">
              You can select a desired travel class in the search bar
            </span>{" "}
            to filter your results down to a specific class of travel.
          </p>
          <p>
            Remember to{" "}
            <span className="font-semibold">
              include your points balance from partner programmes
            </span>
            , such as American Express, if applicable. These points can often be
            transferred into your chosen airlines mileage scheme.
          </p>
          <p>
            <span className="font-semibold">
              Costs shown are for British Airways flights departing from London
              airports.{" "}
            </span>
            Support for other airlines is coming soon (see below).
          </p>
        </section>
        <section className="w-full flex flex-col bg-white rounded-lg shadow-sm text-sm gap-2 p-4">
          <h3 className="font-semibold text-lg">Coming soon</h3>
          <ul className="space-y-2">
            <li>
              Support for <span className="font-semibold">Virgin Atlantic</span>{" "}
              reward flights.
            </li>
            <li>
              <span className="font-semibold">Accounts</span> - aggregate your
              miles balance across multiple airlines using{" "}
              <span className="font-semibold">PointsPurse</span>, and track your
              progress towards your dream trips by setting{" "}
              <span className="font-semibold">reward goals</span>.
            </li>
            <li>
              <span className="font-semibold">Knowledge hub</span> - use our
              chatbot to find out the best ways to redeem your air miles.
            </li>
          </ul>
        </section>
        <p className="text-xs py-4 self-start">
          Hero image credit:{" "}
          <a href="https://www.vecteezy.com/free-vector/airport">
            Airport Vectors by Vecteezy
          </a>
        </p>
      </main>
    </>
  );
}
