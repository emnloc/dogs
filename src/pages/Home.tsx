import { useForm, FormProvider } from 'react-hook-form';
import DogsList from '../components/DogsList';
import DisplayOptions, {
  type directionType,
} from '../components/Layout/DisplayOptions';
import MobileMenu from '../components/Layout/MobileMenu';
import Loader from '../components/Loader';
import useBreeds from '../hooks/useBreeds';
import { useState } from 'react';
import Filters, { type BreedsCheckboxes } from '../components/Filters';

const Home = () => {
  const { isLoading } = useBreeds();
  const methods = useForm<BreedsCheckboxes>();
  const { watch } = methods;
  const [sortDirection, setSortDirection] = useState<directionType>('asc');
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <FormProvider {...methods}>
      <MobileMenu
        open={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
      />

      <div className="mx-auto flex max-w-7xl grow flex-col items-stretch bg-white px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Dogs List
          </h1>
          <DisplayOptions
            onChangeSorting={setSortDirection}
            onOpenFilter={setOpenMobileMenu}
          />
        </div>

        <section className="grow pb-24 pt-6 lg:flex">
          <h2 className="sr-only">Dogs</h2>

          <div className="relative grid grow grid-cols-1 items-stretch justify-stretch gap-x-8 gap-y-10 lg:grid-cols-4">
            <div className="hidden lg:block">
              <Filters />
            </div>

            {/* Dogs grid */}
            <div className="lg:col-span-3">
              <DogsList
                breeds={watch('breeds')}
                sortDirection={sortDirection}
              />
            </div>
          </div>
        </section>
      </div>
    </FormProvider>
  );
};
export default Home;
