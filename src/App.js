import { useState, useEffect } from 'react'
import fetchData from './services/usersApi'

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
  const [sortedField, setSortedField] = useState(null)
  const [sortConfig, setSortConfig] = useState(false)
  const [error, setError] = useState('')

  //fetch data from backend server
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetchData()
        const addIndex = response.map((el, idx) => {
          el.index = idx
          return el
        })

        setUsers(addIndex)
      } catch (error) {
        setError(error.message)
      }
    }

    fetchUsers()
  }, [])

  //set value from component <UserFilter />
  const changeFilter = (e) => {
    setFilter(e.target.value)
  }

  //filter by name or state
  const filterUsers = () => {
    return users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(filter.toLowerCase()) &&
        user.adress.state.includes(userState)
    )
  }

  //array of filtered users
  const filtered = filterUsers()

  useEffect(() => {
    setPage(1)
  }, [filter, userState])

  //set userState from component <UserFilterState />
  const onStateChange = (state) => {
    setUserState(state)
  }

  //reset filter by state
  useEffect(() => {
    if (userState === 'Filter by state') {
      setUserState('')
    }
  }, [userState])

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

  //Sort columns
  let sortedProducts = [...filtered]

  const onClickSort = (e) => {
    if (e.target.tagName !== 'TH') {
      return
    }

    let th = e.target

    if (sortedField === th.dataset.type) {
      if (sortConfig) {
        return setSortConfig(false)
      }
      setSortConfig(true)
    }

    setSortedField(th.dataset.type)
  }

  if (sortedField) {
    sortedProducts.sort((a, b) => {
      let x = a[sortedField]
      let y = b[sortedField]

      if (sortedField === 'adress') {
        x = a[sortedField].state
        y = b[sortedField].state
      }

      if (x < y) {
        return sortConfig ? -1 : 1
      }

      if (x > y) {
        return sortConfig ? 1 : -1
      }

      return 0
    })
  }

  const paginated = sortedField
    ? pagePagination(sortedProducts)
    : pagePagination(filtered)

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
        </div>
      </div>

      {error ? (
        <h2>{error}</h2>
      ) : (
        <UserList
          field={sortedField}
          sort={sortConfig}
          page={page}
          users={paginated}
          onClickSort={onClickSort}
          onClickRow={onRowClick}
        />
      )}

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
