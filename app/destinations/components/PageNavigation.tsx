interface Props {
  setCurrentPage: Function;
  destinationLength: number;
  currentPage: number;
  maxPages: number;
}

const PageNavigation = ({
  destinationLength,
  currentPage,
  maxPages,
  setCurrentPage,
}: Props) => {
  return destinationLength ? (
    <div className="flex justify-center items-center gap-2 text-sm">
      <button
        className={`bg-accentBlue hover:bg-buttonHover text-white py-0.5 px-2 rounded-full ${
          currentPage === 1 ? "invisible" : null
        }`}
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage((currentPage: number) => currentPage - 1);
          }
        }}
      >
        Prev
      </button>
      <p className="w-24 text-center">
        Page {currentPage} of {maxPages}
      </p>
      <button
        className={`bg-accentBlue hover:bg-buttonHover text-white py-0.5 px-2 rounded-full ${
          currentPage === maxPages ? "invisible" : null
        }`}
        onClick={() => {
          if (currentPage < maxPages) {
            setCurrentPage((currentPage: number) => currentPage + 1);
          }
        }}
      >
        Next
      </button>
    </div>
  ) : null;
};

export default PageNavigation;
