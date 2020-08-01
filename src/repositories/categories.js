import config from '../config';

const URL_CATEGORIES = `${config.URL_BASE}/categorias`;

function getAllCategoriesWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const obj = await response.json();
        return obj;
      }

      throw new Error('Não foi possível recuperar os dados :(');
    });
}

export default {
  getAllCategoriesWithVideos,
};
