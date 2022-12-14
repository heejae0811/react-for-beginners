import {useState, useEffect} from 'react'
import Movie from './../component/Movie'

function MovieHome() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
      )
    ).json()

    setLoading(false)
    setMovies(json.data.movies)
  }

  useEffect(() => {
    getMovies()
  }, [])

  console.log(movies)

  return (
    <div>
      {
        loading ? <h1>Loading..</h1> : movies.map((item) =>
          <Movie
            key={item.id}
            id={item.id}
            coverImg={item.medium_cover_image}
            title={item.title}
            summary={item.summary}
            genres={item.genres}
          />
        )
      }
    </div>
  )
}

export default MovieHome
