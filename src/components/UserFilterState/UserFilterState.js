import { useEffect, useState } from 'react'
import './UserFilterState.css'

const UserFilterState = ({ users, userState, onChange }) => {
  const [val, setVal] = useState(userState)

  const handleChange = (e) => {
    setVal(e.target.value)
  }

  useEffect(() => {
    if (val) {
      onChange(val)
      setVal('')
    }
  }, [onChange, val])

  const arr = users.map((user) => user.adress.state)
  const statesArray = ['Filter by state', ...new Set(arr)]

  return (
    <>
      {users && (
        <select
          value={userState ? userState : 'Filter by state'}
          className="filterState-select"
          onChange={handleChange}
        >
          {statesArray.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      )}
    </>
  )
}

export default UserFilterState
