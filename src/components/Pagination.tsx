import { QueryString } from '../hooks/useDogs';

const Pagination = ({
  nextParams,
  total,
  onChangePage,
}: {
  nextParams: QueryString;
  total: number;
  onChangePage: (next: number) => void;
}) => {
  const { from = 1, size = 25 } = nextParams;
  const start = from - Number(size);
  const end = from;

  const onChange = (direction: 1 | -1) => {
    if (direction === 1) {
      onChangePage(from);
    } else {
      onChangePage(from - size * 2);
    }
  };

  return (
    <nav
      className="mt-8 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{start + 1}</span> to
          <span className="font-medium"> {end}</span> of
          <span className="font-medium"> {total}</span> results
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        {from - size !== 0 ? (
          <button
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-300"
            onClick={() => onChange(-1)}
          >
            Previous
          </button>
        ) : null}
        <button
          className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-300"
          onClick={() => onChange(1)}
        >
          Next
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
