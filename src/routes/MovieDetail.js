import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function MovieDetail() {
  const {id} = useParams()
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState([])

  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
    ).json()

    setLoading(false)
    setMovie(json.data.movie)
  }

  useEffect(() => {
    getMovie()
  }, [])

  console.log(movie)

  return (
    <>
      {
        loading ? <h1>Loading..</h1> :
          <>
            <h1>{movie.title}</h1>
            <h4>{movie.title_long}</h4>
            <img src={movie.large_cover_image} alt="영화 이미지"/>
            <ul>
              {
                movie.genres.map((item) => <li>{item}</li>)
              }
            </ul>
          </>
      }
    </>
  )
}

export default MovieDetail