import  { Variables} from 'react-relay';
import  { RequestNode } from 'relay-runtime';

export const GRAPHQL_URL = 'http://localhost:4000/graphql';

const fetchQuery = async (request, variables) => {
  const body = JSON.stringify({
    name: request.name, 
    query: request.text, 
    variables,
  });
  const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
  };

  const response = await fetch(GRAPHQL_URL, {
    mode: 'no-cors',
    method: 'POST',
    headers,
    body,
  });

  return await response.json();
};

export default fetchQuery;