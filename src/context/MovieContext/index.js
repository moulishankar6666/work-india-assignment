import React from 'react'

const MovieContext = React.createContext({
  searchedList: [],
  clickButton: () => {},
})
export default MovieContext
