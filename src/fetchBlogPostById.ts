import pkg, { type Entry } from 'contentful';
const { createClient } = pkg;

// Configurar el cliente de Contentful
const client = createClient({
  space: 'fdsqqm6aqiuk',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'KGtlMhRxFPVKDy__NijM4zp28NNuMlbxOyEMjwcLClo'
});

// Exportar el cliente para usarlo en otros archivos
export { client };

// Definir la función para obtener una entrada específica por su entry_id
export async function getBlogPostById(entryId: string): Promise<Entry<any> | undefined> {
  try {
    const entry = await client.getEntry(entryId);
    console.log(entry); // Mostrar el post en consola
    return entry;
  } catch (error) {
    console.error('Error fetching blog post by ID:', error);
    throw error;
  }
}