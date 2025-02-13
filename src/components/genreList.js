import axios from 'axios'
export default function genreList() {
  function getGenresMovie() {
    return axios
      .get(`https://api.themoviedb.org/3/genre/movie/list`, {
        params: {
          api_key: '8a7d513938b23a42af6d98f4db80eb64',
        },
      })
      .then(res => {
        return res.data.genres
      })
  }
  function getGenresTv() {
    return axios
      .get(`https://api.themoviedb.org/3/genre/tv/list`, {
        params: {
          api_key: '8a7d513938b23a42af6d98f4db80eb64',
        },
      })
      .then(res => {
        return res.data.genres
      })
  }
  async function getGenresList() {
    const genres1 = await getGenresMovie()
    const genres2 = await getGenresTv()
    const genres = [...genres1, ...genres2]
    const uniqueGenres = genres.filter((elem, index, array) => {
      return index === array.findIndex(item => item.name === elem.name)
    })
    return uniqueGenres
  }
  return getGenresList()
}
