import DogsList from '../components/DogsList';
import DisplayOptions from '../components/Layout/DisplayOptions';
import MobileMenu from '../components/Layout/MobileMenu';
import Loader from '../components/Loader';
import useBreeds from '../hooks/useBreeds';
import useDogs from '../hooks/useDogs';

const Home = () => {
  const { breeds, isLoading } = useBreeds();
  //const { dogs, isLoading } = useDogs();

  if (isLoading) {
    return (
      <div className="flex min-h-full min-w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div>
        {/* <MobileMenu /> */}

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Dogs List
            </h1>
            <DisplayOptions />
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <span className="py-3 text-sm font-medium text-gray-900">
                      Breeds
                    </span>
                  </h3>
                  {/* Filter section, show/hide based on section state. */}
                  <div className="pt-6" id="filter-section-0">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          id="filter-color-0"
                          name="color[]"
                          value="white"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-color-0"
                          className="ml-3 text-sm text-gray-600"
                        >
                          White
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-color-1"
                          name="color[]"
                          value="beige"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-color-1"
                          className="ml-3 text-sm text-gray-600"
                        >
                          Beige
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-color-2"
                          name="color[]"
                          value="blue"
                          type="checkbox"
                          checked
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-color-2"
                          className="ml-3 text-sm text-gray-600"
                        >
                          Blue
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-color-3"
                          name="color[]"
                          value="brown"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-color-3"
                          className="ml-3 text-sm text-gray-600"
                        >
                          Brown
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-color-4"
                          name="color[]"
                          value="green"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-color-4"
                          className="ml-3 text-sm text-gray-600"
                        >
                          Green
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-color-5"
                          name="color[]"
                          value="purple"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-color-5"
                          className="ml-3 text-sm text-gray-600"
                        >
                          Purple
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <DogsList />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default Home;
