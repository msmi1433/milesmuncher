import { Destination } from "@/types/global";

interface Props {
  destinations: Destination[];
  travelClass: string | null;
  isLoading: boolean;
}

const DestinationCard = ({ destinations, travelClass, isLoading }: Props) => {
  if (isLoading)
    return (
      <section className="h-screen p-6">
        <p>Destinations loading...</p>
      </section>
    );

  return destinations.length ? (
    <ul className="flex flex-wrap justify-center xl:justify-between gap-6 ">
      {destinations.map((destination) => {
        return (
          <li
            key={destination.id}
            className="w-full xl:w-32% flex flex-col gap-1 items-center border bg-white border-accentBlue/50 rounded p-2 shadow-md"
          >
            {travelClass ? (
              destination[travelClass + "_op"] ? (
                <div className="flex flex-col items-center w-5/6 text-center">
                  <div className="p-2">
                    <p>
                      <span className="font-semibold">{destination.city}</span>,{" "}
                      {destination.country}
                    </p>
                    <p>British Airways</p>
                  </div>
                  <div className="text-center p-2 border-t border-borderCharcoal/50 w-full">
                    <p>
                      {destination[travelClass + "_op"].toLocaleString()} miles
                    </p>
                    {destination[travelClass + "_p"] ? (
                      <p>
                        (Peak:{" "}
                        {destination[travelClass + "_p"].toLocaleString()})
                      </p>
                    ) : null}
                  </div>
                </div>
              ) : null
            ) : (
              <div className="flex flex-col items-center gap-1 text-center w-full">
                <div className="p-2">
                  <p>
                    <span className="font-semibold">{destination.city}</span>,{" "}
                    {destination.country}
                  </p>
                  <p>British Airways</p>
                </div>
                <div className="flex justify-evenly text-xs border-t w-full border-t-borderCharcoal/50">
                  {destination.economy_op ? (
                    <div
                      className={`flex flex-col items-center py-4 px-2 w-full ${
                        destination.p_economy_op || destination.business_op
                          ? "border-r border-r-borderCharcoal/50"
                          : null
                      } h-full`}
                    >
                      <p className="font-semibold">Economy</p>
                      <p>{destination.economy_op.toLocaleString()} miles</p>
                      {destination.economy_p ? (
                        <p>(Peak: {destination.economy_p.toLocaleString()})</p>
                      ) : null}
                    </div>
                  ) : null}
                  {destination.p_economy_op ? (
                    <div
                      className={`flex flex-col items-center py-4 px-2 w-full ${
                        destination.business_op
                          ? "border-r border-r-borderCharcoal/50"
                          : null
                      } h-full`}
                    >
                      <p className="font-semibold">Premium</p>
                      <p>{destination.p_economy_op.toLocaleString()} miles</p>
                      {destination.p_economy_p ? (
                        <p>(Peak: {destination.economy_p.toLocaleString()})</p>
                      ) : null}
                    </div>
                  ) : null}
                  {destination.business_op ? (
                    <div className="flex flex-col items-center py-4 px-2 w-full h-full">
                      <p className="font-semibold">Business</p>
                      <p>{destination.business_op.toLocaleString()} miles</p>
                      {destination.business_p ? (
                        <p>(Peak: {destination.business_p.toLocaleString()})</p>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  ) : (
    <p className="h-screen">Sorry, no destinations found!</p>
  );
};

export default DestinationCard;
