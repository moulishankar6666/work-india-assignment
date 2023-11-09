import {Component} from 'react'

import Header from '../Header'
import MovieItem from '../MovieItem'
import MovieContext from '../../context/MovieContext'

import './index.css'

class Search extends Component {
  render() {
    return (
      <div className="top-rated-page">
        <Header />
        <MovieContext.Consumer>
          {value => {
            const {searchedList} = value
            return (
              <section className="content">
                {searchedList.length > 0 ? (
                  <ul className="movies-list">
                    {searchedList.map(movie => (
                      <MovieItem key={movie.id} movie={movie} />
                    ))}
                  </ul>
                ) : (
                  <p className="no-search-results">
                    Search correctly which movie you want
                  </p>
                )}
              </section>
            )
          }}
        </MovieContext.Consumer>
      </div>
    )
  }
}
export default Search
