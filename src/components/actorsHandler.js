import axios from 'axios'
export default function actorsHandler(id, isMovie) {
  let actorList = []

  function getActorsMovie(id) {
    return axios
      .get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
        params: {
          api_key: '8a7d513938b23a42af6d98f4db80eb64',
        },
      })
      .then(res => {
        let tmpArr = []
        for (let i = 0; i < 4; i++) {
          tmpArr.push(res.data.cast[i])
        }
        return tmpArr
      })
  }

  function getActorsTv(id) {
    return axios
      .get(`https://api.themoviedb.org/3/tv/${id}/aggregate_credits`, {
        params: {
          api_key: '8a7d513938b23a42af6d98f4db80eb64',
        },
      })
      .then(res => {
        let tmpArr = []
        for (let i = 0; i < 4; i++) {
          tmpArr.push(res.data.cast[i])
        }
        return tmpArr
      })
  }

  async function getActorsList(id) {
    let actors = []

    if (isMovie) {
      actors = await getActorsMovie(id)
    } else {
      actors = await getActorsTv(id)
    }
    actorList = actors

    return actorList
  }
  return getActorsList(id)
}
