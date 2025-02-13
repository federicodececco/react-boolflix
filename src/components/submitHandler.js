import axios from 'axios'

export default function submitHandler(search) {
  let tvMovie = {
    films: [],
    tv: [],
  }

  function getMovies(search) {
    return axios
      .get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '8a7d513938b23a42af6d98f4db80eb64',
          query: search,
        },
      })
      .then(res => {
        console.log('films:')
        console.log(res.data.results)
        return res.data.results
      })
  }
  function getTv(search) {
    return axios
      .get('https://api.themoviedb.org/3/search/tv', {
        params: {
          api_key: '8a7d513938b23a42af6d98f4db80eb64',
          query: search,
        },
      })
      .then(res => {
        console.log('TvSeries:')
        console.log(res.data.results)
        return res.data.results
      })
  }

  async function getMovieTv() {
    const movie = await getMovies(search)
    const tv = await getTv(search)
    tvMovie.films = movie
    tvMovie.tv = tv
    console.log(tvMovie)
    return tvMovie
  }
  return getMovieTv()
}
