import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig()

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = publicRuntimeConfig;

const client = async (query: any) => {

  const url = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`;

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      'Content-Type': `application/json`
    },
    body: JSON.stringify({query})
  }

  const result = await fetch(url, options)
    .then((response) => response.json())

  const { data } = result;

  return data;

}

export default client;


