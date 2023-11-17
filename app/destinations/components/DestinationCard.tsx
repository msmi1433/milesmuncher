import { Destination } from "@/types/global";

interface Props {
  destinations: Destination[];
  travelClass: string | null;
}

const DestinationCard = ({ destinations, travelClass }: Props) => {
  return destinations.length ? (
    <ul className="w-full flex flex-wrap justify-center gap-6">
      {destinations.map((destination) => {
        return (
          <li
            key={destination.id}
            className="w-full flex flex-col gap-1 items-center border-2 border-solid rounded p-2 "
          >
            {travelClass ? (
              destination[travelClass + "_op"] ? (
                <div className="flex flex-col items-center">
                  <p>{destination.city}</p>
                  <p>{destination.country}</p>
                  <p>
                    {destination[travelClass + "_op"].toLocaleString()} miles
                  </p>
                  {destination[travelClass + "_p"] ? (
                    <p>
                      (Peak: {destination[travelClass + "_p"].toLocaleString()})
                    </p>
                  ) : null}
                </div>
              ) : null
            ) : (
              <div className="flex flex-col items-center gap-1">
                <p>{destination.city}</p>
                <p>{destination.country}</p>
                <div className="flex justify-evenly gap-3 text-sm">
                  {destination.economy_op ? (
                    <div className="flex flex-col items-center text-center">
                      <p>Economy</p>
                      <p>{destination.economy_op.toLocaleString()} miles</p>
                      {destination.economy_p ? (
                        <p>(Peak: {destination.economy_p.toLocaleString()})</p>
                      ) : null}
                    </div>
                  ) : null}
                  {destination.p_economy_op ? (
                    <div className="flex flex-col items-center text-center">
                      <p>Premium</p>
                      <p>{destination.p_economy_op.toLocaleString()} miles</p>
                      {destination.p_economy_p ? (
                        <p>(Peak: {destination.economy_p.toLocaleString()})</p>
                      ) : null}
                    </div>
                  ) : null}
                  {destination.business_op ? (
                    <div className="flex flex-col items-center text-center">
                      <p>Business</p>
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
    <p>Sorry, no destinations found!</p>
  );
};

export default DestinationCard;
