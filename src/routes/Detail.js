import {useEffect} from 'react'
import {useParams} from 'react-router-dom'

function Detail() {
  console.log(useParams())

  const getMovie = async () => {
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
      )
    ).json()
    console.log(json)
  }

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <h1>Movie Detail</h1>
  )
}

export default Detail