import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

import MovieContext from '../../context/MovieContext'

import './index.css'

class Header extends Component {
  state = {userInput: ''}

  setUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {userInput} = this.state
    const {location} = this.props
    const {pathname} = location
    const path = pathname.slice(1)

    return (
      <MovieContext.Consumer>
        {value => {
          const {clickButton} = value
          return (
            <header>
              <nav>
                <div className="title-container">
                  <Link className="link" to="/">
                    <h1 className="title">movieDB</h1>
                  </Link>
                  <Link className="link" to="/search">
                    <div className="search-bar mobile-search-bar">
                      <input
                        value={userInput}
                        onChange={this.setUserInput}
                        type="text"
                      />
                      <button
                        className={
                          path === 'search' ? 'active-tab button' : 'button'
                        }
                        onClick={() => clickButton(userInput)}
                        type="button"
                      >
                        Search
                      </button>
                    </div>
                  </Link>
                </div>
                <ul>
                  <Link className="link" to="/">
                    <li>
                      <button
                        className={path === '' ? 'active-tab' : ''}
                        type="button"
                      >
                        Popular
                      </button>
                    </li>
                  </Link>
                  <Link className="link" to="/top-rated">
                    <li>
                      <button
                        className={path === 'top-rated' ? 'active-tab' : ''}
                        type="button"
                      >
                        Top_Rated
                      </button>
                    </li>
                  </Link>
                  <Link className="link" to="/upcoming">
                    <li>
                      <button
                        className={path === 'upcoming' ? 'active-tab' : ''}
                        type="button"
                      >
                        Upcoming
                      </button>
                    </li>
                  </Link>
                  <Link className="link  desktop-search-bar" to="/search">
                    <li className="search-bar">
                      <input
                        value={userInput}
                        onChange={this.setUserInput}
                        type="search"
                      />
                      <button
                        className={
                          path === 'search' ? 'active-tab button' : 'button'
                        }
                        onClick={() => clickButton(userInput)}
                        type="button"
                      >
                        Search
                      </button>
                    </li>
                  </Link>
                </ul>
              </nav>
            </header>
          )
        }}
      </MovieContext.Consumer>
    )
  }
}
export default withRouter(Header)
