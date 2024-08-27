// src/lib/contentfulClient.ts
import pkg from 'contentful';
const { createClient } = pkg;

const client = createClient({
  space: 'fdsqqm6aqiuk',
  environment: 'master',
  accessToken: 'KGtlMhRxFPVKDy__NijM4zp28NNuMlbxOyEMjwcLClo'
});

export default client;
