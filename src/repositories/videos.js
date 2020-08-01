import config from '../config';

const URL_VIDEOS = `${config.URL_BASE}/videos`;

function create(video) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (response) => {
      if (response.ok) {
        const obj = await response.json();
        return obj;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

export default {
  create,
};
