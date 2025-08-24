
import pkg from 'contentful';
const { createClient } = pkg;

const client = createClient({
  space: 'fdsqqm6aqiuk',
  environment: 'master',
  accessToken: 'KGtlMhRxFPVKDy__NijM4zp28NNuMlbxOyEMjwcLClo'
});


export async function getBlogPosts() {
  const response = await client.getEntries({
    content_type: 'blogPost',
    include: 2
  });
  return response.items;
}
