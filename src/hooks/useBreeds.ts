import useSWR, { Fetcher } from 'swr';
import API from '../utils/API';

interface User {
  id: string;
}

const fetcher: Fetcher<User, string> = url => API(url);

function useBreeds() {
  const { data, error, isLoading } = useSWR(`/dogs/breeds`, fetcher);

  if (error) {
    if (error.status === 401) {
      location.replace('/login');
    }
  }

  return {
    breeds: data,
    isLoading,
    isError: error,
  };
}

export default useBreeds;
