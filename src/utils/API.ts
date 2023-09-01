import { API_URL } from '../const';

export interface Location {
  zip_code: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  county: string;
}

export interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

export class RequestError extends Error {
  status: number;

  constructor(message: string, errors: number) {
    super(message);
    this.message = message;
    this.status = errors;
  }
}

const API = async (
  url: string,
  method = 'GET',
  params: Record<string, unknown> = {},
  headers: Record<string, string> = {},
) => {
  console.log(`${API_URL}${url}`);

  const res = await fetch(`${API_URL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    credentials: 'include',
    ...(method === 'GET' ? {} : { body: JSON.stringify(params) }),
  });
  if (!res.ok) {
    const error = new RequestError(
      'An error occurred while fetching the data.',
      res.status,
    );
    throw error;
  }

  const contentType = res.headers.get('Content-Type');

  if (contentType?.includes('text/plain')) {
    const text = await res.text();
    return new Promise(resolve => {
      resolve({ response: text });
    });
  }

  return res.json();
};

export default API;
