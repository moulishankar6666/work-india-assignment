import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'
import MovieItem from '../MovieItem'

import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  progress: 'PROGRESS',
  failure: 'FAILURE',
}

class TopRated extends Component {
  state = {moviesList: [], status: apiStatus.initial}

  componentDidMount() {
    this.getMovieData()
  }

  changeCase = movie => ({
    id: movie.id,
    title: movie.title,
    poster_path: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`,
    vote_average: Math.round(movie.vote_average * 10),
    release_date: movie.release_date,
  })

  getMovieData = async () => {
    this.setState({status: apiStatus.progress})
    const apiKey = '7e96fcaf8ddcb161090b5ab36284ff82'
    const options = {method: 'GET'}
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
      options,
    )
    const data = await response.json()
    const updatedData = data.results.map(movie => this.changeCase(movie))
    this.setState({moviesList: data.results, status: apiStatus.success})
  }

  renderSuccessView = () => {
    const {moviesList} = this.state
    return (
      <section className="content">
        <h1>TopRated</h1>
        <ul className="movies-list">
          {moviesList.map(movie => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </ul>
      </section>
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
