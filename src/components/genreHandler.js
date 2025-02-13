import axios from 'axios'
export default function genresHandler(id, isMovie) {
  function getGenresMovie(id) {
    return axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: '8a7d513938b23a42af6d98f4db80eb64',
        },
      })
      .then(res => {
        return res.data.genres
      })
  }
  function getGenresTv(id) {
    return axios
      .get(`https://api.themoviedb.org/3/tv/${id}`, {
        params: {
          api_key: '8a7d513938b23a42af6d98f4db80eb64',
        },
      })
      .then(res => {
        return res.data.genres
      })
  }
  async function getGenresList(id) {
    let genres = []
    if (isMovie) {
      genres = await getGenresMovie(id)
    } else {
      genres = await getGenresTv(id)
    }
    return genres
  }
  return getGenresList(id)
}
