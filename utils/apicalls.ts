export const getDestinations = async (
  points_balance: number | null,
  travel_class: string | null,
  currentPage: number,
  destinationsSetter: Function,
  maxPageSetter: Function
) => {
  let connectionStringDestinations = `https://airmiles-api.onrender.com/api/destinations?points_balance=${points_balance}&page=${currentPage}&limit=21`;
  let connectionStringMaxPages = `https://airmiles-api.onrender.com/api/destinations?points_balance=${points_balance}&limit=1000`;
  if (travel_class) {
    connectionStringDestinations += `&travel_class=${travel_class}`;
    connectionStringMaxPages += `&travel_class=${travel_class}`;
  }

  const resDestinations = await fetch(connectionStringDestinations);
  const resMaxPages = await fetch(connectionStringMaxPages);

  const { destinations } = await resDestinations.json();
  const maxPages = await resMaxPages.json();

  destinationsSetter(destinations);
  maxPageSetter(Math.ceil(maxPages.destinations.length / 21));
};
