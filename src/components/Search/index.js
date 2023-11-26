import Loader from 'react-loader-spinner'

import Header from '../Header'
import MovieItem from '../MovieItem'
import MovieContext from '../../context/MovieContext'

import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  progress: 'PROGRESS',
  failure: 'FAILURE',
}

const Search = () => {
  const renderSuccessView = searchedList => (
    <section className="content">
      {searchedList.length > 0 ? (
        <div className="movies-list-and-pagination">
          <ul className="movies-list">
            {searchedList.map(movie => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </ul>
        </div>
      ) : (
        <p className="no-search-results">
          Search correctly which movie you want
        </p>
      )}
    </section>
  )

  const renderProgressView = () => (
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" color=" #ff0000" height="50" width="50" />
    </div>
  )

  return (
    <div className="top-rated-page">
      <Header />
      <MovieContext.Consumer>
        {value => {
          const {searchedList, pageList, setPageList, status} = value
          return status === apiStatus.success
            ? renderSuccessView(searchedList, pageList, setPageList)
            : renderProgressView()
        }}
      </MovieContext.Consumer>
    </div>
  )
}

export default Search
