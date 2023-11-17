import Dropdown from "react-dropdown";

interface Props {
  setPointsBalance: Function;
  setCurrentPage: Function;
  setSearchInput: Function;
  setTravelClass: Function;
  searchInput: string;
  travelClass: string | null;
  destinationLength: number;
  currentPage: number;
  maxPages: number;
}

const AmendSearchResults = ({
  setPointsBalance,
  setCurrentPage,
  setSearchInput,
  setTravelClass,
  searchInput,
  travelClass,
  destinationLength,
  currentPage,
  maxPages,
}: Props) => {
  const dropdownOptions = [
    "Any Class",
    "Economy",
    "Premium Economy",
    "Business",
  ];

  const handleSearch = (e: { preventDefault: Function }) => {
    e.preventDefault();
    if (searchInput) {
      setPointsBalance(Number(searchInput));
      setCurrentPage(1);
    }
  };

  return (
    <div className="flex flex-col">
      <p>Update your search:</p>
      <div className="flex flex-col justify-between">
        <div className="flex justify-evenly gap-4">
          <form onSubmit={handleSearch}>
            <input
              className="w-2/3"
              type="text"
              placeholder="Points"
              onChange={(e) => {
                if (/^[0-9]*$/.test(e.target.value)) {
                  setSearchInput(e.target.value);
                } else {
                  setSearchInput("");
                }
              }}
            />
            <button>Submit</button>
          </form>
          <Dropdown
            className="select capitalize"
            options={dropdownOptions}
            placeholder={travelClass ? travelClass : "Travel class..."}
            onChange={(e) => {
              setTravelClass(
                e.value === "Premium Economy"
                  ? "p_economy"
                  : e.value === "Any Class"
                  ? ""
                  : e.value.toLowerCase()
              );
              setCurrentPage(1);
            }}
          />
        </div>
        {destinationLength ? (
          <div className="flex justify-center gap-2">
            <button
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage((currentPage: number) => currentPage - 1);
                }
              }}
            >
              Previous
            </button>
            <p>
              Page {currentPage} of {maxPages}
            </p>
            <button
              onClick={() => {
                if (currentPage < maxPages) {
                  setCurrentPage((currentPage: number) => currentPage + 1);
                }
              }}
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AmendSearchResults;
