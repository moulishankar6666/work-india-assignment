import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'
import MovieItem from '../MovieItem'
import Pagination from '../pagination'

import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  progress: 'PROGRESS',
  failure: 'FAILURE',
}

class TopRated extends Component {
  state = {moviesList: [], status: apiStatus.initial, pageNumber: 1}

  componentDidMount() {
    this.getMovieData(1)
  }

  changeCase = movie => ({
    id: movie.id,
    title: movie.title,
    poster_path: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`,
    vote_average: Math.round(movie.vote_average * 10),
    release_date: movie.release_date,
  })

  getMovieData = async page => {
    this.setState({status: apiStatus.progress})
    const apiKey = '7e96fcaf8ddcb161090b5ab36284ff82'
    // const options = {method: 'GET'}
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`,
    )
    const data = await response.json()

    this.setState({
      moviesList: data.results,
      status: apiStatus.success,
    })
  }

  setPageList = pageNum => {
    this.setState({pageNumber: pageNum})
    this.getMovieData(pageNum)
  }

  renderSuccessView = () => {
    const {moviesList, pageNumber} = this.state
    return (
      <>
        <section className="content">
          <h1>Top Rated</h1>
          <ul className="movies-list">
            {moviesList.map(movie => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </ul>
        </section>
        <Pagination
          setPageNo={this.setPageList}
          moviesList={moviesList}
          pageNo={pageNumber}
        />
      </>
    )
  }

  renderProgressView = () => (
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" color=" #ff0000" height="50" width="50" />
    </div>
  )

  renderMovies = () => {
    const {status} = this.state
    switch (status) {
      case apiStatus.success:
        return this.renderSuccessView()
      case apiStatus.progress:
        return this.renderProgressView()
      //   case apiStatus.failure:
      //     return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="top-rated-page">
        <Header />
        {this.renderMovies()}
      </div>
    )
  }
}
export default TopRated
