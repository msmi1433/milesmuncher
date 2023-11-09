export const getDestinations = async (
  points_balance: string | null,
  travel_class: string | null,
  stateSetter: Function
) => {
  let connectionString = `https://airmiles-api.onrender.com/api/destinations?points_balance=${points_balance}`;
  if (travel_class) connectionString += `&travel_class=${travel_class}`;

  const res = await fetch(connectionString);
  const { destinations } = await res.json();

  stateSetter(destinations);
};
