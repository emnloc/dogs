import useSWR from 'swr';
import qs from 'qs';

import API from '../utils/API';

export interface QueryString {
  sort: string;
  size: number;
  from: number;
}

export interface DogsResponse {
  resultIds: string[];
  next: string;
  total: number;
}

export interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

function useDogs(
  options: {
    breeds?: string[];
    sort?: string;
    size?: number;
    from?: number;
  } = {},
) {
  const query = qs.stringify(options);

  const { data, error, isLoading } = useSWR<{
    next: unknown;
    data: Dog[];
    total: number;
  }>([`/dogs/search?${query}`, options], async ([url, options]) => {
    const dogsData = (await API(url, 'GET', options)) as DogsResponse;

    const [, search] = dogsData.next.split('?');
    const next = qs.parse(search);

    return Promise.resolve({
      total: dogsData.total,
      next,
      data: await API(`/dogs`, 'POST', [...(dogsData?.resultIds || [])]),
    });
  });

  if (error) {
    if (error.status === 401) {
      location.replace('/login');
    }
  }

  return {
    total: data?.total,
    dogs: data?.data,
    next: data?.next,
    isLoading,
    isError: error,
  };
}

export default useDogs;
