import './index.css'

const Pagination = props => {
  const {setPageNo, pageNo} = props

  const prevPage = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1)
    }
  }

  const nextPage = () => {
    setPageNo(pageNo + 1)
  }

  return (
    <div className="pagination-container">
      <button
        className="de-activate-page-number"
        onClick={prevPage}
        type="button"
      >
        Prev
      </button>
      <p className="active-page-number">{pageNo}</p>
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
