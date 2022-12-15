import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Movie({id, coverImg, title, summary, genres}) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
      </Link>
      {/* 삼항연산자와 slice를 사용해서 글자 길이가 100보다 크면 글자 자르기 */}
      <p>{summary.length > 100 ? `${summary.slice(0, 100)}...` : summary}</p>
      <img src={coverImg} alt={title}/>
      <ul>
        {
          genres.map(item => <li>{item}</li>)
        }
      </ul>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie