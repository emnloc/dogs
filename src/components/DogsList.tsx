import { useEffect, useState } from 'react';
import useDogs, { QueryString } from '../hooks/useDogs';
import { directionType } from './Layout/DisplayOptions';
import Loader from './Loader';
import Pagination from './Pagination';

const DogsList = ({
  breeds,
  sortDirection,
}: {
  breeds: string[];
  sortDirection: directionType;
}) => {

  const [from, setFrom] = useState<number>(0);

  useEffect(() => setFrom(0), [breeds])

  const {
    dogs = [],
    next,
    total,
    isLoading,
  } = useDogs({
    breeds: breeds || [],
    sort: `breed:${sortDirection}`,
    from
  });

  console.log(next, total);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto max-w-7xl">
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-6 gap-y-8  sm:grid-cols-2 lg:grid-cols-3"
      >
        {dogs.map(dog => {
          return (
            <li key={dog.id}>
              <input
                type="checkbox"
                value={dog.id}
                className="peer hidden"
                id={`dog-cb-${dog.id}`}
              />
              <label
                htmlFor={`dog-cb-${dog.id}`}
                className="shadow block cursor-pointer overflow-hidden rounded-lg ring-gray-200 ring-1 bg-white peer-checked:ring-blue-600 peer-checked:shadow-lg"
              >
                <div className="flex items-center gap-4 border-b border-gray-900/5 bg-gray-50">
                  <img
                    src={dog.img}
                    alt="Tuple"
                    className="h-[96px] w-[96px] flex-none rounded-tl-lg bg-white object-cover ring-1 ring-gray-900/10"
                  />
                  <div className="text-sm font-medium leading-6 text-gray-900">
                    {dog.name}
                  </div>
                </div>
                <dl className="-my-3 divide-y divide-solid divide-gray-100 px-6 py-4 text-sm leading-6">
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-gray-500">Age</dt>
                    <dd className="text-gray-700">
                      <time dateTime="2022-12-13">{dog.age}</time>
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-gray-500">Zip Code</dt>
                    <dd className="text-gray-700">
                      <div className="font-medium text-gray-900">
                        {dog.zip_code}
                      </div>
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-gray-500"></dt>
                    <dd className="flex items-start gap-x-2">
                      <div className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {dog.breed}
                      </div>
                    </dd>
                  </div>
                </dl>
              </label>
            </li>
          );
        })}
      </ul>

      <Pagination nextParams={next as QueryString} total={total || 0} onChangePage={setFrom} />
    </div>
  );
};

export default DogsList;
