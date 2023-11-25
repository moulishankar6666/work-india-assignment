import React from 'react'

const MovieContext = React.createContext({
  searchedList: [],
  clickButton: () => {},
  setInput: () => {},
  status: '',
  pageList: [],
  setPageList: () => {},
})
export default MovieContext
