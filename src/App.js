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

  const changeFilter = (e) => {
    setFilter(e.target.value)
  }

  //фильтр по имени
  const filterUsersByName = () =>
    users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(filter.toLowerCase()) &&
        user.adress.state.includes(userState)
    )
  //
  //записывает значение в стейт
  const onStateChange = (data) => {
    setUserState(data)
  }

  //фильтр по штату
  const filterUsersByState = (array) => {
    return array.filter((user) =>
      user.adress.state.toLowerCase().includes(userState.toLowerCase())
    )
  }
  //

  const onRowClick = (e) => {
    if (e.target.tagName !== 'TD') {
      return
    }

    setEmail(e.target.dataset.source)
  }

  const filtered = filterUsersByName()

  filterUsersByState(filtered)

  //User personal information

  const personalInfo = () => filtered.find((item) => item.email === email)

  //Pagination
  const pagePagination = (array) => {
    return array.slice((page - 1) * 20, page * 20)
  }

  const handlePage = (currentPage) => {
    setPage(currentPage)
  }

  return (
    <div className="App">
      <UserFilter value={filter} onChange={changeFilter} />
      <UserFilterState
        users={users}
        userState={userState}
        onChange={onStateChange}
      />
      <button type="button" onClick={() => setUserState('')}>
        Reset
      </button>
      <UserList
        page={page}
        users={pagePagination(filtered)}
        onClick={onRowClick}
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
