import useSWR from 'swr';
import API from '../utils/API';

function useDogs() {
  const { data, error, isLoading } = useSWR(`/dogs/search`, url => API(url));

  if (error) {
    if (error.status === 401) {
      location.replace('/login');
    }
  }

  return {
    dogs: data,
    isLoading,
    isError: error,
  };
}

export default useDogs;
