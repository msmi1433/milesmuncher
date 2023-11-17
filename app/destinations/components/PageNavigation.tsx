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
  ) : null;
};

export default PageNavigation;
