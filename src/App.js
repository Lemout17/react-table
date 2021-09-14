import { useState, useEffect } from 'react'
import API from './services/usersApi'

import UserList from './components/UserList'
import UserFilter from './components/UserFilter'
import UserFilterState from './components/UserFilterState'
import UserInfo from './components/UserInfo'
import PagePaginationButton from './components/PagePaginationButton'

import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState('')
  const [userState, setUserState] = useState('')
  const [email, setEmail] = useState('')
  const [page, setPage] = useState(1)

  //fetch data from backend server
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.fetchData()
        console.log(response)

        setUsers(response)
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchUsers()
  }, [])

  //set value from component <UserFilter />
  const changeFilter = (e) => {
    setFilter(e.target.value)
  }

  //filter by name or state
  const filterUsers = () =>
    users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(filter.toLowerCase()) &&
        user.adress.state.includes(userState)
    )

  const filtered = filterUsers()

  //set userState from component <UserFilterState />
  const onStateChange = (state) => {
    setUserState(state)
  }

  //User personal information container

  const onRowClick = (e) => {
    if (e.target.tagName !== 'TD') {
      return
    }

    setEmail(e.target.dataset.source)
  }

  const personalInfo = () => filtered.find((item) => item.email === email)

  //Pagination
  const pagePagination = (array) => {
    return array.slice((page - 1) * 20, page * 20)
  }

  const handlePage = (currentPage) => {
    setPage(currentPage)
  }

  console.log('SORT', filtered.sort())

  //Sort columns
  const sortGrid = (colNum, type) => {
    switch (type) {
      case 'number':
        return filtered.sort((a, b) => a - b)

      default:
        break
    }
  }

  const onClickSort = (e) => {
    if (e.target.tagName !== 'TH') {
      return
    }

    let th = e.target

    console.log(`${th.cellIndex}/${th.dataset.type}`)
    sortGrid(th.cellIndex, th.dataset.type)
  }

  return (
    <div className="App">
      <div className="filter-container">
        <UserFilter value={filter} onChange={changeFilter} />
        <div className="select-container">
          <UserFilterState
            users={users}
            userState={userState}
            onChange={onStateChange}
          />
          <button
            className="select-button"
            type="button"
            onClick={() => setUserState('')}
          >
            Reset filter
          </button>
        </div>
      </div>

      <UserList
        page={page}
        users={pagePagination(filtered)}
        onClick={onClickSort}
      />

      {filtered.length > 20 && (
        <PagePaginationButton
          length={filtered.length}
          page={page}
          handlePage={handlePage}
        />
      )}
      {personalInfo() && <UserInfo user={personalInfo()} />}
    </div>
  )
}

export default App
