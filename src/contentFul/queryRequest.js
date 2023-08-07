import { client } from './contentFul';

const fetchContentfulEntriesAccueil = async () => {
  const response = await client.getEntries({
    content_type: 'accueil',
  });
  return response.items;
};
const fetchContentfulEntriesGalerie = async () => {
  const response = await client.getEntries({
    content_type: 'galeriePhotos',
  });
  return response.items;
};
const fetchContentfulEntriesTarifs = async () => {
  const response = await client.getEntries({
    content_type: 'tarifsEtPrestations',
  });
  return response.items;
};

export {
  fetchContentfulEntriesAccueil,
  fetchContentfulEntriesGalerie,
  fetchContentfulEntriesTarifs,
};
