import { useFormContext } from 'react-hook-form';
import useBreeds from '../hooks/useBreeds';
import Loader from './Loader';


export interface BreedsCheckboxes {
    breeds: string[];
  }

const Filters = () => {
  const { breeds, isLoading } = useBreeds();
  const { register } = useFormContext<BreedsCheckboxes>();

  if (isLoading) {
    return <Loader />;
  }

  return (
      <form className="sticky top-1 h-[calc(100vh-6rem)] overflow-auto px-2">
        <div className="pt-6" id="filter-section-0">
          <div className="space-y-4">
            {breeds?.map(breed => (
              <div className="flex items-center" key={breed}>
                <label className="text-sm text-gray-600">
                  <input
                    id="filter-color-0"
                    {...register('breeds')}
                    value={breed}
                    type="checkbox"
                    className="mr-3 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 "
                  />
                  {breed}
                </label>
              </div>
            ))}
          </div>
        </div>
      </form>
  );
};

export default Filters;
