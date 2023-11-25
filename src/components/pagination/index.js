import {useState} from 'react'

import './index.css'

const Pagination = props => {
  const {moviesList, setPageList} = props
  const [page, setActivePage] = useState(1)

  //   const noOfPages = []
  //   for (let i = 1; i <= Math.ceil(paginationLength); i += 1) {
  //     noOfPages.push(i)
  //   }

  const prevPage = () => {
    if (page > 1) {
      setActivePage(page - 1)
      setPageList(page - 1)
    }
  }

  const nextPage = () => {
    setActivePage(page + 1)
    setPageList(page + 1)
  }

  //   const setPage = num => {
  //     setActivePage(num)
  //     setPageList(num)
  //   }

  return (
    <div className="pagination-container">
      <button
        className="de-activate-page-number"
        onClick={prevPage}
        type="button"
      >
        Prev
      </button>
      {/* {noOfPages.map(eachButton => (
        <button
          className={
            page === eachButton
              ? 'active-page-number'
              : 'de-activate-page-number  '
          }
          key={eachButton}
          //   onClick={() => setPage(eachButton)}
          type="button"
        >
          {eachButton}
        </button>
      ))} */}
      <button className="active-page-number" type="button">
        {page}
      </button>
      <button
        className="de-activate-page-number"
        onClick={nextPage}
        type="button"
      >
        Next
      </button>
    </div>
  )
}
export default Pagination
