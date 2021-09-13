const PagePaginationButton = ({ length, page, handlePage }) => {
  const pages = Math.ceil(length / 20)
  return (
    <div>
      <button
        disabled={page === 1 ? true : false}
        onClick={() => {
          handlePage(page - 1)
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          handlePage(page)
        }}
      >
        {page}
      </button>
      {page < pages && (
        <button
          onClick={() => {
            handlePage(page + 1)
          }}
        >
          {page + 1}
        </button>
      )}
      {page < pages - 1 && (
        <button
          onClick={() => {
            handlePage(page + 2)
          }}
        >
          {page + 2}
        </button>
      )}
      <button
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
