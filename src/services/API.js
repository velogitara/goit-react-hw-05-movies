const axios = require('axios');
const API_KEY = 'f3d33ff00cd7667f5ad243a04605493c';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

function api(param, movie_id) {
  let pathLink = false;

  //   console.log(typeof param);
  //   console.log(typeof `/movies/${movie_id}`);
  //   console.log(param === `/movies/${movie_id}`);

  switch (param) {
    case '/':
      pathLink = `trending/movie/day?api_key=${API_KEY}`;
      break;
    case `/movies/${movie_id}`:
      pathLink = `movie/${movie_id}?api_key=${API_KEY}`;

      break;
    default:
      console.log('NOT');
      return;
  }

  if (pathLink) {
    return axios.get(`${pathLink}`).then(response => {
      //   console.log(response);
      return response;
    });
  }
}

const FetchAPI = {
  api,
};

export default FetchAPI;
