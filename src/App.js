import { useState, useEffect } from 'react'
import API from './services/usersApi'

import UserList from './components/UserList'
import UserFilter from './components/UserFilter'
import UserFilterState from './components/UserFilterState'
import UserInfo from './components/UserInfo'

import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState('')
  const [userState, setUserState] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.fetchData()
        //console.log(response)
        const usersResponse = response.slice(0, 20)
        setUsers(usersResponse)
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchUsers()
  }, [])

  //фильтр по имени
  const changeFilter = (e) => {
    setFilter(e.target.value)
  }

  const filterUsersByName = () =>
    users.filter((user) =>
      user.firstName.toLowerCase().includes(filter.toLowerCase())
    )
  //

  const onStateChange = (data) => {
    setUserState(data)
  }

  //фильтр по штату
  const filterUsersByState = () => {
    return users.filter((user) =>
      user.adress.state.toLowerCase().includes(userState.toLowerCase())
    )
  }
  //

  const onRowClick = (e) => {
    if (e.target.tagName !== 'TD') {
      return
    }
    // console.log('Кликнули по table row')
    // console.log(e.target.dataset.source)

    setEmail(e.target.dataset.source)
  }

  const filteredByName = filterUsersByName()
  const filteredByState = filterUsersByState()
  const foo = userState === '' ? filteredByName : filteredByState

  //User personal information

  const personalInfo = () => filteredByName.find((item) => item.email === email)

  return (
    <div className="App">
      <UserFilter value={filter} onChange={changeFilter} />
      <UserFilterState users={filteredByName} onChange={onStateChange} />
      <button type="button" onClick={() => setUserState(foo)}>
        Reset
      </button>
      <UserList users={foo} onClick={onRowClick} />
      {personalInfo() && <UserInfo user={personalInfo()} />}
    </div>
  )
}

export default App
