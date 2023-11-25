import {Link} from 'react-router-dom'

import './index.css'

const MovieItem = props => {
  const {movie} = props
  //   const {voteAverage, posterPath, title, releaseDate, id} = movie
  //   const pathColor = Math.round(voteAverage * 10) >= 70 ? '#0bb361' : '#c2b30c'
  return (
    <li className="movie-item">
      <div className="poster-image">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="poster path"
        />
      </div>
      <div className="poster-details">
        <div className="progress-circle">
          <p>{Math.round(movie.vote_average * 10)}</p>
        </div>
        <p className="title">{movie.title}</p>
        <p>vote_average:{movie.vote_average}</p>
        <p className="release-date">{movie.release_date}</p>
        <Link className="link" to={`/movie/${movie.id}`}>
          <button className="view-details-btn" type="button">
            View Details
          </button>
        </Link>
      </div>
    </li>
  )
}
export default MovieItem
