import React from 'react'

const MovieContext = React.createContext({
  searchedList: [],
  clickButton: () => {},
  setInput: () => {},
  status: '',
})
export default MovieContext
