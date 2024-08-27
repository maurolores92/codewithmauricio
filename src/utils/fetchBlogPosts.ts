import contentful from 'contentful';


const client = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getBlogPosts() {
  const response = await client.getEntries({
    content_type: 'blogPost',
    include: 2 
  });
  return response.items;
}
