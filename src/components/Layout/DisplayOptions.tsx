import { useState } from 'react';

export type directionType = 'asc' | 'desc';

const DisplayOptions = ({
  onChangeSorting,
  onOpenFilter,
}: {
  onChangeSorting: (dir: directionType) => void;
  onOpenFilter: (open: boolean) => void;

}) => {
  const [direction, setDirection] = useState<directionType>('asc');

  const selectDirection = (dir: directionType) => {
    setDirection(dir);
    onChangeSorting(dir);
  };

  const toggleFilter = (open: boolean) => {
    onOpenFilter(open);
  }

  return (
    <div className="flex items-center">
      <div className="group/filter relative inline-block text-left">
        <div>
          <label
            className="group inline-flex cursor-pointer justify-center pb-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            id="menu-button"
            aria-expanded="false"
            aria-haspopup="true"
            htmlFor="sortSelector"
          >
            Sort
            <svg
              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </label>
        </div>

        <div
          className="absolute right-0 z-10 hidden w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none group-hover/filter:block"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">

            <span
              className={`block bg-gray-100 px-4 py-2 text-sm ${
                direction === 'asc' ? 'font-medium text-gray-900' : ''
              } `}
              role="button"
              id="menu-item-3"
              onClick={() => selectDirection('asc')}
            >
              Breed: Asc
            </span>
            <span
              className={`block px-4 py-2 text-sm text-gray-500 ${
                direction === 'desc' ? 'font-medium text-gray-900' : ''
              }`}
              role="button"
              id="menu-item-4"
              onClick={() => selectDirection('desc')}
            >
              Breed: Desc
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
        onClick={() => toggleFilter(true)}
      >
        <span className="sr-only">Filters</span>
        <svg
          className="h-5 w-5"
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default DisplayOptions;
