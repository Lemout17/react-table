import './PagePaginationButton.css'

const PagePaginationButton = ({ length, page, handlePage }) => {
  const pages = Math.ceil(length / 20)
  return (
    <div className="pag-container">
      <button
        className="pag-button"
        disabled={page === 1 ? true : false}
        onClick={() => {
          handlePage(page - 1)
        }}
      >
        Previous
      </button>
      <button
        className="pag-button active"
        onClick={() => {
          handlePage(page)
        }}
      >
        {page}
      </button>
      {page < pages && (
        <button
          className="pag-button"
          onClick={() => {
            handlePage(page + 1)
          }}
        >
          {page + 1}
        </button>
      )}
      {page < pages - 1 && (
        <button
          className="pag-button"
          onClick={() => {
            handlePage(page + 2)
          }}
        >
          {page + 2}
        </button>
      )}
      <button
        className="pag-button"
        disabled={page === pages ? true : false}
        onClick={() => {
          handlePage(page + 1)
        }}
      >
        Next
      </button>
    </div>
  )
}

export default PagePaginationButton
