import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import Search from './components/Search'
// import MovieDetailsItem from './components/MovieDetailsItem'
import MovieContext from './context/MovieContext'

import './App.css'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  progress: 'PROGRESS',
  failure: 'FAILURE',
}

class App extends Component {
  state = {moviesList: [], status: apiStatus.initial}

  componentDidMount() {
    this.getMovieData('')
  }

  onClickButton = value => {
    this.getMovieData(value)
  }

  changeCase = movie => ({
    id: movie.id,
    title: movie.title,
    poster_path: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`,
    vote_average: movie.vote_average,
    release_date: movie.release_date,
  })

  getMovieData = async value => {
    this.setState({status: apiStatus.progress})
    const apiKey = '7e96fcaf8ddcb161090b5ab36284ff82'
    const options = {method: 'GET'}
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${value}&page=1`,
      options,
    )
    const data = await response.json()
    const updatedData = data.results.map(movie => this.changeCase(movie))
    this.setState({
      moviesList: updatedData,
      status: apiStatus.success,
    })
  }

  render() {
    const {moviesList, status} = this.state
    return (
      <MovieContext.Provider
        value={{
          searchedList: moviesList,
          clickButton: this.onClickButton,
          setInput: this.setInput,
          status,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/top-rated" component={TopRated} />
          <Route exact path="/upcoming" component={Upcoming} />

          {/* <Route exact path="/movie/:id" component={MovieDetailsItem} />  */}
        </Switch>
      </MovieContext.Provider>
    )
  }
}

export default App
